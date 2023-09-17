import React from 'react'
import { Link } from 'react-router-dom'

function LeftNavbar() {
  return (
    <div>
         <Link to="/" className="font-bold cursor-pointer text-2xl">
            Campus Connect
          </Link>
    </div>
  )
}

export default LeftNavbar