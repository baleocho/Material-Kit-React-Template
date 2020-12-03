import { container, title } from "assets/jss/material-kit-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const aboutUs = {
  sections: {
    padding: "70px 0",
    position: "relative",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  svgBranches: {
    background: "url(../../../../img/BranchesComplete.svg)",
  },
  paper: {
    padding: "6px 16px",
  },
  TimelineItem: {
    marginBottom: "8rem",
  },
  Timeline: {
    margin: "3rem",
  },
  backgroundAboutUs: {
    width: " 100%",
    height: "100%",
    backgroundImage: "url(../../../../img/zen-branch-1410564-1600x1200.png)",
    background: "#ffffff no-repeat left buttom",
  },
  ...customCheckboxRadioSwitch,
};

export default aboutUs;
