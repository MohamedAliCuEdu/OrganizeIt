import React from "react";
import NotesIndex from "./notesIndex";
import useNotesContext from "../../hooks/useNotesContext";
import useLayoutContext from "../../hooks/useLayoutContext";

function NoteCard({ note }) {
  const { _id, title, content, created_at, is_archived } = note;
  let date = new Date(created_at).toLocaleString();
  const { handleNoteView } = useNotesContext();
  const { handleOverlay } = useLayoutContext();
  const tagId = React.useRef();

  return (
    <div className="note-card">
      <div
        className="note-content"
        onClick={() => {
          handleNoteView(_id, is_archived);
          handleOverlay();
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
              <span className="tag-span" key={tagId + idx}>
                {val}
              </span>
            ))
          )}
        </div>
        <span className="note-date">{date}</span>
      </div>
      <NotesIndex.NoteOptions noteId={_id} isArchived={is_archived} />
    </div>
  );
}

export default NoteCard;
