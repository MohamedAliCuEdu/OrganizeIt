import React from "react";
import NotesIndex from "../components/notes/notesIndex";
import OverlayElement from "../components/overlayElement";
import BulletsLoading from "../components/loading/bulletsLoading";
import ErrorDiv from "../components/error-div";
import useNotesContext from "../hooks/useNotesContext";
import NoteSectionIndex from "../components/noteSectionComponents/noteSectionIndex";
import PageTitle from "../components/pageTitle";
import useLayoutContext from "../hooks/useLayoutContext";
import NoContent from "../components/noContent";
import { CgNotes } from "react-icons/cg";
import { PiNotePencilBold } from "react-icons/pi";

function Notes() {
  const { overlayDisplay } = useLayoutContext();
  const {
    allNotes,
    allTags,
    isLoading,
    fetchDataErr,
    noteView,
    handleNoteView,
  } = useNotesContext();

  return (
    <main className="notes-page">
      {overlayDisplay && <OverlayElement callback={handleNoteView} />}
      <div className="container">
        <PageTitle title="notes">
          <CgNotes />
        </PageTitle>
        <NotesIndex.NotesHeader />
        {allTags?.length > 0 && <NotesIndex.TagsFilter />}
        <div className="notes-content">
          {isLoading ? (
            <BulletsLoading />
          ) : fetchDataErr ? (
            <ErrorDiv errorObj={fetchDataErr} />
          ) : allNotes?.length <= 0 ? (
            <NoContent>
              <button
                className="l-btn"
                onClick={() => {
                  handleNoteView("open");
                  handleOverlay();
                }}
              >
                new note <PiNotePencilBold />
              </button>
            </NoContent>
          ) : (
            <NotesIndex.NotesList />
          )}
          <NotesIndex.NotesBoard />
        </div>
        {noteView && <NoteSectionIndex.NoteViewSection />}
      </div>
    </main>
  );
}
export default Notes;
