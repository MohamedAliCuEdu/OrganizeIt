import React from "react";
import NotesContext from "../../context/notesContext";

function TagSelect() {
  const { selectTag, setInputErr, allTags } = React.useContext(NotesContext);
  const selectInputId = React.useRef();

  return (
    <div className="select-tag-div">
      <select
        name="tag"
        id="select-tag"
        ref={selectInputId}
        onChange={() => selectTag(selectInputId)}
        onFocus={() => setInputErr("")}
      >
        <option key="_" value="_">
          select tag
        </option>
        {allTags.map((t) => (
          <option key={t.tagName} value={t.tagName}>
            {t.tagName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagSelect;
