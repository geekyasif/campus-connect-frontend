import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Thumbnail from "../../../components/Thumbnail/Thumbnail";
import { Toaster, toast } from "react-hot-toast";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../services/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { v4 as uuid4 } from "uuid";
import { updateUserData } from "../../../features/authSlice";
import useLoading from "../../../hooks/useLoading";
import UserProjectCard from "../../../components/UserProfile/UserMyProfile/UserProject/UserProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";

function UserProjects() {
  const [isUpdateOn, setIsUpdateOn] = useState(false);
  const { loading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [projectImage, setProjectImage] = useState({
    uploadImage: "",
    prevImage: "",
    downloadUrl: "",
  });
  const [projectData, setProjectData] = useState({
    project_title: "",
    project_image: "",
    project_source_code_link: "",
    project_deployment_link: "",
    project_demo_link: "",
    project_tech_stack: "",
    project_date: "",
    project_description: "",
  });

  const handleProjectImage = (e) => {
    const projectFile = e.target.files[0];
    const projectImagePrev = URL.createObjectURL(projectFile);

    if (projectFile.type === "image/jpeg" || projectFile.type === "image/png") {
      setProjectImage({
        uploadImage: projectFile,
        prevImage: projectImagePrev,
        downloadUrl: "",
      });
    } else {
      toast.error("Invalid file type!");
    }
  };

  const handleUserProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleProjectFromData = async (e) => {
    e.preventDefault();

    try {
      startLoading();
      const storageRef = ref(
        storage,
        `projects/${user?.user?.personal_details.email.split("@")[0]}/${
          projectImage.uploadImage.name
        }`
      );

      await uploadBytes(storageRef, projectImage.uploadImage);
      const url = await getDownloadURL(storageRef);
      if (url) {
        const userDocRef = doc(
          db,
          "users",
          user?.user?.personal_details.email.split("@")[0]
        );
        await updateDoc(
          userDocRef,
          {
            projects: arrayUnion({
              project_title: projectData.project_title,
              project_image: url,
              project_source_code_link: projectData.project_source_code_link,
              project_deployment_link: projectData.project_deployment_link,
              project_demo_link: projectData.project_demo_link,
              project_tech_stack: projectData.project_tech_stack,
              project_date: projectData.project_date,
              project_description: projectData.project_description,
              project_id: uuid4(),
            }),
          },
          { merge: true }
        );

        dispatch(updateUserData(user?.user?.personal_details.email.split("@")[0]));
        toast.success("Project added successfully!");
        setProjectData({
          project_title: "",
          project_image: "",
          project_source_code_link: "",
          project_deployment_link: "",
          project_demo_link: "",
          project_tech_stack: "",
          project_date: "",
          project_description: "",
        });
      }
      stopLoading();
    } catch (error) {
      toast.error("Something went wrong!");
      stopLoading();
    }
  };

  const handleUpdateProjectFormData = async (e) => {
    e.preventDefault();

    try {
      const oldProjects = user?.user?.projects.filter(
        (p) => p.project_id !== projectData.project_id
      );
      const updatedProjects = [...oldProjects, projectData];

      const userDocRef = doc(
        db,
        "users",
        user?.user?.personal_details.email.split("@")[0]
      );

      await updateDoc(userDocRef, {
        projects: updatedProjects,
      });

      dispatch(updateUserData(user?.user?.personal_details.email.split("@")[0]));

      toast.success("Project Updated successfully!");
      setProjectData({
        project_title: "",
        project_image: "",
        project_source_code_link: "",
        project_deployment_link: "",
        project_demo_link: "",
        project_tech_stack: "",
        project_date: "",
        project_description: "",
      });
      setProjectImage({
        uploadImage: "",
        prevImage: "",
        downloadUrl: "",
      });
      setIsUpdateOn(false);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      const filteredProject = user?.user?.projects.filter((p) => p.project_id !== id);

      const userDocRef = doc(
        db,
        "users",
        user?.user?.personal_details.email.split("@")[0]
      );

      await updateDoc(userDocRef, {
        projects: filteredProject,
      });

      dispatch(updateUserData(user?.user?.personal_details.email.split("@")[0]));
      toast.success("Project Deleted Successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleEditProject = async (project) => {
    setIsUpdateOn(true);
    setProjectData(project);
    setProjectImage({
      uploadImage: project.project_image,
      prevImage: project.project_image,
      downloadUrl: "",
    });
  };

  const handleClearForm = () => {
    setProjectData({
      project_title: "",
      project_image: "",
      project_source_code_link: "",
      project_deployment_link: "",
      project_demo_link: "",
      project_tech_stack: "",
      project_date: "",
      project_description: "",
    });
    setProjectImage({
      uploadImage: "",
      prevImage: "",
      downloadUrl: "",
    });
    setIsUpdateOn(false);
  };

  return (
    <div>
      <div className="bg-white p-2 shadow">
        <Toaster position="top-right" reverseOrder={false} />
        <form
          onSubmit={
            isUpdateOn ? handleUpdateProjectFormData : handleProjectFromData
          }
        >
          <Thumbnail
            thumbnail={projectImage.prevImage}
            onChange={handleProjectImage}
          />
          <InputRow>
            <TextInput
              labelText="Project Title"
              typeText="text"
              placeholderText="Project title"
              name="project_title"
              value={projectData.project_title}
              onChange={handleUserProjectInputChange}
            />

            <TextInput
              labelText="Source Code Link"
              typeText="text"
              placeholderText="source code link"
              name="project_source_code_link"
              value={projectData.project_source_code_link}
              onChange={handleUserProjectInputChange}
            />
          </InputRow>
          <InputRow>
            <TextInput
              labelText="Deployment Link"
              typeText="text"
              placeholderText="Deployment link"
              name="project_deployment_link"
              value={projectData.project_deployment_link}
              onChange={handleUserProjectInputChange}
            />

            <TextInput
              labelText="Demo Link"
              typeText="text"
              placeholderText="demo link"
              name="project_demo_link"
              value={projectData.project_demo_link}
              onChange={handleUserProjectInputChange}
            />
          </InputRow>

          <InputRow>
            <TextInput
              labelText="Tech Stack"
              typeText="text"
              placeholderText="tech stack"
              name="project_tech_stack"
              value={projectData.project_tech_stack}
              onChange={handleUserProjectInputChange}
            />

            <TextInput
              labelText="Project Start Date"
              typeText="date"
              placeholderText="Project Date"
              name="project_date"
              value={projectData.project_date}
              onChange={handleUserProjectInputChange}
            />
          </InputRow>

          <TextArea
            labelText="Description"
            typeText="text"
            placeholderText="description"
            name="project_description"
            value={projectData.project_description}
            onChange={handleUserProjectInputChange}
          />

          {isUpdateOn ? (
            <div className="flex justify-center">
              <button
                className={` ${
                  loading ? "bg-indigo-400" : "bg-indigo-500"
                } border  px-6 py-2 rounded text-white hover:bg-indigo-600 transition-all`}
                type="submit"
              >
                Update
              </button>
              <button
                onClick={handleClearForm}
                className={` ${
                  loading ? "bg-indigo-400" : "bg-indigo-500"
                } border  px-6 py-2 rounded text-white hover:bg-indigo-600 transition-all`}
              >
                Cancel
              </button>
            </div>
          ) : (
            <SubmitButton loading={loading} />
          )}
        </form>
      </div>
    </div>
  );
}

export default UserProjects;
