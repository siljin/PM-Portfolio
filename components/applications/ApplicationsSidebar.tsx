import type { Project } from "@/lib/applications";

type ApplicationsSidebarProps = {
  projects: Project[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function ApplicationsSidebar({
  projects,
  selectedId,
  onSelect,
}: ApplicationsSidebarProps) {
  return (
    <aside className="projects-sidebar">
      <div className="projects-sidebar-header">
        <h1 className="projects-sidebar-title">Applications</h1>
        <p className="projects-sidebar-subtitle">Select to explore</p>
      </div>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="projects-item">
            <button
              className={`projects-btn ${
                selectedId === project.id ? "active" : ""
              }`}
              onClick={() => onSelect(project.id)}
            >
              <span className="projects-btn-label">{project.eyebrow}</span>
              <span className="projects-btn-title">{project.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
