import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
import NoteSectionIndex from "./noteSectionIndex";
import CloseBtn from "../buttons/closeBtn";
import FormBtns from "../buttons/formBtns";

function NoteViewSection() {
  const { allTags, handleNoteView, note, saveNoteApi, isPending } =
    useNotesContext();

  return (
    <section className="note-section">
      <div className="note-banner">
        <CloseBtn callBack={handleNoteView} />
      </div>
      <NoteSectionIndex.NoteDate />
      <form
        method="POST"
        onSubmit={(e) => {
          saveNoteApi(e, note._id, note.is_archived);
        }}
      >
        <NoteSectionIndex.NoteInputs />
        <NoteSectionIndex.NoteTags />
        <NoteSectionIndex.NoteTagInputs>
          <NoteSectionIndex.TagInput />
          {allTags?.length > 0 && <NoteSectionIndex.TagSelect />}
        </NoteSectionIndex.NoteTagInputs>
        <FormBtns isPending={isPending} value={"save"} formErr={""} />
      </form>
    </section>
  );
}

export default NoteViewSection;
