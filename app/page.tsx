import { CaseStudies } from "@/components/CaseStudies";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <CaseStudies />
      </Reveal>
      <Reveal>
        <ProjectGrid />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </main>
  );
}
