import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../features/authSlice";

import { Toaster, toast } from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";

import TextInput from "./TextInput";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import useLoading from "../../../hooks/useLoading";
import useUser from "../../../hooks/user/useUser";

function UserSocialLinks() {
  const { loading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();
  const { user, user_id } = useUser();
  const [socialLinksData, setSocialLinksData] = useState({
    github:
      user?.social_links?.github !== undefined
        ? user?.social_links?.github
        : "",
    linkedin:
      user?.social_links?.linkedin !== undefined
        ? user?.social_links?.linkedin
        : "",
    leetcode:
      user?.social_links?.leetcode !== undefined
        ? user?.social_links?.leetcode
        : "",
    hackerrank:
      user?.social_links?.hackerrank !== undefined
        ? user?.social_links?.hackerrank
        : "",
    codechef:
      user?.social_links?.codechef !== undefined
        ? user?.social_links?.codechef
        : "",
    geeksforgeek:
      user?.social_links?.geeksforgeek !== undefined
        ? user?.social_links?.geeksforgeek
        : "",
    portfolio:
      user?.social_links?.portfolio !== undefined
        ? user?.social_links?.portfolio
        : "",
  });

  const handleUserSocialLinksInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinksData({ ...socialLinksData, [name]: value });
  };

  const handleUserSocialLinksFormData = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await setDoc(
        doc(db, "users", user_id),
        {
          social_links: {
            github: socialLinksData.github,
            linkedin: socialLinksData.linkedin,
            leetcode: socialLinksData.leetcode,
            hackerrank: socialLinksData.hackerrank,
            codechef: socialLinksData.codechef,
            geeksforgeek: socialLinksData.geeksforgeek,
            portfolio: socialLinksData.portfolio,
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
    <div className="bg-white shadow p-2">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleUserSocialLinksFormData}>
        <InputRow>
          <TextInput
            labelText="Github"
            typeText="text"
            placeholderText="Gitub"
            name="github"
            value={socialLinksData.github}
            onChange={handleUserSocialLinksInputChange}
          />

          <TextInput
            labelText="Linkedin"
            typeText="text"
            placeholderText="Linkedin"
            name="linkedin"
            value={socialLinksData.linkedin}
            onChange={handleUserSocialLinksInputChange}
          />
        </InputRow>
        <InputRow>
          <TextInput
            labelText="Leetcode"
            typeText="text"
            placeholderText="Leetcode"
            name="leetcode"
            value={socialLinksData.leetcode}
            onChange={handleUserSocialLinksInputChange}
          />

          <TextInput
            labelText="Hackerrank"
            typeText="text"
            placeholderText="Hackerank"
            name="hackerrank"
            value={socialLinksData.hackerrank}
            onChange={handleUserSocialLinksInputChange}
          />
        </InputRow>
        <InputRow>
          <TextInput
            labelText="Codechef"
            typeText="text"
            placeholderText="Codechef"
            name="codechef"
            value={socialLinksData.codechef}
            onChange={handleUserSocialLinksInputChange}
          />

          <TextInput
            labelText="GeeksforGeeks"
            typeText="text"
            placeholderText="Geeksforgeeks"
            name="geeksforgeek"
            value={socialLinksData.geeksforgeek}
            onChange={handleUserSocialLinksInputChange}
          />
        </InputRow>
        <InputRow>
          <TextInput
            labelText="Portfolio"
            typeText="text"
            placeholderText="Portfolio"
            name="portfolio"
            value={socialLinksData.portfolio}
            onChange={handleUserSocialLinksInputChange}
          />
        </InputRow>

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
}

export default UserSocialLinks;
