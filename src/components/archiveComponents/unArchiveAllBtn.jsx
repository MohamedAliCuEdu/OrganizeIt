import React from "react";
import useNotesContext from "../../hooks/useNotesContext";
import { RiInboxUnarchiveFill } from "react-icons/ri";

function UnArchiveAllBtn() {
  const { archiveNotes, unArchiveAllApi } = useNotesContext();
  return (
    <button className="unarchive-btn" type="button" disabled={archiveNotes <= 0}>
      <RiInboxUnarchiveFill onClick={unArchiveAllApi} />
    </button>
  );
}

export default UnArchiveAllBtn;
