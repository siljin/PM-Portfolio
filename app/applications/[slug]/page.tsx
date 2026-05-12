import { notFound } from "next/navigation";
import { full_name } from "@/lib/global-variables";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/applications";
import ClientDetail from "./ClientDetail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().then((slugs) => slugs.map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — ${full_name}`,
    description: project.descriptor,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return <ClientDetail project={project} />;
}
