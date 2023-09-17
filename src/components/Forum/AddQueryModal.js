import QueryBox from "./QueryBox";

export default function AddQueryModal({handleIsModalOpen}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div className=" bg-white rounded-xl lg:w-[554px] md:w-[554px] w-full shadow-md  z-50 mx-2 lg:mx-0 md:mx-0">
        <QueryBox handleIsModalOpen={handleIsModalOpen}/>
      </div>
    </div>
  );
}
