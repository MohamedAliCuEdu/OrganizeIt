import React from "react";
import useNotesContext from "../../hooks/useNotesContext";

function NoteInputs() {
  const { note, handleNote } = useNotesContext();

  return (
    <div className="note-inputs light-input">
      <input
        className="full-w-field"
        type="text"
        id="title"
        name="title"
        onChange={handleNote}
        value={note?.title || ""}
        placeholder="title..."
      />
      <div
        className="textarea-container"
        data-letters={`${note?.content?.length || 0}/1000`}
      >
        <textarea
          className="full-w-field"
          id="content"
          name="content"
          onChange={handleNote}
          value={note?.content || ""}
          maxLength="1000"
          placeholder="type...."
        />
      </div>
    </div>
  );
}

export default NoteInputs;
