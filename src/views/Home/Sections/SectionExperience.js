import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Work from "@material-ui/icons/Work";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";

import work1 from "assets/img/works/alk.jpg";
import work2 from "assets/img/works/att.png";
import work3 from "assets/img/works/algarbithday.jpg";
import work4 from "assets/img/works/algartech.png";
import work5 from "assets/img/works/ibm.jpg";

import hobbie1 from "assets/img/hobbies/FB_IMG_1603427172659.jpg";
import hobbie2 from "assets/img/hobbies/guitar.jpg";
import hobbie3 from "assets/img/hobbies/running.jpeg";
import hobbie4 from "assets/img/hobbies/Screen Shot 2020-10-22 at 23.42.44.png";
import hobbie5 from "assets/img/hobbies/wow.jpg";

import other1 from "assets/img/other/ibmvisit.jpg";
import other2 from "assets/img/other/oracle.jpg";
import other3 from "assets/img/other/tea.png";
import other4 from "assets/img/other/cafetacvba.jpg";

import workGandalf from "assets/img/works/gandalf.mp4";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function SectionExperience(props) {
  const [visiblePhotos, setVisiblePhotos] = React.useState(props.visiblePhotos);

  React.useEffect(() => {
    setVisiblePhotos(props.visiblePhotos);
  }, [props.visiblePhotos]);

  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.sections + " bg-section-experience"}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 className="text-white">Gallery</h2>
        </div>
        {!visiblePhotos && <div className="empty-section"></div>}
        {visiblePhotos && (
          <div className="animate__animated animate__zoomInDown animate__slower">
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Works",
                      tabIcon: Work,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <video className={navImageClasses} controls>
                              <source src={workGandalf} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Hobbies",
                      tabIcon: FreeBreakfast,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={hobbie1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={hobbie3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={hobbie4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={hobbie5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={hobbie2}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Others",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={other1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={other2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={other3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={other4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        )}
      </div>
    </div>
  );
}
