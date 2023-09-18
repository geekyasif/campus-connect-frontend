import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/Forum/CommentBox";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { queryData } from "../../services/queryData";
import CommentContainer from "../../components/Forum/CommentContainer";

function QueryDetails() {
  const { user, authToken } = useSelector((state) => state.auth);
  const { slug } = useParams();
  const [query, setQuery] = useState({});

  const fetchQueryDetails = (slug) => {
    queryData?.map((q) => {
      if (q.queryId === slug) {
        setQuery(q);
        return;
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchQueryDetails(slug);
  }, []);

  return (
    <div className="w-full lg:w-[70%] md:w-[70%] flex-grow bg-white rounded shadow h-full">
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
            <p className="text-xs my-2 mx-2">{query?.user?.userName}</p>
            <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
            <p className="text-xs my-2 mx-2">{query?.date}</p>
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

        <CommentContainer comments={query?.comments} />
      </div>
    </div>
  );
}

export default QueryDetails;
