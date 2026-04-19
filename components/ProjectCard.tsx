import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="projectCard">
      <Image
        className="projectImg"
        src={project.coverSrc}
        alt=""
        width={800}
        height={450}
        sizes="(max-width: 700px) 100vw, 50vw"
      />
      <span className="projectTag mono">{project.tag}</span>
      <p className="projectTitle">{project.title}</p>
      <p className="projectDesc">{project.descriptor}</p>
      <span className="projectArrow" aria-hidden>
        ↗
      </span>
    </Link>
  );
}
