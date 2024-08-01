import React from "react";
import { TiDelete } from "react-icons/ti";
import useNotesContext from "../../hooks/useNotesContext";

function TagSpan({ val, idx }) {
  const { removeTag } = useNotesContext();
  return (
    <span className="tag-span xsm-btn white-gray-btn flex-between-h gap-8">
      {val} <TiDelete onClick={() => removeTag(idx)} />
    </span>
  );
}

export default TagSpan;
