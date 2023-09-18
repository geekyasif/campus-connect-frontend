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
import SearchInput from "./SearchInput";
import SuggestionContainer from "./SuggestionContainer";
import useDev from "../../hooks/dev/useDev";

function Navbar() {
  const { pathname } = useLocation();
  const { user, authToken } = useSelector((state) => state.auth);
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);
  const { fetchDevs } = useDev();
  const [devs, setDevs] = useState([]);
  const [filterResults, setFilterResults] = useState([]);

  const handleSearchDevs = (args) => {
    if (args) {
      const _results = devs?.filter((d) =>
        d.data.personal_details.fullName
          .toLowerCase()
          .includes(args.toLowerCase())
      );
      setFilterResults(_results);
    }
  };

  const handleFetchDevs = async () => {
    const res = await fetchDevs();
    setDevs(res);
  };

  useEffect(() => {
    handleFetchDevs();
  }, []);

  return (
    <div className="bg-white p-4 border-b-2 sticky top-0 z-10">
      <div className="container mx-auto flex flex-row justify-between items-center relative flex-wrap">
        <LeftNavbar />
        {pathname.split("/")[1] === "find-dev" && (
          <div>
            <SearchInput
              handleSearchDevs={handleSearchDevs}
              setIsSuggestionBoxOpen={setIsSuggestionBoxOpen}
            />
            {isSuggestionBoxOpen && (
              <SuggestionContainer results={filterResults} />
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
