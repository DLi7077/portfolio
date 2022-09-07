import React from "react";
import ContentBox from "../../Components/ContentBox";
import Devin from "../../Assets/people/devin.jpg";
import Resume from "../../Assets/docs/Devin L. Resume.pdf";
import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const classes = {
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  social: {
    fontSize: "6rem",
    color: "white",
    padding: 0,
  },
  toolip: {
    fontSize: "1.5rem",
  },
};

export default function AboutMe() {
  const aboutMe = (
    <div className="text">
      I'm 20 years old, entering my 4th year at CUNY Hunter College as a
      computer science major.
      <br />
      My course works mainly consist of command line scripts and algorithm
      implementations, which I find a bit boring.
      <br />
      I've decided to explore full stack development and machine learning on my
      own.
      <br />
      Although I have no relevant professional software engineering experience,
      I've been using projects as a way to grow.
      <br />
      Below are some projects I've either completed or are in progress.
    </div>
  );
  const content = (
    <div style={classes.contentContainer}>
      <div style={classes.contentBox}>
        <div className="section-title">Hello! I'm Devin</div>
        <img
          src={Devin}
          style={{ width: "250px", borderRadius: "40px" }}
          alt="devin"
        />
      </div>
      <div style={classes.contentBox}>
        <ContentBox
          content={aboutMe}
          style={{
            width: "80%",
            padding: "1rem",
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          ...classes.contentBox,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Tooltip title={<div style={classes.toolip}>GitHub</div>}>
          <IconButton>
            <a
              href="https://github.com/DLi7077"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={classes.social} />
            </a>
          </IconButton>
        </Tooltip>

        <Tooltip title={<div style={classes.toolip}>LinkedIn</div>}>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/devin-li7077/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ ...classes.social, fontSize: "7rem" }} />
            </a>
          </IconButton>
        </Tooltip>

        <Tooltip title={<div style={classes.toolip}>Resume</div>}>
          <IconButton>
            <a href={Resume} target="_blank" rel="noreferrer">
              <DescriptionIcon style={classes.social} />
            </a>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
  return (
    <div>
      <ContentBox
        content={content}
        style={{
          backgroundColor: "#222222",
        }}
      />
    </div>
  );
}
