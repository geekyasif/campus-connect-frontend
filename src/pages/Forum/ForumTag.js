import React from "react";
import { useParams } from "react-router-dom";
import ForumContainer from "../../components/Forum/ForumContainer";

function ForumTag() {
  const { tag } = useParams();

  return <ForumContainer title={tag} type="tag" />;
}

export default ForumTag;
