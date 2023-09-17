import React, { useEffect, useState } from "react";
import TextInput from "../../components/UserProfile/TextInput";
import TextArea from "../../components/UserProfile/TextArea";
import InputRow from "../../components/UserProfile/InputRow";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "../../services/firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { updateUserData } from "../../features/authSlice";
import useLoading from "../../hooks/useLoading";
import SubmitButton from "../../components/UserProfile/SubmitButton";

function UserPersonalDetails() {
  const { loading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [profileImage, setProfileImage] = useState({
    uploadImg: user?.personal_details?.profile_url,
    prevImage: user?.personal_details?.profile_url,
    downloadUrl: "",
  });

  const [personalData, setPersonalData] = useState({
    fullName: user?.personal_details?.fullName,
    username: user?.personal_details?.username,
    email: user?.personal_details?.email,
    phone: user?.personal_details?.phone,
    city: user?.personal_details?.city,
    expertise_in: user?.personal_details?.expertise_in,
    skills: user?.personal_details?.skills.toString(),
    about: user?.personal_details?.about,
  });

  // handling personalData
  const handlePersonalDataInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  // handling user profile pic / selecting image for profile
  const handleUserProfilePic = async (e) => {
    try {
      const file = e.target.files[0];
      const profileImgPrev = URL.createObjectURL(file);

      const storageRef = ref(
        storage,
        `profiles/${user?.personal_details.email.split("@")[0]}/${file.name}`
      );

      const snapshot = await uploadBytes(storageRef, file);
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
        user?.personal_details?.email.split("@")[0]
      );
      await updateDoc(docRef, {
        "personal_details.profile_url": url,
      });
      dispatch(updateUserData(user?.personal_details?.email));
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Something went wrong! Try again");
    }
  };

  const handleUserPersonalDetailsFormData = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await setDoc(
        doc(db, "users", user?.personal_details?.email.split("@")[0]),
        {
          personal_details: {
            fullName: personalData.fullName,
            username: personalData.username,
            profile_url: user?.personal_details?.profile_url,
            email: personalData.email,
            phone: personalData.phone,
            city: personalData.city,
            expertise_in: personalData.expertise_in,
            skills: personalData.skills,
            about: personalData.about,
          },
        },
        { merge: true }
      );

      stopLoading();
      dispatch(updateUserData(user?.personal_details?.email.split("@")[0]));
      toast.success("Profile upadated successfully!");
    } catch (err) {
      stopLoading();
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white shadow p-2">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="w-[120px] h-[120px]  bg-gray-100 rounded-full">
          <input
            className="opacity-0 absolute w-[120px] h-[120px] cursor-pointer"
            type="file"
            placeholder="select profile"
            onChange={handleUserProfilePic}
          />

          {profileImage.prevImage ? (
            <img
              src={profileImage.prevImage}
              className="w-[120px] h-[120px] rounded-full"
              alt="as"
            />
          ) : (
            <Avatar
              name={user?.personal_details?.fullName}
              round={true}
              size={120}
            />
          )}
        </div>
      </div>

      <form onSubmit={handleUserPersonalDetailsFormData}>
        <InputRow>
          <TextInput
            labelText="Full Name"
            name="fullName"
            typeText="text"
            placeholderText="Full Name"
            value={personalData.fullName}
            onChange={handlePersonalDataInputChange}
          />

          <TextInput
            labelText="Username"
            name="username"
            typeText="text"
            placeholderText="Username"
            value={personalData.username}
            onChange={handlePersonalDataInputChange}
          />
        </InputRow>

        <InputRow>
          <TextInput
            labelText="Email"
            name="email"
            typeText="text"
            placeholderText="Email"
            value={personalData.email}
            onChange={handlePersonalDataInputChange}
          />
          <TextInput
            labelText="Phone"
            name="phone"
            typeText="text"
            placeholderText="Phone"
            value={personalData.phone}
            onChange={handlePersonalDataInputChange}
          />
        </InputRow>

        <InputRow>
          <TextInput
            labelText="City"
            name="city"
            typeText="text"
            placeholderText="City"
            value={personalData.city}
            onChange={handlePersonalDataInputChange}
          />

          <TextInput
            labelText="Expertise in"
            name="expertise_in"
            typeText="text"
            placeholderText="Expertise in"
            value={personalData.expertise_in}
            onChange={handlePersonalDataInputChange}
          />
        </InputRow>

        <TextInput
          labelText="Skills"
          name="skills"
          typeText="text"
          placeholderText="Reactjs, Nodejs, Html, Css, Php, Python, C"
          value={personalData.skills}
          onChange={handlePersonalDataInputChange}
        />
        <p className="text-xs ml-2 mb-4 text-orange-500">
          Enter skills and seperate by the comma.
        </p>

        <TextArea
          labelText="About"
          name="about"
          typeText="text"
          placeholderText="About"
          value={personalData.about}
          onChange={handlePersonalDataInputChange}
        />

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
}

export default UserPersonalDetails;
