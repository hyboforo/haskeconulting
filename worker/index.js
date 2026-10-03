// The one part of the site that isn't a static file: the contact form's /api/enquiry.
//
// Every other request goes straight to the static files in ./out (wrangler.jsonc sends only /api/* here).
// An enquiry is emailed through Cloudflare Email Routing's send_email binding, ENQUIRY_EMAIL. Until that binding
// is set up, the endpoint answers 503 and the form offers WhatsApp and email instead, with the visitor's message
// already written in, so nothing they typed is lost.

import { EmailMessage } from "cloudflare:email";

/** Also refuses the characters that could break out of the Reply-To header. */
const EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]+$/;

const LIMITS = { name: 100, phone: 40, email: 200, service: 100, message: 4000 };

/** Faster than this from page load to submit is a script, not a person. */
const MIN_FILL_MS = 3000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/enquiry") {
      if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405, { Allow: "POST" });
      return enquiry(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

async function enquiry(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  // Spam: a field people never see, and a form filled faster than anyone can type. Both answer as if it worked,
  // so a bot learns nothing from the reply.
  if (body.website || (typeof body.startedAt === "number" && Date.now() - body.startedAt < MIN_FILL_MS)) {
    return json({ ok: true });
  }

  const field = (key) => (typeof body[key] === "string" ? body[key].trim().slice(0, LIMITS[key]) : "");
  const e = { name: field("name"), phone: field("phone"), email: field("email"), service: field("service"), message: field("message") };

  const missing = {};
  if (e.name.length < 2) missing.name = "Please tell us your name.";
  if (!e.phone && !e.email) missing.phone = "Please give a phone number or an email address so we can reply.";
  if (e.email && !EMAIL.test(e.email)) missing.email = "That email address doesn't look right.";
  if (e.message.length < 10) missing.message = "Please tell us a little about what you need.";
  if (Object.keys(missing).length) return json({ error: "invalid", fields: missing }, 422);

  if (!env.ENQUIRY_EMAIL || !env.ENQUIRY_FROM || !env.ENQUIRY_TO) return json({ error: "not_configured" }, 503);

  try {
    await env.ENQUIRY_EMAIL.send(new EmailMessage(env.ENQUIRY_FROM, env.ENQUIRY_TO, mime(e, env)));
  } catch (err) {
    console.error("Enquiry email failed", err);
    return json({ error: "send_failed" }, 502);
  }
  return json({ ok: true });
}

/** A plain-text email. Reply goes to the visitor when they gave an email address. */
function mime(e, env) {
  const text = [
    `Name: ${e.name}`,
    `Phone / WhatsApp: ${e.phone || "-"}`,
    `Email: ${e.email || "-"}`,
    `Interested in: ${e.service || "-"}`,
    "",
    e.message,
    "",
    "Sent from the contact form on haskeconsulting.com",
  ].join("\r\n");
  const headers = [
    `From: HaskeConsulting website <${env.ENQUIRY_FROM}>`,
    `To: <${env.ENQUIRY_TO}>`,
    ...(e.email ? [`Reply-To: ${encodeWord(e.name)} <${e.email}>`] : []),
    `Subject: ${encodeWord(`Website enquiry from ${e.name}`)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${env.ENQUIRY_FROM.split("@")[1]}>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: base64",
  ];
  return headers.join("\r\n") + "\r\n\r\n" + base64(text).replace(/.{76}/g, "$&\r\n");
}

/** A header value that may hold any character, e.g. a name with an accent, and never a line break. */
function encodeWord(value) {
  return `=?UTF-8?B?${base64(value.replace(/[\r\n]+/g, " "))}?=`;
}

function base64(value) {
  let binary = "";
  for (const byte of new TextEncoder().encode(value)) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });
}
