import { faEdit, faEye, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import Avatar from "react-avatar";

function RightNavbar() {
  const Logout = useLogout();
  const profileDropdownMenuRef = useRef();
  const { user, authToken } = useSelector((state) => state.auth);
  const [profileMenuDropdown, setprofileMenuDropdown] = useState(false);

  // handling the profile menu to open the dropdown
  function handleProfileMenuDropdown() {
    setprofileMenuDropdown(!profileMenuDropdown);
  }

  // using this useEffect and the inside function to close the profile dropdown menu on clicking outside the div or screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownMenuRef.current &&
        !profileDropdownMenuRef.current.contains(event.target)
      ) {
        setprofileMenuDropdown(false);
      }
    };

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => window.removeEventListener("click", handleClickOutside);
  }, [profileDropdownMenuRef]);

  return (
    <div>
      <div className="hidden md:block lg:block">
        {!authToken && (
          <div className="">
            <Link
              className="bg-indigo-500 p-2 text-xs rounded text-white hover:bg-indigo-600 transition-all "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="ml-2 text-indigo-500 p-2 text-xs rounded bg-white border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all "
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      <div className="hidden md:block lg:block ">
        {authToken && (
          <div className="relative">
            <div
              className="rounded-full md:w-[40px] md:h-[40px] cursor-pointer border flex items-center justify-center"
              onClick={handleProfileMenuDropdown}
              ref={profileDropdownMenuRef}
            >
              {user?.personal_details?.profile_url !== "" ? (
                <img
                  alt="profile"
                  src={user?.personal_details?.profile_url}
                  className="rounded-full"
                />
              ) : (
                <Avatar
                  name={user?.personal_details?.fullName}
                  round={true}
                  size={35}
                />
              )}
            </div>
            {profileMenuDropdown && (
              <div className="flex flex-col absolute  p-2 right-2 border-1 shadow w-[250px]  rounded bg-white border">
                <div className="flex flex-row border-b-2 pb-2 items-center">
                  <div className="rounded-full w-[40px] h-[40px]">
                    {user?.personal_details?.profile_url !== "" ? (
                      <img
                        alt="profile"
                        src={user?.personal_details?.profile_url}
                        className="rounded-full"
                      />
                    ) : (
                      <Avatar
                        name={user?.personal_details?.fullName}
                        round={true}
                        size={35}
                      />
                    )}
                  </div>
                  <div className="ml-4">
                    <p>{user?.personal_details?.fullName}</p>
                    <p>@{user?.personal_details?.username}</p>
                  </div>
                </div>

                <Link
                  to={`/my-profile/${user?.personal_details?.username}`}
                  className="mt-2 hover:bg-gray-100 rounded transition-al py-2"
                >
                  <FontAwesomeIcon icon={faEye} className="w-8" />
                  My Profile
                </Link>
                <Link
                  to={`/edit-profile/${user?.personal_details?.username}`}
                  className="my-2 hover:bg-gray-100 rounded transition-all py-2"
                >
                  <FontAwesomeIcon icon={faEdit} className="w-8" />
                  Edit Profile
                </Link>
                <p
                  onClick={Logout}
                  className="hover:bg-gray-100 rounded transition-al py-2"
                >
                  <FontAwesomeIcon icon={faSignOut} className="ml-2 pr-2" />
                  Logout
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RightNavbar;
