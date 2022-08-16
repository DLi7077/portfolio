import React from "react";
import ContentBox from "../../Components/ContentBox";
import Devin from "../../Assets/people/devin.jpg";
import IconList from "../../Components/IconList";

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
};

export default function AboutMe() {
  const aboutMe = (
    <>
      <div style={{ fontSize: "1.5rem" }}>
        I'm 20 years old, entering my 4th year at CUNY Hunter College as a
        computer science major.
        <br />
        My courseworks mainly consist of command line scripts and algorithm
        implementations, which I find a bit boring.
        <br />
        I've decided to explore full stack development and machine learning on
        my own.
        <br />
        Although I have no relevant professional software engineering
        experience, I've been using projects as a way to grow.
        <br />
        Below are some projects I've either completed or are in progress.
      </div>
    </>
  );
  const content = (
    <div style={classes.contentContainer}>
      <div style={classes.contentBox}>
        <div className="subtitle">Hello! I'm Devin Li</div>
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
    </div>
  );
  
  return (
    <div>
      <div className="title" style={{ color: "#44A5FF" }}>
        About Me
      </div>
      <ContentBox
        content={content}
        style={{
          backgroundColor: "#222222",
        }}
      />
    </div>
  );
}
