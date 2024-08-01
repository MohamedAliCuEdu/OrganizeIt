import React from "react";
import NotesIndex from "./notesIndex";
import { IoArchive } from "react-icons/io5";
import { Link } from "react-router-dom";
import DeleteAllBtn from "../buttons/deleteAllBtn";
import useNotesContext from "../../hooks/useNotesContext";
import useLayoutContext from "../../hooks/useLayoutContext";
import AddBtn from "../buttons/addBtn";

function NotesHeader() {
  const { handleNoteView, deleteAllNotesApi } = useNotesContext();
  const { handleOverlayDisplay } = useLayoutContext();

  return (
    <header className="notes-header">
      <NotesIndex.NotesSearch />
      <div className="header-btns">
        <AddBtn
          callback={() => {
            handleNoteView("open");
            handleOverlayDisplay();
          }}
          value="add note"
        />
        <Link to="/notes/archive" className="archive-btn lg-icon-btn dark-btn">
          <IoArchive />
        </Link>
        <DeleteAllBtn callBack={deleteAllNotesApi} />
      </div>
    </header>
  );
}

export default NotesHeader;
