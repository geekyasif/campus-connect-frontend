import React, { useState } from "react";
import InputRow from "./InputRow";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { Toaster, toast } from "react-hot-toast";
import { updateUserData } from "../../../features/authSlice";
import useLoading from "../../../hooks/useLoading";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

const Qualification = [
  {
    id: 1,
    title: "PhD",
    slug: "phd",
  },
  {
    id: 2,
    title: "Post Graduation",
    slug: "post-graduation",
  },
  {
    id: 3,
    title: "Graduation",
    slug: "graduation",
  },
  {
    id: 4,
    title: "Intermediate(12th)",
    slug: "intermediate",
  },
  {
    id: 5,
    title: "High School(10th)",
    slug: "high-school",
  },
];

const Degree = [
  {
    id: 1,
    title: "Mtech/ME",
    slug: "mtech-me",
  },
  {
    id: 2,
    title: "Btech/BE",
    slug: "btech-be",
  },
  {
    id: 3,
    title: "MBA",
    slug: "mba",
  },
  {
    id: 4,
    title: "MCA",
    slug: "mca",
  },
  {
    id: 5,
    title: "BBA",
    slug: "bba",
  },
  {
    id: 6,
    title: "BCA",
    slug: "bca",
  },
  {
    id: 7,
    title: "B.com",
    slug: "bcom",
  },
  {
    id: 8,
    title: "Other",
    slug: "other",
  },
];

function UserAcademics() {
  const dispatch = useDispatch();
  const { loading, startLoading, stopLoading } = useLoading();
  const { user } = useSelector((state) => state.auth);

  const [academicsData, setAcademicsData] = useState({
    qualification: "",
    degree: "",
    university_name: "",
    location: "",
    start_year: "",
    end_year: "",
    percentage: "",
    cgpa: "",
  });

  const handleAcademicsDataInputChange = (e) => {
    const { name, value } = e.target;
    setAcademicsData({ ...academicsData, [name]: value });
  };

  const handleUserAcademicsFormData = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await addDoc(
        collection(
          db,
          "users",
          `${user?.user?.personal_details.email.split("@")[0]}`,
          "academics"
        ),
        {
          qualification: academicsData.qualification,
          degree: academicsData.degree,
          university_name: academicsData.university_name,
          location: academicsData.location,
          start_year: academicsData.start_year,
          end_year: academicsData.end_year,
          percentage: academicsData.percentage,
          cgpa: academicsData.cgpa,
        }
      );

      stopLoading();
      dispatch(
        updateUserData(user?.user?.personal_details.email.split("@")[0])
      );
      toast.success("Academics data added successfully!");
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleUserAcademicsFormData}>
        <InputRow>
          <div className="w-1/2">
            <label>Qualification*</label>
            <br />
            <select
              className="w-full"
              name="qualification"
              value={academicsData?.qualification}
              onChange={handleAcademicsDataInputChange}
            >
              <option value="">-- Select --</option>
              {Qualification?.map((item) => (
                <option value={item?.title} key={item?.id}>
                  {item?.title}
                </option>
              ))}
            </select>
          </div>

          <div className="w-1/2">
            <label>Degree*</label>
            <br />
            <select
              className="w-full"
              name="degree"
              value={academicsData?.qualification}
              onChange={handleAcademicsDataInputChange}
            >
              <option value="">-- Select --</option>
              {Degree?.map((item) => (
                <option value={item?.title} key={item?.id}>
                  {item?.title}
                </option>
              ))}
            </select>
          </div>
        </InputRow>
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
            labelText="Start Year"
            name="start_year"
            typeText="month"
            placeholderText="Start Year"
            value={academicsData.start_year}
            onChange={handleAcademicsDataInputChange}
          />

          <TextInput
            labelText="End Year"
            name="end_year"
            typeText="month"
            placeholderText="End Year"
            value={academicsData.end_year}
            onChange={handleAcademicsDataInputChange}
          />
        </InputRow>

        <InputRow>
          <TextInput
            labelText="Percentage"
            name="percentage"
            typeText="number"
            placeholderText="Percentage"
            value={academicsData.percentage}
            onChange={handleAcademicsDataInputChange}
          />

          <TextInput
            labelText="CGPA"
            name="cgpa"
            typeText="text"
            placeholderText="CGPA"
            value={academicsData.cgpa}
            onChange={handleAcademicsDataInputChange}
          />
        </InputRow>

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
}

export default UserAcademics;
