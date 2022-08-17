import ContentBox from "../../../Components/ContentBox";
import IconList from "../../../Components/IconList";
import Slideshow from "../../../Components/Slideshow";
import Leaderboard from "../../../Assets/slides/Golden House/Leaderboard.png";
import ApprovalTable from "../../../Assets/slides/Golden House/ApprovalTable.png";
import TabGroup from "../../../Components/TabGroup";
import "../styles.css";

export default function TheGoldenHouse() {
  const pageColorTheme = "#FFBC57";
  const slides = [Leaderboard, ApprovalTable];
  const icons = [
    "MongoDB",
    "Typescript",
    "Postman",
    "Python",
    "Pandas",
    "Javascript",
    "React",
    "CSS",
    "MUI",
  ];
  const tabList = [
    {
      label: "About this project",
      content: (
        <>
          <div className="text">
            The Golden House is a leaderboard website for the popular RPG Game:
            Genshin Impact.
            <br /> High profile Genshin Impact youtubers, speedrunners, and
            DPSers use this website to show off their characters and in-game
            achievements.
            <div style={{ marginTop: "1rem", color: pageColorTheme }}>
              There are two defined playstyles
            </div>
            <ul>
              <li>
                Speedrunners: players that defeat bosses/clear content very
                quickly, usually under 30 seconds
              </li>
              <li>
                DPSers: players that stack all buffs on a single character to
                output maximal damage in a single frame.
              </li>
              <li>DPS = Damage Per Screenshot</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      label: "My Contributions",
      content: (
        <>
          <div className="text">
            <ul>
              <li>
                Created the DPS-entry Schema for users to show off how hard
                their character can hit in one frame
              </li>
              <li>
                Implemented GET and POST APIs using efficient mongoose queries
                in Typescript
              </li>
              <li>
                Built a data migration script using Pandas to migrate 700+
                entries from tablepress spreadsheets into MongoDB Built a
                user-friendly leaderboard with filters using ReactJS and CSS
              </li>
              <li>
                Built an approval table for our moderation team to effectively
                approve/reject entries
              </li>
              <li>
                Used Git/Github to maintain clean workflow through rebasing
                branches and pull requests
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];
  const content = (
    <>
      <div className="title" style={{ color: pageColorTheme }}>
        The Golden House
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
        </div>
      </div>
      <div className="links">
        <a
          href="https://genshin.tghofficial.com/"
          target="_blank"
          rel="noreferrer"
          className="redirect"
          style={{ color: pageColorTheme }}
        >
          https://genshin.tghofficial.com/
        </a>
      </div>
    </>
  );

  return <ContentBox content={content} />;
}
