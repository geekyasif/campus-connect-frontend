import React, { useEffect, useState } from "react";
import DevCard from "../../components/DevCard/DevCard";
import DevCardShimmer from "../../components/Shimmer/DevCardShimmer";
import useDev from "../../hooks/dev/useDev";

function FindDev() {
  const { fetchDevs } = useDev();
  const [devs, setDevs] = useState([]);

  const fetchUsers = async () => {
    const res = await fetchDevs();
    setDevs(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto md:flex md:flex-row md:flex-wrap">
      {devs?.length === 0 &&
        Array(6)
          .fill(0)
          .map(() => <DevCardShimmer />)}
      {devs?.map(({ data }) => (
        <DevCard user={data} />
      ))}
    </div>
  );
}

export default FindDev;
