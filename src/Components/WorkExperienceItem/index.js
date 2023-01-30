import ContentBox from "../ContentBox";
import IconList from "../IconList";
import Slideshow from "../Slideshow";
import TabGroup from "../TabGroup";
import "./styles.css";

export default function WorkExperienceItem({ workExp }) {
  const { title, highlight_color, slides, tools_used, tabs, date } = workExp;

  return (
    <ContentBox style={{ backgroundColor: "#606060" }}>
      <>
        <div
          className="title"
          style={{ display: "flex", gap: "1rem", color: highlight_color }}
        >
          {title}
        </div>
        <div className="content-container" style={{ color: "white" }}>
          <div className="slideshow">
            <Slideshow slides={slides} />
          </div>
          <div className="article">
            <div className="subtitle" style={{ color: highlight_color }}>
              Tools Used
              <IconList icons={tools_used} />
            </div>
            <div style={{ width: "100%" }}>
              <TabGroup tabs={tabs} color={highlight_color} />
            </div>
            <div className="bottom-right">{date}</div>
          </div>
        </div>
      </>
    </ContentBox>
  );
}
