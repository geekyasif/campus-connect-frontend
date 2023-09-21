import React, { useEffect, useState } from "react";
import DevCard from "../../components/DevCard/DevCard";
import DevCardShimmer from "../../components/Shimmer/DevCardShimmer";
import useDev from "../../hooks/dev/useDev";
import useSideNavbar from "../../hooks/navbar/useSideNavbar";
import { useDispatch } from "react-redux";
import { handleIsSideNavbarOpen } from "../../features/authSlice";

function FindDev() {
  const { fetchDevs } = useDev();
  const dispatch = useDispatch();
  const [devs, setDevs] = useState([]);

  const fetchUsers = async () => {
    const res = await fetchDevs();
    setDevs(res.reverse());
  };

  useEffect(() => {
    dispatch(handleIsSideNavbarOpen());
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto md:flex md:flex-row md:flex-wrap">
      {devs?.length === 0 &&
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
      {devs?.map(({ data }) => (
        <div
          className="border shadow m-2 px-4 pt-2 rounded bg-white lg:w-[48%] md:w-full"
          key={data?.personal_details.username}
        >
          <DevCard user={data} />
        </div>
      ))}
    </div>
  );
}

export default FindDev;
