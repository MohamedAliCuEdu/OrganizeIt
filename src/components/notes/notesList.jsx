import React, { useState, useEffect } from "react";
import NotesIndex from "./notesIndex";
import useNotesContext from "../../hooks/useNotesContext";
import NoResults from "../NoResults";

function NotesList() {
  const { allNotes, searchInput, tagSP } = useNotesContext();

  const [list, setList] = useState([]);
  let matchResults = list?.length > 0;

  // filter notes:
  useEffect(() => {
    if (allNotes) {
      const filterNotes = allNotes.filter((n) => {
        let matchTag = tagSP ? n.tags?.includes(tagSP?.toLowerCase()) : true;
        let matchSearch = searchInput
          ? n.title?.toLowerCase().startsWith(searchInput.toLowerCase())
          : true;
        return matchTag && matchSearch;
      });
      filterNotes.length > 0 ? setList(filterNotes) : setList([]);
    }
  }, [allNotes, tagSP, searchInput]);

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
