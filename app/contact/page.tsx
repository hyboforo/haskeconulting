import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { bookHref, site, whatsappHref } from "@/lib/site";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: "Book a consultation or get in touch with HaskeConsulting.",
  path: "contact/",
});

export default function Contact() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="h-page">Let's talk about your project.</h1>
          <p className="lead">
            A short call is the fastest way to find out whether one of our products fits or you need something bespoke. It's free and
            there's no obligation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <EnquiryForm />
          <aside className="contact-ways" aria-label="Other ways to reach us">
            <div className="card">
              <h3>Book a consultation</h3>
              <p>Pick a time for a 30-minute call about what you need.</p>
              <a href={bookHref} className="btn btn--ghost" style={{ marginTop: 12, alignSelf: "flex-start" }}>
                Book a call
              </a>
            </div>
            {whatsappHref && (
              <div className="card">
                <h3>WhatsApp</h3>
                <p>Prefer chatting? Message us on {site.phone} and we'll reply during working hours.</p>
                <a href={whatsappHref} className="btn btn--ghost" style={{ marginTop: 12, alignSelf: "flex-start" }}>
                  Chat on WhatsApp
                </a>
              </div>
            )}
            <div className="card">
              <h3>Email</h3>
              <p>Send a few lines about your business and what you'd like to build.</p>
              <a href={`mailto:${site.email}`} className="btn btn--ghost" style={{ marginTop: 12, alignSelf: "flex-start" }}>
                {site.email}
              </a>
            </div>
            <p className="muted">{site.address}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
