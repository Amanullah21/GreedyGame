import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DataPicker from "../Components/DataPicker";
import DimensionTable from "../Components/DimensionTable";
import MyComponent from "../Components/MyComponent";
import Table from "../Components/Table";
import { is_open } from "../Redux/InitState/action";
import styled from "../Styles/Dashboard.module.css";
import { setting } from "../Components/AppLogo";

const Dashboard = () => {
  const boolen = useSelector((state) => state.Boolean);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styled.nav}>
        <h3 style={{ paddingLeft: "25px" }}>Analytic</h3>
        <div className={styled.dashboard_container}>
          <div>
            <DataPicker />
          </div>
          <div onClick={() => dispatch(is_open(true))}>
            <button className={styled.setting_btn}>
              <img className={styled.logo} src={setting} alt="set" />
              Setting
            </button>
          </div>
        </div>
      </div>
      {boolen ? <DimensionTable /> : <></>}
      <Table />
      <MyComponent />
    </div>
  );
};

export default Dashboard;
