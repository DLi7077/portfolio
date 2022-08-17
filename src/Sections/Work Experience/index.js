import McDonalds from "./McDonalds";
import NYUFCU from "./NYU Federal Credit Union";
import Popeyes from "./Popeyes";

export default function WorkExperience() {
  return (
    <div>
      <div
        className="section-title"
        style={{ textAlign: "center", color: "#FF7549" }}
      >
        Just your typical fast food worker
      </div>
      <div className="block-wrapper">
        <NYUFCU />
        <Popeyes />
        <McDonalds />
      </div>
    </div>
  );
}
