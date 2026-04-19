import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h1 style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 12 }}>
        Page not found
      </h1>
      <p className="projectPageLead" style={{ marginBottom: 24 }}>
        That project or URL does not exist.
      </p>
      <Link href="/" className="btn btnPrimary">
        Back home
      </Link>
    </main>
  );
}
