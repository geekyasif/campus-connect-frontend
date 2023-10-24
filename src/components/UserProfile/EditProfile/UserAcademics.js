import React, { useState } from "react";
import InputRow from "./InputRow";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { Toaster, toast } from "react-hot-toast";
import { updateUserData } from "../../../features/authSlice";
import useLoading from "../../../hooks/useLoading";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

function UserAcademics() {
  const dispatch = useDispatch();
  const { loading, startLoading, stopLoading } = useLoading();
  const { user } = useSelector((state) => state.auth);
  const [academicsData, setAcademicsData] = useState({
    university_name: user?.academics?.university_name,
    location: user?.academics?.location,
    university_email: user?.academics?.university_email,
    enrol_in_branch_name: user?.academics?.enrol_in_branch_name,
    enrolment_number: user?.academics?.enrolment_number,
    current_semester: user?.academics?.current_semester,
    current_year: user?.academics?.current_year,
    year_of_passing: user?.academics?.year_of_passing,
  });

  const handleAcademicsDataInputChange = (e) => {
    const { name, value } = e.target;
    setAcademicsData({ ...academicsData, [name]: value });
  };

  const handleUserAcademicsFormData = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await setDoc(
        doc(db, "users", user?.personal_details.email.split("@")[0]),
        {
          academics: {
            university_name: academicsData.university_name,
            location: academicsData.location,
            university_email: academicsData.university_email,
            enrol_in_branch_name: academicsData.enrol_in_branch_name,
            enrolment_number: academicsData.enrolment_number,
            current_semester: academicsData.current_semester,
            current_year: academicsData.current_year,
            year_of_passing: academicsData.year_of_passing,
          },
        },
        { merge: true }
      );

      stopLoading();
      dispatch(updateUserData(user?.personal_details.email.split("@")[0]));
      toast.success("Academics data upadated successfully!");
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white shadow p-2 h-full">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleUserAcademicsFormData}>
        <InputRow>
          <TextInput
            labelText="University Name"
            name="university_name"
            typeText="text"
            placeholderText="University Name"
            value={academicsData.university_name}
            onChange={handleAcademicsDataInputChange}
          />

          <TextInput
            labelText="University Location"
            name="location"
            typeText="text"
            placeholderText="University location"
            value={academicsData.location}
            onChange={handleAcademicsDataInputChange}
          />
        </InputRow>

        <InputRow>
          <TextInput
            labelText="Branch Name"
            name="enrol_in_branch_name"
            typeText="text"
            placeholderText="Branch name"
            value={academicsData.enrol_in_branch_name}
            onChange={handleAcademicsDataInputChange}
          />

          <TextInput
            labelText="Current Semester"
            name="current_semester"
            typeText="number"
            placeholderText="Current semester"
            value={academicsData.current_semester}
            onChange={handleAcademicsDataInputChange}
          />
        </InputRow>

        <InputRow>
          <TextInput
            labelText="Admission/Enrollment Number"
            name="enrolment_number"
            typeText="text"
            placeholderText="Admission/Enrollment number"
            value={academicsData.enrolment_number}
            onChange={handleAcademicsDataInputChange}
          />
          <TextInput
            labelText="University Email"
            name="university_email"
            typeText="text"
            placeholderText="University Email"
            value={academicsData.university_email}
            onChange={handleAcademicsDataInputChange}
          />
        </InputRow>

        <InputRow>
          <TextInput
            labelText="Current Year"
            name="current_year"
            typeText="number"
            placeholderText="Current year"
            value={academicsData.current_year}
            onChange={handleAcademicsDataInputChange}
          />

          <TextInput
            labelText="Year of Passing"
            name="year_of_passing"
            typeText="number"
            placeholderText="YYYY"
            value={academicsData.year_of_passing}
            onChange={handleAcademicsDataInputChange}
          />
        </InputRow>

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
}

export default UserAcademics;
