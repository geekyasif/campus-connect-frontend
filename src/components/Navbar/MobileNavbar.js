import {
  faBars,
  faEdit,
  faHome,
  faMultiply,
  faPeopleGroup,
  faSignOut,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { handleIsSideNavbarOpen } from "../../features/authSlice";
import Avatar from "react-avatar";
import useLogout from "../../hooks/useLogout";

function MobileNavbar() {
  const Logout = useLogout();
  const dispatch = useDispatch();
  const sideNavbarRef = useRef();
  const { user, authToken, isSideNavbarOpen } = useSelector(
    (state) => state.auth
  );

  // closing the side navbar
  useEffect(() => {
    const handleCloseSideNavbar = (event) => {
      if (
        sideNavbarRef.current &&
        !sideNavbarRef.current.contains(event.target)
      ) {
        dispatch(handleIsSideNavbarOpen());
      }
    };

    // binding the click event listner
    window.addEventListener("click", handleCloseSideNavbar);

    // unbinding the click event listener
    return () => window.removeEventListener("click", handleCloseSideNavbar);
  }, [sideNavbarRef]);

  return (
    <div className="block md:hidden lg:hidden">
      {/* open menu icon on mobile  */}
      <FontAwesomeIcon
        className="text-[18px]"
        onClick={() => dispatch(handleIsSideNavbarOpen())}
        icon={faBars}
      />

      {/* mobile drawer  */}
      {isSideNavbarOpen && (
        <div className="w-full h-full flex flex-row  z-[1] p-0 fixed top-0 left-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] md:hidden lg:hidden">
          <div className="w-[260px] bg-white p-4 pb-[80px] shadow overflow-scroll flex flex-col relative">
            <FontAwesomeIcon
              className="absolute top-1 right-1 px-2 py-1 text-[25px]"
              onClick={() => dispatch(handleIsSideNavbarOpen())}
              icon={faMultiply}
            />

            <p className="text-xl font-bold mb-6">Campus Connect</p>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white my-2 rounded p-2 text-sm"
                  : "text-gray-700  my-2 p-2 text-sm"
              }
            >
              <FontAwesomeIcon className="text-gray-700 mr-2" icon={faHome} />
              Home
            </NavLink>
            <NavLink
              to="/find-dev"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white my-2 rounded p-2 text-sm"
                  : "text-gray-700  my-2 p-2 text-sm"
              }
            >
              <FontAwesomeIcon className="text-gray-700 mr-2" icon={faUsers} />
              FindDev
            </NavLink>

            <NavLink
              to="/forum"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white my-2 rounded p-2 text-sm"
                  : "text-gray-700  my-2 p-2 text-sm"
              }
            >
              <FontAwesomeIcon
                className="text-black mr-2"
                icon={faPeopleGroup}
              />
              Forum
            </NavLink>

            <div className="h-0.5 border w-full bg-black my-2"></div>
            {authToken && (
              <>
                <NavLink
                  to={`/profile/${user?.user?.personal_details?.username}`}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-indigo-500 text-white my-2 rounded p-2 text-sm"
                      : "text-gray-700  my-2 p-2 text-sm"
                  }
                >
                  <FontAwesomeIcon
                    className="text-gray-700 mr-2"
                    icon={faUser}
                  />
                  My Profile
                </NavLink>
                <NavLink
                  to={`/edit-profile/${user?.user?.personal_details?.username}`}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-indigo-500 text-white my-2 rounded p-2 text-sm"
                      : "text-gray-700  my-2 p-2 text-sm"
                  }
                >
                  <FontAwesomeIcon
                    className="text-gray-700 mr-2"
                    icon={faEdit}
                  />
                  Edit Profile
                </NavLink>

                <p
                  onClick={Logout}
                  className="text-gray-700 rounded transition-al py-2 text-sm"
                >
                  <FontAwesomeIcon
                    icon={faSignOut}
                    className="ml-2 pr-2 text-black"
                  />
                  Logout
                </p>

                <div className="fixed bottom-0 left-0 flex flex-row items-center border-t-2 py-2 px-4 w-[260px] bg-white">
                  <div className="rounded-full w-[40px] h-[40px]">
                    {user?.user?.personal_details.profile_url !== "" ? (
                      <img
                        alt="profile"
                        src={user?.user?.personal_details?.profile_url}
                        className="rounded-full"
                      />
                    ) : (
                      <Avatar
                        name={user?.user?.personal_details?.fullName}
                        round={true}
                        size={40}
                      />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm lg:text-lg font-bold">
                      {user?.user?.personal_details?.fullName}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">
                      @{user?.user?.personal_details?.username}
                    </p>
                  </div>
                </div>
              </>
            )}

            {!authToken && (
              <>
                <div className="fixed bottom-0 left-0  border-t-2 py-2 px-4 w-[260px] bg-white">
                  <Link
                    to="login"
                    className="border rounded p-2 md:mr-2 text-xs md:text-xs bg-indigo-500 md:mb-0 mb-1 mr-0 mt-1 md:mt-0 text-center text-white block"
                  >
                    Login
                  </Link>
                  <Link
                    to="register"
                    className="border rounded p-2 md:mr-2 text-xs md:text-xs bg-indigo-500 md:mb-0 mb-1 mr-0 mt-1 md:mt-0 text-center text-white block"
                  >
                    Regsiter
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;
