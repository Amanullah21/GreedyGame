import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import DimensionTable from "../Components/DimensionTable";

const Dashboard = () => {
  const user = useSelector((state) => state.name);
  const [close, setClose] = useState(false);
  console.log(user);
  return (
    <div>
      <h3>Analytics</h3>
      <div>
        <div>july 08 - jul 14, 2021 </div>
        <div onClick={() => setClose(true)}>
          {" "}
          <button>Setting</button>
        </div>
      </div>
      {close ? <DimensionTable /> : <></>}
      Dashboard
      <h1>{user}</h1>
    </div>
  );
};

export default Dashboard;
