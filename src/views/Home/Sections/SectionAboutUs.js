import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/aboutUs.js";
import imgBackground from "assets/img/download.png";

const useStyles = makeStyles(styles);

export default function SectionAboutUs(props) {
  const [visibleAboutUs, setVisibleAboutUs] = React.useState(
    props.visibleAboutUs
  );
  const classes = useStyles();

  React.useEffect(() => {
    setVisibleAboutUs(props.visibleAboutUs);
  }, [props.visibleAboutUs]);

  return (
    <div
      style={{
        minHeight: "50vh",
      }}
      className={classes.sections}
    >
      <span
        style={{
          top: "0",
          zIndex: "-1",
          position: "absolute",
          width: " 100%",
          height: "100%",
          backgroundImage: "url(" + imgBackground + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "bottom left",
          filter: "grayscale(100%)",
        }}
      ></span>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>About Me</h2>
        </div>
        {!visibleAboutUs && <div className="empty-section"></div>}
        {visibleAboutUs && <p>Welcome to my website</p>}
      </div>
    </div>
  );
}
