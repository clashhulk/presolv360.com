import React from "react";

import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div style={{ height: " 100vh" }}></div>
      <div className={styles.contactOurTeamStrip}>
        <span className={styles.contactOurTeamText}>
          <b>
            The time to try ODR is now
            <span className={styles.exclamation}> ! </span>
          </b>
          To know why and how, contact our team for more details.
        </span>
        <button className={styles.contactOurTeamCtaButton}>Click Here</button>
      </div>
      {/* <div className={styles.contactOurTeamStrip}>
        <span className={styles.contactOurTeamText}>
          <b>
            The time to try ODR is now
            <span className={styles.exclamation}> ! </span>
          </b>
          To know why and how, contact our team for more details.
        </span>
        <button className={styles.contactOurTeamCtaButton}>Click Here</button>
      </div> */}
      {/* <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h3 className={styles.introTitle}>
            Efficient, Easy & Enforceable
            <span style={{ fontWeight: "400" }}>
              {" "}
              Online Dispute Resolution can transform your business.
            </span>
          </h3>
          <p className={styles.introParagraph}>
            Presolv360 is an independent ODR platform that facilitates quick and
            effective out-of-court resolution of disputes, while drastically
            reducing the costs and resources involved.
          </p>
        </div>
        <div className={styles.introLogoContainer}>
          <img alt="" src={logo} className={styles.introLogo}></img>
        </div>
      </div>{" "}
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h3 className={styles.introTitle}>
            Efficient, Easy & Enforceable
            <span style={{ fontWeight: "400" }}>
              {" "}
              Online Dispute Resolution can transform your business.
            </span>
          </h3>
          <p className={styles.introParagraph}>
            Presolv360 is an independent ODR platform that facilitates quick and
            effective out-of-court resolution of disputes, while drastically
            reducing the costs and resources involved.
          </p>
        </div>
        <div className={styles.introLogoContainer}>
          <img alt="" src={logo} className={styles.introLogo}></img>
        </div>
      </div>{" "}
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h3 className={styles.introTitle}>
            Efficient, Easy & Enforceable
            <span style={{ fontWeight: "400" }}>
              {" "}
              Online Dispute Resolution can transform your business.
            </span>
          </h3>
          <p className={styles.introParagraph}>
            Presolv360 is an independent ODR platform that facilitates quick and
            effective out-of-court resolution of disputes, while drastically
            reducing the costs and resources involved.
          </p>
        </div>
        <div className={styles.introLogoContainer}>
          <img alt="" src={logo} className={styles.introLogo}></img>
        </div>
      </div> */}
    </>
  );
};

export default Home;
