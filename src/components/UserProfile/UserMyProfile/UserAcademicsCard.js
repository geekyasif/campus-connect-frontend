import React from "react";

function UserAcademicsCard({ academics }) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">University</p>
        <p className="text-xs lg:text-base">{academics?.university_name}</p>
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">Location</p>
        <p className="text-xs lg:text-base">{academics?.location}</p>
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">
          Enrol in branch
        </p>
        <p className="text-xs lg:text-base">
          {academics?.enrol_in_branch_name}
        </p>
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">
          Enrolment Number
        </p>
        <p className="text-xs lg:text-base">{academics?.enrolment_number}</p>
      </div>
      <div className="w-1/2">
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">
          Current Semester
        </p>
        <p className="text-xs lg:text-base">{academics?.current_semester}</p>
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">Current Year</p>
        <p className="text-xs lg:text-base">{academics?.current_year}</p>
        <p className="font-bold mb-2 mt-4 lg:text-base text-sm">
          Year of passing
        </p>
        <p className="text-xs lg:text-base">{academics?.year_of_passing}</p>
      </div>
    </div>
  );
}

export default UserAcademicsCard;
