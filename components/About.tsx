import Link from "next/link";

export function About() {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <h2 className="section-title">A bit about me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m an <strong>APM with 2 years of experience</strong> in B2B
            SaaS, focused on the parts of the product journey that companies
            often underinvest in: onboarding, activation, and retention.
          </p>
          <p>
            Before product, I was [background here — engineering, design,
            consulting, etc.]. That background shapes how I think: I lead with{" "}
            <strong>data, move fast, and write clear specs</strong>.
          </p>
          <p>
            Outside work, I build tools for myself and occasionally for others.
            I think the best PMs are also builders — the empathy for what
            engineering actually takes is irreplaceable.
          </p>
          <Link href="#contact" className="btn btnPrimary">
            Get in touch
          </Link>
        </div>
        <div className="about-visual">headshot / photo</div>
      </div>
    </section>
  );
}
