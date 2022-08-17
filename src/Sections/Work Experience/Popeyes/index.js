import React from "react";
import PopeyesDevin from "../../../Assets/people/popeyes_devin.jpg";
import ContentBox from "../../../Components/ContentBox";
import Slideshow from "../../../Components/Slideshow";
import PopeyesLogo from "../../../Assets/icons/Popeyes.png";

export default function Popeyes() {
  const pageColorTheme = "#F58522";
  const slides = [PopeyesDevin];
  const content = (
    <>
    <div style={{ display: "flex", gap: "1rem" }}>
        <img
          src={PopeyesLogo}
          style={{ height: "48px", width: "auto" }}
          alt="popeyes"
        />
        <div className="title" style={{ color: pageColorTheme }}>
          Popeyes Louisiana Kitchen
        </div>
      </div>
      <div className="content-container" style={{ color: "black" }}>
        <div className="slideshow">
          <Slideshow slides={slides} />
        </div>
        <div className="article">
          <div className="subtitle" style={{ color: pageColorTheme }}>
            Responsiblities
          </div>
          <div className="text">
            <ul>
              <li>Served over 300 customers per weekend</li>
              <li>
                Communicated with co-workers to spend on average 2 minutes per
                order
              </li>
              <li>Cleaned and closed store under 30 minutes</li>
              <li>
                Learned enough Chinese Cantonese to communicate with customers
              </li>
            </ul>
            <div className="bottom-right">October 2019 - August 2021</div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <ContentBox content={content} style={{ backgroundColor: "#d5d5d5" }} />
  );
}
