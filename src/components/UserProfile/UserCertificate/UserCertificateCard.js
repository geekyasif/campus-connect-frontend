import React, { useState } from "react";
import useUser from "../../../hooks/user/useUser";
import { useLocation } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function UserCertificateCard({ certificate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const user_id = pathname?.split("/")[2];
  const { user_id: current_user_id } = useUser();

  return (
    <div
      className="border rounded p-2 lg:my-2 lg:w-1/3"
      key={certificate?.certificate_id}
    >
      {current_user_id === user_id && (
        <div className="flex justify-end relative mb-2">
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
      <img
        alt="profile"
        src={certificate?.certificate_image}
        className="rounded-md p-4"
      />
      <div className="px-4">
        <p className="text-base lg:text-xl font-bold">
          {certificate?.certificate_title}
        </p>
        <div className="flex my-2 gap-2">
          <p className="text-xs lg:text-sm">
            <span className="">Issue Date</span> :{" "}
            {certificate?.certificate_issue_date}
          </p>
          <p className="text-xs lg:text-sm">
            <span className="">Expire Date</span> :{" "}
            {certificate?.certificate_expire_date}
          </p>
        </div>
        <div className="flex gap-2 justify-evenly text-center items-center">
          <a
            href={certificate?.certificate_url}
            className="text-xs lg:text-sm  bg-blue-500 rounded text-white w-full py-1"
          >
            Show Certificate
          </a>

          <a
            href={certificate?.credential_verification_link}
            className="text-xs lg:text-sm  bg-blue-500 rounded text-white w-full  py-1"
          >
            Show Credentials
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCertificateCard;
