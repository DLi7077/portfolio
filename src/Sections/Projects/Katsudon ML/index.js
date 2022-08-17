import ContentBox from "../../../Components/ContentBox";
import IconList from "../../../Components/IconList";
import Slideshow from "../../../Components/Slideshow";
import APIResponse from "../../../Assets/slides/Katsudon ML/APIResponse.png";
import TabGroup from "../../../Components/TabGroup";
import "../../styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function KatsudonML() {
  const pageColorTheme = "#7BD0FF";
  const slides = [APIResponse];
  const icons = ["Postgres", "Typescript", "Postman"];
  const tabList = [
    {
      label: "About this project",
      content: (
        <div className="text">
          KatsudonML is a Discord Bot that records messages of discord users
          (with their permission) and predicts the speaker of a provided
          sentence.
          <div style={{ height: "0.5rem" }} />
          Because Naive Bayes is reliant on supervised learning, this project
          will be on hold until it records about ~200 messages per user.
          <div style={{ height: "0.5rem" }} />
          End goal is to predict user behavior and answer some random questions:
          <br />
          <li>"Who is most likely to send a message past 12am?"</li>
          <li>"Who is most likely to say, 'What the dog doing?'"</li>
          <li>"Devin just said 'this is'- What will he say next? "</li>
        </div>
      ),
    },
    {
      label: "My Contributions",
      content: (
        <div className="text">
          <ul>
            <li>
              Designed multiple schemas using MongoDB to store users, messages,
              and discord channels.
            </li>
            <li>
              Implemented GET and POST APIs to record messages and retrieve user
              word usage statistics
            </li>
            <li>
              Used discord developer documentation to build a discord bot that
              actively listen for messages of volunteering users in a server
            </li>
            <li>
              Implementing Machine Learning Fundamentals like Naive Bayes to
              guess the speaker of a given message
            </li>
          </ul>
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
        Katsudon ML
      </div>
      <div className="content-container">
        <div className="slideshow">
          <Slideshow slides={slides} />
          <div className="links">
            <div className="redirect-wrapper">
              <a
                href="https://github.com/DLi7077/katsudon-discord-bot"
                target="_blank"
                rel="noreferrer"
                className="redirect"
                style={{ color: "black" }}
              >
                <GitHubIcon style={{ fontSize: "36px" }} />
              </a>
              Discord Bot
            </div>
            <div className="redirect-wrapper">
              <a
                href="https://github.com/DLi7077/katsudon-pg-server"
                target="_blank"
                rel="noreferrer"
                className="redirect"
                style={{ color: "black" }}
              >
                <GitHubIcon style={{ fontSize: "36px" }} />
              </a>
              Postgres Server
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

  return <ContentBox content={content} />;
}
