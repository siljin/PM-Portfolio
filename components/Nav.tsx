"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSite } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  if (href.startsWith("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  const className = active ? "is-active" : undefined;
  const ariaCurrent = active ? "page" : undefined;
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} aria-current={ariaCurrent}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className} aria-current={ariaCurrent}>
      {label}
    </Link>
  );
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * `showStatus`, `statusText`, and `resumeUrl` are env-driven (see
 * `config/application.yml`). They are resolved server-side in `app/layout.tsx`
 * and passed in as props so this client component does not need to read
 * `process.env` directly.
 */
type NavProps = {
  showStatus: boolean;
  statusText: string;
  resumeUrl: string;
};

export function Nav({ showStatus, statusText, resumeUrl }: NavProps) {
  const { nav, identity } = getSite();
  const pathname = usePathname() ?? "/";
  const initials = initialsOf(identity.fullName);
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-badge" aria-hidden="true">
            {initials}
          </span>
          <span className="logo-name">{identity.fullName}</span>
        </Link>
        <div className="nav-links">
          {showStatus && (
            <span className="nav-status">
              <span className="pulse"></span>
              {statusText}
            </span>
          )}
          {nav.links.map((link) => (
            <NavItem
              key={link.href + link.label}
              href={link.href}
              label={link.label}
              active={isActive(pathname, link.href)}
            />
          ))}
          <a href={resumeUrl} className="nav-resume" target="_blank" rel="noopener noreferrer">
            {nav.resumeLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}
