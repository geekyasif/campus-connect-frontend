import React, { useEffect, useState } from "react";
import DevCard from "../../components/DevCard/DevCard";
import DevCardShimmer from "../../components/Shimmer/DevCardShimmer";
import useDev from "../../hooks/dev/useDev";
import { useDispatch } from "react-redux";
import { closeSideNavbar, setCloseChatBox } from "../../features/authSlice";

function FindDev() {
  const { fetchDevs, devsData } = useDev();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      return fetchDevs();
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(closeSideNavbar(false));
    const unsubscribe = fetchUsers();
    return () => {
      dispatch(setCloseChatBox());
      return unsubscribe;
    };
  }, []);

  return (
    <div className="container mx-auto md:flex md:flex-row md:flex-wrap relative">
      {loading &&
        Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              className="border shadow m-2 p-4 rounded bg-white lg:w-[48%] md:w-full lg:h-[300px] h-[330px]"
              key={i}
            >
              <DevCardShimmer />
            </div>
          ))}

      {devsData?.length === 0 && (
        <div className="w-screen h-screen flex items-center justify-center">
          <p>No data found!</p>
        </div>
      )}
      {devsData?.map(({ data, id }) => (
        <div
          className="border shadow m-2 px-4 pt-2 rounded bg-white lg:w-[48%] md:w-full"
          key={id}
        >
          <DevCard user={data} id={id}/>
        </div>
      ))}
    </div>
  );
}

export default FindDev;
