import React from "react";
import UserComment from "./UserCommnet";

function CommentContainer({ comments }) {
  return comments?.map((c) => (
    <div>
      <div key={c.commentId}>
        <UserComment user={c.user} comment={c.comment} />
      </div>
      <div className=" ml-10" key={c.commentId}>
        <CommentContainer comments={c.replies} />
      </div>
    </div>
  ));
}

export default CommentContainer;
