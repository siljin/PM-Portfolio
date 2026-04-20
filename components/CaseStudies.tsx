export function CaseStudies() {
  const cases = [
    {
      title: "Onboarding Redesign",
      description:
        "Led a full rebuild of the first-run experience for a B2B SaaS product. Mapped dropoff, ran 3 experiments, shipped in 6 weeks.",
      tags: ["B2B SaaS", "Growth"],
      metric: "+23%",
      metricLabel: "activation rate",
    },
    {
      title: "Habit-Loop Retention Feature",
      description:
        "Worked with the DS team to identify 30-day churn signals. Built a daily digest feature to reinforce habit formation.",
      tags: ["Retention", "Data"],
      metric: "−15%",
      metricLabel: "30-day churn",
    },
    {
      title: "Search Overhaul",
      description:
        "Rebuilt search from the ground up — semantic ranking, filter redesign, and a new results layout. Shipped in 8 weeks.",
      tags: ["0→1", "Search"],
      metric: "+40%",
      metricLabel: "task success rate",
    },
  ];

  return (
    <section id="work">
      <div className="section-label">Work</div>
      <h2 className="section-title">Case Studies</h2>
      <p className="section-sub">
        A selection of the problems I&apos;ve worked on, the decisions I made, and
        what happened.
      </p>

      <div className="case-grid">
        {cases.map((c) => (
          <a key={c.title} href="#" className="case-card">
            <div className="case-thumb">
              <div className="case-thumb-stripe" />
              <div className="case-thumb-label">screenshot / mockup</div>
            </div>
            <div className="case-body">
              <div className="case-tags">
                {c.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="case-title">{c.title}</div>
              <div className="case-desc">{c.description}</div>
              <div className="case-metric">
                <div>
                  <div className="case-metric-val">{c.metric}</div>
                  <div className="case-metric-lbl">{c.metricLabel}</div>
                </div>
                <div className="case-read">
                  Read{" "}
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
