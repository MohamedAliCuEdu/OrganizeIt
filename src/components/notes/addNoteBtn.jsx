import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
import { IoMdAddCircleOutline } from "react-icons/io";
import useLayoutContext from "../../hooks/useLayoutContext";

function AddNoteBtn() {
  const { handleNoteView } = useNotesContext();
  const { handleOverlay } = useLayoutContext();
  return (
    <button
      className="addnote-btn"
      onClick={() => {
        handleNoteView("open");
        handleOverlay();
      }}
    >
      <IoMdAddCircleOutline />
      <span>new note</span>
    </button>
  );
}

export default AddNoteBtn;
