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
        <div className="w-[50%] bg-white rounded border z-50 fixed top-[10%] left-[25%] overflow-auto">
          <div className="flex justify-between p-4 border-b-2">
            <p className="font-bold text-xl">{modalTitle}</p>
            <button onClick={closeModal}>
              <ImCross />
            </button>
          </div>
          <div className="p-4">{element}</div>
        </div>
      </>
    )
  );
}

export default Modal;
