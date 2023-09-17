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
        <div className="flex flex-row">
          {user?.personal_details?.skills.split(",").map((skill, id) => (
            <p className="border rounded p-2 mr-2" key={id}>{skill}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold mb-2 mt-4">Social Links</p>
        <div className="my-4">
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.github}
          >
            github
          </a>
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.linkedin}
          >
            linkedin
          </a>
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.leetcode}
          >
            leetcode
          </a>
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.portfolio}
          >
            portfolio
          </a>
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.hackerrank}
          >
            hackerrank
          </a>
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.codechef}
          >
            codechef
          </a>
          <a
            className="mr-2 rounded p-2 border"
            href={user?.social_links?.geeksforgeek}
          >
            geeksforgeek
          </a>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold my-2 mt-6">Academics</p>
        <div className="flex flex-row">
          <div className="w-1/2">
            <p className="font-bold mb-2 mt-4">University</p>
            <p>{user?.academics?.university_name}</p>
            <p className="font-bold mb-2 mt-4">Location</p>
            <p>{user?.academics?.location}</p>
            <p className="font-bold mb-2 mt-4">Enrol in branch</p>
            <p>{user?.academics?.enrol_in_branch_name}</p>
            <p className="font-bold mb-2 mt-4">Enrolment Number</p>
            <p>{user?.academics?.enrolment_number}</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold mb-2 mt-4">Current Semester</p>
            <p>{user?.academics?.current_semester}</p>
            <p className="font-bold mb-2 mt-4">Current Year</p>
            <p>{user?.academics?.current_year}</p>
            <p className="font-bold mb-2 mt-4">Year of passing</p>
            <p>{user?.academics?.year_of_passing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileAboutContainer;
