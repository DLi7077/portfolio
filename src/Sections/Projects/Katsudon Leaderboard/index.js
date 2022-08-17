import ContentBox from "../../../Components/ContentBox";
import IconList from "../../../Components/IconList";
import Slideshow from "../../../Components/Slideshow";
import Leaderboard from "../../../Assets/slides/Katsudon Leetcode/Leaderboard.png";
import Profile from "../../../Assets/slides/Katsudon Leetcode/ProfilePage.png";
import TabGroup from "../../../Components/TabGroup";
import "../../styles.css";
import ICONS from "../../../Assets/icons";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function KatsudonLeaderboard() {
  const pageColorTheme = "#BD7AFF";
  const slides = [Leaderboard, Profile];
  const icons = [
    "MongoDB",
    "Typescript",
    "Postman",
    "Javascript",
    "HTML",
    "CSS",
    "Figma",
  ];
  const tabList = [
    {
      label: "About this project",
      content: (
        <div className="text">
          Katsudon Leetcode Leaderboard is (will) be a social platform for users
          to compare their leetcode solutions with their friends. <br />
          The main goal of this platform is to encourage social circles to solve
          more leetcode problems while having a friendly competiton.
        </div>
      ),
    },
    {
      label: "My Contributions",
      content: (
        <div className="text">
          <ul>
            <li>
              Designed multiple schemas using MongoDB to store users, leetcode
              problems, and solutions Implemented APIs for user verification &
              authorization, and solution posting
            </li>
            <li>
              Built a Chrome Extension that allows users to automatically send
              successful leetcode solutions to the database using implemented
              APIs.
            </li>
            <li>
              Designing the user interface with Figma and to be built with
              ReactJS
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "Lore",
      content: (
        <div className="text">
          Kevin:
          <li>"Hey guys should we buy a leetcode premium and share it?"</li>
          Me:
          <li>
            Sharing an account? It would be kind of weird seeing that a problem
            was solved if I've never even seen it.
          </li>
          <li>
            ... Though that would be a subtle way to tell that someone using the
            account was putting in good work.
          </li>
          <li>
            ... Is there a way to tell which problems our friends have solved?
            It doesn't seem like leetcode has a social platform outside of the
            discuss section.
          </li>
          <li>... Guess I'll try to make it myself</li>
        </div>
      ),
    },
  ];
  const content = (
    <>
      <div className="title" style={{ color: pageColorTheme }}>
        Katsudon Leetcode Leaderboard
      </div>
      <div className="content-container">
        <div className="slideshow">
          <Slideshow slides={slides} />
        </div>
        <div className="article">
          <div className="subtitle" style={{ color: pageColorTheme }}>
            Tools Used
          </div>
          <IconList icons={icons} />
          <div>
            <TabGroup tabs={tabList} color={pageColorTheme} />
          </div>
          <div className="bottom-right">August 2022 - Present</div>
        </div>
      </div>
      <div className="links">
        <div className="redirect-wrapper">
          <br />
          <a
            href="https://github.com/DLi7077/katsudon-leetcode-extension"
            target="_blank"
            rel="noreferrer"
            className="redirect"
            style={{ color: "black" }}
          >
            <GitHubIcon style={{ fontSize: "36px" }} />
          </a>
          Chrome Extension
        </div>
        <div className="redirect-wrapper">
          <br />
          <a
            href="https://github.com/DLi7077/katsudon-server-v2"
            target="_blank"
            rel="noreferrer"
            className="redirect"
            style={{ color: "black" }}
          >
            <GitHubIcon style={{ fontSize: "36px" }} />
          </a>
          MongoDB Server
        </div>
        <div className="redirect-wrapper">
          <br />
          <a
            href="https://www.figma.com/proto/mdTjxsEwW4RGlNNCMM1eMd/Katsudon-Leaderboard?page-id=0%3A1&node-id=17%3A242&viewport=337%2C376%2C0.86&scaling=min-zoom"
            target="_blank"
            rel="noreferrer"
            className="redirect"
          >
            <img src={ICONS["Figma"]} style={{ width: "32px" }} alt="figma" />
          </a>
          Page Layout
        </div>
      </div>
    </>
  );

  return <ContentBox content={content} />;
}
