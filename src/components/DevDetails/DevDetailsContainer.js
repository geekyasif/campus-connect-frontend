import React from "react";
import UserCertificateCard from "../UserProfile/UserCertificate/UserCertificateCard";
import UserProjectCard from "../UserProfile/UserProject/UserProjectCard";
import UserAcademicCard from "../UserProfile/UserAcademic/UserAcademicCard";
import QueryCard from "../Forum/QueryCard";

function DevDetailsContainer({ user }) {
  const { personal_details, academics, certificates, projects, queries } =
    user?.user;

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
        <UserAcademicCard academics={academics} />
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

      <div>
        <p className="text-base lg:text-2xl font-bold mt-4 border-b-2">
          Queries
        </p>
        {!queries && (
          <p className="text-center text-xs lg:text-base">No Queries Found!</p>
        )}
        {queries?.map((data) => (
          <div key={data.id}>
            <QueryCard query={data} user={personal_details} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevDetailsContainer;
