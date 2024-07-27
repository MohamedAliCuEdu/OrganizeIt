import React from "react";
import { NavLink } from "react-router-dom";
import useNotesContext from "../../hooks/useNotesContext";

function TagFilter() {
  const { allTags, setSearchInput } = useNotesContext();
  return (
    <div className="tags-filter">
      <NavLink to="/notes" onClick={() => setSearchInput("")}>
        all
      </NavLink>
      {allTags.map((t) => {
        return (
          <NavLink
            key={t.tagName}
            to={`/notes?tag=${t.tagName}`}
            relative="path"
          >
            {t.tagName}
          </NavLink>
        );
      })}
    </div>
  );
}

export default TagFilter;
