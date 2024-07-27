import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
import useLayoutContext from "../../hooks/useLayoutContext";

function noteForm({ children }) {
  const { note, handleNote, saveNoteApi, isPending } = useNotesContext();
  
  return (
    <form
      method="POST"
      onSubmit={(e) => {
        saveNoteApi(e, note._id, note.is_archived);
      }}
    >
      <input
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
          id="content"
          name="content"
          onChange={handleNote}
          value={note?.content || ""}
          maxLength="1500"
          placeholder="type...."
        />
      </div>
      {children}
      <div className="form-btns">
        <input type="submit" disabled={isPending} value="save"/>
        <button type="reset">reset</button>
      </div>
    </form>
  );
}

export default noteForm;
