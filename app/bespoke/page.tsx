import type { Metadata } from "next";
import { bookHref } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Bespoke builds",
  description: "Custom websites, apps and internal systems designed and built by HaskeConsulting.",
};

const steps = [
  { title: "Discover", body: "We learn how your business works, who your customers are and what success looks like. You get a written scope and a fixed quote." },
  { title: "Design", body: "We design the key screens and walk you through them. Nothing gets built until you've approved how it looks and works." },
  { title: "Build", body: "We ship in stages, so you see working software every week or two and can change course early." },
  { title: "Support", body: "After launch we stay on call for fixes and improvements, with a care plan that fits your size." },
];

const builds = [
  { title: "E-commerce & ordering", body: "Online shops, WhatsApp ordering, delivery zones and mobile money." },
  { title: "Marketplaces & platforms", body: "Two-sided products where different users find and work with each other." },
  { title: "Booking & scheduling", body: "Appointments, reservations, reminders and deposits." },
  { title: "Internal tools", body: "Stock, orders, staff and reporting dashboards that replace spreadsheets." },
  { title: "Websites", body: "Fast, credible business sites you can update yourself." },
  { title: "Integrations", body: "Connecting payments, SMS, WhatsApp and the tools you already use." },
];

export default function Bespoke() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Bespoke builds</p>
          <h1 className="h-page">Software made around how you work.</h1>
          <p className="lead">
            When an off-the-shelf tool won't fit, we design and build one that does, then stay with you after launch.
          </p>
          <div className="btn-row">
            <a href={bookHref} className="btn btn--solid">Start a project</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 40 }}>How we work</h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 40 }}>What we build</h2>
          <div className="grid">
            {builds.map((b) => (
              <div key={b.title} className="card">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Tell us what you need built." />
    </>
  );
}
