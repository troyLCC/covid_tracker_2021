import React, { Fragment, useState } from "react";
import { CountryData } from "../data/CountryData";
import styles from "./SearchBar.module.css";
const SearchBar = (props) => {
  return (
    <Fragment>
      <input
        className={styles.input_wrapper}
        list="suggestions"
        placeholder="Search Country"
        onChange={(event) => {
          props.getCountryName(event.target.value);
          console.log(event.target.value);
        }}
      />

      <datalist id="suggestions">
        {CountryData.map((country) => {
          return (
            <option className={styles.option} value={country.Country}>
              {country.Country}
            </option>
          );
        })}
      </datalist>
    </Fragment>
  );
};

export default SearchBar;
