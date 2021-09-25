import React, { useRef, useState, useContext } from "react";
import styles from "./Form.module.css";
import { DataContext } from "../context/ContextProvider";
import { CountryData } from "../data/CountryData";
const Form = (props) => {
  const from = useRef("");
  const to = useRef("");
  const [isValid, setIsValid] = useState(false);
  const { data, setData } = useContext(DataContext);
  const countryName = data.countryName;
  const fromDate = data.fromDate;
  const toDate = data.toDate;

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setData({
          fromDate: from,
          toDate: to,
        });
        props.onSubmitHandler(from.current.value, to.current.value);
      }}
    >
      <input type="date" className={styles.date1} ref={from} />

      <input type="date" id="ending-to" className={styles.date2} ref={to} />
      <button className={styles.button} disabled={isValid}>
        Fetch Data
      </button>
    </form>
  );
};

export default Form;
