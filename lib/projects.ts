import type { PortfolioProjectContent } from "./content/schemas";
import { loadPortfolioProjects } from "./content/loaders";
import { isSanityConfigured } from "./sanity/client";
import { fetchSanityProjects } from "./sanity/queries";
import { warnSanityFallback } from "./sanity/warn-fallback";

export type ProjectSection = NonNullable<
  PortfolioProjectContent["sections"]
>[number];
export type Project = PortfolioProjectContent;

export async function getProjects(): Promise<Project[]> {
  if (isSanityConfigured()) {
    try {
      const fromSanity = await fetchSanityProjects();
      if (fromSanity.length > 0) return fromSanity;
    } catch (error) {
      warnSanityFallback("projects", error);
    }
  }

  return loadPortfolioProjects();
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.id === id);
}
