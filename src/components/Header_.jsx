import React from "react";
import { Link } from "react-router-dom";

import logo from "./../assets/img/Logo.png";
import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          HOME
        </Link>
        <Link to="/about" className={styles.navLink}>
          ABOUT US
        </Link>
        <Link to="/product" className={styles.navLink}>
          PRODUCT
        </Link>{" "}
        <Link to="/resources" className={styles.navLink}>
          RESOURCES
        </Link>
        <Link to="/faq" className={styles.navLink}>
          FAQ
        </Link>
        <Link to="/contact" className={styles.navLink}>
          CONTACT US
        </Link>
        <button className={styles.ctaButton}>Login / Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
