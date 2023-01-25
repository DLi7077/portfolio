import approvalTable from "../Assets/slides/The Golden House/ApprovalTable.png";
import leaderboard from "../Assets/slides/The Golden House/Leaderboard.png";

import weeklyProgress from "../Assets/slides/Katsudon Leetcode/weekly-progress.png";
import profilePage from "../Assets/slides/Katsudon Leetcode/profile-page.png";
import profileProblems from "../Assets/slides/Katsudon Leetcode/profile-problems.png";

import osuSongDemo from "../Assets/slides/Osu Song Selection/demo.gif";

import osuThemeGif from "../Assets/slides/Osu Theme/osu-theme.gif";

import MLapi from "../Assets/slides/Katsudon ML/api-response.png";

import startingStats from "../Assets/slides/Katsudon Optimizer/starting-stats.png";
import artifactPref from "../Assets/slides/Katsudon Optimizer/artifact-pref.png";
import optimizeResult from "../Assets/slides/Katsudon Optimizer/result.png";

export const PROJECTS = [
  {
    title: "The Golden House",
    highlight_color: "#FFBC57",
    slides: [approvalTable, leaderboard],
    tools_used: [
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
    ],
    link: "https://genshin.tghofficial.com/",
    tabs: [
      {
        label: "About this project",
        content: (
          <>
            <div className="text" style={{ width: "100%" }}>
              The Golden House is a leaderboard website for the popular
              Role-Playing Game: Genshin Impact.
              <br />
              Our database yields 1,300+ users and popular content creators with
              10,000+ automated speedruns showing off their highly invested
              characters and achievements
              <div style={{ marginTop: "1rem" }}>
                There are two types of speedruns
              </div>
              <ul>
                <li>
                  Speedrunners: players that defeat bosses/clear content very
                  quickly, usually under 30 seconds
                </li>
                <li>
                  DPSers: players who accumulate a lot of buffs on a single
                  character to maximize damage output in a single frame.
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
            <div className="text" style={{ width: "100%" }}>
              <ul>
                <li>
                  Engineered a full stack MERN application to host a leaderboard
                  displaying the achievements of 900+ users
                </li>
                <li>
                  Architected a framework of services, controllers, and RESTful
                  API endpoints to communicate client with server
                </li>
                <li>
                  Migrated 700+ entries from TablePress spreadsheets into
                  production by creating a data migration script
                </li>
                <li>
                  Optimized our moderation team's workflow by 300% by creating
                  an approval table to easily modify submissions
                </li>
                <li>
                  Reduced the runtime of an aggregation query pipeline by ~65%
                  by performing a database backfill using a Go script
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
    date: "February 2022 - Present",
  },
  {
    title: "Katsudon Leetcode",
    highlight_color: "#F263E0",
    slides: [weeklyProgress, profilePage, profileProblems],
    tools_used: [
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
    ],
    link: "https://dli7077.github.io/katsudon-client/#/weekly-progress",
    external_links: [
      {
        type: "Github",
        label: "Chrome Extension",
        link: "https://github.com/DLi7077/katsudon-leetcode-extension",
      },
      {
        type: "Github",
        label: "MongoDB Server",
        link: "https://github.com/DLi7077/katsudon-server-v2",
      },
      {
        type: "Figma",
        label: "Original Design",
        link: "https://www.figma.com/proto/mdTjxsEwW4RGlNNCMM1eMd/Katsudon-Leaderboard?page-id=0%3A1&node-id=17%3A242&viewport=337%2C376%2C0.86&scaling=min-zoom",
      },
    ],
    tabs: [
      {
        label: "About this project",
        content: (
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>
                Katsudon Leetcode is a social platform for users to display
                their Leetcode solutions and skill progression.
              </li>
              <li>
                The hope is to encourage CS Majors to proactively prepare for
                technical interviews by trying out problems their friends have
                attempted/solved.
              </li>
              <li>
                It utilizes the Katsudon Chrome Extension to automatically
                upload problem attempts/solutions from leetcode.com
              </li>
            </ul>

            <div className="links">
              <a
                href="https://dli7077.github.io/katsudon-client/#/profile?user_id=6306b34920cf5f80f7d0c20d"
                target="_blank"
                rel="noreferrer"
                className="redirect"
                style={{ color: "#F263E0", fontSize: "1.5rem" }}
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
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>
                Engineered a social platform from scratch to encourage users to
                try out LeetCode problems with their friends
              </li>
              <li>
                Created and published a Chrome Extension to capture 1000+
                automated submissions for authorized users
              </li>
              <li>
                Built a server with REST API endpoints storing solutions and
                users in MongoDB
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
          <div className="text" style={{ width: "100%" }}>
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
                ... Is there a way to tell which problems our friends have
                solved? It doesn't seem like leetcode has a social platform
                outside of the discuss section.
              </li>
              <li>... Guess I'll try to make it myself</li>
            </ul>
          </div>
        ),
      },
    ],
    date: "August 2022 - Present",
  },
  {
    title: "Katsudon Optimizer",
    highlight_color: "#FF7979",
    slides: [startingStats, artifactPref, optimizeResult],
    tools_used: [
      "React",
      "MUI",
      "NodeJS",
      "Javascript",
      "CSS",
      "Typescript",
      "C++",
      "Figma",
    ],
    link: "https://dli7077.github.io/katsudon-optimizer-client/",
    external_links: [
      {
        type: "Github",
        label: "Website Repo",
        link: "https://github.com/DLi7077/katsudon-optimizer-client",
      },
      {
        type: "Github",
        label: "Server Repo",
        link: "https://github.com/DLi7077/katsudon-optimizer-server",
      },
    ],
    tabs: [
      {
        label: "About this project",
        content: (
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>
                Made an optimizer for The Golden House's theorycrafting team to
                validate and optimize character artifacts
              </li>
              <li>
                Built a Typescript server that handles heavy computation to save
                hours of manual guess work to find the best artifact combination
              </li>
              <li>
                Created a JSON Library in C++ to pass REST request body into the
                script
              </li>
              <li>
                Originally used a built force optimization approach that would
                have taken 2 years. I modified the algorithm with a nice touch
                of Evolutionary Computation to reduce it to just 30 seconds.
              </li>
              <li>
                Front end built in React with stat inputs - basically the
                equivalent as a step up from To Do lists
              </li>
            </ul>
          </div>
        ),
      },
    ],
    date: "Janurary 2023",
  },
  {
    title: "osu! Song Selection",
    highlight_color: "#FF66AB",
    slides: [osuSongDemo],
    tools_used: ["React", "NodeJS", "Javascript", "CSS"],
    link: "https://dli7077.github.io/osu-song-selection/",
    external_links: [
      {
        type: "Github",
        label: "Website Repo",
        link: "https://github.com/DLi7077/osu-song-selection",
      },
    ],
    tabs: [
      {
        label: "About this project",
        content: (
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>Simulation of osu!'s in game song selection screen</li>
              <li>
                Used React state and CSS animations and transitions for making
                stuff pretty
              </li>
              <li>JavaScript's HTMLAudioElement is pretty cool</li>
            </ul>
          </div>
        ),
      },
    ],
    date: "Janurary 2023",
  },
  {
    title: "osu! Color Theme",
    highlight_color: "#ff66ae",
    slides: [osuThemeGif],
    tools_used: ["Javascript", "React", "CSS", "MUI"],
    external_links: [
      {
        type: "Github",
        label: "Discord Bot",
        link: "https://github.com/DLi7077/katsudon-discord-bot",
      },
      {
        type: "Github",
        label: "Postgres Server",
        link: "https://github.com/DLi7077/katsudon-pg-server",
      },
    ],
    tabs: [
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
              style={{ color: "#ff66ae" }}
              href="https://osu.ppy.sh/community/forums"
              target="_blank"
              rel="noreferrer"
            >
              https://osu.ppy.sh/community/forums
            </a>
          </div>
        ),
      },
    ],
    date: "August 2022",
  },
  {
    title: "Katsudon ML",
    highlight_color: "#7BD0FF",
    slides: [MLapi],
    tools_used: ["Postgres", "NodeJS", "Typescript", "Postman", "Discord"],
    external_links: [
      {
        type: "Github",
        label: "Discord Bot",
        link: "https://github.com/DLi7077/katsudon-discord-bot",
      },
      {
        type: "Github",
        label: "Postgres Server",
        link: "https://github.com/DLi7077/katsudon-pg-server",
      },
    ],
    tabs: [
      {
        label: "About this project",
        content: (
          <div className="text">
            KatsudonML is a Discord Bot that records messages of discord users
            (with their permission) and predicts the speaker of a provided
            sentence.
            <div style={{ height: "0.5rem" }} />
            <div style={{ height: "0.5rem" }} />
            End goal is to predict user behavior and answer some random
            questions:
            <br />
            <ul>
              <li>"Who is most likely to send a message past 12am?"</li>
              <li>"Who is most likely to say, 'What the dog doing?'"</li>
              <li>"Devin just said 'this is'- What will he say next? "</li>
            </ul>
            <code>I completely forgot about this project</code>
          </div>
        ),
      },
      {
        label: "My Contributions",
        content: (
          <div className="text">
            <ul>
              <li>
                Designed multiple schemas using MongoDB to store users,
                messages, and discord channels.
              </li>
              <li>
                Implemented GET and POST APIs to record messages and retrieve
                user word usage statistics
              </li>
              <li>
                Used discord developer documentation to build a discord bot that
                actively listens for messages of volunteering users in a server
              </li>
              <li>
                Implementing Machine Learning Fundamentals like Naive Bayes to
                guess the speaker of a given message
              </li>
            </ul>
          </div>
        ),
      },
    ],
    date: "August 2022 - September 2022",
  },
];
