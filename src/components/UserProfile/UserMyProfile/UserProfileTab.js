import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function UserProfileTab({handleActiveTab, activeTab}) {
  const {user} = useSelector(state => state.auth)
  return (
    <div className='border-b-2 rounded mb-4 flex flex-row'>

        <Link
            // to={`/profile/${user?.personal_details.username}`}
            onClick={() => handleActiveTab("About")}
            className={
              activeTab === "About"
                ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
                : "cursor-pointer p-2 rounded my-2 text-sm"
            }
          >
            About
          </Link>

          <p
            onClick={() => handleActiveTab("Academics")}
            className={
              activeTab === "Academics"
                ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
                : "cursor-pointer p-2 rounded my-2 text-sm"
            }
          >
            Academics
          </p>

          <p
            onClick={() => handleActiveTab("Projects")}
            className={
              activeTab === "Projects"
                ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
                : "cursor-pointer p-2 rounded my-2 text-sm"
            }
          >
            Projects
          </p>

          <p
            onClick={() => handleActiveTab("Certificates")}
            className={
              activeTab === "Certificates"
                ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
                : "cursor-pointer p-2 rounded my-2 text-sm"
            }
          >
            Certificates
          </p>

    </div>
  )
}

export default UserProfileTab