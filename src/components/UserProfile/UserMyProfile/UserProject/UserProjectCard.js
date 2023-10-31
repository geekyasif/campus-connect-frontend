import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function UserProjectCard({ project }) {
  return (
    <div
      className="border lg:my-2 flex flex-col lg:flex-row py-4 px-2 rounded"
      key={project?.project_id}
    >
      <img
        alt="profile"
        src={project?.project_image}
        className="lg:w-[250px] h-[150px] w-full"
      />
      <div className="lg:ml-4 ml-0 mt-2 lg:mt-0 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full">
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="font-bold mt-2 text-sm lg:text-base">Title</p>
                <p className="text-xs lg:text-base">{project?.project_title}</p>
              </div>

              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faTrash}
                  width={12}
                  className="mx-2 text-red-600 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faPen}
                  width={12}
                  className="mx-2 text-indigo-500 cursor-pointer"
                />
              </div>
            </div>
            <p className="font-bold mt-2 text-sm lg:text-base">Tech Stack</p>
            <div className="flex flex-row">
              {project?.project_tech_stack?.split(",").map((tech, id) => (
                <p
                  className="mr-2 rounded border text-xs lg:p-2 p-1 lg:mt-2 mt-0"
                  key={id}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="font-bold mt-2 text-sm lg:text-base">Start date</p>
            <p className="lg:mb-4 mb-2 text-xs lg:text-sm">
              {project?.project_date}
            </p>
            <a
              className="mr-2 rounded bg-indigo-500 text-white text-xs lg:p-2 p-1"
              href={project?.project_demo_link}
            >
              {" "}
              Demo Link
            </a>
            <a
              className="mr-2 rounded bg-indigo-500 text-white text-xs lg:p-2 p-1"
              href={project?.project_deployment_link}
            >
              Deployment Link
            </a>
            <a
              className="mr-2 rounded bg-indigo-500 text-white text-xs lg:p-2 p-1"
              href={project?.project_source_code}
            >
              {" "}
              Source code
            </a>
          </div>
        </div>

        <p className="font-bold mt-2 text-sm lg:text-base">Description</p>
        <p className="mb-4 text-xs lg:text-sm">
          {project?.project_description}
        </p>
      </div>
    </div>
  );
}

export default UserProjectCard;
