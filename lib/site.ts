// Central site settings and content. Edit these first.
export const site = {
  name: "HaskeConsulting",
  parent: { name: "Haske Group Holdings", url: "https://haskegroupholdings.com" },
  url: "https://haskeconsulting.com",
  description:
    "HaskeConsulting is an Accra-based technology company offering software development, web development, IT consulting and IT project management.",
  email: "hello@haskeconsulting.com",
  // WhatsApp number in international format without + or spaces, e.g. "233200000000".
  // Leave empty to hide the WhatsApp buttons.
  whatsapp: "",
  // Link to a booking page (Calendly, Cal.com, Google Calendar). Empty = falls back to email.
  bookingUrl: "",
  // Street address is optional; the town is enough until you have an office to show.
  address: "Accra, Ghana",
};

export const bookHref = site.bookingUrl || `mailto:${site.email}?subject=Consultation%20request`;
export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi HaskeConsulting, I'd like to talk about a project.")}`
  : "";

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Our work" },
  { href: "/products/", label: "Products" },
  { href: "/about/", label: "About" },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  name: string;
  /** One line for cards. */
  short: string;
  /** Opening paragraph on the service page. */
  intro: string;
  offerings: { title: string; body: string }[];
  /** Case-study slugs that show this service in action. */
  work: string[];
  tools?: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Software development",
    short: "Custom business systems, APIs and integrations built around how you actually work.",
    intro:
      "When off-the-shelf software doesn't fit, we design and build systems that do: tools for running your shop, your bookings or your operations, and the services and integrations behind them.",
    offerings: [
      { title: "Business systems", body: "Customer records, bookings, point of sale, stock and reporting, in one system your staff can learn quickly." },
      { title: "APIs and backend services", body: "Reliable services in Java, Kotlin and Spring Boot on PostgreSQL, with sign-in, roles and an audit trail." },
      { title: "Integrations", body: "Mobile money, SMS, email and payment partners connected properly, with retries and records when something fails." },
      { title: "Works offline", body: "Front-desk and till apps that keep working when the internet drops and catch up when it's back." },
      { title: "Testing built in", body: "Automated tests and quality checks on every release, so fixes don't break what already worked." },
    ],
    work: ["kodi-pets", "haskehub"],
    tools: ["Java", "Kotlin", "Spring Boot", "PostgreSQL", "React", "Docker"],
  },
  {
    slug: "web-development",
    name: "Web development",
    short: "Fast, mobile-first websites, online shops and web apps that are easy to keep up to date.",
    intro:
      "Most of your customers will meet you on a phone. We build websites and web apps that load quickly on mobile data, look right on every screen, and are simple to change after launch.",
    offerings: [
      { title: "Company websites", body: "Clear, credible sites that explain what you do and make it easy to get in touch." },
      { title: "Online shops", body: "Catalogues, bundles and ordering, including WhatsApp ordering and delivery across Ghana." },
      { title: "Web apps and portals", body: "Marketplaces, customer portals and dashboards with accounts, roles and data behind them." },
      { title: "Domains, hosting and security", body: "Domain set-up, HTTPS, security headers and fast hosting on Cloudflare, handled for you." },
      { title: "Found and shared", body: "Search-friendly pages, sitemaps and proper previews when your links are shared on WhatsApp or LinkedIn." },
    ],
    work: ["haneys-plant-buddy", "haskehub"],
    tools: ["Next.js", "React", "TypeScript", "Cloudflare"],
  },
  {
    slug: "it-consulting",
    name: "IT consulting",
    short: "Independent advice on technology choices, architecture, cloud and security.",
    intro:
      "Our team has spent more than 15 years delivering systems at national scale. We bring that experience to smaller decisions too: what to build, what to buy, where to host it and what it will really cost to run.",
    offerings: [
      { title: "Technology strategy", body: "A practical roadmap for the systems your business needs now and in the next few years." },
      { title: "Architecture review", body: "A second opinion on how a system is designed, where it will struggle, and what to fix first." },
      { title: "Cloud and DevOps", body: "Containers, Kubernetes, Google Cloud and Cloudflare: set up so deployments are routine, not risky." },
      { title: "Running costs", body: "Honest estimates of hosting and service costs per month, and ways to bring them down." },
      { title: "Security and data protection", body: "Access control, backups and handling personal data responsibly under Ghana's Data Protection Act." },
      { title: "Vendor and system selection", body: "Help comparing suppliers and products so you choose on evidence, not sales pitches." },
    ],
    work: ["kodi-pets"],
    tools: ["Docker", "Kubernetes", "Google Cloud", "Cloudflare"],
  },
  {
    slug: "it-project-management",
    name: "IT project management",
    short: "Plan, run and deliver IT projects on time, with clear milestones and sign-offs.",
    intro:
      "Most IT projects that go wrong do so for the same reasons: unclear scope, no checkpoints, and surprises at the end. We run projects in small, signed-off milestones so you always know where things stand.",
    offerings: [
      { title: "Scoping and requirements", body: "Turning what you need into a written scope everyone agrees on before work starts." },
      { title: "Plans and budgets", body: "Milestone plans with estimates, so cost and timing are clear from the beginning." },
      { title: "Agile delivery", body: "Short cycles using Scrum or Kanban, with working software to review at each step." },
      { title: "Vendor and partner coordination", body: "Keeping suppliers, payment partners and your own team moving in step." },
      { title: "Testing and acceptance", body: "Quality assurance and user acceptance testing, with a formal sign-off at every milestone." },
      { title: "Go-live and handover", body: "Launch, staff training and documentation, so your team can run the system with confidence." },
    ],
    work: ["kodi-pets"],
  },
];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  forWho: string;
  features: string[];
  /** Leave out until there's a public price. */
  price?: string;
  /** Live product site. When set, the product shows a "Visit" button. */
  url?: string;
};

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
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  client: string;
  tag: string;
  url?: string;
  /** Background colour for the card cover. */
  cover: string;
  summary: string;
  /** What the client needed. */
  brief: string;
  built: string[];
  services: string[];
  facts: { label: string; value: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: "kodi-pets",
    client: "KODI Pets",
    tag: "Pet retail & grooming",
    cover: "#eadfcf",
    summary:
      "One system for a pet shop and grooming salon: customers and pets, grooming bookings, the till, stock and text-message reminders.",
    brief:
      "KODI Pets needed one place for everything the shop does, sharing a single record for every customer and pet: front-desk sales, grooming appointments, stock with expiry dates and customer messages. The till had to keep selling when the internet dropped.",
    built: [
      "Customer and pet records with a shared timeline, duplicate checks and photos",
      "A grooming calendar priced by pet size, with online booking confirmed by SMS code",
      "Point of sale with mobile money and cash, receipts, refunds and end-of-day cash-up",
      "A till that keeps selling offline and uploads everything when the connection returns",
      "Stock tracked by batch and expiry date, with low-stock alerts",
      "Automatic SMS confirmations and reminders",
      "A dashboard and reports that export to Excel, CSV and PDF",
      "Separate access for front desk, supervisors and owners, with a full audit log",
    ],
    services: ["Software development", "IT project management", "IT consulting"],
    facts: [
      { label: "Client", value: "KODI Pets" },
      { label: "Industry", value: "Pet retail & grooming" },
      { label: "Delivery", value: "Milestones, each signed off by the client" },
      { label: "Built with", value: "Kotlin, Spring Boot, PostgreSQL, React" },
    ],
  },
  {
    slug: "haneys-plant-buddy",
    client: "Haney's Plant Buddy",
    tag: "E-commerce · Plants",
    url: "https://www.haneyplantbuddies.com",
    cover: "#d8e8d5",
    summary: "An online plant shop delivering across Ghana, with bundles, WhatsApp ordering and a landscaping portfolio.",
    brief:
      "Haney's Plant Buddy sells indoor and outdoor plants for delivery across Ghana and also does landscaping. The website had to work as a shop and as a showcase for garden projects.",
    built: [
      "An online shop with categories, best sellers and plant-care products",
      "Starter-kit bundles for new plant owners",
      "Ordering on WhatsApp alongside the shop",
      "A landscaping section showing compound and rooftop garden work",
    ],
    services: ["Web development"],
    facts: [
      { label: "Client", value: "Haney's Plant Buddy" },
      { label: "Industry", value: "Plants & landscaping" },
      { label: "Service", value: "Web development" },
      { label: "Website", value: "haneyplantbuddies.com" },
    ],
  },
  {
    slug: "haskehub",
    client: "HaskeHub",
    tag: "Marketplace · Platform",
    url: "https://www.haskehub.com",
    cover: "#f3dccf",
    summary:
      "A two-sided marketplace connecting Ghanaian creators, brands and photo-friendly venues, with privacy-first introductions.",
    brief:
      "Brands in Ghana needed a reliable way to find creators by real reach and location, and creators wanted control over who could contact them.",
    built: [
      "Creator profiles with reach, niche, town and portfolio",
      "Introductions that share contact details only after the creator accepts",
      "A directory of cafés, rooftops and studios that allow photography, with light windows and house rules",
    ],
    services: ["Web development", "Software development"],
    facts: [
      { label: "Client", value: "HaskeHub, a Haske Group company" },
      { label: "Industry", value: "Creator marketing" },
      { label: "Service", value: "Web platform" },
      { label: "Website", value: "haskehub.com" },
    ],
  },
];

/** Clients and products shown in the "Work we've done" strip. */
export const clientNames = ["KODI Pets", "Haney's Plant Buddy", "HaskeHub", "Taskers Ghana"];
