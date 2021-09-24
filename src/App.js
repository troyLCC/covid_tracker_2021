// import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import Chart from "./components/Chart";
import styles from "./App.module.css";
import covid from "./assets/img/covid.jpg";
import Footer from "./components/Footer";
function App() {
  //Use States
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  //Functions
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
      {allData.length === 0 ? (
        <div className={styles.front_page}>
          <img src={covid} alt="" />
          <h1>World COVID Tracker</h1>
          <p>
            Please enter the country name and start and ending date to visualize
            covid data. You can see data upto 3 months
          </p>
        </div>
      ) : (
        <div className={styles.graph}>
          <h1>{countryName}</h1>
          <Chart data={filterData} />
        </div>
      )}
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <SearchBar getCountryName={changeCountryName} />
          <Form onSubmitHandler={clickHandler} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
