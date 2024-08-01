import React from "react";

import useAuth from "../../hooks/useAuth";

import MenuBtn from "./menuBtn";
import UserLinks from "./userLinks";
import GestLinks from "./gestLinks";
import HeaderLogoBtn from "./headerLogobtn";

function Header() {
  console.log("---header")
  const { auth } = useAuth();

  return (
    <header>
      <div className="container">
        <MenuBtn />
        <HeaderLogoBtn />
        {auth?.userId ? <UserLinks /> : <GestLinks />}
      </div>
    </header>
  );
}

export default React.memo(Header);
