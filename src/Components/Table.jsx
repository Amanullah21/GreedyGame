import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "../Styles/Table.module.css";
import appLogo from "./AppLogo";
// import filter from ""
const Table = () => {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state);
  const filterLogo =
    "https://img.favpng.com/20/1/11/filter-png-favpng-jy84QKYq24gnCEBR2MX55zVAt.jpg";

  let url =
    "http://go-dev.greedygame.com/v3/dummy/report?startDate=2022-12-10&endDate=2022-12-15";
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.data)) //store data
      .catch((error) => console.log(error));
  };
  // console.log();
  useEffect(() => {
    getData();
  }, []);
  function ConvertJsonDate(jsonDate) {
    let ans = "";
    for (let i = 0; i < 10; i++) {
      ans += jsonDate[i];
    }
    return ans.split("-").reverse().join("-");
  }
  const convertToInternationalCurrencySystem = (labelValue) => {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  };

  return (
    <div className={styled.table_container}>
      <div className={styled.table_head}>
        {state.date ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Date</p>
            <div>{data.length}</div>
          </div>
        ) : (
          <></>
        )}
        {state.app ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>App</p>
            <div>{data.length * 8}</div>
          </div>
        ) : (
          <></>
        )}
        {state.click ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Click</p>
            <div>{`54545 B`}</div>
          </div>
        ) : (
          <></>
        )}
        {state.request ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Requests</p>
            <div>{`49357M`}</div>
          </div>
        ) : (
          <></>
        )}
        {state.response ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Response</p>
            <div>{`48565 M`}</div>
          </div>
        ) : (
          <></>
        )}
        {state.impression ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Impresion</p>
            <div>{data.length}</div>
          </div>
        ) : (
          <></>
        )}
        {state.revenue ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Revenue</p>
            <div>{`$ 35613`}</div>
          </div>
        ) : (
          <></>
        )}
        {state.rate ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Rate</p>
            <div>{data.length}</div>
          </div>
        ) : (
          <></>
        )}
        {state.ctr ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>CTR</p>
            <div>{data.length}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <hr />
      {data.map((ele, index) => (
        <div className={styled.tableBody} key={index}>
          {state.date ? <div>{ConvertJsonDate(ele.date)}</div> : <></>}
          {state.app ? <div>{appLogo[ele.app_id]}</div> : <></>}
          {state.click ? <div>{ele.clicks}</div> : <></>}
          {state.request ? <div>{ele.requests}</div> : <></>}
          {state.response ? <div>{ele.responses}</div> : <></>}
          {state.impression ? (
            <div>{convertToInternationalCurrencySystem(ele.impressions)}</div>
          ) : (
            <></>
          )}
          {state.revenue ? <div>${ele.revenue.toFixed(2)}</div> : <></>}
          {state.rate ? <div>{"dsfsd"}</div> : <></>}
          {state.ctr ? <div>{"sfsdf"}</div> : <></>}
        </div>
      ))}
    </div>
  );
};

export default Table;
