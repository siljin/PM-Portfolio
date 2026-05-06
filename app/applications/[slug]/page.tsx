"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { full_name } from "@/lib/global-variables";
import {
  getProjectBySlug,
  getProjectSlugs,
  type Project,
} from "@/lib/applications";
import { useState } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — ${full_name}`,
    description: project.descriptor,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}

function ProjectDetail({ project }: { project: Project }) {
  const [showArchModal, setShowArchModal] = useState(false);
  const [showSeqModal, setShowSeqModal] = useState(false);

  return (
    <article className="projectPage">
      <Link href="/#applications" className="projectPageBack">
        ← Back to applications
      </Link>
      <span className="projectPageTag mono">{project.tag}</span>
      <h1>{project.title}</h1>
      <p className="projectPageLead">{project.descriptor}</p>
      <Image
        className="projectPageImg"
        src={project.coverSrc}
        alt=""
        width={800}
        height={450}
        priority
      />

      <div className="projectPageActions">
        <Link href={project.tryItUrl} className="projectPageBtn">
          Try It
        </Link>
        {project.architectureDiagram && (
          <button
            onClick={() => setShowArchModal(true)}
            className="projectPageBtn projectPageBtn--secondary"
          >
            View Architecture
          </button>
        )}
        {project.sequenceDiagram && (
          <button
            onClick={() => setShowSeqModal(true)}
            className="projectPageBtn projectPageBtn--secondary"
          >
            Sequence Diagram
          </button>
        )}
      </div>

      {project.sections.map((s) => (
        <section key={s.title} className="projectPageSection">
          <h2>{s.title}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={`${s.title}-${i}`}>{p}</p>
          ))}
          {s.diagramSrc && (
            <div className="projectPageDiagram">
              <Image
                src={s.diagramSrc}
                alt={`${s.title} diagram`}
                width={800}
                height={600}
              />
            </div>
          )}
        </section>
      ))}

      {showArchModal && project.architectureDiagram && (
        <ArchitectureModal
          projectTitle={project.title}
          diagramUrl={project.architectureDiagram}
          onClose={() => setShowArchModal(false)}
        />
      )}

      {showSeqModal && project.sequenceDiagram && (
        <SequenceDiagramModal
          projectTitle={project.title}
          diagramUrl={project.sequenceDiagram}
          onClose={() => setShowSeqModal(false)}
        />
      )}
    </article>
  );
}

function ArchitectureModal({
  projectTitle,
  diagramUrl,
  onClose,
}: {
  projectTitle: string;
  diagramUrl: string;
  onClose: () => void;
}) {
  return (
    <>
      <div className="modalOverlay" onClick={onClose} />
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>
          ✕
        </button>
        <h2 className="modalTitle">Architecture Diagram</h2>
        <div className="modalImageContainer">
          <Image
            src={diagramUrl}
            alt={`${projectTitle} architecture diagram`}
            width={800}
            height={600}
          />
        </div>
      </div>
    </>
  );
}

function SequenceDiagramModal({
  projectTitle,
  diagramUrl,
  onClose,
}: {
  projectTitle: string;
  diagramUrl: string;
  onClose: () => void;
}) {
  return (
    <>
      <div className="modalOverlay" onClick={onClose} />
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>
          ✕
        </button>
        <h2 className="modalTitle">Sequence Diagram</h2>
        <div className="modalImageContainer">
          <Image
            src={diagramUrl}
            alt={`${projectTitle} sequence diagram`}
            width={800}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
