import React from "react";
import { Link } from "react-router-dom";

function LeftNavbar() {
  return (
    <div>
      <Link to="/" className="font-bold cursor-pointer lg:text-2xl text-sm">
        Campus Connect
      </Link>
    </div>
  );
}

export default LeftNavbar;
