import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SuggestionItem({ data }) {
  const navigate = useNavigate();

  return (
    <Link
      to={`/find-dev/${data?.data?.personal_details?.username}`}
      className="p-2 hover:bg-gray-100 hover:rounded my-2 text-xs cursor-pointer flex items-center w-full"
    >
      {data.data.personal_details.profile_url ? (
        <img
          src={data?.data?.personal_details?.profile_url}
          className="w-[25px] rounded-full mr-2"
        />
      ) : (
        <FontAwesomeIcon icon={faUser} className=" mr-2 left-2 text-gray-400" />
      )}

      {data?.data?.personal_details?.fullName}
    </Link>
  );
}

export default SuggestionItem;
