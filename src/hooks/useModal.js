import React, { useState } from "react";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return { isModalOpen, handleIsModalOpen, setIsModalOpen };
}

export default useModal;
