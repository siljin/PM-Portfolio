import Link from "next/link";
import { full_name } from "@/lib/global-variables";

const links = [
  { href: "/#projects", label: "projects" },
  { href: "/#prototypes", label: "prototypes" },
  { href: "/#stack", label: "stack" },
  { href: "/#contact", label: "contact" },
];

export function Nav() {
  return (
    <nav>
      <div className="navInner">
        <Link className="navLogo" href="/#top">
          {full_name}
        </Link>
        <ul className="navLinks">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
