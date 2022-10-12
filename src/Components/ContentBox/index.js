import "./styles.css";

export default function ContentBox(props) {
  return (
    <div className="content-component" style={props.style}>
      {props.children}
    </div>
  );
}
