import ContentBox from "../../../Components/ContentBox";
import IconList from "../../../Components/IconList";
import TabGroup from "../../../Components/TabGroup";
import "../../styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import pageGif from "../../../Assets/slides/Osu Theme/osutheme.gif";

export default function OsuTheme() {
  const pageColorTheme = "#ff66ae";
  const icons = ["Javascript", "React", "CSS"];
  const tabList = [
    {
      label: "About this project",
      content: (
        <div className="text">
          This is a website I made to replicate by Osu!'s amazing color scheme
          <div style={{ height: "0.5rem" }} />
          I spent a few hours studying colors and built this color slider to
          help me pick colors for my katsudon leaderboard page
          <div style={{ height: "0.5rem" }} />
          Osu! page:{" "}
          <a
            style={{ color: pageColorTheme }}
            href="https://osu.ppy.sh/community/forums"
            target="_blank"
            rel="noreferrer"
          >
            https://osu.ppy.sh/community/forums
          </a>
        </div>
      ),
    },
  ];
  const content = (
    <>
      <div
        className="title"
        style={{ color: pageColorTheme, width: "fit-content" }}
      >
        Osu Theme Simulator
      </div>
      <div className="content-container">
        <div className="slideshow">
          <img src={pageGif} style={{ width: "100%" }} alt="color slider gif" />
          <div className="links">
            <a
              href="https://dli7077.github.io/osu-theme/"
              target="_blank"
              rel="noreferrer"
              className="redirect"
              style={{ color: pageColorTheme }}
            >
              https://dli7077.github.io/osu-theme/
            </a>
          </div>

          <div className="links">
            <div className="redirect-wrapper">
              <a
                href="https://github.com/DLi7077/osu-theme"
                target="_blank"
                rel="noreferrer"
                className="redirect"
                style={{ color: "black" }}
              >
                <GitHubIcon style={{ fontSize: "36px" }} />
              </a>
              Implementation
            </div>
          </div>
        </div>
        <div className="article">
          <div className="subtitle" style={{ color: pageColorTheme }}>
            Tools Used
            <IconList icons={icons} />
          </div>
          <div style={{ width: "100%" }}>
            <TabGroup tabs={tabList} color={pageColorTheme} />
          </div>
          <div className="bottom-right">August 2022</div>
        </div>
      </div>
    </>
  );

  return <ContentBox>{content}</ContentBox>;
}
