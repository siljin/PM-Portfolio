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
    slug: "project-one",
    title: "Project Title One",
    descriptor: "One-line description of what problem this solved and for whom.",
    tag: "Product · Teardown",
    coverSrc: "/images/projects/placeholder.svg",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Stakeholders needed a shared view of why users dropped off before checkout. The goal was to align product, design, and analytics on a single narrative backed by evidence.",
        ],
      },
      {
        title: "What I did",
        paragraphs: [
          "Facilitated problem framing, mapped the funnel with data partners, and ran a lightweight teardown of competitor flows. Shipped a one-page decision memo with recommended experiments and success metrics.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "The team prioritized two experiments for the next sprint; leadership used the memo as the reference doc for quarterly planning.",
        ],
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Title Two",
    descriptor: "One-line description of what problem this solved and for whom.",
    tag: "Market Research",
    coverSrc: "/images/projects/placeholder.svg",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "We needed to validate positioning for a new segment without burning months on a full study.",
        ],
      },
      {
        title: "What I did",
        paragraphs: [
          "Designed a phased research plan, scripted interviews, synthesized themes, and translated findings into opportunity areas with sizing notes.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Product and GTM agreed on a narrow ICP for the pilot; roadmap bets were re-sequenced based on confidence and impact.",
        ],
      },
    ],
  },
  {
    slug: "project-three",
    title: "Project Title Three",
    descriptor: "One-line description of what problem this solved and for whom.",
    tag: "Data Analysis",
    coverSrc: "/images/projects/placeholder.svg",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Usage data was noisy and dashboards did not answer the one question execs kept asking: where is value leaking?",
        ],
      },
      {
        title: "What I did",
        paragraphs: [
          "Partnered with analytics to define cohorts, built a repeatable weekly view, and wrote plain-language annotations so non-analysts could act on the numbers.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Cross-functional reviews moved from debating charts to agreeing on two measurable levers to move next.",
        ],
      },
    ],
  },
  {
    slug: "project-four",
    title: "Project Title Four",
    descriptor: "One-line description of what problem this solved and for whom.",
    tag: "Product · Strategy",
    coverSrc: "/images/projects/placeholder.svg",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "The portfolio had overlapping initiatives; teams needed a clear strategy stack from vision to next-quarter bets.",
        ],
      },
      {
        title: "What I did",
        paragraphs: [
          "Ran working sessions to clarify user and business outcomes, mapped initiatives to outcomes, and defined kill criteria for low-signal work.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Leadership signed off on a ranked backlog with explicit tradeoffs; two initiatives were paused to free capacity.",
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
