import React, { Fragment, useState } from "react";
import { CountryData } from "../data/CountryData";

const SearchBar = () => {
  const [isValid, setIsValid] = useState(false);
  const onChangeHandler = (e) => {};
  return (
    <Fragment>
      <input list="suggestions" onChange={onChangeHandler} />
      <datalist id="suggestions">
        {CountryData.map((country) => {
          return <option value={country.Country}> </option>;
        })}
      </datalist>
    </Fragment>
  );
};

export default SearchBar;
