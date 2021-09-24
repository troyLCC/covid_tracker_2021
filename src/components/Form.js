import React, { useRef } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const from = useRef("");
  const to = useRef("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmitHandler(from.current.value, to.current.value);
      }}
    >
      <input type="date" className={styles.date1} ref={from} />

      <input type="date" id="ending-to" className={styles.date2} ref={to} />
      <button className={styles.button}>Fetch Data</button>
    </form>
  );
};

export default Form;
