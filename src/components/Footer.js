import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>
        Developed by:{" "}
        <a href="https://www.linkedin.com/in/timothy-roy-266612121/">
          Timothy Roy{" "}
        </a>
      </h2>
      <h2>
        API provider: <a href="https://covid19api.com/">COVID-19 API</a>
      </h2>
      <h2>
        Data Source:{" "}
        <a href="https://github.com/CSSEGISandData/COVID-19">
          COVID-19 Data Repository by the Center for Systems Science and
          Engineering (CSSE) at Johns Hopkins University
        </a>
      </h2>
    </footer>
  );
};

export default Footer;
