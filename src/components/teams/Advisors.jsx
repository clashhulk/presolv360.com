import React from "react";

import JK from "./../../assets/img/advisors/Justice K Kannan.png";
import AB from "./../../assets/img/advisors/Mr Ashok Barat.png";
import SS from "./../../assets/img/advisors/Mr Srinath Sridharan.png";
import TM from "./../../assets/img/advisors/Ms Tanu Mehta.png";
import styles from "./Teams.module.css";

const Advisors = () => {
  const advisers = [
    {
      id: 1,
      name: "Justice K Kannan",
      position: "Judge (Retd.) Punjab & Haryana High Court ",
      imageUrl: JK, // Replace with the actual image URL
    },
    {
      id: 2,
      name: "Mr Srinath Sridharan",
      position: "Corporate Leader, CXO Coach",
      imageUrl: SS, // Replace with the actual image URL
    },
    {
      id: 3,
      name: "Mr Ashok Barat",
      position: "Former MD & CEO, Forbes & Company Ltd",
      imageUrl: AB, // Replace with the actual image URL
    },
    {
      id: 4,
      name: "Ms Tanu Mehta",
      position: "Legal Counsel, Mediator and Conciliator",
      imageUrl: TM, // Replace with the actual image URL
    },
  ];

  return (
    <div className={styles.teamCards}>
      {advisers.map((adviser) => (
        <div key={adviser.id} className={styles.teamCard}>
          <img
            src={adviser.imageUrl}
            alt={adviser.name}
            className={styles.teamImage}
          />
          <h3 className={styles.teamName}>{adviser.name}</h3>
          <p className={styles.teamPosition}>{adviser.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Advisors;
