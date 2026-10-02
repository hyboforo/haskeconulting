import Link from "next/link";
import { bookHref, nav, site } from "@/lib/site";
import { SunMark } from "./Icons";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <SunMark color="var(--accent)" />
          <span>{site.name}</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={bookHref} className="btn btn--solid">
            Book a consultation
          </a>
        </nav>

        <details className="nav-mobile">
          <summary aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M3 6h16M3 11h16M3 16h16" />
            </svg>
          </summary>
          <nav className="nav-mobile__panel" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact/">Contact</Link>
            <a href={bookHref} className="btn btn--solid" style={{ marginTop: 16, justifyContent: "center", borderBottom: 0 }}>
              Book a consultation
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
