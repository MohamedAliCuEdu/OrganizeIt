import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
function NoteDate() {
  const { note } = useNotesContext();
  let todayDate = new Date().toLocaleDateString();
  console.log(note);

  return (
    <div className="note-dates">
      {note?.created_at ? (
        <div className="date">
          <p>
            created:
            <span>{new Date(note.created_at).toLocaleDateString()}</span>
          </p>
        </div>
      ) : (
        <div className="date">
          <p>
            day:<span>{todayDate}</span>
          </p>
        </div>
      )}
      {note?.updated_at && (
        <div className="date">
          <p>
            last update:
            <span>{new Date(note.updated_at).toLocaleDateString()}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default NoteDate;
