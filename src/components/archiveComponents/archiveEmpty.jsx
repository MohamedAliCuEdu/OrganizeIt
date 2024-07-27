import React from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
function ArchiveEmpty() {
  return (
    <div className="empty-list">
      <HiArchiveBoxXMark />
      <h2>archive is empty!</h2>
      <Link to="/notes">back to all notes</Link>
    </div>
  );
}

export default ArchiveEmpty;
