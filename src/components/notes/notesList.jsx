import React, { useState, useEffect } from "react";
import NotesIndex from "./notesIndex";
import useNotesContext from "../../hooks/useNotesContext";
import NoResults from "../NoResults";

import { useSearchParams } from "react-router-dom";
function NotesList() {
  const { allNotes, searchInput } = useNotesContext();

  const [list, setList] = useState([]);
  let matchResults = list?.length > 0;

  const [searchParams, setSearchParams] = useSearchParams();
  let tagSearchParam = searchParams.get("tag");

  // filter notes:
  useEffect(() => {
    if (allNotes) {
      const filterNotes = allNotes.filter((n) => {
        let matchTag = tagSearchParam
          ? n.tags?.includes(tagSearchParam?.toLowerCase())
          : true;
        let matchSearch = searchInput
          ? n.title?.toLowerCase().startsWith(searchInput.toLowerCase())
          : true;
        return matchTag && matchSearch;
      });
      filterNotes.length > 0 ? setList(filterNotes) : setList([]);
    }
  }, [allNotes, searchParams, searchInput]);

  return (
    <div className={`notes-list ${matchResults ? "notes-grid" : "no-results"}`}>
      {matchResults ? (
        list.map((note) => <NotesIndex.NoteCard key={note._id} note={note} />)
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default NotesList;
