import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DimensionTable from "../Components/DimensionTable";
import Table from "../Components/Table";
import { is_close, is_open } from "../Redux/InitState/action";
import styled from "../Styles/Dashboard.module.css";
const Dashboard = () => {
  const user = useSelector((state) => state.name);
  const boolen = useSelector((state) => state.Boolean);
  const dispatch = useDispatch();
  // const [close, setClose] = useState(false);
  console.log(boolen);

  return (
    <div>
      <h3 style={{paddingLeft:"25px"}}>Analytics</h3>
      <div className={styled.dashboard_container}>
        <div>
          {" "}
          <button className={styled.date}>
            july 08 - jul 14, 2021
          </button>{" "}
        </div>
        <div onClick={() => dispatch(is_open(true))}>
          <button className={styled.setting_btn}>
            <img
              className={styled.logo}
              src="https://th.bing.com/th/id/R.becef3802bf3e0c9e291cfbf2865a556?rik=cPiAtwVLzfTCWw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_101423.png&ehk=5ZaMQ4PmAXyjAHc%2bNEJVJAWDHOoT3mKB0TPOAYEMCwk%3d&risl=&pid=ImgRaw&r=0"
              alt="set"
            />
            Setting
          </button>
        </div>
      </div>
      {boolen ? <DimensionTable /> : <></>}
      <Table/>
    </div>
  );
};

export default Dashboard;
