import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const applicationsPath = path.join(
  repoRoot,
  "content/applications/applications.json"
);
const projectsPath = path.join(repoRoot, "content/projects/projects.json");
const demosPath = path.join(repoRoot, "content/demos/demos.json");
const importDir = path.join(repoRoot, "import/sanity");

function toNdjson(documents) {
  return documents.map((doc) => JSON.stringify(doc)).join("\n");
}

function toApplicationDoc(item) {
  return {
    _id: `application.${item.id}`,
    _type: "application",
    id: item.id,
    slug: { _type: "slug", current: item.slug },
    eyebrow: item.eyebrow,
    title: item.title,
    descriptor: item.descriptor,
    tag: item.tag,
    category: item.category,
    highlight: item.highlight,
    coverSrc: item.coverSrc,
    tryItUrl: item.tryItUrl,
    iconPath: item.iconPath,
    architectureDiagram: item.architectureDiagram,
    sequenceDiagram: item.sequenceDiagram,
    sections: (item.sections || []).map((section, idx) => ({
      _key: `${item.id}-section-${idx + 1}`,
      _type: "section",
      title: section.title,
      paragraphs: section.paragraphs,
      diagramSrc: section.diagramSrc,
    })),
  };
}

function toProjectDoc(item) {
  return {
    _id: `project.${item.id}`,
    _type: "project",
    id: item.id,
    eyebrow: item.eyebrow,
    title: item.title,
    category: item.category,
    desc: item.desc,
    metric1: item.metric1,
    metric1Label: item.metric1Label,
    metric2: item.metric2,
    metric2Label: item.metric2Label,
    tags: item.tags,
    deckUrl: item.deckUrl,
    imageSrc: item.imageSrc,
    sections: (item.sections || []).map((section, idx) => ({
      _key: `${item.id}-section-${idx + 1}`,
      _type: "section",
      title: section.title,
      paragraphs: section.paragraphs,
    })),
  };
}

function toDemoDoc(item) {
  return {
    _id: `demo.${item.slug}`,
    _type: "demo",
    slug: { _type: "slug", current: item.slug },
    title: item.title,
    buildNote: item.buildNote,
    href: item.href,
    coverSrc: item.coverSrc,
    tag: item.tag,
  };
}

function toSiteSettingsDoc() {
  return {
    _id: "siteSettings.main",
    _type: "siteSettings",
    showNavStatus: false,
    navStatusText: "Open to internships - 2026",
    resumeUrl:
      "https://drive.google.com/file/d/1LX175lj78ZXR3jjjPOFQYOcEg830SIzS/view?usp=drive_link",
  };
}

async function main() {
  await mkdir(importDir, { recursive: true });

  const applications = JSON.parse(await readFile(applicationsPath, "utf8"));
  const projects = JSON.parse(await readFile(projectsPath, "utf8"));
  const demos = JSON.parse(await readFile(demosPath, "utf8"));

  const applicationDocs = applications.map(toApplicationDoc);
  const projectDocs = projects.map(toProjectDoc);
  const demoDocs = demos.map(toDemoDoc);
  const settingsDocs = [toSiteSettingsDoc()];

  await writeFile(
    path.join(importDir, "applications.ndjson"),
    toNdjson(applicationDocs),
    "utf8"
  );
  await writeFile(
    path.join(importDir, "projects.ndjson"),
    toNdjson(projectDocs),
    "utf8"
  );
  await writeFile(
    path.join(importDir, "demos.ndjson"),
    toNdjson(demoDocs),
    "utf8"
  );
  await writeFile(
    path.join(importDir, "site-settings.ndjson"),
    toNdjson(settingsDocs),
    "utf8"
  );

  console.log("Sanity import files generated:");
  console.log("- import/sanity/applications.ndjson");
  console.log("- import/sanity/projects.ndjson");
  console.log("- import/sanity/demos.ndjson");
  console.log("- import/sanity/site-settings.ndjson");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
