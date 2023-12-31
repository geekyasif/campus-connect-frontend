import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import UserProfileTab from "../../../components/UserProfile/UserMyProfile/UserProfileTab";
import UserTabContainer from "../../../components/UserProfile/UserMyProfile/UserTabContainer";
import UserMyProfileSidebar from "../../../components/UserProfile/UserMyProfile/UserMyProfileSidebar";
import { handleIsSideNavbarOpen } from "../../../features/authSlice";

function UserMyProfile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [activeTab, setActiveTavb] = useState("About");
  const [activeContainerData, setActiveContainerData] = useState("About");

  const handleActiveTab = (title) => {
    setActiveTavb(title);
  };

  useEffect(() => {
    dispatch(handleIsSideNavbarOpen());
  }, []);

  return (
    <div className="container mx-auto my-2">
      <div className="flex lg:flex-row flex-col p-2 gap-2">
        <UserMyProfileSidebar />
        <div className="flex flex-col flex-wrap border p-2 rounded w-full bg-white shadow ">
          <UserProfileTab
            handleActiveTab={handleActiveTab}
            activeTab={activeTab}
          />
          <UserTabContainer activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default UserMyProfile;
