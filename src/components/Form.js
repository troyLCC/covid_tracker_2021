import React, { useRef } from "react";

const Form = (props) => {
  const from = useRef("");
  const to = useRef("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmitHandler(from.current.value, to.current.value);
      }}
    >
      <label htmlFor="from">From</label>
      <input type="date" id="from" ref={from} />
      <label htmlFor="to">To</label>
      <input type="date" id="ending-to" ref={to} />
      <button>Fetch Data</button>
    </form>
  );
};

export default Form;
