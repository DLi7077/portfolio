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
  const pageColorTheme = "#F263E0";
  const slides = [Leaderboard, Profile];
  const icons = [
    "MongoDB",
    "NodeJS",
    "Typescript",
    "Postman",
    "Chrome",
    "Javascript",
    "HTML",
    "React",
    "MUI",
    "CSS",
    "Figma",
    "GoogleCloud",
  ];
  const tabList = [
    {
      label: "About this project",
      content: (
        <div className="text">
          <ul>
            <li>
              Katsudon Leetcode is a social platform for users to display their
              Leetcode solutions and skill progression.
            </li>
            <li>
              The hope is to encourage CS Majors to proactively prepare for
              technical interviews by trying out problems their friends have
              attempted/solved.
            </li>
            <li>
              It utilizes the Katsudon Chrome Extension to automatically upload
              problem attempts/solutions from leetcode.com
            </li>
          </ul>

          <div className="links">
            <a
              href="https://dli7077.github.io/katsudon-client/#/profile?user_id=6306b34920cf5f80f7d0c20d"
              target="_blank"
              rel="noreferrer"
              className="redirect"
              style={{ color: pageColorTheme, fontSize: "1.5rem" }}
            >
              Check out my profile!
            </a>
          </div>
        </div>
      ),
    },
    {
      label: "My Contributions",
      content: (
        <div className="text">
          <ul>
            <li>
              Engineered a social platform from scratch to encourage users to
              try out LeetCode problems with their friends
            </li>
            <li>
              Created and published a chrome extension to capture over 700
              automated submissions for authorized users
            </li>
            <li>
              Built a server with RESTAPI endpoints to display a solution table
              and newsfeed page using ReactJS and CSS
            </li>
            <li>
              Utilized mongoose aggregation pipelines for complex queries for
              the weekly progress page
            </li>
            <li>
              Allowed authorized users to customize their profile page using
              Json Web Tokens and Google Cloud Storage
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
          <ul>
            <li>"Hey guys should we buy a leetcode premium and share it?"</li>
          </ul>
          Me:
          <ul>
            <li>
              Sharing an account? It would be kind of weird seeing that a
              problem was solved if I've never even seen it.
            </li>
            <li>
              ... Though that would be a subtle way to tell that someone using
              the account was putting in good work.
            </li>
            <li>
              ... Is there a way to tell which problems our friends have solved?
              It doesn't seem like leetcode has a social platform outside of the
              discuss section.
            </li>
            <li>... Guess I'll try to make it myself</li>
          </ul>
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
          <div className="links">
            <a
              href="https://dli7077.github.io/katsudon-client/#/profile?user_id=6306b34920cf5f80f7d0c20d"
              target="_blank"
              rel="noreferrer"
              className="redirect"
              style={{ color: pageColorTheme }}
            >
              https://dli7077.github.io/katsudon-client/
            </a>
          </div>
          <div className="links">
            <div className="redirect-wrapper">
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
              <a
                href="https://www.figma.com/proto/mdTjxsEwW4RGlNNCMM1eMd/Katsudon-Leaderboard?page-id=0%3A1&node-id=17%3A242&viewport=337%2C376%2C0.86&scaling=min-zoom"
                target="_blank"
                rel="noreferrer"
                className="redirect"
              >
                <img
                  src={ICONS["Figma"].src}
                  style={{ width: "32px" }}
                  alt="figma"
                />
              </a>
              Page Layout
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
          <div className="bottom-right">August 2022 - Present</div>
        </div>
      </div>
    </>
  );

  return <ContentBox>{content}</ContentBox>;
}
