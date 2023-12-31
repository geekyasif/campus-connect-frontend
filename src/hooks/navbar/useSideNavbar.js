import React, { useState } from "react";

function useSideNavbar() {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);

  // opening the side navbar
  function handleIsSideNavbarOpen() {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  }

  return { handleIsSideNavbarOpen, isSideNavbarOpen };
}

export default useSideNavbar;
