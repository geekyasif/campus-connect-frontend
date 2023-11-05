import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import useUser from "../../../hooks/user/useUser";
function UserProjectCard({ project }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const { pathname } = useLocation();
  const user_id = pathname?.split("/")[2];
  const { user_id: current_user_id } = useUser();

  return (
    <div className="border lg:w-1/3 rounded p-2">
      {current_user_id === user_id && (
        <div className="flex justify-end relative">
          <BiDotsVerticalRounded
            size={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
          {isMenuOpen && (
            <div
              className="flex flex-col justify-end bg-white border transition-all ease-in absolute top-5 right-2 rounded"
              ref={menuRef}
            >
              <p className="mb-2 border-b-2 px-4 py-2 flex gap-2 items-center text-xs">
                <FontAwesomeIcon icon={faPen} />
                Edit
              </p>
              <p className="px-4 py-2 flex gap-2 items-center text-xs">
                <FontAwesomeIcon icon={faTrash} /> Delete
              </p>
            </div>
          )}
        </div>
      )}

      <div className="p-4">
        <img
          alt={project?.project_title}
          src={project?.project_image}
          className="w-full rounded"
        />
      </div>
      <div className="lg:ml-4 ml-0 mt-2 lg:mt-0">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="">
            <p className="text-base font-semibold lg:text-xl">
              {project?.project_title}
            </p>
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
        </div>

        <div className="flex flex-row gap-1 text-center my-2">
          <a
            className="rounded bg-indigo-500 text-white text-xs lg:text-sm lg:p-2 p-1 flex-grow"
            href={project?.project_demo_link}
          >
            Demo Link
          </a>
          <a
            className="rounded bg-indigo-500 text-white text-xs lg:text-sm lg:p-2 p-1 flex-grow"
            href={project?.project_deployment_link}
          >
            Deployment Link
          </a>
          <a
            className="rounded bg-indigo-500 text-white text-xs lg:text-sm lg:p-2 p-1 flex-grow"
            href={project?.project_source_code}
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserProjectCard;
