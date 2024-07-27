import React from "react";
import NotesIndex from "./notesIndex";
import { IoArchive } from "react-icons/io5";
import { Link } from "react-router-dom";
import DeleteAllBtn from "../buttons/deleteAllBtn";
import useNotesContext from "../../hooks/useNotesContext";

function NotesHeader() {
  const { deleteAllNotesApi } = useNotesContext();
  return (
    <header className="notes-header">
      <NotesIndex.NotesSearch />
      <div className="header-btns">
        <NotesIndex.AddNoteBtn />
        <Link to="/notes/archive" className="archive-btn">
          <IoArchive />
        </Link>
        <DeleteAllBtn callBack={deleteAllNotesApi} />
      </div>
    </header>
  );
}

export default NotesHeader;
