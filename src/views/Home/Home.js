import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";

// @material-ui/icons
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
// sections for this page
import SectionAboutUs from "./Sections/SectionAboutUs.js";
import SectionEducation from "./Sections/SectionEducation.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionExperience from "./Sections/SectionExperience.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const [visibleCard, setVisibleCard] = React.useState(false);
  const [visibleAboutUs, setVisibleAboutUs] = React.useState(false);
  const [visiblePhotos, setVisiblePhotos] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => handleVisible();
  });

  const handleVisible = () => {
    if (document.documentElement.scrollTop > 700 && !visibleCard)
      setVisibleCard(true);
    if (document.documentElement.scrollTop > 1000 && !visiblePhotos)
      setVisiblePhotos(true);
    if (document.documentElement.scrollTop > 700 && !visibleAboutUs)
      setVisibleAboutUs(true);
  };

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Brian Alejandro Ochoa Duran"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax video={require("assets/videos/rain_background.mp4")}>
        <div
          className="animate__animated animate__fadeIn animate__slower"
          className={classes.container}
          style={{
            position: "absolute",
            paddingLeft: "10%",
          }}
        >
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h3
                  className={
                    classNames(classes.subtitle, classes.fontWeightBolder) +
                    " animate__animated animate__slow animate__delay-1s typewriter"
                  }
                >
                  Welcome to my web page.
                </h3>
                <h1
                  className={
                    classNames(classes.title, classes.fontWeightMedium) +
                    " animate__animated animate__slower animate__fadeIn animate__delay-3s"
                  }
                >
                  Website developer {"&"}
                  <br /> designer
                </h1>
                <div style={{ display: "block", marginTop: "2rem" }}>
                  <Button
                    color="whiteOutline"
                    size="lg"
                    href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section"
                    target="_blank"
                    style={{ marginRight: "1rem" }}
                  >
                    Portfolio
                    <ArrowDownward
                      className="animate__animated animate__slower animate__delay-5s animate__shakeY"
                      style={{ marginLeft: "2rem" }}
                    />
                  </Button>
                  <Button
                    color="primary"
                    size="lg"
                    href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section"
                    target="_blank"
                  >
                    Contact me!
                    <ArrowForward
                      className="animate__animated animate__slower animate__delay-5s animate__shakeX"
                      style={{ marginLeft: "2rem" }}
                    />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="down-buttom">
          <div
            onClick={() =>
              window.scrollTo({
                top: 800,
                behavior: "smooth",
              })
            }
            className="down-buttom-icon animate__animated animate__slower animate__bounce animate__infinite"
          >
            <ArrowDownward />
          </div>
        </div>
      </Parallax>

      <div className={classes.main}>
        <SectionAboutUs visibleAboutUs={visibleAboutUs} />
        <SectionEducation visibleCard={visibleCard} />
        <SectionExperience visiblePhotos={visiblePhotos} />

        {true && (
          <React.Fragment>
            <SectionBasics />
            <SectionNavbars />
            <SectionTabs />
            <SectionPills />
            <SectionNotifications />
            <SectionTypography />
            <SectionJavascript />
            <SectionCarousel />
            <SectionCompletedExamples />
            <SectionLogin />
            <GridItem md={12} className={classes.textCenter}>
              <Link to={"/login-page"} className={classes.link}>
                <Button color="primary" size="lg" simple>
                  View Login Page
                </Button>
              </Link>
            </GridItem>
            <SectionExamples />
            <SectionDownload />
          </React.Fragment>
        )}
      </div>
      <Footer />
    </div>
  );
}
