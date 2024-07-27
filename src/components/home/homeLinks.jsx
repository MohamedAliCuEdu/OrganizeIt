import React from "react";
import { Link } from "react-router-dom";

function HomeLinks() {
  return (
    <div className="home-links">
      <Link to="/signup" className="xlg-btn dark-btn">
        sign up
      </Link>
      <Link to="/login" className="xlg-btn dark-btn">
        log in
      </Link>
    </div>
  );
}

export default HomeLinks;
