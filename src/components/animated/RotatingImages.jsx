import React from "react";

import leftChat from "./../../assets/img/left-chat.webp";
import rightChat from "./../../assets/img/right-chat.webp";
import styles from "./Animated.module.css";

const RotatingImages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rotatingLogoContainer}>
        <img className={styles.leftChat} src={leftChat} alt="Rotating Image" />
        <img
          className={styles.rightChat}
          src={rightChat}
          alt="Rotating Image"
        />
      </div>
    </div>
  );
};

export default RotatingImages;
