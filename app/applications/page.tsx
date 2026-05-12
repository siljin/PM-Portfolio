import { getProjects } from "@/lib/applications";
import { ApplicationsArchiveClient } from "@/components/applications/ApplicationsArchiveClient";

export default async function Page() {
  const projects = await getProjects();
  return <ApplicationsArchiveClient projects={projects} />;
}
