import React from "react";
import { useSelector } from "react-redux";

function UserProfileAboutContainer() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="">
      <p className="text-2xl font-bold mb-2">Personal Info</p>
      <div className="flex flex-row">
        <div className="w-1/2">
          <p className="font-bold mb-2 mt-4">Full Name</p>
          <p>{user?.personal_details?.fullName}</p>
          <p className="font-bold mb-2 mt-4">Username</p>
          <p>{user?.personal_details?.username}</p>

          <p className="font-bold mb-2 mt-4">Expertise in</p>
          <p>{user?.personal_details?.expertise_in}</p>
        </div>

        <div className="w-1/2">
          <p className="font-bold mb-2 mt-4">Phone</p>
          <p>{user?.personal_details?.phone}</p>
          <p className="font-bold mb-2 mt-4">City</p>
          <p>{user?.personal_details?.city}</p>

          <p className="font-bold mb-2 mt-4">About</p>
          <p>{user?.personal_details?.about}</p>
        </div>
      </div>

      <div>
        <div className="font-bold mb-2 mt-4">Skills</div>
        <div className="flex flex-row flex-wrap gap-1">
          {user?.personal_details?.skills.split(",").map((skill, id) => (
            <p className="border rounded p-1 mr-2 text-xs lg:text-sm" key={id}>
              {skill}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold mb-2 mt-4">Social Links</p>
        <div className="my-4 flex flex-wrap gap-1">
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.github}
          >
            github
          </a>
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.linkedin}
          >
            linkedin
          </a>
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.leetcode}
          >
            leetcode
          </a>
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.portfolio}
          >
            portfolio
          </a>
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.hackerrank}
          >
            hackerrank
          </a>
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.codechef}
          >
            codechef
          </a>
          <a
            className="mr-2 rounded p-1 text-xs  lg:text-sm  border"
            href={user?.social_links?.geeksforgeek}
          >
            geeksforgeek
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserProfileAboutContainer;
