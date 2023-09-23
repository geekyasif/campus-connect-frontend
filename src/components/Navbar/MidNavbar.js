import React from "react";
import { NavLink } from "react-router-dom";

function MidNavbar() {
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
    </div>
  );
}

export default MidNavbar;
