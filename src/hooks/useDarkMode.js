import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("Dark mode context cannot be used outside its provider");

  return context;
}

export { useDarkMode };
