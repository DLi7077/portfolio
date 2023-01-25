import FigmaIcon from "../../Assets/icons/Figma.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.css";

export default function ExternalLinkIcon(props) {
  const Icon = (props) => {
    if (props.type === "Github") {
      return <GitHubIcon style={{ ...props.style }} />;
    }
    if (props.type === "Figma")
      return (
        <img
          src={FigmaIcon}
          style={{ width: "32px", ...props.style }}
          alt="figma"
        />
      );
  };

  return (
    <div className="redirect-wrapper">
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="redirect"
        style={{ color: "black" }}
      >
        <Icon type={props.type} style={{ fontSize: "36px" }} />
      </a>
      {props.label}
    </div>
  );
}
