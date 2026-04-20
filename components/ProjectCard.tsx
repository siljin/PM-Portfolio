import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

const icons = ["◈", "◇", "○", "◉"];

export function ProjectCard({ project }: ProjectCardProps) {
  const iconIndex = Math.abs(project.slug.charCodeAt(0)) % icons.length;
  const icon = icons[iconIndex];
  const tags = project.tag.split(" · ");

  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-icon">{icon}</div>
      <div className="project-name">
        {project.title}
        <svg width="12" height="12" fill="none" viewBox="0 0 16 16">
          <path
            d="M4 12L12 4M6 4h6v6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="project-desc">{project.descriptor}</div>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
