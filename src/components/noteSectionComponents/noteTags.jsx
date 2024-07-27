import React from "react";
import { TiDelete } from "react-icons/ti";
import useNotesContext from "../../hooks/useNotesContext";
import { FaTags } from "react-icons/fa6";
function NoteTags() {
  const { note, removeTag } = useNotesContext();
  const tagId = React.useRef();
  return (
    <div className="tags-content">
      <FaTags />
      <div className="all-tags">
        {note?.tags?.length > 0 ? (
          note.tags.map((val, idx) => {
            return (
              <span className="tag-span" key={tagId + idx}>
                {val} <TiDelete onClick={() => removeTag(idx)} />
              </span>
            );
          })
        ) : (
          <p>no tags.</p>
        )}
      </div>
    </div>
  );
}

export default NoteTags;
