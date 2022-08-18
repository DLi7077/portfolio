import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const buttonStyle = {
  position: "fixed",
  bottom: "3vh",
  right: "3vw",
  backgroundColor: "#62B9FF",
  width: "4rem",
  height: "4rem",
  zIndex: 1000,
};
export default function ScrollToTopButton() {
  return (
    <IconButton
      style={buttonStyle}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUpwardIcon style={{ fontSize: "2rem" }} />
    </IconButton>
  );
}
