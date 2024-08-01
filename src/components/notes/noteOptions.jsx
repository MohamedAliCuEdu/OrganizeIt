import React, { useState } from "react";
import useNotesContext from "../../hooks/useNotesContext";

import { SlOptions } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoArchive } from "react-icons/io5";

function NoteOptions({ noteId, isArchived }) {
  const { deleteNoteApi, archiveNoteApi, handleNoteView } = useNotesContext();
  const [optionView, setOptionView] = useState(false);

  return (
    <div className="note-options" onClick={() => setOptionView(!optionView)}>
      <SlOptions className="options-icon"/>
      {optionView && (
        <div className="btns">
          <button className="white-gray-btn dark-hover" onClick={() => handleNoteView(noteId, isArchived)}>
            <MdEdit />
            edit
          </button>
          <button className="white-gray-btn dark-hover" onClick={() => deleteNoteApi(noteId, isArchived)}>
            <FaTrashAlt />
            delete
          </button>
          <button className="white-gray-btn dark-hover" onClick={() => archiveNoteApi(noteId, !isArchived)}>
            <IoArchive />
            {isArchived ? "unarchive" : "archive"}
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteOptions;
