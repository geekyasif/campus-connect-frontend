import React from "react";

function DevDetailsContainer({ user }) {
  const { personal_details, academics, certificates, projects } = user;
  return (
    <div className="bg-white p-4 border flex-grow">
      <p className="text-2xl font-bold mb-2 border-b-2">About me</p>
      <p>{personal_details?.about}</p>

      <div>
        <p className="text-2xl font-bold mt-4 border-b-2">Academics Details</p>
        <div className="flex flex-row">
          <div className="w-1/2">
            <p className="font-bold mb-2 mt-4">University</p>
            <p>{academics?.university_name}</p>
            <p className="font-bold mb-2 mt-4">Location</p>
            <p>{academics?.location}</p>
            <p className="font-bold mb-2 mt-4">Enrol in branch</p>
            <p>{academics?.enrol_in_branch_name}</p>
            <p className="font-bold mb-2 mt-4">Enrolment Number</p>
            <p>{academics?.enrolment_number}</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold mb-2 mt-4">Current Semester</p>
            <p>{academics?.current_semester}</p>
            <p className="font-bold mb-2 mt-4">Current Year</p>
            <p>{academics?.current_year}</p>
            <p className="font-bold mb-2 mt-4">Year of passing</p>
            <p>{academics?.year_of_passing}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold mt-4 border-b-2">Projects</p>
        {projects?.map((project) => (
          <div className="border my-2 flex flex-row py-4 px-2">
            <img
              src={project?.project_image}
              className="w-[250px]  h-[150px] "
            />
            <div className="ml-4 w-full">
              <div className="flex flex-row items-center">
                <div className="w-1/2">
                  <p className="font-bold mt-2">Title</p>
                  <p>{project?.project_title}</p>
                  <p className="font-bold mt-2">Tech Stack</p>

                  <div className="flex flex-row">
                    {project?.project_tech_stack?.split(",").map((tech, id) => (
                      <p className="mr-2 rounded border text-xs p-2" key={id}>
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="font-bold mt-2 ">Start date</p>
                  <p className="mb-4">{project?.project_date}</p>
                  <a
                    className="mr-2 rounded bg-indigo-500 text-white text-xs p-2"
                    href={project?.project_demo_link}
                  >
                    {" "}
                    Demo Link
                  </a>
                  <a
                    className="mr-2 rounded bg-indigo-500 text-white text-xs p-2"
                    href={project?.project_deployment_link}
                  >
                    Deployment Link
                  </a>
                  <a
                    className="mr-2 rounded bg-indigo-500 text-white text-xs p-2"
                    href={project?.project_source_code}
                  >
                    {" "}
                    Source code
                  </a>
                </div>
              </div>

              <p className="font-bold mt-2">Description</p>
              <p className="mb-4">{project?.project_description}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-2xl font-bold mt-4 border-b-2">Certificates</p>
        {certificates?.map((certificate) => (
          <div className="border p-2 my-2 flex flex-row">
            <img
              src={certificate?.certificate_image}
              className="w-[250px]  h-[150px] "
            />
            <div className="ml-4">
              <p>Certificate title : {certificate?.certificate_title}</p>
              <p>
                Certificate issue date : {certificate?.certificate_issue_date}
              </p>
              <p>
                Certificate expire date : {certificate?.certificate_expire_date}
              </p>
              <p>
                Certificate Url
                <a href={certificate?.certificate_url}> view</a>
              </p>
              <p>
                credential_verification_link
                <a href={certificate?.credential_verification_link}> view</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevDetailsContainer;
