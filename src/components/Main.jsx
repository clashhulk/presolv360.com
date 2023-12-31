import React from "react";

import styles from "./styles/Main.module.css";

const Main = ({ children }) => {
  return <main className={styles.pageContainer}>{children}</main>;
};

export default Main;
