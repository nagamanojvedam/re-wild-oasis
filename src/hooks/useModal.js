import { useContext } from "react";
import { ModalContext } from "../ui/Modal";

function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error("Modal context used outside its provider");

  return context;
}

export { useModal };
