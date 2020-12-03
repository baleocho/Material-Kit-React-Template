import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ConalepIcon from "./../../../assets/img/icons/conalepicon.png";
import PlatziIcon from "./../../../assets/img/icons/com.platzi.platzi.jpg";
import UtjIcon from "./../../../assets/img/icons/utjicon.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionEducation(props) {
  const [visibleCard, setVisibleCard] = React.useState(props.visibleCard);
  const classes = useStyles();

  React.useEffect(() => {
    setVisibleCard(props.visibleCard);
  }, [props.visibleCard]);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Education</h2>
        </div>
        {!visibleCard && <div className="empty-section"></div>}
        {visibleCard && (
          <Timeline className={classes.Timeline} align="alternate">
            <TimelineItem>
              <TimelineOppositeContent className="animate__animated animate__fadeInRight  animate__slower">
                <Typography variant="body2" color="textSecondary">
                  From July 2016 to present
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator className="animate__animated animate__fadeIn animate__slower">
                <TimelineDot color="primary" variant="outlined">
                  <img
                    src={PlatziIcon}
                    alt="Platzi Icon"
                    width="32"
                    height="32"
                  />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>

              <TimelineContent
                className={
                  classes.TimelineItem +
                  " animate__animated animate__fadeInLeft animate__slower"
                }
              >
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    <a
                      className="sectionEducationLink"
                      href="https://platzi.com/@alejandro-ochoa691/"
                      target="_blank"
                    >
                      Platzi.com
                    </a>
                  </Typography>
                  <Typography>Software Developer</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent className=" animate__animated animate__fadeInLeft animate__delay-1s animate__slower">
                <Typography variant="body2" color="textSecondary">
                  From August 2016 to April 2020
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator className="animate__animated animate__fadeIn animate__slower animate__delay-1s">
                <TimelineDot color="primary" variant="outlined">
                  <img src={UtjIcon} alt="Utj Icon" width="32" height="32" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent
                className={
                  classes.TimelineItem +
                  " animate__animated animate__fadeInRight animate__delay-1s animate__slower"
                }
              >
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    <a
                      className="sectionEducationLink"
                      href="http://www.utj.edu.mx/"
                      target="_blank"
                    >
                      Universidad Tecnológica de Jalisco
                    </a>
                  </Typography>
                  <Typography>
                    Information technology engineer area information systems.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent className="animate__animated animate__fadeInRight animate__delay-2s animate__slower">
                <Typography variant="body2" color="textSecondary">
                  From August 2013 to July 2016
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator className="animate__animated animate__fadeIn animate__slower animate__delay-2s">
                <TimelineDot color="primary" variant="outlined">
                  <img
                    src={ConalepIcon}
                    alt="Platzi Icon"
                    width="32"
                    height="32"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent
                className={
                  "animate__animated animate__fadeInLeft animate__delay-2s animate__slower"
                }
              >
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    <a
                      className="sectionEducationLink"
                      href="https://conalepjalisco.edu.mx/web/index.php/conocenos/planteles-jalisco/planteles-metropolitanos/plantel-gdl2"
                      target="_blank"
                    >
                      Colegio Nacional de Educación Profesional Técnica
                      Guadalajara 2
                    </a>
                  </Typography>
                  <Typography>Técnico Bachiller Informático.</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        )}
      </div>
    </div>
  );
}
