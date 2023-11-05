import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSideNavbar } from "../../features/authSlice";
import useUser from "../../hooks/user/useUser";

function Home() {
  const dispatch = useDispatch();
  const { authToken } = useUser();

  useEffect(() => {
    dispatch(closeSideNavbar(false));
  }, []);

  return (
    <div className="h-screen container mx-auto mt-8 px-4">
      <div className="md:flex md:flex-row md:justify-between items-center">
        <div className="md:text-center">
          <h1 className="text-2xl font-bold md:text-xl lg:text-3xl ">
            Welcome To Campus Connect
          </h1>
          <p className="mb-2 text-sm md:my-2">
            Platform for connect, collab, build and learn new skills
          </p>
        </div>
        <div className="">
          <img alt="profile" src="/startup-210.svg" />
        </div>
      </div>

      <div className="md:flex md:flex-row md:justify-between items-center flex flex-col-reverse">
        <div className="">
          <img alt="profile" src="/collab.svg" />
        </div>

        <div className=" md:w-1/2">
          <h1 className="my-4 text-3xl font-bold">
            Platform for connect, collab, build and learn new skills
          </h1>
          <p className="text-sm">
            A platform for university students can connect them with peers,
            mentors, and potential collaborators to enhance their educational
            experience. It offers resources for learning new skills,
            opportunities for collaboration, and access to experts in various
            fields. Such a platform can help students build their skills,
            explore new interests, and prepare for successful careers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
