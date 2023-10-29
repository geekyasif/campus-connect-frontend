import {
  faBars,
  faEdit,
  faHome,
  faMultiply,
  faSignOut,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NewMobileNavbar() {
  const { user, authToken } = useSelector((state) => state.auth);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="md:hidden lg:hidden">
      <button onClick={handleToggle}>
        {!toggle ? (
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        ) : (
          <FontAwesomeIcon icon={faMultiply} />
        )}
      </button>
      <div
        className={`${
          toggle ? " bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)]" : ""
        } absolute top-[1px] -left-[16px] w-screen transition ease-in-out delay-200`}
      >
        <div
          className={`${
            toggle ? "opacity-100 translate-x-100" : "opacity-0 -translate-x-2"
          } transition ease-in delay-300 bg-white  w-[73%] h-screen p-4 flex flex-col`}
        >
          <Link to="/" className="text-gray-700 my-2">
            <FontAwesomeIcon className="text-gray-700 mr-2" icon={faHome} />
            Home
          </Link>
          <Link to="/find-dev" className="text-gray-700  my-2">
            <FontAwesomeIcon className="text-gray-700 mr-2" icon={faUsers} />
            FindDev
          </Link>

          <div className="h-0.5 border w-full bg-black my-2"></div>

          {authToken && (
            <>
              <Link
                to={`/my-profile/${user?.user?.personal_details.username}`}
                className="text-gray-700 my-2"
              >
                <FontAwesomeIcon className="text-gray-700 mr-2" icon={faUser} />
                My Profile
              </Link>
              <Link
                to={`/edit-profile/${user?.user?.personal_details.username}`}
                className="text-gray-700 my-2"
              >
                <FontAwesomeIcon className="text-gray-700 mr-2" icon={faEdit} />
                Edit Profile
              </Link>

              <p className="text-gray-700 my-2">
                <FontAwesomeIcon
                  className="text-gray-700 mr-2"
                  icon={faSignOut}
                />
                Logout
              </p>
            </>
          )}

          <div className="fixed bottom-0 left-0 flex flex-row items-center border-t-2 py-2 px-4 bg-white w-[73%] transition ease-in delay-300">
            <div className="rounded-full w-[50px] h-[50px]">
              {user?.user?.personal_details.profile_url !== "" ? (
                <img
alt="profile"
        
                  src={user?.user?.personal_details.profile_url}
                  className="rounded-full"
                />
              ) : (
                <FontAwesomeIcon icon={faUsers} />
              )}
            </div>
            <div className="ml-4">
              <p className="text-lg font-bold">{user?.user?.personal_details.name}</p>
              <p className="text-gray-500">
                @{user?.user?.personal_details.username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMobileNavbar;
