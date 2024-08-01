import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { axiosPrivateApi } from "../../services/api";

import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function UserLinks() {
  console.log("--- user")
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  async function handleUserLogout() {
    try {
      await axiosPrivateApi.get("http://localhost:4000/api/auth/logout");
      setAuth(null);
    } catch (err) {
      console.log(err.message);
    }
    navigate("/", { replace: true });
  }

  return (
    <div className="header-links">
      <Link to="/profile" title="profile">
        <FaUserCircle />
      </Link>
      <button onClick={handleUserLogout} title="log out">
        <MdLogout />
      </button>
    </div>
  );
}

export default UserLinks;
