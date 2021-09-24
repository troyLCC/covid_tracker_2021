import React, { Fragment, useState } from "react";
import { CountryData } from "../data/CountryData";

const SearchBar = (props) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <Fragment>
      <input
        list="suggestions"
        onChange={(event) => {
          props.getCountryName(event.target.value);
          console.log(event.target.value);
        }}
      />
      <datalist id="suggestions">
        {CountryData.map((country) => {
          return <option value={country.Country}> </option>;
        })}
      </datalist>
    </Fragment>
  );
};

export default SearchBar;
