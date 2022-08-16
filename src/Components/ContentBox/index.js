import "./styles.css";

export default function ContentBox(props) {

  return (
    <div className="content-box" style={props.style}>
      {props.content}
    </div>
  );
}
