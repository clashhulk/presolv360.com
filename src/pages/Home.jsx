import Box from "@mui/material/Box";
import React, { useRef } from "react";

import yellowTrangle from "../assets/img/1.webp";
import backgroundCircle from "../assets/img/backgrounds/circle.svg";
import scrollWheel from "../assets/img/scroll-wheel.webp";
import RotatingImages from "../components/animated/RotatingImages";
import AlliancesIncuCarousels from "../components/carousels/AlliancesIncuCarousels";
import AwardsRecCarousels from "../components/carousels/AwardsRecCarousels";
import ImageCarousel from "../components/carousels/ImageCarousel";
import AboutUsTabs from "../components/tabs/AboutUsTabs";
import Advisors from "../components/teams/Advisors";
import styles from "./styles/Home.module.css";

const Home = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.mainContainer}>
      <section className={styles.firstSection}>
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <h3 className={styles.introTitle}>Efficient, Easy & Enforceable</h3>
            <h4 className={styles.introSubTitle}>
              Online Dispute Resolution can transform your business.
            </h4>
            <p className={styles.introParagraph}>
              Presolv360 is an independent ODR platform that facilitates quick
              and effective out-of-court resolution of disputes, while
              drastically reducing the costs and resources involved.
            </p>
            <img
              alt=""
              src={yellowTrangle}
              className={styles.yellowTrangle}
            ></img>
          </div>
          <div className={styles.introLogoContainer}>
            <RotatingImages />
            {/* <img alt="" src={logo} className={styles.introLogo}></img> */}
          </div>{" "}
          <img
            alt=""
            onClick={scrollToSection}
            src={scrollWheel}
            className={styles.scrollWheel}
          ></img>
        </div>
      </section>
      <section ref={sectionRef} className={styles.secondSection}>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsCarouselMain}>
            <ImageCarousel />
          </div>
          <div className={styles.aboutUsTabsMain}>
            <AboutUsTabs />
            <img
              alt=""
              src={backgroundCircle}
              className={styles.backgroundCircle}
            ></img>
          </div>
        </div>
      </section>
      <section className={styles.teamSection}>
        <div className={styles.teamSectionTitleContainer}>
          <h4 className={styles.allIncTitle}>Advisors</h4>
          <hr className={styles.allIncTitleHr} style={{ width: "162px" }} />
        </div>
        <Advisors />
      </section>

      <Box className={styles.mainBrandSlidesSection}>
        <h4 className={styles.allIncTitle}>Alliances and Incubation</h4>

        <hr className={styles.allIncTitleHr} />
        <div className={styles.brandSlidesSection}>
          <AlliancesIncuCarousels />
        </div>
      </Box>
      <Box className={styles.mainBrandSlidesSection}>
        <h4 className={styles.allIncTitle}>Awards and Recognition</h4>
        <hr className={styles.allIncTitleHr} />
        <div className={styles.brandSlidesSection}>
          <AwardsRecCarousels />
        </div>
      </Box>
    </div>
  );
};

export default Home;
