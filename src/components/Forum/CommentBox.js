import { arrayUnion, doc, getDoc, updateDoc, where } from "firebase/firestore";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../../services/firebase";
import uuid4 from "uuid4";

function CommentBox({ query }) {
  const [comment, setComment] = useState("");

  const handlePostComment = async () => {
    try {
      const userDoc = doc(db, "users", query?.user?.username);
      const docSnap = await getDoc(userDoc);
      docSnap.data().queries.forEach(async (q) => {
        if (q.id === query?.query?.id) {
          const queryRef = doc(userDoc, "queries", q.id);
          const d = await getDoc(queryRef);
          console.log(d.id)
          // await updateDoc(queryRef, {
          //   comments: arrayUnion({
          //     comment: comment,
          //   },{ merge: true }),
          // });
        }
      });

      console.log(comment);
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white rounded  my-4 p-4">
      <Toaster position="top-right" reverseOrder={false} />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows="4"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded text-xs"
        type="button"
        onClick={handlePostComment}
      >
        Post
      </button>
    </div>
  );
}

export default CommentBox;
