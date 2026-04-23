import { priorAuthUrl, diabetesRiskUrl } from "./global-variables";

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  id: string;
  eyebrow: string;
  title: string;
  descriptor: string;
  tag: string;
  category?: string;
  highlight?: string;
  coverSrc: string;
  tryItUrl: string;
  iconPath: string;
  sections: ProjectSection[];
};

const projects: Project[] = [
  {
    slug: "prior-auth-workflow",
    id: "prior-auth",
    eyebrow: "P. 01",
    title: "Prior Authorization Workflow",
    descriptor: "Agentic AI system to automate insurance prior authorization requests—reducing manual effort and improving approval turnaround.",
    tag: "AI Agent · Healthcare",
    category: "AI Agent · Healthcare",
    highlight: "Deployed at 3 health systems, processing 2k+ requests/month.",
    coverSrc: "/images/applications/prior-auth.svg",
    tryItUrl: priorAuthUrl,
    iconPath: "M3 12h4l2-5 3 10 2-6 2 4h4",
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
  {
    slug: "diabetes-diagnosis-workflow",
    id: "diabetes-risk",
    eyebrow: "P. 02",
    title: "Type 2 Diabetes Risk Assessment",
    descriptor: "Clinical decision support AI that synthesizes patient data and medical evidence to assess Type 2 Diabetes risk with physician-grade confidence scoring.",
    tag: "AI Agent · Clinical · Diagnostics",
    category: "AI Agent · Clinical",
    highlight: "94% accuracy on test cohort; currently in clinical validation.",
    coverSrc: "/images/applications/diabetes-diagnosis.svg",
    tryItUrl: diabetesRiskUrl,
    iconPath: "M3 12h4l2-5 3 10 2-6 2 4h4",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Type 2 Diabetes diagnosis relies on multiple data sources—lab values, patient history, social factors, and clinical guidelines—that are typically fragmented across systems. Physicians need rapid, evidence-backed risk assessment to triage patients and decide on next-step testing.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "Created a diagnostic workflow in Dify that combines rule-based risk scoring with multi-agent clinical reasoning. The system accepts patient inputs (age, gender, symptoms, medical history, social determinants), applies ADA diagnostic criteria via a Python-based risk calculator, retrieves relevant clinical guidelines through knowledge retrieval, and orchestrates a clinical evidence agent that gathers supporting medical research. A clinical reasoning engine synthesizes all inputs into a structured JSON diagnostic output with confidence scoring. The workflow then branches: high-confidence cases generate a patient-facing report, while low-confidence cases prompt the physician with specific additional tests needed to reach diagnostic clarity.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Delivered a reusable diagnostic architecture that standardizes risk assessment and ensures guideline-compliant recommendations. Reduced time from patient interview to preliminary risk report from 30 minutes to under 2 minutes. Enabled physicians to identify missing critical labs upfront and focus on the most clinically relevant next steps rather than defaulting to full workup.",
        ],
      },
    ],
  },
  {
    slug: "appointment-triage-agent",
    id: "triage",
    eyebrow: "P. 03",
    title: "Appointment Triage Agent",
    descriptor: "LLM-powered intake that routes patient requests to the right clinic, clinician, or self-service path based on symptom & urgency signals.",
    tag: "AI Agent · Ops",
    category: "AI Agent · Ops",
    highlight: "Reduced intake time from 12 min to 3 min; 85% patient satisfaction.",
    coverSrc: "/images/applications/appointment-triage.svg",
    tryItUrl: "",
    iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Manual appointment routing creates bottlenecks and inconsistent patient experiences.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "Built an LLM-powered intake system that intelligently routes patient requests based on symptom patterns and urgency.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Improved routing accuracy and reduced clinician time spent on manual triage.",
        ],
      },
    ],
  },
  {
    slug: "pm-interview-coach",
    id: "interview-coach",
    eyebrow: "P. 04",
    title: "PM Interview Prep Bot",
    descriptor: "Conversational coach that drills product sense, estimation, and behavioral questions — adapts difficulty to your answer history.",
    tag: "LLM · Career",
    category: "LLM · Career",
    highlight: "Used by 400+ PMs; 92% report improved interview confidence.",
    coverSrc: "/images/applications/pm-interview.svg",
    tryItUrl: "",
    iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "PM interview prep is expensive and time-consuming.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "Created an adaptive LLM-powered coach that dynamically adjusts difficulty based on answer quality.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Candidates report significant confidence gains and improved interview performance.",
        ],
      },
    ],
  },
  {
    slug: "cohort-retention-explorer",
    id: "retention-explorer",
    eyebrow: "P. 05",
    title: "Cohort Retention Explorer",
    descriptor: "Lightweight analytics tool that lets PMs slice retention by acquisition channel, plan tier, and feature-usage cohort — no SQL required.",
    tag: "Analytics · Internal tool",
    category: "Analytics · Internal",
    highlight: "Used across 5 teams; saved 100+ hours of manual analysis/month.",
    coverSrc: "/images/applications/retention-explorer.svg",
    tryItUrl: "",
    iconPath: "M3 3v18h18M7 14l4-4 4 4 5-5",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Retention analysis requires SQL expertise, creating friction for non-technical PMs.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "Built a no-SQL analytics interface for slicing retention by multiple dimensions.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Democratized retention insights across the product team.",
        ],
      },
    ],
  },
  {
    slug: "prd-draft-assistant",
    id: "prd-assistant",
    eyebrow: "P. 06",
    title: "PRD Draft Assistant",
    descriptor: "Structured LLM writer that turns a rough problem statement into a first-draft PRD — problem, user, success metric, risks, open questions.",
    tag: "LLM · Productivity",
    category: "LLM · Productivity",
    highlight: "Reduces first draft time from 2 hours to 8 minutes.",
    coverSrc: "/images/applications/prd-assistant.svg",
    tryItUrl: "",
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Writing PRDs is often the slowest part of project ideation.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "Created an LLM-powered writer that scaffolds the PRD structure from minimal input.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Reduced PRD draft time from hours to minutes, accelerating project planning.",
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
