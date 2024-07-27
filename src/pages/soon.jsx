import React from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import MainBackBtn from "../components/buttons/mainBackBtn";

function Soon() {
  return (
    <main className="soon-page">
      <div className="container">
        <video src="./under_construction.mp4" loop autoPlay />
        <h1>
          page under construction
          <FaRegFaceSmile />
        </h1>
        <p>
          we're putting the finishing touches on this page. Please check back
          soon!"
        </p>
        <MainBackBtn/>
      </div>
    </main>
  );
}

export default Soon;
