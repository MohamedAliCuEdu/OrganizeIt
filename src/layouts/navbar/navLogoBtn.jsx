import React from "react";
import { Link } from "react-router-dom";

function NavLogoBtn() {
  return (
    <div className="nav-logo-btn logo">
      <Link to="/">
        OrganizeIt
      </Link>
    </div>
  );
}

export default NavLogoBtn;
