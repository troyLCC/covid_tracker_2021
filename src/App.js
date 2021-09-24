// import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import Chart from "./components/Chart";
function App() {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // const userInput = useRef("");

  const changeCountryName = (name) => {
    setCountryName(name);
    console.log(countryName);
  };

  useEffect(() => {
    let tempData = [];
    allData.map((data) => {
      const currentDate = new Date(data.Date);
      const startingDate = new Date(fromDate);
      const endingDate = new Date(toDate);
      const { Confirmed, Country, Deaths } = data;

      if (currentDate >= startingDate && currentDate <= endingDate) {
        tempData.push({
          date: currentDate.toLocaleDateString("en-US", {
            day: "numeric",

            month: "short",
            year: "numeric",
          }),
          cases: Confirmed,
          country: Country,
          deaths: Deaths,
        });
      }
    });
    setFilterData(tempData);
    console.log(filterData);
  }, [allData]);

  async function fetchAPI(country) {
    const response = await fetch(
      `https://api.covid19api.com/live/country/${country}/status/confirmed`
    );
    //
    let data = await response.json();

    setAllData(data);
  }

  const clickHandler = (from, to) => {
    setFromDate(from);
    setToDate(to);

    fetchAPI(countryName);
  };
  // interval={"preserveStartEnd"}
  return (
    <div>
      {/* <input type="text" ref={userInput} /> */}

      {allData.length === 0 ? (
        <h1>Please enter a valid name and date </h1>
      ) : (
        <Chart data={filterData} />
      )}
      <SearchBar getCountryName={changeCountryName} />
      <Form onSubmitHandler={clickHandler} />
    </div>
  );
}

export default App;
