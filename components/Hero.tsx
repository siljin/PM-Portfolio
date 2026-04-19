"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { full_name } from "@/lib/global-variables";

const stats = [
  { value: "X+", label: "years experience" },
  { value: "XXK+", label: "users impacted" },
  { value: "XX%", label: "key metric improved" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const node = sectionRef.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    node.style.setProperty("--hx", `${e.clientX - r.left}px`);
    node.style.setProperty("--hy", `${e.clientY - r.top}px`);
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="section hero"
      onMouseMove={onMouseMove}
    >
      {!reducedMotion ? <div className="heroSpotlight" aria-hidden /> : null}
      <p className="heroEyebrow">Product Manager · AI · [Your Domain]</p>
      <h1>{full_name}</h1>
      <p className="heroBio">
        I turn messy problem spaces into shipped outcomes people can rely on.
        I focus on clarity for users and teams—framing decisions, tightening
        loops, and shipping learning that compounds.
      </p>
      <div className="heroActions">
        <Link href="/#projects" className="btn btnPrimary">
          View projects
        </Link>
        <Link href="/#contact" className="btn btnGhost">
          Contact
        </Link>
      </div>
      <div className="heroStats">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="statValue">{s.value}</div>
            <div className="statLabel">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
