import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Boxes,
  Database,
  FileSpreadsheet,
  Figma,
  GitBranch,
  Hammer,
  LayoutGrid,
  LineChart,
  MessageSquare,
  PenTool,
  Presentation,
  Sheet,
  Sparkles,
  Table,
  Workflow,
} from "lucide-react";

export type SkillItem = {
  name: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  id: string;
  label: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "thinking",
    label: "Thinking Tools",
    items: [
      { name: "Whimsical", icon: LayoutGrid },
      { name: "Figma", icon: Figma },
      { name: "Notion", icon: Sheet },
      { name: "Miro", icon: PenTool },
      { name: "ChatGPT", icon: MessageSquare },
      { name: "Claude", icon: Sparkles },
    ],
  },
  {
    id: "build",
    label: "Build Tools",
    items: [
      { name: "Vercel", icon: GitBranch },
      { name: "Cursor", icon: Bot },
      { name: "Lovable", icon: Hammer },
      { name: "Bolt", icon: Boxes },
      { name: "n8n", icon: Workflow },
      { name: "Framer", icon: Presentation },
      { name: "Emergent", icon: Sparkles },
    ],
  },
  {
    id: "data",
    label: "Data Tools",
    items: [
      { name: "Python", icon: BarChart3 },
      { name: "SQL", icon: Database },
      { name: "Tableau", icon: LineChart },
      { name: "Power BI", icon: BarChart3 },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Google Sheets", icon: Table },
    ],
  },
];
