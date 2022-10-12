import React from "react";
import McDonaldsDevin from "../../../Assets/people/mcdonalds_devin.jpg";
import ContentBox from "../../../Components/ContentBox";
import Slideshow from "../../../Components/Slideshow";
import McDonaldsLogo from "../../../Assets/icons/McDonalds.png";

export default function McDonalds() {
  const pageColorTheme = "red";
  const slides = [McDonaldsDevin];
  const content = (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <img
          src={McDonaldsLogo}
          style={{ height: "48px", width: "auto" }}
          alt="mcd"
        />
        <div className="title" style={{ color: pageColorTheme }}>
          McDonald's
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
              <li>Handled cash register while taking orders</li>
              <li>
                Used highschool spanish to communicate with spanish speakers
              </li>
            </ul>
            <div className="bottom-right">May 2018 - March 2019</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <ContentBox style={{ backgroundColor: "#d5d5d5" }}>{content}</ContentBox>
  );
}
