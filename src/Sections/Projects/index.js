import { PROJECTS } from "../../Constants/projects";
import ProjectItem from "../../Components/ProjectItem";

export default function Projects() {
  return (
    <div>
      <div
        className="section-title"
        style={{ textAlign: "center", color: "#6CFF7B" }}
      >
        Every project is a chance to grow!
      </div>
      <div className="block-wrapper">
        {PROJECTS.map((project, idx) => (
          <ProjectItem key={`project-${idx}`} project={project} />
        ))}
      </div>
    </div>
  );
}
