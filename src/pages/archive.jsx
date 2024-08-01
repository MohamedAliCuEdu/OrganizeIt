import React from "react";
import useNotesContext from "../hooks/useNotesContext";
import NotesIndex from "../components/notes/notesIndex";
import ArchiveIndex from "../components/archiveComponents/archiveIndex";
import ArrowBackBtn from "../components/buttons/arrowBackBtn"
import DeleteAllBtn from "../components/buttons/deleteAllBtn";
import OverlayElement from "../components/overlayElement";
import NoteSectionIndex from "../components/noteSection/noteSectionIndex";

import useLayoutContext from "../hooks/useLayoutContext";
import PageTitle from "../components/pageTitle";
import { FaArchive } from "react-icons/fa";

function Archive() {
  const { overlayDisplay } = useLayoutContext();
  const { noteView } = useNotesContext();
  const { archiveNotes, deleteArchiveNotesApi } = useNotesContext();
  return (
    <main className="archive-page">
      {overlayDisplay && <OverlayElement />}
      <div className="container">
        <PageTitle title="archive">
          <FaArchive />
        </PageTitle>
        <ArchiveIndex.ArchiveHeader>
          <ArchiveIndex.UnArchiveAllBtn />
          {archiveNotes.length > 0 && (
            <DeleteAllBtn callBack={deleteArchiveNotesApi} />
          )}
        </ArchiveIndex.ArchiveHeader>
        <div className="notes-content">
          {archiveNotes?.length <= 0 ? (
            <ArchiveIndex.ArchiveEmpty />
          ) : (
            <div className="notes-list notes-grid">
              {archiveNotes.map((note) => (
                <NotesIndex.NoteCard key={note._id} note={note} />
              ))}
            </div>
          )}
        </div>
        {noteView && <NoteSectionIndex.NoteViewSection />}
      </div>
    </main>
  );
}

export default Archive;
