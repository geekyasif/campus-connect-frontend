import React, { useState } from "react";
import {
  faPen,
  faTrash,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import useUser from "../../../hooks/user/useUser";
import { BiDotsVerticalRounded } from "react-icons/bi";

function UserAcademicCard({ academics }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const user_id = pathname?.split("/")[2];
  const { user_id: current_user_id } = useUser();

  return (
    <div className="border rounded p-2 min-h-[100px]">
      {current_user_id === user_id && (
        <div className="flex justify-end relative">
          <BiDotsVerticalRounded
            size={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
          {isMenuOpen && (
            <div className="flex flex-col justify-end bg-white border transition-all ease-in absolute top-5 right-2 rounded">
              <p className="mb-2 border-b-2 px-4 py-2 flex gap-2 items-center text-xs">
                <FontAwesomeIcon icon={faPen} />
                Edit
              </p>
              <p className="px-4 py-2 flex gap-2 items-center text-xs">
                <FontAwesomeIcon icon={faTrash} /> Delete
              </p>
            </div>
          )}
        </div>
      )}
      <div className="flex">
        <div className="w-[10%] flex justify-center my-auto">
          <FontAwesomeIcon icon={faUniversity} />
        </div>
        <div className="w-[90%] ">
          <p className="text-xl font-bold">{academics?.enrol_in_branch_name}</p>
          <div className="flex justify-between w-full ">
            <p className="text-base text-gray-500">
              {academics?.university_name},<span>{academics?.location} </span>
            </p>

            <div className="flex">
              <p className="text-xs lg:text-base">{academics?.current_year}-</p>
              <p className="text-xs lg:text-base">
                {academics?.year_of_passing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAcademicCard;
