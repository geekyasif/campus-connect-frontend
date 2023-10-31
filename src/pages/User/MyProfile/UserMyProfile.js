import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserMyProfileSidebar from "../../../components/UserProfile/UserMyProfile/UserMyProfileSidebar";
import InfoCard from "../../../components/UserProfile/UserMyProfile/InfoCard";
import Modal from "../../../components/Modal/Modal";
import UserCertificateCard from "../../../components/UserProfile/UserMyProfile/UserCertificate/UserCertificateCard";
import UserCertificates from "../../../components/UserProfile/EditProfile/UserCertificates";
import UserProjects from "../../../components/UserProfile/EditProfile/UserProjects";
import UserProjectCard from "../../../components/UserProfile/UserMyProfile/UserProject/UserProjectCard";
import MyQueriesContainer from "../../../components/UserProfile/UserMyProfile/MyQueriesContainer";
import QueryBox from "../../../components/Forum/QueryBox";
import UserProfileAcademicContainer from "../../../components/UserProfile/UserMyProfile/UserProfileAcademicContainer";

function UserMyProfile() {
  const { user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [element, setElement] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const showModal = (el, title) => {
    setModalTitle(title);
    setElement(el);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setElement(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    // dispatch(handleIsSideNavbarOpen());
  }, []);

  return (
    <div className="container mx-auto lg:my-2 lg:p-0 p-2 relative">
      <UserMyProfileSidebar />

      {/* user about container  */}
      <InfoCard
        title="About"
        element={<p>{user?.user?.personal_details?.about}</p>}
      />

      {/* user academics container  */}
      <InfoCard
        title="Queries"
        element={<MyQueriesContainer />}
        button={
          <button
            className="text-xs"
            onClick={() => {
              showModal(<QueryBox />, "Ask a Query");
            }}
          >
            Ask a Query
          </button>
        }
      />

      {/* user academics container  */}
      <InfoCard
        title="Academics"
        element={<UserProfileAcademicContainer />}
        button={
          <button
            className="text-xs"
            onClick={() => {
              showModal(<p>Add Academics</p>, "Add Academics");
            }}
          >
            Add Academics
          </button>
        }
      />

      {/* user certificates container  */}
      <InfoCard
        title="Certificates"
        element={
          <div className="">
            {user?.user?.certificates?.length === 0 && (
              <p className="text-center">No certificates found!</p>
            )}
            {user?.user?.certificates?.map((certificate) => (
              <UserCertificateCard
                certificate={certificate}
                key={certificate.certificate_id}
              />
            ))}
          </div>
        }
        button={
          <button
            className="text-xs"
            onClick={() => {
              showModal(<UserCertificates />, "Add Certificate");
            }}
          >
            Add Certificates
          </button>
        }
      />

      {/* user projects container  */}
      <InfoCard
        title="Projects"
        element={
          <div className="">
            {user?.user?.projects.length === 0 && (
              <p className="text-center">No Project found!</p>
            )}
            {user?.user?.projects?.map((project) => (
              <UserProjectCard project={project} key={project.project_id} />
            ))}
          </div>
        }
        button={
          <button
            className="text-xs"
            onClick={() => {
              showModal(<UserProjects />, "Add Project");
            }}
          >
            Add Projects
          </button>
        }
      />

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        element={element}
        modalTitle={modalTitle}
      />
    </div>
  );
}

export default UserMyProfile;
