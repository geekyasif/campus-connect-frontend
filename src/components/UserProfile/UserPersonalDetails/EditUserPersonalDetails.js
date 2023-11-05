import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { Toaster, toast } from "react-hot-toast";
import { updateUserData } from "../../../features/authSlice";
import useLoading from "../../../hooks/useLoading";

import TextInput from "../EditProfile/TextInput";
import TextArea from "../EditProfile/TextArea";
import InputRow from "../EditProfile/InputRow";
import SubmitButton from "../EditProfile/SubmitButton";

import useUser from "../../../hooks/user/useUser";

function UserPersonalDetails() {
  const dispatch = useDispatch();
  const { user_id, personal_details } = useUser();
  const { loading, startLoading, stopLoading } = useLoading();

  const [personalData, setPersonalData] = useState({
    fullName: personal_details?.fullName,
    username: personal_details?.username,
    email: personal_details?.email,
    phone: personal_details?.phone,
    city: personal_details?.city,
    expertise_in: personal_details?.expertise_in,
    skills: personal_details?.skills.toString(),
    about: personal_details?.about,
  });

  // handling personalData
  const handlePersonalDataInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handleUserPersonalDetailsFormData = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await updateDoc(
        doc(db, "users", user_id),
        {
          personal_details: {
            fullName: personalData.fullName,
            phone: personalData.phone,
            show_phone: personalData.share_phone,
            show_email: personalData.share_email,
            city: personalData.city,
            expertise_in: personalData.expertise_in,
            skills: personalData.skills,
            about: personalData.about,
            resume: personalData.resume,
          },
        },
        { merge: true }
      );

      stopLoading();
      dispatch(updateUserData(user_id));
      toast.success("Profile upadated successfully!");
    } catch (err) {
      stopLoading();
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

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
          <div className="w-1/2 mb-2">
            <TextInput
              labelText="Email"
              name="email"
              typeText="text"
              placeholderText="Email"
              value={personalData.email}
              onChange={handlePersonalDataInputChange}
            />
            <input type="checkbox" /> Show Email Address
          </div>
          <div className="w-1/2 mb-2">
            <TextInput
              labelText="Phone"
              name="phone"
              typeText="text"
              placeholderText="Phone"
              value={personalData.phone}
              onChange={handlePersonalDataInputChange}
            />
            <input type="checkbox" /> Show Phone Number
          </div>
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

        <TextInput
          labelText="Resume Link"
          name="resume"
          typeText="text"
          placeholderText="Share Your Google Drive Link or something else"
          // value={personalData.resume}
          // onChange={handlePersonalDataInputChange}
        />

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
