import React from "react";
import useNotesContext from "../../hooks/useNotesContext";

function NotesSearch() {
  const { searchInput, setSearchInput } = useNotesContext();
  return (
    <div className="search-title">
      <label htmlFor="search-notes">search title:</label>
      <input
      className="input-lg-field light-input"
        type="search"
        name="search-notes"
        id="search-notes"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="search..."
      />
    </div>
  );
}

export default NotesSearch;
