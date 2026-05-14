import { Projects } from "@/components/Projects";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { PeekHint } from "@/components/PeekHint";
import { Applications } from "@/components/Applications";

export default function Home() {
  return (
    <main>
      <div className="grid-bg"></div>
      <div className="ambient"></div>
      <Hero />
      <PeekHint />
      <Applications />
      <Projects />
      <ContactSection />
    </main>
  );
}
