"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Project } from "@/lib/applications";
import { ApplicationsNav } from "@/components/applications/ApplicationsNav";
import { ApplicationsSidebar } from "@/components/applications/ApplicationsSidebar";
import { ApplicationDetailPanel } from "@/components/applications/ApplicationDetailPanel";

type ApplicationsArchiveClientProps = {
  projects: Project[];
};

function ApplicationsArchiveContent({
  projects,
}: ApplicationsArchiveClientProps) {
  const searchParams = useSearchParams();
  const queryId = searchParams.get("id");
  const [selectedId, setSelectedId] = useState(() => projects[0]?.id || "");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showArchModal, setShowArchModal] = useState(false);
  const [showSeqModal, setShowSeqModal] = useState(false);

  useEffect(() => {
    setSelectedId(queryId || projects[0]?.id || "");
  }, [queryId, projects]);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <>
      <ApplicationsNav />

      <div
        className={`projects-layout-wrapper applications-layout ${
          isSidebarExpanded ? "is-expanded" : ""
        }`}
      >
        <ApplicationsSidebar
          projects={projects}
          selectedId={selectedId}
          isExpanded={isSidebarExpanded}
          onToggleExpand={() => setIsSidebarExpanded((prev) => !prev)}
          onSelect={(id) => {
            setSelectedId(id);
            setShowArchModal(false);
            setShowSeqModal(false);
          }}
        />
        <ApplicationDetailPanel
          project={selectedProject}
          showArchModal={showArchModal}
          showSeqModal={showSeqModal}
          onOpenArchitecture={() => setShowArchModal(true)}
          onOpenSequence={() => setShowSeqModal(true)}
          onCloseArchitecture={() => setShowArchModal(false)}
          onCloseSequence={() => setShowSeqModal(false)}
        />
      </div>
    </>
  );
}

export function ApplicationsArchiveClient({
  projects,
}: ApplicationsArchiveClientProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationsArchiveContent projects={projects} />
    </Suspense>
  );
}
