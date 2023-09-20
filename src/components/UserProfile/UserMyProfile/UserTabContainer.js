import React from "react";
import UserProfileAboutContainer from "./UserProfileAboutContainer";
import UserProfileAcademicContainer from "./UserProfileAcademicContainer";
import UserMyProfileProjectContainer from "./UserProject/UserMyProfileProjectContainer";
import UserProfileCertificateContainer from "./UserCertificate/UserProfileCertificateContainer";
import MyQueriesContainer from "./MyQueriesContainer";

function UserTabContainer({ activeTab }) {
  return (
    <div className="lg:p-4 w-full rounded">
      {activeTab == "About" && <UserProfileAboutContainer />}
      {activeTab == "Academics" && <UserProfileAcademicContainer />}
      {activeTab == "Projects" && <UserMyProfileProjectContainer />}
      {activeTab == "Certificates" && <UserProfileCertificateContainer />}
      {activeTab == "My Queries" && <MyQueriesContainer />}
    </div>
  );
}

export default UserTabContainer;
