import { skillGroups } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section id="stack" className="section">
      <p className="sectionLabel mono">Skills / Stack</p>
      <div className="stackGroups">
        {skillGroups.map((g) => (
          <div key={g.id}>
            <p className="stackGroupLabel mono">{g.label}</p>
            <div className="stackPills">
              {g.items.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.name} className="stackPill mono">
                    <Icon aria-hidden strokeWidth={1.75} />
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
