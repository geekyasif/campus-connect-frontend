import React, { useState } from "react";
import InfoCard from "./InfoCard";
import {
  ImBooks,
  ImInfo,
  ImProfile,
  ImQuestion,
  ImRocket,
} from "react-icons/im";
import AddButton from "./AddButton";
import QueryBox from "../Forum/QueryBox";
import UserProfileAcademicContainer from "./UserAcademic/UserProfileAcademicContainer";
import UserCertificates from "./EditProfile/UserCertificates";
import UserCertificateCard from "./UserCertificate/UserCertificateCard";
import UserProjectCard from "./UserProject/UserProjectCard";
import UserProjects from "./EditProfile/UserProjects";
import Modal from "../Modal/Modal";
import UserQueriesContainer from "./UserQuery/UserQueriesContainer";
import UserMyProfileProjectContainer from "./UserProject/UserMyProfileProjectContainer";
import UserProfileCertificateContainer from "./UserCertificate/UserProfileCertificateContainer";

function UserProfileBottomContainer({ user }) {
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

  return (
    <>
      <InfoCard
        title="About"
        user={user}
        icon={<ImInfo className="text-blue-500" />}
        element={<p>{user?.user?.personal_details?.about}</p>}
      />
      <InfoCard
        title="Queries"
        user={user}
        icon={<ImQuestion className="text-red-800" />}
        element={<UserQueriesContainer user={user} />}
        button={
          <AddButton
            callback={showModal}
            element={<QueryBox />}
            title="Ask New Query"
          />
        }
      />
      <InfoCard
        title="Academics"
        user={user}
        icon={<ImBooks className="text-white bg-blue-500" />}
        element={<UserProfileAcademicContainer user={user} />}
        button={
          <AddButton
            callback={showModal}
            element={<UserCertificates />}
            title="Add Academic"
          />
        }
      />
      <InfoCard
        title="Certificates"
        user={user}
        icon={<ImProfile className="text-yellow-500" />}
        element={<UserProfileCertificateContainer user={user} />}
        button={
          <AddButton
            callback={showModal}
            element={<UserCertificates />}
            title="Add New Certificate"
          />
        }
      />
      <InfoCard
        title="Projects"
        user={user}
        icon={<ImRocket className="text-red-600" />}
        element={<UserMyProfileProjectContainer user={user} />}
        button={
          <AddButton
            callback={showModal}
            element={<UserProjects />}
            title="Add New Project"
          />
        }
      />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        element={element}
        modalTitle={modalTitle}
      />
    </>
  );
}

export default UserProfileBottomContainer;
