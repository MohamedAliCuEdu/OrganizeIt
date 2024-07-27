import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

function MainBackBtn() {
  const navigate = useNavigate();

  function backToPrevious() {
    navigate(-1);
  }

  return (
    <button className="main-back-btn dark-btn" onClick={backToPrevious}>
      <FaBackward />
      go back
    </button>
  );
}

export default MainBackBtn;
