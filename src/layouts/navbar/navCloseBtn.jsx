import React from "react";
import { IoClose } from "react-icons/io5";
import useLayoutContext from "../../hooks/useLayoutContext";

function NavCloseBtn() {
  console.log("-- nav close")
  const { handleNavDisplay } = useLayoutContext();
  return (
    <button
      type="button"
      className="nav-close-btn"
      onClick={handleNavDisplay}
    >
      <IoClose />
    </button>
  );
}
export default React.memo(NavCloseBtn);
