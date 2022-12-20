import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "../Styles/Table.module.css";
import appLogo from "./AppLogo";
import { filterLogo } from "./AppLogo";
const Table = () => {
  const [filterApp, setFilterApp] = useState(true);
  const [filterAppData, setFilterAppData] = useState("");

  const [data, setData] = useState([]);
  const state = useSelector((state) => state);

  let url =
    "http://go-dev.greedygame.com/v3/dummy/report?startDate=2022-12-10&endDate=2022-12-15";

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.data)) //store data
      .catch((error) => console.log(error));
  };
  useEffect(() => getData(), []);
  // console.log(filterAppData);
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
            <img
              onClick={() => setFilterApp(!filterApp)}
              className={styled.filter_logo}
              src={filterLogo}
              alt="logo"
            />
            {filterApp ? (
              <div className={styled.filter_box}>
                <select
                  name="AppsName"
                  id="appName"
                  onChange={(e) => setFilterAppData(e.target.value)}
                >
                  <option value="Panda Draw">Panda Draw</option>
                  <option value="Number Ninja">Number Ninja</option>
                  <option value="Word Crush">Word Crush</option>
                  <option value="Brain Quiz">Brain Quiz</option>
                  <option value="Age Calculator">Age Calculator</option>
                </select>
                <br />
                <button
                  onClick={() => {
                    setFilterApp(!filterApp);
                  }}
                >
                  Submit
                </button>
              </div>
            ) : (
              <></>
            )}

            <p>App</p>
            <div>{data.length * 8}</div>
          </div>
        ) : (
          <></>
        )}
        {state.click ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>Clicks</p>
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
            <div>{`432 B`}</div>
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
            <div>{`97.43%`}</div>
          </div>
        ) : (
          <></>
        )}
        {state.ctr ? (
          <div>
            <img className={styled.filter_logo} src={filterLogo} alt="logo" />
            <p>CTR</p>
            <div>{"34%"}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
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
          {state.rate ? (
            <div>{`${((ele.requests / ele.responses) * 100).toFixed()} %`}</div>
          ) : (
            <></>
          )}
          {state.ctr ? (
            <div>{`${((ele.clicks / ele.impressions) * 100).toFixed()} %`}</div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Table;
