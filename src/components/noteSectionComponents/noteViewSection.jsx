import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
import NoteSectionIndex from "./noteSectionIndex";
import CloseBtn from "../buttons/closeBtn";
import useLayoutContext from "../../hooks/useLayoutContext";

function NoteViewSection() {
  const { allTags, handleNoteView } = useNotesContext();

  return (
    <section className="note-section">
      <div className="note-banner">
        <CloseBtn callBack={handleNoteView} />
      </div>
      <NoteSectionIndex.NoteDate />
      <NoteSectionIndex.NoteForm>
        <NoteSectionIndex.NoteTags />
        <NoteSectionIndex.NoteTagInputs>
          <NoteSectionIndex.NewTagInput />
          {allTags?.length > 0 && <NoteSectionIndex.TagSelect />}
        </NoteSectionIndex.NoteTagInputs>
      </NoteSectionIndex.NoteForm>
    </section>
  );
}

export default NoteViewSection;
