import React from "react";
import { FiMenu } from "react-icons/fi";
import useLayoutContext from "../../hooks/useLayoutContext";

function MenuBtn() {
  const { handleNavDisplay } = useLayoutContext();

  return (
    <div className="menu-btn" onClick={handleNavDisplay}>
      <FiMenu />
    </div>
  );
}

export default React.memo(MenuBtn);
