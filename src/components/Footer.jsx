import React from "react";

import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      &copy; {new Date().getFullYear()} Presolv360.com
    </footer>
  );
};

export default Footer;
