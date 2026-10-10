"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { services, site } from "@/lib/site";

type Fields = { name: string; phone: string; email: string; service: string; message: string };
type State =
  | { kind: "editing"; errors: Partial<Record<keyof Fields, string>> }
  | { kind: "sending" }
  | { kind: "sent" }
  /** The form couldn't deliver it: offer WhatsApp and email with the message already written in. */
  | { kind: "fallback" };

const empty: Fields = { name: "", phone: "", email: "", service: "", message: "" };

/** The enquiry as a message the visitor sends themselves, when the form can't deliver it. */
function asText(f: Fields) {
  const contact = [f.phone && `Phone: ${f.phone}`, f.email && `Email: ${f.email}`].filter(Boolean).join(" · ");
  return [`Hi ${site.name}, I'm ${f.name}.`, ...(f.service ? [`I'm interested in: ${f.service}.`] : []), "", f.message, "", contact]
    .join("\n")
    .trim();
}

export function EnquiryForm() {
  const [f, setF] = useState<Fields>(empty);
  const [state, setState] = useState<State>({ kind: "editing", errors: {} });
  const startedAt = useRef(0);
  const website = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const set = (key: keyof Fields) => (value: string) => {
    setF((prev) => ({ ...prev, [key]: value }));
    // A fixed field stops showing its error; giving an email also answers "phone or email".
    setState((prev) => {
      if (prev.kind !== "editing") return prev;
      const errors: Partial<Record<keyof Fields, string>> = { ...prev.errors };
      delete errors[key];
      if (key === "email") delete errors.phone;
      return { kind: "editing", errors };
    });
  };
  const errors = state.kind === "editing" ? state.errors : {};

  async function submit(e: FormEvent) {
    e.preventDefault();
    const local: Partial<Record<keyof Fields, string>> = {};
    if (f.name.trim().length < 2) local.name = "Please tell us your name.";
    if (!f.phone.trim() && !f.email.trim()) local.phone = "Please give a phone number or an email address so we can reply.";
    if (f.message.trim().length < 10) local.message = "Please tell us a little about what you need.";
    if (Object.keys(local).length) {
      setState({ kind: "editing", errors: local });
      return;
    }

    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, website: website.current?.value ?? "", startedAt: startedAt.current }),
      });
      if (res.ok) {
        setState({ kind: "sent" });
        return;
      }
      if (res.status === 422) {
        const body = await res.json().catch(() => ({}));
        setState({ kind: "editing", errors: body.fields ?? {} });
        return;
      }
      setState({ kind: "fallback" });
    } catch {
      setState({ kind: "fallback" });
    }
  }

  if (state.kind === "sent") {
    return (
      <div className="card enquiry" role="status">
        <h3>Thank you, {f.name.split(" ")[0]}.</h3>
        <p>We&apos;ve got your message and will get back to you during working hours.</p>
      </div>
    );
  }

  if (state.kind === "fallback") {
    const text = asText(f);
    const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : "";
    const mail = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${f.name}`)}&body=${encodeURIComponent(text)}`;
    return (
      <div className="card enquiry" role="status">
        <h3>One more step</h3>
        <p>
          We couldn&apos;t send this from the website just now. Your message is written in below: send it on WhatsApp or by email
          and it reaches us straight away.
        </p>
        <div className="btn-row" style={{ marginTop: 8 }}>
          {wa && (
            <a href={wa} className="btn btn--solid">
              Send on WhatsApp
            </a>
          )}
          <a href={mail} className={wa ? "btn btn--ghost" : "btn btn--solid"}>
            Send by email
          </a>
        </div>
        <button type="button" className="enquiry__back" onClick={() => setState({ kind: "editing", errors: {} })}>
          Edit my message
        </button>
      </div>
    );
  }

  const sending = state.kind === "sending";
  return (
    <form className="card enquiry" onSubmit={submit} noValidate>
      <h3>Send us a message</h3>
      <p>Tell us a little about your business and what you need, and we&apos;ll get back to you during working hours.</p>

      <Field label="Your name" error={errors.name}>
        {(id, describedBy) => (
          <input id={id} aria-describedby={describedBy} value={f.name} onChange={(e) => set("name")(e.target.value)} autoComplete="name" maxLength={100} required />
        )}
      </Field>
      <div className="enquiry__pair">
        <Field label="Phone or WhatsApp" error={errors.phone}>
          {(id, describedBy) => (
            <input id={id} aria-describedby={describedBy} type="tel" inputMode="tel" value={f.phone} onChange={(e) => set("phone")(e.target.value)} autoComplete="tel" maxLength={40} placeholder="024 123 4567" />
          )}
        </Field>
        <Field label="Email (optional)" error={errors.email}>
          {(id, describedBy) => (
            <input id={id} aria-describedby={describedBy} type="email" value={f.email} onChange={(e) => set("email")(e.target.value)} autoComplete="email" maxLength={200} />
          )}
        </Field>
      </div>
      <Field label="What can we help with?">
        {(id) => (
          <select id={id} value={f.service} onChange={(e) => set("service")(e.target.value)}>
            <option value="">Choose one (optional)</option>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        )}
      </Field>
      <Field label="Your message" error={errors.message}>
        {(id, describedBy) => (
          <textarea id={id} aria-describedby={describedBy} rows={5} value={f.message} onChange={(e) => set("message")(e.target.value)} maxLength={4000} required />
        )}
      </Field>

      {/* For bots only: people never see or fill this. */}
      <div className="enquiry__trap" aria-hidden="true">
        <label>
          Website <input ref={website} name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" className="btn btn--solid" disabled={sending} style={{ alignSelf: "flex-start" }}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: (id: string, describedBy: string | undefined) => React.ReactNode;
}) {
  const id = `enquiry-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div className={`enquiry__field ${error ? "enquiry__field--error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children(id, error ? `${id}-error` : undefined)}
      {error && (
        <span id={`${id}-error`} className="enquiry__error">
          {error}
        </span>
      )}
    </div>
  );
}
