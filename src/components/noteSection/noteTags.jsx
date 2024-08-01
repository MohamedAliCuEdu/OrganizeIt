import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
import { FaTags } from "react-icons/fa6";
import NoteSectionIndex from "./noteSectionIndex";

function NoteTags() {
  const { note } = useNotesContext();
  const tagId = React.useRef();
  return (
    <div className="tags-content">
      <FaTags />
      <div className="note-tags">
        {note?.tags?.length > 0 ? (
          note.tags.map((val, idx) => {
            return (
              <NoteSectionIndex.TagSpan key={tagId + idx} val={val} idx={idx} />
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
