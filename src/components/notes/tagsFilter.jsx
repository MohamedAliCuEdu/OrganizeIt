import React from "react";
import useNotesContext from "../../hooks/useNotesContext";

function TagFilter() {
  const { allTags, handleSearchInput, tagSP, handleTagSP } = useNotesContext();
  // const []
  return (
    <div className="tags-filter">
      <button
        className="dark-btn md-btn bold"
        to="/notes"
        onClick={() => {
          handleSearchInput("");
          handleTagSP("");
        }}
      >
        all
      </button>
      {allTags.map((t) => {
        return (
          <button
            className={`${
              tagSP === t.tagName && "active"
            } white-gray-btn dark-hover md-btn `}
            key={t.tagName}
            onClick={() => handleTagSP(t.tagName)}
            relative="path"
          >
            {t.tagName}
          </button>
        );
      })}
    </div>
  );
}

export default TagFilter;
