import Link from "next/link";

export function ApplicationsNav() {
  return (
    <nav className="archive-nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          Siljin Sebastian<span className="dot">.</span>
        </Link>
        <Link href="/" className="back-link">
          <svg
            className="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>
      </div>
    </nav>
  );
}
