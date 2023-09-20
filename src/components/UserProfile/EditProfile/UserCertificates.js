import React, { useState } from "react";
import TextInput from "./TextInput";
import InputRow from "../../../components/UserProfile/EditProfile/InputRow";
import { useDispatch, useSelector } from "react-redux";
import Thumbnail from "../../../components/Thumbnail/Thumbnail";
import { Toaster, toast } from "react-hot-toast";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../services/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "firebase/firestore";
import { updateUserData } from "../../../features/authSlice";
import useLoading from "../../../hooks/useLoading";
import SubmitButton from "./SubmitButton";
import UserCertificateCard from "../../../components/UserProfile/UserMyProfile/UserCertificate/UserCertificateCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import uuid4 from "uuid4";

function UserCertificates() {
  const [isUpdateOn, setIsUpdateOn] = useState(false);
  const { loading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [certificateImage, setCertificateImage] = useState({
    uploadImage: "",
    prevImage: "",
    downloadUrl: "",
  });
  const [certificateData, setCertificateData] = useState({
    certificate_title: "",
    certificate_url: "",
    certificate_issue_date: "",
    certificate_expire_date: "",
    credential_verification_link: "",
  });

  // handling thumbnail / certificate image
  const handleCertificateImage = (e) => {
    const certificateFile = e.target.files[0];
    const certificateImagePrev = URL.createObjectURL(certificateFile);
    if (
      certificateFile.type === "image/jpeg" ||
      certificateFile.type === "image/png"
    ) {
      setCertificateImage({
        uploadImage: certificateFile,
        prevImage: certificateImagePrev,
        downloadUrl: "",
      });
    } else {
      toast.error("Invalid file type!");
    }
  };

  // handling inputdata
  const handleCertificateDataInputChange = (e) => {
    const { name, value } = e.target;
    setCertificateData({ ...certificateData, [name]: value });
  };

  // uploading image to firebase storage
  const uploadCertificateToFirebaseStorage = async () => {
    if (certificateImage.prevImage !== "") {
      const storageRef = ref(
        storage,
        `certificates/${user?.personal_details.email.split("@")[0]}/${
          certificateImage.uploadImage.name
        }`
      );
      const snapshot = await uploadBytes(
        storageRef,
        certificateImage.uploadImage
      );
      const url = await getDownloadURL(storageRef);
      setCertificateImage((certificateImage) => ({
        ...certificateImage,
        downloadUrl: url,
      }));

      return url;
    }
  };

  // handling form
  const handleCertficateFormData = async (e) => {
    e.preventDefault();

    try {
      startLoading();
      const url = await uploadCertificateToFirebaseStorage();

      if (url) {
        const userDocRef = doc(
          db,
          "users",
          user?.personal_details.email.split("@")[0]
        );
        await updateDoc(
          userDocRef,
          {
            certificates: arrayUnion({
              certificate_title: certificateData.certificate_title,
              certificate_url: certificateData.certificate_url,
              certificate_image: url,
              certificate_issue_date: certificateData.certificate_issue_date,
              certificate_expire_date: certificateData.certificate_expire_date,
              credential_verification_link:
                certificateData.credential_verification_link,
              certificate_id: uuid4(),
            }),
          },
          { merge: true }
        );

        dispatch(updateUserData(user?.personal_details.email.split("@")[0]));
        toast.success("Academics data upadated successfully!");
        setCertificateData({
          certificate_title: "",
          certificate_url: "",
          certificate_issue_date: "",
          certificate_expire_date: "",
          credential_verification_link: "",
        });
        stopLoading();
      } else {
        stopLoading();
        toast.error("Before uploading");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
      stopLoading();
    }
  };

  const handleUpdateCertficateFormData = async (e) => {
    e.preventDefault();
    toast.success("Project Updated successfully!");
    setCertificateData({
      certificate_title: "",
      certificate_url: "",
      certificate_issue_date: "",
      certificate_expire_date: "",
      credential_verification_link: "",
    });
    setCertificateImage({
      uploadImage: "",
      prevImage: "",
      downloadUrl: "",
    });
    setIsUpdateOn(false);
  };

  // deleting certicifate
  const handleDeleteCertificate = async (id) => {
    try {
      const filteredCertificates = user?.certificates.filter(
        (c) => c.certificate_id != id
      );

      const userDocRef = doc(
        db,
        "users",
        user?.personal_details.email.split("@")[0]
      );

      await updateDoc(userDocRef, {
        certificates: filteredCertificates,
      });

      dispatch(updateUserData(user?.personal_details.email.split("@")[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCertificate = async (certificate) => {
    setIsUpdateOn(true);
    setCertificateData(certificate);
    setCertificateImage({
      uploadImage: certificate.certificate_image,
      prevImage: certificate.certificate_image,
      downloadUrl: "",
    });
  };

  const handleClearForm = () => {
    setCertificateData({
      certificate_title: "",
      certificate_url: "",
      certificate_issue_date: "",
      certificate_expire_date: "",
      credential_verification_link: "",
    });
    setCertificateImage({
      uploadImage: "",
      prevImage: "",
      downloadUrl: "",
    });
    setIsUpdateOn(false);
  };

  return (
    <div>
      <div className="bg-white p-4 shadow">
        <Toaster position="top-right" reverseOrder={false} />
        <form
          onSubmit={
            isUpdateOn
              ? handleUpdateCertficateFormData
              : handleCertficateFormData
          }
        >
          <Thumbnail
            thumbnail={certificateImage.prevImage}
            onChange={handleCertificateImage}
          />
          <p className="text-center text-[12px] mb-2 text-orange-600">
            Accept only jpeg, jpg files.
          </p>
          <InputRow>
            <TextInput
              labelText="Title"
              typeText="text"
              placeholderText="title"
              name="certificate_title"
              value={certificateData.certificate_title}
              onChange={handleCertificateDataInputChange}
            />

            <TextInput
              labelText="Certificate Url"
              typeText="text"
              placeholderText="certificate url"
              name="certificate_url"
              value={certificateData.certificate_url}
              onChange={handleCertificateDataInputChange}
            />
          </InputRow>
          <InputRow>
            <TextInput
              labelText="Issue Date"
              typeText="date"
              placeholderText="issue date"
              name="certificate_issue_date"
              value={certificateData.certificate_issue_date}
              onChange={handleCertificateDataInputChange}
            />

            <TextInput
              labelText="Expire Date"
              typeText="date"
              placeholderText="expire date"
              name="certificate_expire_date"
              value={certificateData.certificate_expire_date}
              onChange={handleCertificateDataInputChange}
            />
          </InputRow>

          <TextInput
            labelText="Credential Verification Link"
            typeText="text"
            placeholderText="credential verification link"
            name="credential_verification_link"
            value={certificateData.credential_verification_link}
            onChange={handleCertificateDataInputChange}
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
      <div className="my-2 bg-white border p-4">
        {user?.certificates?.length === 0 && (
          <p className="text-center">No certificates found!</p>
        )}
        {user?.certificates?.map((certificate) => (
          <div className=" mb-4" key={certificate.certificate_id}>
            <div className="flex justify-end">
              <FontAwesomeIcon
                onClick={() =>
                  handleDeleteCertificate(certificate.certificate_id)
                }
                icon={faTrash}
                width={12}
                className="mx-2 text-red-600 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faPen}
                width={12}
                className="mx-2 text-indigo-500 cursor-pointer"
                onClick={() => handleEditCertificate(certificate)}
              />
            </div>
            <UserCertificateCard certificate={certificate} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCertificates;
