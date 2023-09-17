import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { interviewData } from "../../services/InterviewData";
import CommentBox from "../../components/Forum/CommentBox";
import UserComment from "../../components/Forum/UserCommnet";
import { dummyComments } from "../../services/userCommentData";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

function QueryDetails() {
  const { user, authToken } = useSelector((state) => state.auth);
  const { slug } = useParams();
  const [query, setQuery] = useState({});

  const fetchQueryDetails = (slug) => {
    interviewData.map((q) => {
      if (q.slug === slug) {
        setQuery(q);
        return;
      }
    });
  };

  useEffect(() => {
    fetchQueryDetails(slug);
  }, []);

  //   console.log(query)

  return (
    <div className=" w-[70%] flex-grow bg-white rounded shadow ">
      <div className="p-4">
        <p to={`/forum/${slug}`} className="font-semibold">
          {query?.title} | <span>{query?.category}</span>{" "}
        </p>
        <div className="flex">
          {query?.tags?.map((tag) => (
            <p className="px-2 text-xs border mr-2 rounded my-2">{tag}</p>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-2">{query?.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faUser} className="rounded-full w-2" />
            <p className="text-xs my-2 mx-2">{query?.username}</p>
            <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
            <p className="text-xs my-2 mx-2">{query?.timedate}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-50 border p-2 px-4 mt-4">
          <p className="text-sm">
            {" "}
            <FontAwesomeIcon icon={faComment} /> Comments
          </p>
        </div>
        {authToken ? (
          <CommentBox />
        ) : (
          <p className="text-center my-4">Login to comment</p>
        )}

        {dummyComments.map((c) => (
          <UserComment
            username={c.username}
            timestamp={c.timestamp}
            comment={c.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default QueryDetails;
