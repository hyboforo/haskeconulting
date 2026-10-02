// Central site settings and content. Edit these first.
export const site = {
  name: "HaskeConsulting",
  parent: { name: "Haske Group Holdings", url: "https://www.haskegroupholdings.com" },
  url: "https://haskeconsulting.com",
  description:
    "HaskeConsulting builds digital products and bespoke software for businesses in Ghana: online shops, booking and operations tools, websites and apps.",
  // TODO: confirm the real inbox before launch.
  email: "hello@haskeconsulting.com",
  // TODO: WhatsApp number in international format without + or spaces, e.g. "233200000000".
  // Leave empty to hide the WhatsApp buttons.
  whatsapp: "",
  // TODO: link to a booking page (Calendly, Cal.com, Google Calendar). Empty = falls back to email.
  bookingUrl: "",
  address: "[Office address], Accra, Ghana",
};

export const bookHref = site.bookingUrl || `mailto:${site.email}?subject=Consultation%20request`;
export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi HaskeConsulting, I'd like to talk about a project.")}`
  : "";

export const nav = [
  { href: "/products/", label: "Products" },
  { href: "/bespoke/", label: "Bespoke builds" },
  { href: "/work/", label: "Our work" },
  { href: "/about/", label: "About" },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  forWho: string;
  features: string[];
  price: string;
  /** Live product site. When set, the product shows a "Visit" button. */
  url?: string;
};

// TODO: replace the [bracketed] products with your real ones.
export const products: Product[] = [
  {
    slug: "taskers-ghana",
    name: "Taskers Ghana",
    url: "https://www.taskergh.com",
    tagline: "A marketplace connecting customers with verified taskers across Ghana.",
    forWho: "Customers who need a job done, and skilled taskers and businesses looking for work.",
    features: [
      "Separate portals for taskers and for customers",
      "Identity verification, so customers know who they're hiring",
      "Business profiles taskers manage themselves",
      "[Another key feature, e.g. how bookings or payments work]",
    ],
    price: "[Free to join? Commission? Add pricing or remove this line]",
  },
  {
    slug: "shop",
    name: "[Product 1 — e.g. Haske Shop]",
    tagline: "An online shop with WhatsApp ordering and mobile money checkout.",
    forWho: "Retailers who sell on Instagram and WhatsApp and want a proper catalogue.",
    features: ["Product catalogue and categories", "Order on WhatsApp or checkout online", "Delivery zones across Ghana", "Simple stock and order dashboard"],
    price: "[From GHS ___ / month]",
  },
  {
    slug: "book",
    name: "[Product 2 — e.g. Haske Book]",
    tagline: "Bookings and reminders for service businesses.",
    forWho: "Salons, clinics, studios and anyone who runs on appointments.",
    features: ["Online booking page", "SMS and WhatsApp reminders", "Staff calendars", "Deposits by mobile money"],
    price: "[From GHS ___ / month]",
  },
  {
    slug: "site",
    name: "[Product 3 — e.g. Haske Site]",
    tagline: "A fast, professional business website you can update yourself.",
    forWho: "Small businesses that need to look credible online, quickly.",
    features: ["Designed around your brand", "Edit text and photos yourself", "Google-ready and fast on phones", "Hosting and support included"],
    price: "[From GHS ___]",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  tag: string;
  url?: string;
  imageBg: string;
  summary: string;
  challenge: string;
  solution: string[];
  result: string;
  facts: { label: string; value: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: "haneys-plant-buddy",
    client: "Haney's Plant Buddy",
    tag: "E-commerce · Plants",
    url: "https://www.haneyplantbuddies.com",
    imageBg: "#d8e8d5",
    summary:
      "A plant shop delivering across Ghana, with bundles, WhatsApp ordering and a landscaping portfolio.",
    challenge:
      "[What was the problem before? e.g. orders were taken by hand over WhatsApp and Instagram, with no catalogue customers could browse.]",
    solution: [
      "Online shop with categories, best sellers and plant-care products",
      "Starter-kit bundles for new plant owners",
      "WhatsApp ordering alongside the shop",
      "A landscaping section showing compound and rooftop garden work",
    ],
    result: "[One real, measurable result, e.g. orders per week before vs after.]",
    facts: [
      { label: "Client", value: "Haney's Plant Buddy" },
      { label: "Industry", value: "Plants & landscaping" },
      { label: "Service", value: "[Product or bespoke build]" },
      { label: "Launched", value: "[Month year]" },
    ],
  },
  {
    slug: "kodi-pet-shop",
    client: "Kodi Pet Shop",
    tag: "Retail · Pets",
    imageBg: "#eadfcf",
    summary: "[One line on what Kodi Pet Shop does and what you built for them.]",
    challenge: "[What was the problem before?]",
    solution: ["[What you built, point 1]", "[Point 2]", "[Point 3]"],
    result: "[One real, measurable result.]",
    facts: [
      { label: "Client", value: "Kodi Pet Shop" },
      { label: "Industry", value: "Pet retail" },
      { label: "Service", value: "[Product or bespoke build]" },
      { label: "Launched", value: "[Month year]" },
    ],
  },
  {
    slug: "haskehub",
    client: "HaskeHub",
    tag: "Marketplace · Platform",
    url: "https://www.haskehub.com",
    imageBg: "#f3dccf",
    summary:
      "A two-sided marketplace connecting Ghanaian creators, brands and photo-friendly venues, with privacy-first introductions.",
    challenge:
      "Brands in Ghana had no reliable way to find creators by real reach and location, and creators had no control over who contacted them.",
    solution: [
      "Creator profiles with real reach, niche, town and portfolio",
      "Introductions that only share contact details once the creator accepts",
      "A directory of cafés, rooftops and studios that allow photography, with light windows and house rules",
    ],
    result: "[A real figure, e.g. creators listed or introductions sent.]",
    facts: [
      { label: "Client", value: "HaskeHub (our own product)" },
      { label: "Industry", value: "Creator marketing" },
      { label: "Service", value: "Bespoke platform" },
      { label: "Stack", value: "Next.js" },
    ],
  },
];
