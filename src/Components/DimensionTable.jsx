import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "../Styles/DimensionTable.module.css";
import {
  app_fun,
  click_fun,
  ctr_fun,
  date_fun,
  impression_fun,
  is_close,
  rate_fun,
  request_fun,
  response_fun,
  revenue_fun,
} from "../Redux/InitState/action";

const DimensionTable = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={styled.dimensionTable_container}>
      <div className={styled.dimensionText}>Dimensions and Metrics</div>
      <div className={styled.dimensionRow}>
        <div
          onClick={() => dispatch(date_fun(!state.date))}
          className={state.date ? styled.clickBox : styled.box}
        >
          <div />
          Date
        </div>
        <div
          onClick={() => dispatch(app_fun(!state.app))}
          className={state.app ? styled.clickBox : styled.box}
        >
          <div />
          App
        </div>
        <div
          onClick={() => dispatch(click_fun(!state.click))}
          className={state.click ? styled.clickBox : styled.box}
        >
          <div />
          CLicks
        </div>
        <div
          onClick={() => dispatch(request_fun(!state.request))}
          className={state.request ? styled.clickBox : styled.box}
        >
          <div />
          Ad Requests
        </div>
        <div
          onClick={() => dispatch(response_fun(!state.response))}
          className={state.response ? styled.clickBox : styled.box}
        >
          <div />
          Ad Response
        </div>
        <div
          onClick={() => dispatch(impression_fun(!state.impression))}
          className={state.impression ? styled.clickBox : styled.box}
        >
          <div />
          Impression
        </div>
        <div
          onClick={() => dispatch(revenue_fun(!state.revenue))}
          className={state.revenue ? styled.clickBox : styled.box}
        >
          <div />
          Revenue
        </div>
        <div
          onClick={() => dispatch(rate_fun(!state.rate))}
          className={state.rate ? styled.clickBox : styled.box}
        >
          <div />
          Fill Rate
        </div>
        <div
          onClick={() => dispatch(ctr_fun(!state.ctr))}
          className={state.ctr ? styled.clickBox : styled.box}
        >
          <div />
          CTR
        </div>
      </div>
      <div className={styled.applyClosebtn_Container}>
        <button onClick={() => dispatch(is_close(false))}>Close me</button>
      </div>
    </div>
  );
};

export default DimensionTable;
