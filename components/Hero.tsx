"use client";

import Link from "next/link";
import { full_name, resume_url } from "@/lib/global-variables";

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-grid" aria-hidden />
      <div className="hero-bg-glow" aria-hidden />

      <div className="hero-inner">
        <p className="hero-intro">Hi, I&apos;m</p>
        <h1 className="hero h1">{full_name}</h1>
        <p className="hero-bio">
          I started as an engineer, but the more I built, the more I cared
          about who I was building for and why. I went back to get my MBA to
          sharpen my product thinking, business strategy, and user intuition,
          with a clear aim to build things that meaningfully improve
          people&apos;s lives.
        </p>
        <div className="heroActions">
          <Link href="#work" className="btn btnPrimary">
            View My Work
            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 3l5 5-5 5M3 8h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <Link href={resume_url} target="_blank" className="btn btnGhost">
            View Resume
            <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
              <path
                d="M3 13h10M8 3v7m-3.5-3.5L8 10l3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
