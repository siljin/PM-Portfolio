import type { ApplicationContent } from "./content/schemas";
import { isSanityConfigured } from "./sanity/client";
import { fetchSanityApplications } from "./sanity/queries";
import { warnSanityFallback } from "./sanity/warn-fallback";

export type ProjectSection = ApplicationContent["sections"][number];
export type Project = ApplicationContent;

export async function getProjects(): Promise<Project[]> {
  if (!isSanityConfigured()) {
    warnSanityFallback("applications");
    return [];
  }

  try {
    return await fetchSanityApplications();
  } catch (error) {
    warnSanityFallback("applications", error);
    return [];
  }
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
