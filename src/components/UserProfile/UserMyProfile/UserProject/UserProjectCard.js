import React from "react";

function UserProjectCard({ project }) {
  return (
    <div className="border my-2 flex flex-row py-4 px-2">
      <img src={project?.project_image} className="w-[250px]  h-[150px] " />
      <div className="ml-4 w-full">
        <div className="flex flex-row items-center">
          <div className="w-1/2">
            <p className="font-bold mt-2">Title</p>
            <p>{project?.project_title}</p>
            <p className="font-bold mt-2">Tech Stack</p>

            <div className="flex flex-row">
              {project?.project_tech_stack.split(",").map((tech) => (
                <p className="mr-2 rounded border text-xs p-2">{tech}</p>
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
  );
}

export default UserProjectCard;
