import React from "react";
import NotesIndex from "./notesIndex";
import useNotesContext from "../../hooks/useNotesContext";

function NoteCard({ note }) {
  const { _id, title, content, created_at, is_archived } = note;
  let date = new Date(created_at).toLocaleString();

  const { handleNoteView } = useNotesContext();
  const tagId = React.useId();

  return (
    <div className="note-card">
      <div
        className="note-content"
        onClick={() => {
          handleNoteView(_id, is_archived);
        }}
      >
        <h5>{title ? title : "no title"}</h5>
        <p>{content}</p>
      </div>
      <div className="info">
        <div className="tags">
          {note?.tags <= 0 ? (
            <p>no tags.</p>
          ) : (
            note?.tags.map((val, idx) => (
              <span className="tag-span xsm-btn white-gray-btn dark-hover" key={tagId + idx}>
                {val}
              </span>
            ))
          )}
        </div>
        <p className="note-date">{date}</p>
      </div>
      <NotesIndex.NoteOptions noteId={_id} isArchived={is_archived} />
    </div>
  );
}

export default NoteCard;
