import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfileTab from "../../../components/UserProfile/UserMyProfile/UserProfileTab";
import UserTabContainer from "../../../components/UserProfile/UserMyProfile/UserTabContainer";
import UserMyProfileSidebar from "../../../components/UserProfile/UserMyProfile/UserMyProfileSidebar";
import { handleIsSideNavbarOpen } from "../../../features/authSlice";

function UserMyProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isReadMore, setIsReadMore] = useState(false);

  const [activeTab, setActiveTavb] = useState("About");
  const [activeContainerData, setActiveContainerData] = useState("About");

  const handleActiveTab = (title) => {
    setActiveTavb(title);
  };

  useEffect(() => {
    // dispatch(handleIsSideNavbarOpen());
  }, []);

  return (
    <div className="container mx-auto p-2">
      <UserMyProfileSidebar />
      {/* <div className="flex flex-col flex-wrap border p-2 rounded w-full bg-white shadow ">
          <UserProfileTab
            handleActiveTab={handleActiveTab}
            activeTab={activeTab}
          />
          <UserTabContainer activeTab={activeTab} />
        </div> */}

      {/* user about container  */}
      <div className="my-2 rounded bg-white border" id={`#about`}>
        <div className="p-4">
          <p>About</p>
        </div>
        <div className="px-4 py-2">
          <p
            className={
              isReadMore
                ? "line-clamp-none h-full"
                : "line-clamp-3 h-[100px] overflow-hidden"
            }
          >
            {user?.user?.personal_details?.about}{" "}
            <span>{isReadMore ? "" : "..."}</span>
          </p>
          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-blue-500 text-sm"
          >
            {isReadMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {/* user queries container  */}
      <div className="my-2 rounded bg-white border" id={`#queries`}>
        <div className="p-4 flex justify-between items-center">
          <p className="font-semibold">Queries</p>
          <button className="text-xs">Add Queries</button>
        </div>
        <div className="px-4 py-2">
          <p
            className={
              isReadMore
                ? "line-clamp-none h-full"
                : "line-clamp-3 h-[100px] overflow-hidden"
            }
          >
            {user?.user?.personal_details?.about}{" "}
            <span>{isReadMore ? "" : "..."}</span>
          </p>
          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-blue-500 text-sm"
          >
            {isReadMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {/* user academics container  */}
      <div className="my-2 rounded bg-white border" id={`#academics`}>
        <div className="p-4 flex justify-between items-center">
          <p className="font-semibold">Academics</p>
          <button className="text-xs">Add Academic</button>
        </div>

        <div className="px-4 py-2">
          <p
            className={
              isReadMore
                ? "line-clamp-none h-full"
                : "line-clamp-3 h-[100px] overflow-hidden"
            }
          >
            {user?.user?.personal_details?.about}{" "}
            <span>{isReadMore ? "" : "..."}</span>
          </p>
          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-blue-500 text-sm"
          >
            {isReadMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {/* user certificates container  */}
      <div className="my-2 rounded bg-white border" id={`#certificates`}>
        <div className="p-4 flex justify-between items-center">
          <p className="font-semibold">Certificates</p>
          <button className="text-xs">Add Certificate</button>
        </div>

        <div className="px-4 py-2">
          <p
            className={
              isReadMore
                ? "line-clamp-none h-full"
                : "line-clamp-3 h-[100px] overflow-hidden"
            }
          >
            {user?.user?.personal_details?.about}{" "}
            <span>{isReadMore ? "" : "..."}</span>
          </p>
          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-blue-500 text-sm"
          >
            {isReadMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {/* user projects container  */}
      <div className="my-2 rounded bg-white border" id={`#projects`}>
        <div className="p-4 flex justify-between items-center">
          <p className="font-semibold">Projects</p>
          <button className="text-xs">Add Project</button>
        </div>

        <div className="px-4 py-2">
          <p
            className={
              isReadMore
                ? "line-clamp-none h-full"
                : "line-clamp-3 h-[100px] overflow-hidden"
            }
          >
            {user?.user?.personal_details?.about}{" "}
            <span>{isReadMore ? "" : "..."}</span>
          </p>
          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="text-blue-500 text-sm"
          >
            {isReadMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserMyProfile;
