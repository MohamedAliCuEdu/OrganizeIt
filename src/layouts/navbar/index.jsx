import React from "react";

import NavLinks from "./navLinks";
import NavCloseBtn from "./navCloseBtn";
import NavLogoBtn from "./navLogoBtn";

import useLayoutContext from "../../hooks/useLayoutContext";

function NavBar() {
  const { navDisplay } = useLayoutContext();

  return (
    <nav className={navDisplay ? "view" : null}>
      <div className="container">
        {navDisplay && <NavLogoBtn />}
        <NavLinks />
        {navDisplay && <NavCloseBtn />}
      </div>
    </nav>
  );
}

export default React.memo(NavBar);
