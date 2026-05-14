import Image from "next/image";

export type HomeCardProps = {
  imageSrc?: string;
  imagePlaceholder: string;
  tags: string[];
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  readHref: string;
  readLabel: string;
};

export function HomeCard({
  imageSrc,
  imagePlaceholder,
  tags,
  title,
  description,
  metric,
  metricLabel,
  readHref,
  readLabel,
}: HomeCardProps) {
  return (
    <article className="project-card project-card--home-strip">
      <div className="project-visual">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            width={800}
            height={450}
            sizes="280px"
          />
        ) : (
          <span className="placeholder">{imagePlaceholder}</span>
        )}
      </div>
      <div className="project-body">
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-footer">
          <div className="metric">
            <div className="metric-value">{metric}</div>
            <div className="metric-label">{metricLabel}</div>
          </div>
          <a href={readHref} className="read-link">
            {readLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden={true}
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
