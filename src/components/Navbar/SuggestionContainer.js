import React from "react";
import SuggestionItem from "./SuggestionItem";

function SuggestionContainer({ results, setIsSuggestionBoxOpen }) {
  return (
    <div className="bg-white rouneded border absolute  rounded w-[250px]  lg:w-[350px] transition-all ease-in">
      {results?.map((data) => (
        <SuggestionItem
          data={data}
          setIsSuggestionBoxOpen={setIsSuggestionBoxOpen}
        />
      ))}
    </div>
  );
}

export default SuggestionContainer;
