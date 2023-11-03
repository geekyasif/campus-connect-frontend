import React from "react";
import UserProfilePictureContainer from "./UserPersonalDetails/UserProfilePictureContainer";
import UserProfileBannerContainer from "./UserPersonalDetails/UserProfileBannerContainer";
import UserProfileAboutContainer from "./UserPersonalDetails/UserProfileAboutContainer";

function UserProfileTopContainer({ user }) {
  return (
    <div className="border rounded bg-white">
      <UserProfileBannerContainer user={user} />
      <div className="flex flex-col lg:flex lg:flex-row min-h-[140px]">
        <UserProfilePictureContainer user={user} />
        <UserProfileAboutContainer user={user} />
      </div>
    </div>
  );
}

export default UserProfileTopContainer;
