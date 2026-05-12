import { getProjects } from "@/lib/projects";
import { ProjectsArchiveClient } from "@/components/projects/ProjectsArchiveClient";

export default async function Page() {
  const cases = await getProjects();
  return <ProjectsArchiveClient cases={cases} />;
}
