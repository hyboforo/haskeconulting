import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <strong style={{ fontFamily: "var(--display)", fontSize: 20 }}>{site.name}</strong>
          <span>{site.address}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {whatsappHref && <a href={whatsappHref}>WhatsApp us</a>}
        </div>
        <div className="site-footer__col">
          <strong>Services</strong>
          <Link href="/products/">Products</Link>
          <Link href="/bespoke/">Bespoke builds</Link>
          <Link href="/work/">Our work</Link>
        </div>
        <div className="site-footer__col">
          <strong>Company</strong>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/privacy/">Privacy</Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        © {year} {site.name} · A <a href={site.parent.url} style={{ color: "#fff" }}>{site.parent.name}</a> company
      </div>
    </footer>
  );
}
