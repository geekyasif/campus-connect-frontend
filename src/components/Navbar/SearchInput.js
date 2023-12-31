import { faMultiply, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function SearchInput({ setIsSuggestionBoxOpen, handleSearchDevs }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearchDevs(searchText);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="relative flex items-center ">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute mr-2 left-2 text-gray-400"
      />
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsSuggestionBoxOpen(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsSuggestionBoxOpen(false);
          }, 200);
        }}
        type="text"
        placeholder="Find Dev..."
        className="focus:outline-none border w-[250px] focus:border  focus:bg-gray-100 text-black p-1 rounded-lg px-2 transition-all placeholder:text-sm pl-8 lg:w-[350px]"
      />

      {searchText && (
        <FontAwesomeIcon
          icon={faMultiply}
          onClick={() => {
            setSearchText("");
            setIsSuggestionBoxOpen(false);
          }}
          className="absolute mr-2 right-2 text-gray-400 cursor-pointer"
        />
      )}
    </div>
  );
}

export default SearchInput;
