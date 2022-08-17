import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const buttonStyle = {
  position: "fixed",
  bottom: "2vw",
  right: "3vh",
  backgroundColor: "#62B9FF",
  zIndex: 1000,
};
export default function ScrollToTopButton() {
  return (
    <IconButton
      style={buttonStyle}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
}
