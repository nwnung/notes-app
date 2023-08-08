import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export const useNotes = () => {
  const values = useContext(NotesContext);
  return values;
};
