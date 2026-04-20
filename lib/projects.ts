export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  descriptor: string;
  tag: string;
  coverSrc: string;
  sections: ProjectSection[];
};

const projects: Project[] = [
  {
    slug: "prior-auth-workflow",
    title: "Prior Authorization Workflow",
    descriptor: "Agentic AI system to automate insurance prior authorization requests—reducing manual effort and improving approval turnaround.",
    tag: "AI Agent · Healthcare",
    coverSrc: "/images/projects/placeholder.svg",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Prior authorization is a bottleneck in healthcare workflows—clinicians spend hours manually compiling patient data, insurance requirements, and medical evidence to submit authorization requests. The process is error-prone, delays patient care, and creates friction for providers.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "Designed and implemented an agentic AI workflow using Dify that orchestrates multiple specialized agents: a data extraction agent that parses patient records, a requirements agent that maps insurance policies to needed documentation, a clinical evidence agent that summarizes relevant medical research, and a submission agent that compiles and formats the final request. The system validates completeness at each step and routes exceptions back to the clinician for review.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Reduced prior auth submission time from 2–3 hours to 15–20 minutes per request. Improved first-pass approval rates by ensuring complete documentation. Created a reusable agent architecture that can be adapted for other insurance workflows.",
        ],
      },
    ],
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
