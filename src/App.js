import AboutMe from "./Sections/About Me";
import Projects from "./Sections/Projects";

const appStyle = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "6rem",
};

function App() {
  return (
    <div style={appStyle}>
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
