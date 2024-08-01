import React from "react";
import { Outlet } from "react-router";

import Navbar from "./navbar";
import Header from "./header";

function Layouts() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layouts;
