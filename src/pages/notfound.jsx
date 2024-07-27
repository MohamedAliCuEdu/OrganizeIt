import React from "react";
import { Link } from "react-router-dom";
import MainBackBtn from "../components/buttons/mainBackBtn";

function NotFound() {
  return (
    <main className="notfound-page">
      <div className="container">
        <img src="/404-page.png" alt="404" title="404-page"/>
        <h1 className="notfound-msg">page not found!</h1>
        <MainBackBtn/>
      </div>
    </main>
  );
}
export default NotFound;
