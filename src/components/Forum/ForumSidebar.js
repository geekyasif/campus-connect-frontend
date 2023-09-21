import React, { useEffect, useState } from "react";
import ForumSidebarTag from "./ForumSidebarTag";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import toast, { Toaster } from "react-hot-toast";

function ForumSidebar() {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState(new Set());

  const fetchTags = async () => {
    try {
      const _tags = new Set(tags);

      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (doc.data().queries) {
          doc.data()?.queries?.forEach(({ tags }) => {
            tags?.split(",")?.forEach((t) => {
              _tags.add(t.trim());
            });
          });
        }
        setTags(_tags);
        setLoading(false);
      });
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="bg-white border rounded p-2 ">
      <Toaster position="top-right" reverseOrder={false} />
      <p className="font-semibold border-b-2  mb-4 pb-2 ">Tags</p>
      {/* <div className="mb-4">
        <input
          type="text"
          className="border bg-gray-50 placeholder:text-sm w-full px-4 py-1 rounded focus:outline-none"
          placeholder="Search for tags..."
        />
      </div> */}
      <div className="flex flex-wrap gap-2">
        {loading &&
          Array(15)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-[20%] h-6 bg-gray-200 rounded  animate-pulse m-1"
              ></div>
            ))}

        {!loading &&
          [...tags]?.map((tag) => (
            <div key={tag}>
              <ForumSidebarTag text={tag} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ForumSidebar;
