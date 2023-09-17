import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftNavbar from "./LeftNavbar";
import MidNavbar from "./MidNavbar";
import RightNavbar from "./RightNavbar";
import MobileNavbar from "./MobileNavbar";
import NewMobileNavbar from "./NewMobileNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const { user, authToken } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);

  return (
    <div className="bg-white p-4 border-b-2 sticky top-0">
      <div className="container mx-auto flex flex-row justify-between items-center relative flex-wrap">
        <LeftNavbar />
        {pathname.split("/")[1] === "find-dev" && (
          <div>
            <div className="relative flex items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute mr-2 left-2 text-gray-400"
              />
              <input
                onFocus={() => setIsSuggestionBoxOpen(true)}
                onBlur={() => setIsSuggestionBoxOpen(false)}
                type="text"
                placeholder="Find Dev..."
                className="focus:outline-none border w-[250px] focus:border  focus:bg-gray-100 text-black p-1 rounded-lg px-2 transition-all placeholder:text-sm pl-8"
              />
            </div>
            {isSuggestionBoxOpen && (
              <div className="bg-white rouneded border absolute w-[250px] ">
                <p className="p-2 hover:bg-gray-100 hover:rounded my-2 text-xs cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    className=" mr-2 left-2 text-gray-400"
                  />
                  Mohammad ASif
                </p>
                <p className="p-2 hover:bg-gray-100 hover:rounded my-2 text-xs cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    className=" mr-2 left-2 text-gray-400"
                  />
                  Geekyasif
                </p>
                <p className="p-2 hover:bg-gray-100 hover:rounded my-2 text-xs cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    className=" mr-2 left-2 text-gray-400"
                  />
                  Prabhat Kumar Tiwari
                </p>
                <p className="p-2 hover:bg-gray-100 hover:rounded my-2 text-xs cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    className=" mr-2 left-2 text-gray-400"
                  />
                  Akash Kumar Goutam
                </p>
                <p className="p-2 hover:bg-gray-100 hover:rounded my-2 text-xs cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    className=" mr-2 left-2 text-gray-400"
                  />
                  Irshad Akram
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center ">
          <MidNavbar />
          <RightNavbar />
        </div>
        {/* <NewMobileNavbar /> */}
        <MobileNavbar />
      </div>
    </div>
  );
}

export default Navbar;
