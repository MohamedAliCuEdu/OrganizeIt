import { useContext } from "react";
import NotesContext from "../context/notesContext";

function useNotesContext() {
  return useContext(NotesContext);
}

export default useNotesContext;
