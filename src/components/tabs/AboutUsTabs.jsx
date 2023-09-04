import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

import styles from "./Tabs.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutUsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            className={`${styles.tab} ${value === 0 ? styles.activeTab : ""}`}
            label="What we do"
            {...a11yProps(0)}
          />
          <Tab
            className={`${styles.tab} ${value === 1 ? styles.activeTab : ""}`}
            label="How it works"
            {...a11yProps(1)}
          />
          <Tab
            className={`${styles.tab} ${value === 2 ? styles.activeTab : ""}`}
            label="Why choose us"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className={styles.tabPanel}>
          <h4 className={styles.tabPanelTitle}>
            Resolving conflicts seamlessly.
          </h4>
          <p>
            Presolv360 offers online dispute resolution (ODR) services,
            including mediation and arbitration, providing a convenient and
            efficient way to resolve conflicts remotely. With a user-friendly
            interface and secure case management system, we streamline the
            resolution process and empower individuals and businesses to achieve
            satisfactory outcomes.
          </p>
          <Button
            className={styles.ctaButton}
            size="medium"
            sx={{
              fontFamily: "Proxima Nova",
            }}
          >
            Read More
          </Button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={styles.tabPanel}>
          <h4 className={styles.tabPanelTitle}>
            Streamlined process, virtual resolution made easy.
          </h4>
          <p>
            One-time collection of data through secure channels. Rigorous
            verification by our team to weed out discrepancies. Establishing a
            channel of communication for digital negotiation. Complete support
            for arbitration/mediation on the ODR platform. Enforceable outcomes
            for record recoveries.
          </p>
          <Button
            className={styles.ctaButton}
            size="medium"
            sx={{
              fontFamily: "Proxima Nova",
            }}
          >
            Read More
          </Button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className={styles.tabPanel}>
          <h4 className={styles.tabPanelTitle}>
            Efficiency, fairness, and convenience
          </h4>
          <p>
            Presolv360 has been included as an ADR/ODR institution in the
            notification issued by the Department of Legal Affairs, Ministry of
            Law & Justice, and has been empanelled as a Mediation Institute by
            the Main Mediation Centre, Bombay High Court and the Maharashtra
            Legal Services Authority. The platform has administered 82,000+
            disputes registered by 60+ enterprises, involving over INR 4,800
            crores in disputed value and 4,70,000 parties.
          </p>
          <Button
            className={styles.ctaButton}
            size="medium"
            sx={{
              fontFamily: "Proxima Nova",
            }}
          >
            Read More
          </Button>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
