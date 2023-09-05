import "./style.css";

import Diversity3Icon from "@mui/icons-material/Diversity3";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GavelIcon from "@mui/icons-material/Gavel";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Milestones = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<TipsAndUpdatesIcon />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<VerifiedUserIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GavelIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Diversity3Icon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<EmojiEventsIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Milestones;
