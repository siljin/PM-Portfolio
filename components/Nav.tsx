"use client";

import Link from "next/link";
import { full_name, resume_url } from "@/lib/global-variables";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: resume_url, label: "Resume", className: "nav-resume", target: "_blank" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav>
      <div className="navInner">
        <Link className="navLogo" href="#hero">
          {full_name}
        </Link>
        <div className="nav-links" id="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.className}
              target={l.target}
            >
              {l.label}
              {l.className === "nav-resume" && " ↓"}
            </Link>
          ))}
        </div>
        <button
          className="nav-hamburger"
          onClick={() =>
            document.getElementById("nav-links")?.classList.toggle("open")
          }
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
