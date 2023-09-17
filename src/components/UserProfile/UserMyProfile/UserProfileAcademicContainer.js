import React from 'react'
import { useSelector } from 'react-redux'

function UserProfileAcademicContainer() {
    const {user} = useSelector(state => state.auth)

  return (
    <div>
        <p className="text-2xl font-bold mb-2">Academics</p>
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
  )
}

export default UserProfileAcademicContainer