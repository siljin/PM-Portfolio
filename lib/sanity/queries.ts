import { z } from "zod";
import { getSanityClient } from "./client";
import {
  applicationSchema,
  portfolioProjectSchema,
  siteSettingsSchema,
} from "@/lib/content/schemas";

const sanityApplicationSchema = applicationSchema.extend({
  _type: z.literal("application").optional(),
});
const sanityProjectSchema = portfolioProjectSchema.extend({
  _type: z.literal("project").optional(),
});
const sanitySiteSettingsSchema = siteSettingsSchema.extend({
  _type: z.literal("siteSettings").optional(),
});

const sanityApplicationsSchema = z.array(sanityApplicationSchema);
const sanityProjectsSchema = z.array(sanityProjectSchema);

const applicationsQuery = `*[_type == "application"] | order(eyebrow asc) {
  "slug": slug.current, id, eyebrow, title, descriptor, tag, category, highlight, coverSrc, tryItUrl, iconPath,
  architectureDiagram, sequenceDiagram,
  sections[]{title, paragraphs, diagramSrc}
}`;

const projectsQuery = `*[_type == "project"] | order(eyebrow asc) {
  id, eyebrow, title, category, desc, metric1, metric1Label, metric2, metric2Label,
  tags, deckUrl, imageSrc, sections[]{title, paragraphs}
}`;

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  showNavStatus,
  navStatusText,
  resumeUrl
}`;

export async function fetchSanityApplications() {
  const client = getSanityClient();
  const data = await client.fetch(applicationsQuery);
  return sanityApplicationsSchema.parse(data);
}

export async function fetchSanityProjects() {
  const client = getSanityClient();
  const data = await client.fetch(projectsQuery);
  return sanityProjectsSchema.parse(data);
}

export async function fetchSiteSettings() {
  const client = getSanityClient();
  const data = await client.fetch(siteSettingsQuery);
  if (!data) return null;
  return sanitySiteSettingsSchema.parse(data);
}
