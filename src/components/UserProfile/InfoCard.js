import React from "react";
import useUser from "../../hooks/user/useUser";
import { useLocation } from "react-router-dom";

function InfoCard({ icon, title, element, button }) {
  const { pathname } = useLocation();
  const user_id = pathname?.split("/")[2];
  const { user_id: current_user } = useUser();

  return (
    <div className="my-2 rounded bg-white border" id={`#about`}>
      <div className="p-4 flex justify-between items-center border-b-[1px]">
        <p className="font-medium text-base lg:text-lg flex items-center gap-2">
          {icon}
          {title}
        </p>
        {current_user === user_id && button && button}
      </div>
      <div className="px-4 py-2 mt-2">{element}</div>
    </div>
  );
}

export default InfoCard;
