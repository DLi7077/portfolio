import ContentBox from "../../../Components/ContentBox";
import IconList from "../../../Components/IconList";
import Slideshow from "../../../Components/Slideshow";
import Leaderboard from "../../../Assets/slides/Golden House/Leaderboard.png";
import ApprovalTable from "../../../Assets/slides/Golden House/ApprovalTable.png";
import TabGroup from "../../../Components/TabGroup";
import "../../styles.css";

export default function TheGoldenHouse() {
  const pageColorTheme = "#FFBC57";
  const slides = [Leaderboard, ApprovalTable];
  const icons = [
    "MongoDB",
    "NodeJS",
    "Typescript",
    "Postman",
    "Python",
    "Pandas",
    "Javascript",
    "React",
    "CSS",
    "MUI",
    "Golang",
  ];
  const tabList = [
    {
      label: "About this project",
      content: (
        <>
          <div className="text">
            The Golden House is a leaderboard website for the popular Role-Playing Game:
            Genshin Impact.
            <br /> High profile Genshin Impact youtubers, speedrunners, and
            DPSers use this website to show off their powerful/ highly invested
            characters and achievements.
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
                Engineered a full stack application to host a leaderboard
                displaying the achievements of 900+ users
              </li>
              <li>
                Automated user submissions using REST APIs implemented with
                Mongoose queries
              </li>
              <li>
                Migrated 700+ entries from TablePress spreadsheets into
                production by creating a data migration script
              </li>
              <li>
                Optimized our moderation team's workflow by 300% by creating an
                approval table to easily modify submissions
              </li>
              <li>
                Reduced the runtime of an aggregation query pipeline by ~70% by
                performing a database backfill using a Go script
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
        </div>
        <div className="article">
          <div className="subtitle" style={{ color: pageColorTheme }}>
            Tools Used
            <IconList icons={icons} />
          </div>
          <div style={{ width: "100%" }}>
            <TabGroup tabs={tabList} color={pageColorTheme} />
          </div>
          <div className="bottom-right">February 2022 - Present</div>
        </div>
      </div>
    </>
  );

  return <ContentBox>{content}</ContentBox>;
}
