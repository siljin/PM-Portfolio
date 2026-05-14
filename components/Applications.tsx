import { getProjects } from "@/lib/applications";
import { getSite } from "@/lib/site";
import { HomeCarousel } from "@/components/HomeCarousel";
import { HomeCard } from "@/components/HomeCard";

export function Applications() {
  const allApplications = getProjects();
  const { home, labels } = getSite();
  const s = home.applicationsSection;

  return (
    <div className="applications-band">
      <div className="container">
        <section className="block" id="applications">
          <div className="section-head">
            <div className="eyebrow">{s.eyebrow}</div>
            <h2 className="section-title">
              {s.titleBeforeEm}
              <em>{s.titleEmphasis}</em>
            </h2>
            <p className="section-desc">{s.description}</p>
          </div>

          <HomeCarousel
            itemCount={allApplications.length}
            carouselPrevious={labels.projectsCarouselPrevious}
            carouselNext={labels.projectsCarouselNext}
          >
            {allApplications.map((app) => (
              <HomeCard
                key={app.id}
                imageSrc={app.coverSrc}
                imagePlaceholder={labels.projectImagePlaceholder}
                tags={app.tag.split(" · ")}
                title={app.title}
                description={app.descriptor}
                metric={app.metric}
                metricLabel={app.metricLabel}
                readHref={`/applications?id=${app.id}`}
                readLabel={labels.read}
              />
            ))}
          </HomeCarousel>
        </section>
      </div>
    </div>
  );
}
