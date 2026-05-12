import type { ApplicationContent } from "./content/schemas";
import { loadApplications } from "./content/loaders";
import { isSanityConfigured } from "./sanity/client";
import { fetchSanityApplications } from "./sanity/queries";
import { warnSanityFallback } from "./sanity/warn-fallback";

export type ProjectSection = ApplicationContent["sections"][number];
export type Project = ApplicationContent;

export async function getProjects(): Promise<Project[]> {
  if (isSanityConfigured()) {
    try {
      const fromSanity = await fetchSanityApplications();
      if (fromSanity.length > 0) return fromSanity;
    } catch (error) {
      warnSanityFallback("applications", error);
    }
  }

  return loadApplications();
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}
