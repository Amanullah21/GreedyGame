import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "../Styles/DataPicker.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { end_date, start_date } from "../Redux/InitState/action";

const DataPicker = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.endDate);
  return (
    <div className={styled.DataPicker_container}>
      <DatePicker
        className={styled.DataPicker}
        selected={state.startDate}
        onChange={(date) => dispatch(start_date(date))}
      />
      <DatePicker
        className={styled.DataPicker}
        selected={state.endDate}
        onChange={(date) => dispatch(end_date(date))}
      />
    </div>
  );
};

export default DataPicker;
