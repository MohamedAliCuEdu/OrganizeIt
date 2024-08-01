import React from "react";
import { FaTrashCan } from "react-icons/fa6";

function DeleteAllBtn({ callBack }) {
  return (
    <button className="delete-all md-btn dark-btn flex-between-h gap-5" onClick={callBack}>
      <span>delete all</span>
      <FaTrashCan />
    </button>
  );
}

export default DeleteAllBtn;
