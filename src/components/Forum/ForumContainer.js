import React, { useEffect, useState } from "react";
import QueryCard from "./QueryCard";
import AddQueryModal from "./AddQueryModal";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import QueryCardShimmer from "./QueryCardShimmer";
import toast, { Toaster } from "react-hot-toast";

function ForumContainer({ title, type }) {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [queries, setQueries] = useState([]);
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQueryText, setSearchQueryText] = useState("");

  function handleIsModalOpen() {
    try {
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      throw error;
    }
  }

  const handleFetchQueries = async () => {
    try {
      setLoading(true);
      if (type === "default") {
        const _queries = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const _data = doc?.data();
          if (_data.queries) {
            if (_data) {
              _queries.unshift({
                user: _data?.personal_details,
                queries: _data?.queries,
              });
            }
          }
        });

        setQueries(_queries);
        setFilteredQueries(_queries);
      } else if (type === "category") {
        const _queries = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const _data = doc.data();
          const _userQueries = {};

          if (_data.queries) {
            _userQueries["user"] = _data.personal_details;
            const _filteredQueries = [];

            _data.queries.forEach((query) => {
              if (title === query.category) {
                _filteredQueries.unshift(query);
              }
            });
            _userQueries["queries"] = _filteredQueries;
            if (_filteredQueries.length !== 0) {
              _queries.unshift(_userQueries);
            }
          }
        });

        setQueries(_queries);
        setFilteredQueries(_queries);
      } else {
        const _queries = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const _data = doc.data();
          const _userQueries = {};

          if (_data.queries) {
            _userQueries["user"] = _data.personal_details;
            const _filterByTag = _data.queries.filter((q) =>
              q.tags.toLowerCase().includes(title.toLowerCase())
            );
            _userQueries["queries"] = _filterByTag;
            if (_filterByTag.length !== 0) {
              _queries.unshift(_userQueries);
            }
          }
        });

        setQueries(_queries);
        setFilteredQueries(_queries);
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchQueryText = async (args) => {
    try {
      if (args) {
        const _queries = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const _data = doc.data();
          const _userQueries = {};

          if (_data.queries) {
            _userQueries["user"] = _data.personal_details;
            const _filterByTag = _data.queries.filter((q) =>
              q.title.toLowerCase().includes(args.toLowerCase())
            );
            _userQueries["queries"] = _filterByTag;
            if (_filterByTag.length !== 0) {
              _queries.unshift(_userQueries);
            }
          }
        });
        setFilteredQueries(_queries);
      } else {
        setFilteredQueries(queries);
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleFetchQueries();
  }, [title, user]);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleSearchQueryText(searchQueryText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQueryText]);

  return (
    <div className="w-full lg:w-[78%] bg-white rounded">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-gray-100  flex justify-between border items-center p-2 flex-wrap lg:flex-nowrap">
        <p className="px-1 lg:px-2 font-bold lg:mb-0 mb-2 w-full">{title}</p>
        <div className="flex justify-between w-full lg:justify-end">
          <input
            type="text"
            value={searchQueryText}
            onChange={(e) => setSearchQueryText(e.target.value)}
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

      <div className="bg-white rounded ">
        {loading &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <QueryCardShimmer />
              </div>
            ))}

        {queries?.length === 0 && loading === false ? (
          <div className="text-center my-2">
            <p>No Query Found !</p>
          </div>
        ) : (
          queries?.map((data) =>
            data?.queries.map((query) => (
              <div key={query.id}>
                <QueryCard query={query} user={data.user} />
              </div>
            ))
          )
        )}
      </div>
      {isModalOpen && <AddQueryModal handleIsModalOpen={handleIsModalOpen} />}
    </div>
  );
}

export default ForumContainer;
