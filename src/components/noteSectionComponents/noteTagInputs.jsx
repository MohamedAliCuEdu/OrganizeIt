import React from "react";
import NotesContext from "../../context/notesContext";

function NoteTagInputs({children}) {
  const { inputErr } = React.useContext(NotesContext);

  return (
    <div
      className={`tag-inputs ${inputErr ? "input-error" : ""}`}
      data-error={inputErr}
    >
      {children}
    </div>
  );
}

export default NoteTagInputs;
