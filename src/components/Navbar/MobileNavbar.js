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
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const sideNavbarRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);

  // opening the side navbar
  function handleToggle () {
    setIsSideNavbarOpen(!isSideNavbarOpen); 
 
  };

  // closing the side navbar
  useEffect(() => {

 
    const handleCloseSideNavbar = (event) => {
      if (
        sideNavbarRef.current &&
        !sideNavbarRef.current.contains(event.target)
      ) {
        setIsSideNavbarOpen(!isSideNavbarOpen);

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
        onClick={handleToggle}
        icon={faBars}
        
      />

      {/* mobile drawer  */}
      {isSideNavbarOpen && (
        <div className="w-full h-full flex flex-row  z-[1] p-0 fixed top-0 left-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] md:hidden lg:hidden">
          <div className="w-[260px] bg-white p-4 pb-[80px] shadow overflow-scroll flex flex-col relative">
            <FontAwesomeIcon
              className="absolute top-1 right-1 px-2 py-1 text-[25px]"
              onClick={handleToggle}
              icon={faMultiply}
            />
            
            <p className="text-xl font-bold mb-6">Campus Connect</p>

            <Link to="/" className="text-gray-700 my-2">
              <FontAwesomeIcon className="text-gray-700 mr-2" icon={faHome} />
              Home
            </Link>
            <Link to="/find-dev" className="text-gray-700  my-2">
              <FontAwesomeIcon className="text-gray-700 mr-2" icon={faUsers} />
              FindDev
            </Link>

            <div className="h-0.5 border w-full bg-black my-2"></div>

            <Link to={`/profile/${user?.personal_details.username}`} className="text-gray-700 my-2">
              <FontAwesomeIcon className="text-gray-700 mr-2" icon={faUser} />
              My Profile
            </Link>
            <Link to="/profile" className="text-gray-700 my-2">
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

            <div className="fixed bottom-0 left-0 flex flex-row items-center border-t-2 py-2 px-4 w-[260px] bg-white">
            <div className="rounded-full w-[50px] h-[50px]" > 
              {user?.personal_details.profile_url !== "" ? (
                <img
                  src={user?.personal_details.profile_url}
                  className="rounded-full"
                />
              ) : (
                <FontAwesomeIcon icon={faUsers} />
              )}
            </div>
              <div className="ml-4">
                <p className="text-lg font-bold">
                  {user?.personal_details.name}
                </p>
                <p className="text-gray-500">
                  @{user?.personal_details.username}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;
