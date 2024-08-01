import React from "react";
import NotesContext from "../../context/notesContext";
import { RiAddLargeFill } from "react-icons/ri";
function TagInput() {
  const { addNewTag, note } = React.useContext(NotesContext);

  function handleSubmit() {
    addNewTag(tagInputId.current.value);
    tagInputId.current.value = "";
  }

  const tagInputId = React.useRef();
  return (
    <div className="tag-input">
      <input
        className="input-xsm-field light-input"
        type="text"
        id="new-tag"
        name="tag"
        ref={tagInputId}
        maxLength="8"
        placeholder="add new tag..."
        disabled={note?.tags?.length >= 5}
      />
      <button
        className="dark-btn flex-center"
        type="button"
        onClick={handleSubmit}
        disabled={note?.tags?.length >= 5}
      >
        <RiAddLargeFill />
      </button>
    </div>
  );
}

export default TagInput;
