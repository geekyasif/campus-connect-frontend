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

function UserAcademicCard({ academic, id }) {
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
          <div className="flex justify-between w-full mt-4">
            <p className="text-xl font-bold">
              {academic?.degree} | {academic?.qualification}
            </p>

            <div className="flex">
              <p className="text-xs lg:text-base">{academic?.start_year}-</p>
              <p className="text-xs lg:text-base">{academic?.end_year}</p>
            </div>
          </div>
          <p className="text-base text-gray-500">
            {academic?.percentage} % | {academic?.cgpa} CGPA
          </p>

          <div>
            <p className="text-base text-gray-500">
              {academic?.university_name}
            </p>
            <p className="text-base text-gray-500">{academic?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAcademicCard;
