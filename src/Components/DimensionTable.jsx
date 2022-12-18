import React from "react";
import { useState } from "react";
import styled from "../Styles/DimensionTable.module.css";

const DimensionTable = () => {
  const [app, setApp] = useState(true);
  console.log(app);
  return (
    <div className={styled.dimensionTable_container}>
      <div className={styled.dimensionText}>Dimensions and Metrics</div>
      <div className={styled.dimensionRow}>
        <div className={styled.clickBox}>
          <div />
          Date
        </div>
        <div
          onClick={() => setApp(!app)}
          className={app ? styled.box : styled.clickBox}
        >
          <div />
          App
        </div>
        <div className={styled.box}>
          <div></div>
          Clicks
        </div>
        <div className={styled.box}>
          <div></div>
          Ad Requests
        </div>
        <div className={styled.box}>
          <div></div>
          Ad Response
        </div>
        <div className={styled.box}>
          <div></div>
          Impression
        </div>
        <div className={styled.box}>
          <div></div>
          Revenue
        </div>
        <div className={styled.box}>
          <div></div>
          Fill Rate
        </div>
        <div className={styled.box}>
          <div></div>
          CTR
        </div>
      </div>
      <div className={styled.applyClosebtn_Container}>
        <button style={{ color: "blue" }}>Close</button>
        <button className={styled.blue_btn} style={{ border: "none" }}>
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default DimensionTable;
