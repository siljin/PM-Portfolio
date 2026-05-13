import { notFound } from "next/navigation";
import { full_name } from "@/lib/global-variables";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/applications";
import ClientDetail from "./ClientDetail";

const FALLBACK_SLUG = "content-unavailable";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  if (slugs.length === 0) return [{ slug: FALLBACK_SLUG }];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (slug === FALLBACK_SLUG) {
    return {
      title: `Applications — ${full_name}`,
      description: "Application content is temporarily unavailable.",
    };
  }

  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — ${full_name}`,
    description: project.descriptor,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === FALLBACK_SLUG) {
    return (
      <main className="projects-content">
        <div className="projects-content-header">
          <div className="projects-content-eyebrow">Content unavailable</div>
          <h2 className="projects-content-title">
            Applications are temporarily unavailable
          </h2>
        </div>
      </main>
    );
  }

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return <ClientDetail project={project} />;
}
