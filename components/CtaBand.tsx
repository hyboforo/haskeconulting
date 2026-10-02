import Link from "next/link";
import { bookHref, whatsappHref } from "@/lib/site";

/** Closing call to action used at the bottom of most pages. */
export function CtaBand({ title = "Have a project in mind?" }: { title?: string }) {
  return (
    <section className="section section--ink">
      <div className="container cta-band">
        <div style={{ maxWidth: 620 }}>
          <h2 className="h-section">{title}</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Tell us what you're trying to do. We'll tell you honestly whether a product fits or a bespoke build makes more sense.
          </p>
        </div>
        <div className="btn-row" style={{ marginTop: 0 }}>
          <a href={bookHref} className="btn btn--light">
            Book a consultation
          </a>
          {whatsappHref ? (
            <a href={whatsappHref} className="btn btn--outline-light">
              Chat on WhatsApp
            </a>
          ) : (
            <Link href="/contact/" className="btn btn--outline-light">
              Other ways to reach us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
