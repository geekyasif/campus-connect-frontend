import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function MidNavbar() {
  const { authToken } = useSelector((state) => state.auth);

  return (
    <div className="hidden md:block lg:block lg:mr-4">
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-[#6366F1] ml-8" : "ml-8"
        }
        to="/"
      >
        Home
      </NavLink>

      {/* {authToken && ( */}
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-[#6366F1] ml-8" : "ml-8"
        }
        to="/find-dev"
      >
        Community
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? " text-[#6366F1] ml-8" : "ml-8"
        }
        to="/forum"
      >
        Forum
      </NavLink>
      {/* // )} */}
    </div>
  );
}

export default MidNavbar;
