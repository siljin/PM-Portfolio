import { linkedIn_url } from "@/lib/global-variables";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="contactInner">
        <div>
          <p className="contactHeading">Let&apos;s build something worth using.</p>
          <p className="contactSub mono">
            Open to full-time PM roles & collaborations.
          </p>
        </div>
        <div className="contactLinks">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
          >
            Calendar ↗
          </a>
          <a
            href={linkedIn_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnGhost"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
