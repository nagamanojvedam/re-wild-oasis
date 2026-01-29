import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins coudn&apos;t be loaded");

  return cabins;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Cabin could not be deleted");

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.name?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  let cabinsTable = supabase.from("cabins");

  if (!id)
    cabinsTable = cabinsTable.insert([{ ...newCabin, image: imagePath }]);

  if (id)
    cabinsTable = cabinsTable
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);

  const { data, error } = await cabinsTable.select().single();
  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Cabin could not be created: " + error.message);
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error("Storage Error:", storageError);
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded (Unauthorized or Bucket issue) and the cabin was not created",
    );
  }

  return data;
}
