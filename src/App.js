import AboutMe from "./Sections/About Me";

const appStyle = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8rem",
};
function App() {
  return (
    <div style={appStyle}>
      <AboutMe />
    </div>
  );
}

export default App;
