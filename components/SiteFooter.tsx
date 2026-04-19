import { full_name } from "@/lib/global-variables";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <p className="mono">
        © {new Date().getFullYear()} {full_name}.
      </p>
      <p className="mono">Built without a template.</p>
    </footer>
  );
}
