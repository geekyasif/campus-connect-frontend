import React from "react";
import { useParams } from "react-router-dom";
import ForumContainer from "../../components/Forum/ForumContainer";

function ForumCategory() {
  const { category } = useParams();

  return <ForumContainer title={category} type="category" />;
}

export default ForumCategory;
