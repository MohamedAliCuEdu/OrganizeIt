import React, { useState } from "react";
import useNotesContext from "../../hooks/useNotesContext";

import { SlOptions } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoArchive } from "react-icons/io5";

function NoteOptions({ noteId, isArchived }) {
  const { deleteNoteApi, archiveNoteApi, handleNoteView } =
    useNotesContext();
  const [optionView, setOptionView] = useState(false);
  const optionsRef = React.useRef();

  return (
    <div
      className="note-options"
      ref={optionsRef}
      onClick={() => setOptionView(!optionView)}
    >
      <SlOptions />
      {optionView && (
        <div className="btns">
          <button onClick={() => handleNoteView("open", noteId, isArchived)}>
            <MdEdit />
            edit
          </button>
          <button onClick={() => deleteNoteApi(noteId, isArchived)}>
            <FaTrashAlt />
            delete
          </button>
          <button onClick={() => archiveNoteApi(noteId, !isArchived)}>
            <IoArchive />
            {isArchived ? "unarchive" : "archive"}
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteOptions;
