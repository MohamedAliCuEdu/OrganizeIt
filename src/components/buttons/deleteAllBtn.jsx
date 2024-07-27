import React from "react";
import { FaTrashCan } from "react-icons/fa6";

function DeleteAllBtn({ callBack }) {
  return (
    <button className="delete-all" onClick={callBack}>
      <span>delete all</span>
      <FaTrashCan />
    </button>
  );
}

export default DeleteAllBtn;
