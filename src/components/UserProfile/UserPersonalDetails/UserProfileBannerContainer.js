import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import useUser from "../../../hooks/user/useUser";

function UserProfileBannerContainer({ user }) {
  const { user_id: current_user } = useUser();
  return (
    <div className="w-full h-[180px] rounded-t-md relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {current_user === user?.id && (
        <button className="absolute top-3 right-3 px-2 py-1 bg-white text-blue-500 rounded text-xs flex gap-1 items-center">
          <BiSolidEdit /> change cover
        </button>
      )}
    </div>
  );
}

export default UserProfileBannerContainer;
