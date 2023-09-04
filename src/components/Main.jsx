import React from "react";

import styles from "./styles/main.module.css";

const Main = ({ children }) => {
  return <main className={styles.pageContainer}>{children}</main>;
};

export default Main;
