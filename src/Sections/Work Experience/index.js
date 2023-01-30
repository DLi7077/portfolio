import { WORK_EXPERIENCES } from "../../Constants/work-experience";
import WorkExperienceItem from "../../Components/WorkExperienceItem";

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
        {WORK_EXPERIENCES.map((workExp, idx) => (
          <WorkExperienceItem key={`work-exp-${idx}`} workExp={workExp} />
        ))}
      </div>
    </div>
  );
}
