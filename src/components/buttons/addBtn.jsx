import React from "react";
import { GrAddCircle } from "react-icons/gr";

function AddBtn({ callback, value }) {
  return (
    <button className="add-btn md-btn dark-btn flex-between-h gap-5" onClick={callback}>
      <span>{value}</span>
      <GrAddCircle />
    </button>
  );
}

export default AddBtn;
