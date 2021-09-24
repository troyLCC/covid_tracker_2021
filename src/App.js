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
function App() {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const userInput = useRef("");
  const from = useRef("");
  const to = useRef("");

  const changeCountryName = (name) => {
    setCountryName(name);
    console.log(countryName);
  };

  useEffect(() => {
    let tempData = [];
    allData.map((data) => {
      const currentDate = new Date(data.Date);
      const startingDate = new Date(from.current.value);
      const endingDate = new Date(to.current.value);
      const { Cases, Country } = data;

      if (currentDate >= startingDate && currentDate <= endingDate) {
        tempData.push({
          date: currentDate.toLocaleDateString("en-US", {
            day: "numeric",

            month: "short",
            year: "numeric",
          }),
          cases: Cases,
          country: Country,
        });
      }
    });
    setFilterData(tempData);
    console.log(filterData);
  }, [allData]);

  async function fetchAPI(country) {
    const response = await fetch(
      `https://api.covid19api.com/dayone/country/${country}/status/confirmed`
    );
    let data = await response.json();

    setAllData(data);
  }

  const clickHandler = () => {
    fetchAPI(countryName);
  };

  return (
    <div>
      {/* <input type="text" ref={userInput} /> */}
      <SearchBar getCountryName={changeCountryName} />
      <label htmlFor="from">From</label>
      <input type="date" id="from" ref={from} />
      <label htmlFor="to">To</label>
      <input type="date" id="ending-to" ref={to} />
      <button onClick={clickHandler}>Fetch Data</button>

      {allData.length === 0 ? (
        <h1>Please enter a valid name and date </h1>
      ) : (
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={filterData}
            width={400}
            height={300}
            margin={{ top: 10, right: 300, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke="#eee" strokeDasharray="5 3" />
            <XAxis dataKey="date" interval={"preserveStartEnd"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#8884d8"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default App;
