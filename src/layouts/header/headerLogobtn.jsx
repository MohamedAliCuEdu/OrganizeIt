import React from "react";
import { Link } from "react-router-dom";

function HeaderLogoBtn() {
  return (
    <div className="header-logo-btn logo">
      <Link to="/">
        OrganizeIt
      </Link>
    </div>
  );
}

export default HeaderLogoBtn;
