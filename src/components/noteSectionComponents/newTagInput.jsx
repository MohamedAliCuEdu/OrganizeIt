import React from "react";
import NotesContext from "../../context/notesContext";
import { GrAdd } from "react-icons/gr";
function NewTagInput() {
  const { addNewTag, setInputErr, allTags } = React.useContext(NotesContext);

  const tagInputId = React.useRef();
  return (
    <div className="tag-input input-div">
      <input
        type="text"
        id="new-tag"
        name="tag"
        ref={tagInputId}
        maxLength="8"
        placeholder="add new tag..."
        onFocus={() => setInputErr("")}
        disabled={allTags?.length >= 8}
        />
      <button
        type="button"
        className="addtag-btn"
        onFocus={() => setInputErr("")}
        onClick={() => addNewTag(tagInputId)}
        disabled={allTags?.length >= 8}
      >
        <GrAdd />
      </button>
    </div>
  );
}

export default NewTagInput;
