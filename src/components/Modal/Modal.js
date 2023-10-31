import React from "react";
import { ImCross } from "react-icons/im";

function Modal({ modalTitle, isModalOpen, closeModal, element }) {
  return (
    isModalOpen && (
      <>
        <div
          className="h-screen w-screen fixed top-0 left-0  bg-[rgba(0,0,0,0.4)] z-1"
          onClick={closeModal}
        ></div>
        <div className="w-[50%] h-[50%] bg-white rounded border z-50 fixed top-[20%] left-[25%]">
          <div className="flex justify-between p-4 border-b-2">
            {modalTitle}
            <button onClick={closeModal}>
              <ImCross />
            </button>
          </div>
          {element}
        </div>
      </>
    )
  );
}

export default Modal;
