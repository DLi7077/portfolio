import AboutMe from "./Sections/About Me";
import Projects from "./Sections/Projects";
import WorkExperience from "./Sections/Work Experience";
import TabGroup from "./Components/TabGroup";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { useState } from "react";

const appStyle = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2rem",
  overflow: "hidden",
};

function App() {
  const [yPos, setYPos] = useState(window.scrollY);
  const tabs = [
    {
      label: <div className="title">Projects</div>,
      content: <Projects />,
    },
    {
      label: <div className="title">Work</div>,
      content: <WorkExperience />,
    },
  ];

  window.onscroll = () => {
    setYPos(window.scrollY);
  };

  return (
    <>
      <div style={appStyle}>
        <AboutMe />
        <TabGroup tabs={tabs} />
      </div>
      {yPos > 400 && <ScrollToTopButton />}
    </>
  );
}

export default App;
