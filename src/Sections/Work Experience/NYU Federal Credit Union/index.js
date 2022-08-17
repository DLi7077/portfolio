import React from "react";
import Naughty from "../../../Assets/slides/NYUFCU/Naughty.png";
import Tables from "../../../Assets/slides/NYUFCU/Tables.png";
import Trustage from "../../../Assets/slides/NYUFCU/Trustage.png";
import Webinars from "../../../Assets/slides/NYUFCU/Webinars.png";
import ContentBox from "../../../Components/ContentBox";
import Slideshow from "../../../Components/Slideshow";
import NyuFCU from "../../../Assets/icons/NYUFCU.png";
import IconList from "../../../Components/IconList";

export default function NYUFCU() {
  const pageColorTheme = "#841CA1";
  const slides = [Tables, Naughty, Webinars, Trustage];
  const icons = ["React", "Javascript", "CSS", "Figma"];
  const content = (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <img
          src={NyuFCU}
          style={{ height: "48px", width: "auto" }}
          alt="nyufcu"
        />
        <div className="title" style={{ color: pageColorTheme }}>
          New York University Federal Credit Union
        </div>
      </div>
      <div className="content-container" style={{ color: "black" }}>
        <div className="slideshow">
          <Slideshow slides={slides} />
          <div className="links">
            <a
              href="https://dli7077.github.io/nyu-fcu/"
              target="_blank"
              rel="noreferrer"
              className="redirect"
              style={{ color: pageColorTheme }}
            >
              https://dli7077.github.io/nyu-fcu/
            </a>
          </div>
        </div>
        <div className="article">
          <div className="subtitle" style={{ color: pageColorTheme }}>
            Tools Used
            <IconList icons={icons} />
          </div>
          <div className="subtitle" style={{ color: pageColorTheme }}>
            Responsiblities
          </div>
          <div className="text">
            Rebuilt NYU Federal Credit Union's website using ReactJS and CSS
            <br />
            Improved various features including:
            <ul>
              <li>App responsiveness</li>
              <li>User interface</li>
              <li>Accessibility</li>
              <li>Loans/mortgage calculators</li>
            </ul>
            <blockquote>
              The website was previously built by OMNICOMMANDER using
              Squarespace.
            </blockquote>
            <br />
            Helped with a Mortgage Closing
            <br />
            <div className="bottom-right">July 2020 - August 2020</div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <ContentBox content={content} style={{ backgroundColor: "#d5d5d5" }} />
  );
}
