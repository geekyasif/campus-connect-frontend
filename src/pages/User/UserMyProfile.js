import React, { useState } from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import UserProfileTab from "../../components/UserProfile/UserMyProfile/UserProfileTab";
import UserTabContainer from "../../components/UserProfile/UserMyProfile/UserTabContainer";
import UserMyProfileSidebar from "../../components/UserProfile/UserMyProfile/UserMyProfileSidebar";

function UserMyProfile() {
  const { user } = useSelector((state) => state.auth);

  const [activeTab, setActiveTavb] = useState("About");
  const [activeContainerData, setActiveContainerData] = useState("About");

  const handleActiveTab = (title) => {
    setActiveTavb(title);
  };

  return (
    <div className="container mx-auto my-2">
      <div className="flex md:flex-row flex-col">
        {/* sidebar  */}
        <UserMyProfileSidebar />
        {/* container  */}

        <div className="flex flex-col border p-2 rounded ml-2 w-full bg-white shadow">
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
