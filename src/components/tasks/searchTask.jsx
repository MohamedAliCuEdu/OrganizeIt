import React from "react";
import { IoSearch } from "react-icons/io5";
import useTasksContext from "../../hooks/useTasksContext";

function SearchTask() {
  const { searchInput, handleSearchInput } = useTasksContext();
  return (
    <div className="search-div">
      <input
        className="input-flex-field light-input"
        type="search"
        name="search-tasks"
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
        placeholder="search..."
      />
      <IoSearch />
    </div>
  );
}

export default SearchTask;
