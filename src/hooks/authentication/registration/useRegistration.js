import React, { useReducer } from "react";

const initialState = {
  personal_details: {
    fullName: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    profile_url: "",
    skills: "",
    expertise_in: "",
    about: "",
  },

  academics: {
    university_name: "",
    location: "",
    enrol_in_branch_name: "",
    year_of_passing: "",
    current_semester: "",
    current_year: "",
    enrolment_number: "",
    university_email: "",
  },
  social_links: {
    github: "",
    linkedin: "",
    leetcode: "",
    portfolio: "",
    hackerrank: "",
    codechef: "",
    geeksforgeek: "",
  },
  certificates: [],
  projects: [],
};

function registrationReducer(state, action) {}

function useRegistration() {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  return <div>useRegistration</div>;
}

export default useRegistration;
