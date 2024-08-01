import React from "react";
import { Link } from "react-router-dom";

import { MdLogin } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

function GestLinks() {
  return (
    <div className="header-links">
      <Link to="/login" title="login">
        <MdLogin />
      </Link>
      <Link to="/signup" title="sign up">
        <FiUserPlus />
      </Link>
    </div>
  );
}

export default GestLinks;
