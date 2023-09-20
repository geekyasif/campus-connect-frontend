import React from "react";
import SuggestionItem from "./SuggestionItem";

function SuggestionContainer({ results, setIsSuggestionBoxOpen }) {
  return (
    <div className="bg-white rouneded border absolute  rounded w-[250px]  lg:w-[350px] transition-all ease-in">
      {results?.map((data) => (
        <div key={data?.data?.personal_details.username}>
          <SuggestionItem
            data={data}
            setIsSuggestionBoxOpen={setIsSuggestionBoxOpen}
          />
        </div>
      ))}
    </div>
  );
}

export default SuggestionContainer;
