import { ContactSection } from "@/components/ContactSection";
import { DemoSection } from "@/components/DemoSection";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <ProjectGrid />
      </Reveal>
      <Reveal>
        <DemoSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Reveal>
        <SiteFooter />
      </Reveal>
    </main>
  );
}
