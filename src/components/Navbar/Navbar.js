import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftNavbar from "./LeftNavbar";
import MidNavbar from "./MidNavbar";
import RightNavbar from "./RightNavbar";
import MobileNavbar from "./MobileNavbar";
import NewMobileNavbar from "./NewMobileNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const { user, authToken } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white p-4 border-b-2 sticky top-0">
      <div className="container mx-auto flex flex-row justify-between items-center relative">
        <LeftNavbar />
        {pathname.split("/")[1] === "find-dev" && (
          <div className="relative flex items-center">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute mr-2 left-2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Find Dev..."
              className="focus:outline-none border w-[250px] focus:border  focus:bg-gray-100 text-black p-1 rounded-lg px-2 transition-all placeholder:text-sm pl-8"
            />
          </div>
        )}

        <div className="flex items-center">
          <MidNavbar />
          <RightNavbar />
        </div>
        {/* <MobileNavbar /> */}
        {/* <NewMobileNavbar/> */}
      </div>
    </div>
  );
}

export default Navbar;
