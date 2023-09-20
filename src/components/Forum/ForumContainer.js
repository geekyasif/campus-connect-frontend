import React, { useEffect, useState } from "react";
import QueryCard from "./QueryCard";
import AddQueryModal from "./AddQueryModal";
import { useSelector } from "react-redux";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

function ForumContainer({ title }) {
  const {user} = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false);
  const [queries, setQueries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleIsModalOpen() {
    try {
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchQueries = async () => {
    if (title === "Recent Queries") {
      const _queries = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        const _data = doc?.data();
        if (_data.queries) {
          if (_data) {
            _queries.push({
              user: _data?.personal_details,
              queries: _data?.queries,
            });
          }
        }
      });

      setQueries(_queries);
    } else {
        const _queries = []
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const _data = doc.data()
          const _userQueries = {}

          if(_data.queries){
            _userQueries['user'] = _data.personal_details
            const _filteredQueries = []
            
            _data.queries.forEach((query) => {
              if(title === query.category){
                _filteredQueries.push(query)
              }
            })
            _userQueries['queries'] = _filteredQueries
            _queries.push(_userQueries)
          }
        })

        setQueries(_queries)

    }
  };

  useEffect(() => {
    setLoading(true);
    fetchQueries();
    setLoading(false);
  }, [title, user]);

  return (
    <div className="w-full lg:w-[78%] bg-white rounded">
      <div className="bg-gray-100  flex justify-between border items-center p-2 flex-wrap lg:flex-nowrap">
        <p className="px-1 lg:px-2 font-bold lg:mb-0 mb-2 w-full">
          {title.split("-").join(" ").toUpperCase()}
        </p>
        <div className="flex justify-between w-full lg:justify-end">
          <input
            type="text"
            placeholder="Search topics..."
            className="p-1 rounded placeholder:text-sm focus:outline-none mr-3 px-2 bg-white"
          />
          <button
            className="bg-red-500 rounded px-4 py-1 text-white text-sm"
            onClick={handleIsModalOpen}
          >
            New +
          </button>
        </div>
      </div>
      <div className="bg-white rounded">
        {loading && (
          <p className="text-center text-3xl font-bold bg-red-500 w-full">
            Loading...
          </p>
        )}
        {queries.length === 0 && (
          <p className="text-center p-2">No Query Found !</p>
        )}

        {queries?.map((data) =>
          data?.queries.map((query) => (
            <div key={query.id}>
              <QueryCard query={query} user={data.user} />
            </div>
          ))
        )}
      </div>
      {isModalOpen && <AddQueryModal handleIsModalOpen={handleIsModalOpen} />}
    </div>
  );
}

export default ForumContainer;
