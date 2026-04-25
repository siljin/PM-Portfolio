import { waystarDeckUrl, retentionDeckUrl, searchDeckUrl } from "./global-variables";

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  category: string;
  desc: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  tags: string[];
  deckUrl: string;
  sections?: ProjectSection[];
  imageSrc?: string;
};

const projects: Project[] = [
  {
    id: "waystar",
    eyebrow: "P. 01",
    title: "RCM Market Strategy",
    category: "Healthcare Technology · Strategy",
    desc: "Delivered a market-level strategic assessment of the $23B U.S. Revenue Cycle Management landscape for Waystar. Mapped value chain dynamics across eight stages, identified structural moats, and produced ranked recommendations with a defined 2026–2028 action window.",
    metric1: "$23B",
    metric1Label: "TAM analyzed",
    metric2: "5",
    metric2Label: "ranked strategic moves",
    tags: ["Healthcare", "Strategy", "AI", "Market Analysis"],
    deckUrl: waystarDeckUrl,
    imageSrc: "/images/projects/Waystar-Logo.png",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Conducted a market-level strategic assessment of Waystar's position within the U.S. healthcare Revenue Cycle Management (RCM) market — a $23B space undergoing rapid structural disruption from AI, interoperability mandates, and payer consolidation.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "Analyzed the revenue integrity value chain across eight integrated stages — from patient access and prior authorization through CDI, autonomous coding, and denials management. Applied Porter's Five Forces at both market and stage level, built a strategic group map across eight competitors (including Epic, Optum, R1, and AKASA), and evaluated Waystar's right-to-win at each stage of the chain.",
        ],
      },
      {
        title: "Key Findings",
        paragraphs: [
          "Front-end stages (eligibility, prior auth) are commoditizing under AI automation pressure",
          "Mid-cycle stages (CDI, prebill review) represent the highest-value expansion opportunity for players with clinical data access",
          "Waystar's structurally inimitable position lies in a cross-organizational payer intelligence feedback loop — spanning CDI, prebill, denials, and prior auth — that no competitor can replicate at scale",
        ],
      },
      {
        title: "Deliverables",
        paragraphs: [
          "Produced an executive-style strategy deck including a full value chain map, Porter's Five Forces analysis, competitive capability map, Build/Buy/Partner evaluation matrix, and five ranked strategic recommendations scored against defensibility, addressability, achievability, time-to-value, and risk.",
        ],
      },
      {
        title: "Top Recommendation",
        paragraphs: [
          "Ship Denial Insights into PreBill in 1H 2026 and scale payer-calibrated prebill scoring as the primary moat mechanism — before Epic Payer Platform scales past 25 national payers, the window the analysis identifies as 2026–2028.",
        ],
      },
    ],
  },
  {
    id: "retention",
    eyebrow: "P. 02",
    title: "Habit-Loop Retention Feature",
    category: "Retention & Data",
    desc: "Worked with the DS team to identify 30-day churn signals. Built a daily digest feature to reinforce habit formation and keep users engaged.",
    metric1: "−15%",
    metric1Label: "30-day churn",
    metric2: "+34%",
    metric2Label: "feature adoption",
    tags: ["Retention", "Data Analytics", "Email"],
    deckUrl: retentionDeckUrl,
  },
  {
    id: "search",
    eyebrow: "P. 03",
    title: "Search Overhaul",
    category: "0 → 1 Search",
    desc: "Rebuilt search from the ground up — semantic ranking, filter redesign, and a new results layout. Shipped in 8 weeks with 4 concurrent experiments.",
    metric1: "+40%",
    metric1Label: "search success rate",
    metric2: "−28%",
    metric2Label: "avg search time",
    tags: ["0 → 1", "Search", "Ranking"],
    deckUrl: searchDeckUrl,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
