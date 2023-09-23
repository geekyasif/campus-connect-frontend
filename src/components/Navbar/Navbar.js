import React, { useEffect, useState } from "react";
import LeftNavbar from "./LeftNavbar";
import MidNavbar from "./MidNavbar";
import RightNavbar from "./RightNavbar";
import MobileNavbar from "./MobileNavbar";
import { useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import SuggestionContainer from "./SuggestionContainer";
import useDev from "../../hooks/dev/useDev";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
  const { pathname } = useLocation();
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);
  const { fetchDevs, devsData } = useDev();
  const [filterResults, setFilterResults] = useState([]);

  const handleSearchDevs = (args) => {
    try {
      if (args) {
        const _results = devsData?.filter((d) =>
          d.data.personal_details.fullName
            .toLowerCase()
            .includes(args.toLowerCase())
        );
        setFilterResults(_results);
      } else {
        setFilterResults([]);
      }
    } catch (error) {
      toast.error("Something went wrong. try again!");
    }
  };

  useEffect(() => {
    const unsubscribe = fetchDevs();
    return () => unsubscribe;
  }, []);

  return (
    <div className="bg-white p-4 border-b-2 sticky top-0 z-10">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto flex flex-row justify-between items-center relative flex-wrap">
        <LeftNavbar />
        {pathname.split("/")[1] === "find-dev" && (
          <div>
            <SearchInput
              handleSearchDevs={handleSearchDevs}
              setIsSuggestionBoxOpen={setIsSuggestionBoxOpen}
            />
            {isSuggestionBoxOpen && filterResults.length > 0 && (
              <SuggestionContainer
                results={filterResults}
                setIsSuggestionBoxOpen={setIsSuggestionBoxOpen}
              />
            )}
          </div>
        )}

        <div className="flex items-center ">
          <MidNavbar />
          <RightNavbar />
        </div>
        <MobileNavbar />
      </div>
    </div>
  );
}

export default Navbar;
