import { getProjects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const projects = getProjects();

  return (
    <section id="projects" className="section">
      <p className="sectionLabel mono">Projects</p>
      <div className="projectsGrid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
