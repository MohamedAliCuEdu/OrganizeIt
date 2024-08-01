import React from "react";
import { NavLink } from "react-router-dom";

import { FaGear } from "react-icons/fa6";
import { FaTasks, FaProjectDiagram, FaRegUserCircle } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { ImCalendar } from "react-icons/im";
import { GoFileSubmodule } from "react-icons/go";

function NavLinks() {
  return (
    <ul className="nav-Links">
      <li>
        <NavLink to="/profile" title="to profile page">
          <FaRegUserCircle />
          profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/tasks" title="to tasks page">
          <FaTasks />
          tasks
        </NavLink>
      </li>
      <li>
        <NavLink to="/notes" title="to notes page">
          <CgNotes />
          notes
        </NavLink>
      </li>
      <li>
        <NavLink to="/plans" title="to plans page">
          <FaProjectDiagram />
          plans
        </NavLink>
      </li>
      <li>
        <NavLink to="/files" title="to files page">
          <GoFileSubmodule />
          files
        </NavLink>
      </li>
      <li>
        <NavLink to="/calender" title="to calender page">
          <ImCalendar />
          calender
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" title="to settings page">
          <FaGear />
          settings
        </NavLink>
      </li>
    </ul>
  );
}

export default React.memo(NavLinks);
