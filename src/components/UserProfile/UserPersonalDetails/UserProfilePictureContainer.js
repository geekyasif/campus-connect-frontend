import React, { useState } from "react";
import Avatar from "react-avatar";
import { ImBin2, ImFilePicture, ImMail4 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "../../../services/firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { updateUserData } from "../../../features/authSlice";
import toast from "react-hot-toast";
import useUser from "../../../hooks/user/useUser";

function UserProfilePictureContainer({ user }) {
  const dispatch = useDispatch();
  const { user_id: current_user } = useUser();

  const [profileImage, setProfileImage] = useState({
    uploadImg: user?.user?.personal_details?.profile_url,
    prevImage: user?.user?.personal_details?.profile_url,
    downloadUrl: "",
  });

  // handling user profile pic / selecting image for profile
  const handleUserProfilePic = async (e) => {
    try {
      const file = e.target.files[0];
      const profileImgPrev = URL.createObjectURL(file);

      const storageRef = ref(
        storage,
        `profiles/${user?.user?.personal_details.email.split("@")[0]}/${
          file.name
        }`
      );

      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      setProfileImage((profileImage) => ({
        ...profileImage,
        uploadImg: file,
        prevImage: profileImgPrev,
        downloadUrl: url,
      }));

      const docRef = doc(
        db,
        "users",
        user?.user?.personal_details?.email.split("@")[0]
      );
      await updateDoc(docRef, {
        "personal_details.profile_url": url,
      });
      dispatch(
        updateUserData(user?.user?.personal_details.email.split("@")[0])
      );
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Something went wrong! Try again");
    }
  };

  return (
    <div className="h-[100px] flex justify-center relative w-[15%] ">
      <div className="my-4 bg-gray-100 rounded-full p-[3px] w-[150px] h-[150px] lg:w-[150px] absolute bottom-0">
        {user?.user?.personal_details?.profile_url !== "" ? (
          <img
            alt="profile"
            src={user?.user?.personal_details?.profile_url}
            className="rounded-full  w-[150px] h-[150px] lg:w-[150px] object-cover"
          />
        ) : (
          <Avatar
            name={user?.user?.personal_details?.fullName}
            size={144}
            round={true}
          />
        )}
        <div className="flex flex-col item-center gap-2 mt-4">
          {current_user === user?.id ? (
            <>
              <button className="border-blue-500 border-[1px] rounded-md text-xs  p-1 flex items-center justify-center gap-2">
                <ImFilePicture /> Change Picture
              </button>
              <button className="bg-red-600 text-white border-[1px] rounded-md p-1 text-xs flex items-center justify-center gap-2">
                <ImBin2 /> Delete Picture
              </button>
            </>
          ) : (
            <button className="bg-blue-600 text-white border-[1px] rounded-md p-1 text-xs flex items-center justify-center gap-2 ">
              <ImMail4 /> Message
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfilePictureContainer;
