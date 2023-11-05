import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { ImBin2, ImFilePicture, ImMail4 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "../../../services/firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { updateUserData } from "../../../features/authSlice";
import toast from "react-hot-toast";
import useUser from "../../../hooks/user/useUser";

function UserProfilePictureContainer({ user }) {
  const dispatch = useDispatch();
  const { user: authUser } = useSelector((state) => state.auth);
  const { user_id: current_user, personal_details } = useUser();
  const profileInputRef = useRef();
  console.log(authUser?.user?.personal_details?.profile_url);

  const [profileImage, setProfileImage] = useState({
    uploadImg: user?.user?.personal_details?.profile_url,
    prevImage: user?.user?.personal_details?.profile_url,
    downloadUrl: "",
  });

  const handleDeleteProfilePicture = async () => {
    try {
      console.log("deleting");
      const storageRef = ref(
        storage,
        `profiles/${current_user}/${current_user}`
      );

      await deleteObject(storageRef);

      const docRef = doc(db, "users", current_user);
      await updateDoc(docRef, {
        "personal_details.profile_url": "",
      });
      dispatch(updateUserData(current_user));
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileInput = () => {
    profileInputRef.current.click();
  };

  // handling user profile pic / selecting image for profile
  const handleProfileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const profileImgPrev = URL.createObjectURL(file);
      const storageRef = ref(
        storage,
        `profiles/${current_user}/${current_user}`
      );

      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      setProfileImage((profileImage) => ({
        ...profileImage,
        uploadImg: file,
        prevImage: profileImgPrev,
        downloadUrl: url,
      }));

      const docRef = doc(db, "users", current_user);
      await updateDoc(docRef, {
        "personal_details.profile_url": url,
      });
      dispatch(updateUserData(current_user));
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Something went wrong! Try again");
    }
  };

  return (
    <div className="flex flex-row lg:h-[100px] w-full h-[50px] lg:flex lg:justify-center relative lg:w-[15%] ">
      <div className="flex flex-row lg:flex-col my-4 bg-gray-100 rounded-full p-[3px] w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] absolute left-4 lg:left-10 bottom-0">
        {user?.user?.personal_details?.profile_url !== "" ? (
          <img
            alt="profile"
            src={
              current_user === user?.id
                ? authUser?.user?.personal_details?.profile_url
                : user?.user?.personal_details?.profile_url
            }
            className="rounded-full  w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] object-cover"
          />
        ) : (
          <>
            <Avatar
              name={user?.user?.personal_details?.fullName}
              size={75}
              round={true}
              className="block lg:hidden"
            />
            <Avatar
              name={user?.user?.personal_details?.fullName}
              size={144}
              round={true}
              className="hidden lg:block"
            />
          </>
        )}
        <div className="mt-8 lg:mt-4 ml-4 lg:ml-0 w-full ">
          {current_user === user?.id ? (
            <div className="flex flex-row lg:flex-col gap-2 w-full">
              <button
                className="border-blue-500 border-[1px] rounded-md text-[10px] lg:text-xs py-1 lg:p-1 flex items-center justify-center gap-2 bg-white"
                onClick={handleProfileInput}
              >
                <input
                  type="file"
                  className="hidden"
                  ref={profileInputRef}
                  onChange={handleProfileUpload}
                />
                <ImFilePicture /> Change Picture
              </button>
              <button
                className="bg-red-600 text-white border-[1px] rounded-md p-1 text-[10px] lg:text-xs flex items-center justify-center gap-2"
                onClick={handleDeleteProfilePicture}
              >
                <ImBin2 /> Delete Picture
              </button>
            </div>
          ) : (
            <button className="bg-blue-600 text-white border-[1px] rounded-md p-1 text-xs flex items-center justify-center gap-2 w-full">
              <ImMail4 /> Message
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfilePictureContainer;
