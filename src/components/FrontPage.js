import React, { useContext, useState } from "react";
import { DataContext } from "../context/ContextProvider";
import styles from "./FrontPage.module.css";
import covid from "../assets/img/covid.jpg";

const FrontPage = () => {
  const { data } = useContext(DataContext);
  const countryName = data.countryName;
  const from = data.fromDate;
  const to = data.toDate;
  return (
    <div className={styles.front_page}>
      <img src={covid} alt="" />
      <h1>World COVID Tracker</h1>
      <p>
        Please enter the country name and start and ending date to visualize
        covid data. You can see data upto 3 months
      </p>
      {countryName === "" && <div> Enter COuntry Name</div>}
    </div>
  );
};

export default FrontPage;
