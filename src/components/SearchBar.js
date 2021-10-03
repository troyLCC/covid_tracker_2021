import React, { Fragment, useState, useContext } from "react";
import { CountryData } from "../data/CountryData";
import styles from "./SearchBar.module.css";
import { DataContext } from "../context/ContextProvider";
const SearchBar = (props) => {
  // const [countryName, setCountryName] = useState("");
  const { data, setData } = useContext(DataContext);
  const country = data.countryName
  return (
    <Fragment>
      <input
        className={styles.input_wrapper}
        list="suggestions"
        placeholder="Search Country"
        onChange={(event) => {
          setData({ countryName: event.target.value });
          props.getCountryName(event.target.value);
        }}
      />

      <datalist id="suggestions">
        {CountryData.map((country) => {
          return (
            <select className={styles.select}>
            <option className={styles.option} value={country.Country}>
              {country.Country}
            </option>
            </select>
          );
        })}
      </datalist>
    
    </Fragment>
  );
};

export default SearchBar;
