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

        <div className="w-full lg:w-[50%] bg-white rounded border z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16">
          <div className="flex justify-between p-4 border-b-2">
            <p className="font-bold text-xl">{modalTitle}</p>
            <button onClick={closeModal}>
              <ImCross />
            </button>
          </div>
          <div className="p-4 overflow-y-auto max-h-[60vh]">{element}</div>
        </div>
      </>
    )
  );
}

export default Modal;
