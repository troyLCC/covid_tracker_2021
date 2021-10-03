import React, { useContext, useState } from "react";
import { DataContext } from "../context/ContextProvider";
import styles from "./FrontPage.module.css";
import COVIDSVG from "../assets/asset";

const FrontPage = () => {
  const { data } = useContext(DataContext);
  const countryName = data.countryName;
  const from = data.fromDate;
  const to = data.toDate;
  return (
    <div className={styles.front_page}>
     <COVIDSVG className={styles.svg}/>
      <h1>COVID-19 Cases Tracker</h1>
      
      
    </div>
  );
};

export default FrontPage;
