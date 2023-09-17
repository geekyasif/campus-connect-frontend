import React from 'react'
import UserProfileAboutContainer from './UserProfileAboutContainer'
import UserProfileAcademicContainer from './UserProfileAcademicContainer'
import UserMyProfileProjectContainer from './UserProject/UserMyProfileProjectContainer'
import UserProfileCertificateContainer from './UserCertificate/UserProfileCertificateContainer'
// import UserAcademics from './UserAcademics'
// import UserCertificates from './UserCertificates'
// import UserPersonal from './UserPersonalDetails'
// import UserProjects from './UserProjects'
// import UserSocialLinks from './UserSocialLinks'

function UserTabContainer({activeTab}) {
  return (
    <div className='p-4 w-full rounded'>
        {activeTab == "About" && <UserProfileAboutContainer/>}
        {activeTab == "Academics" && <UserProfileAcademicContainer/>}
        {activeTab == "Projects" && <UserMyProfileProjectContainer/>}
        {activeTab == "Certificates" && <UserProfileCertificateContainer/>}
    </div>
  )
}

export default UserTabContainer