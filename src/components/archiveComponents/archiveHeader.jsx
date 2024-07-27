import React from "react";
import useNotesContext from "../../hooks/useNotesContext";

import ArrowBackBtn from "../../components/buttons/arrowBackBtn";

function ArchiveHeader({children}) {
  const { archiveNotes } = useNotesContext();
  return (
    <header className="archive-header">
      <ArrowBackBtn />
      <div className="content">
        <span className="list-count">{archiveNotes?.length} note</span>
        {children}
      </div>
    </header>
  );
}

export default ArchiveHeader;
