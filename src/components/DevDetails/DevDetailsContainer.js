import React from "react";
import UserCertificateCard from "../UserProfile/UserMyProfile/UserCertificate/UserCertificateCard";
import UserProjectCard from "../UserProfile/UserMyProfile/UserProject/UserProjectCard";
import UserAcademicsCard from "../UserProfile/UserMyProfile/UserAcademicsCard";

function DevDetailsContainer({ user }) {
  const { personal_details, academics, certificates, projects } = user;

  return (
    <div className="bg-white p-4 border flex-grow lg:w-[70%] w-full">
      <p className="text-base lg:text-2xl font-bold mb-2 border-b-2">
        About me
      </p>
      <p className="text-xs lg:text-base">{personal_details?.about}</p>
      <div>
        <p className="text-base lg:text-2xl font-bold mt-4 border-b-2">
          Academics Details
        </p>
        <UserAcademicsCard academics={academics} />
      </div>
      <div>
        <p className="text-base lg:text-2xl  font-bold mt-4 border-b-2">
          Projects
        </p>
        {projects?.length === 0 ||
          (projects === undefined && (
            <p className="text-center text-xs lg:text-base my-2">
              No Certificate Found!
            </p>
          ))}
        {projects?.map((project) => (
          <UserProjectCard project={project} />
        ))}
      </div>

      <div>
        <p className="text-base lg:text-2xl font-bold mt-4 border-b-2">
          Certificates
        </p>
        {certificates?.length === 0 ||
          (certificates === undefined && (
            <p className="text-center text-xs lg:text-base my-2">
              No Certificate Found!
            </p>
          ))}
        {certificates?.map((certificate) => (
          <UserCertificateCard certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default DevDetailsContainer;
