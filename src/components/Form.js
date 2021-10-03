import React, { useRef, useState, useContext } from "react";
import styles from "./Form.module.css";
import { DataContext } from "../context/ContextProvider";
import { CountryData } from "../data/CountryData";
const Form = (props) => {
  const from = useRef("");
  const to = useRef("");
  
  const { data, setData } = useContext(DataContext);
  const countryName = data.countryName;
  const fromDate = data.fromDate;
  const toDate = data.toDate;
  const [isValid, setIsValid] = useState("")
  const SubmitHandler = (e)=> {
    e.preventDefault();
        setData({
          fromDate: from,
          toDate: to,
        });
    if( fromDate && toDate){
      props.onSubmitHandler(from.current.value, to.current.value);
    }else {
      
    }
        
  }
  const onChangeFromHandler =(e)=> {
    if(fromDate === ""){
      setIsValid(false)
    }else {
      setIsValid(true)
    }
  }
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        SubmitHandler(e)
      }}
    >
      <input type="date" className={styles.date1} ref={from} onChange={e => onChangeFromHandler(e)}/>
     
      <input type="date" id="ending-to" className={styles.date2} ref={to} />
      <button className={!isValid? styles.inactive : styles.active}disabled={!isValid}>
        Fetch Data
      </button>
    </form>
  );
};

export default Form;
