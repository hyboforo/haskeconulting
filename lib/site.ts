// Central site settings and content. Edit these first.
export const site = {
  name: "HaskeConsulting",
  parent: { name: "Haske Group Holdings", url: "https://haskegroupholdings.com" },
  url: "https://haskeconsulting.com",
  tagline: "Software, web and IT consulting in Accra",
  description:
    "HaskeConsulting is an Accra-based technology company offering software development, web development, IT consulting and IT project management.",
  email: "info@haskeconsulting.com",
  // WhatsApp number in international format without + or spaces, e.g. "233200000000".
  // Leave empty to hide the WhatsApp buttons.
  whatsapp: "233264164445",
  /** Shown to people and search engines. */
  phone: "+233 26 416 4445",
  // Link to a booking page (Calendly, Cal.com, Google Calendar). Empty = falls back to email.
  bookingUrl: "",
  // Cloudflare Web Analytics: the token from Analytics & Logs → Web Analytics → Add a site → "Manage site".
  // Empty = no stats script. Cookie-free, so no consent banner is needed.
  analyticsToken: "",
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
  { href: "/clients/", label: "Clients" },
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
    work: ["kodi-pets", "haneys-plant-buddy", "haskehub"],
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
  /** A screenshot of the live product, 1200×750, in /public/work/. Without one the card shows the colour cover. */
  image?: { src: string; alt: string };
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
    url: "https://www.kodipetshop.com",
    cover: "#eadfcf",
    image: { src: "/work/kodi-pets.webp", alt: "The KODI Pets website: a freshly groomed white dog on the grooming table, with buttons to book a groom or chat on WhatsApp" },
    summary:
      "The website and the system behind a pet shop and grooming salon: online booking, customers and pets, the grooming day, the till, stock and text messages.",
    brief:
      "KODI Pets needed one place for everything the shop does, sharing a single record for every customer and pet: a website customers can book from, grooming appointments, front-desk sales, stock with expiry dates and customer messages. The till had to keep selling when the internet dropped.",
    built: [
      "A public website where customers book a groom online and manage their pets from their own account, signing in with a code by SMS",
      "Online bookings that staff confirm or decline, with an alert on every staff screen the moment one arrives and a text to the customer either way",
      "A grooming board and calendar for the day, priced by pet size, with staff assigning each groomer",
      "Customer and pet records with vaccinations, signed consents, a shared timeline, duplicate checks and photos",
      "Point of sale with mobile money, card and cash, receipts, refunds and end-of-day cash-up",
      "A till that keeps selling offline and uploads everything when the connection returns",
      "Stock tracked by batch and expiry date, with low-stock alerts",
      "Automatic SMS confirmations and reminders, with a message log that shows failed or stuck texts and sends them again",
      "A dashboard and reports that export to Excel, CSV and PDF",
      "A separate staff address, roles for front desk, supervisors and owners, and a full audit log",
    ],
    services: ["Software development", "Web development", "IT project management", "IT consulting"],
    facts: [
      { label: "Client", value: "KODI Pets" },
      { label: "Industry", value: "Pet retail & grooming" },
      { label: "Delivery", value: "Milestones, each signed off by the client" },
      { label: "Built with", value: "Kotlin, Spring Boot, PostgreSQL, React" },
      { label: "Website", value: "www.kodipetshop.com" },
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
      { label: "Website", value: "www.haneyplantbuddies.com" },
    ],
  },
  {
    slug: "haskehub",
    client: "HaskeHub",
    tag: "Marketplace · Platform",
    url: "https://www.haskehub.com",
    cover: "#f3dccf",
    image: { src: "/work/haskehub.webp", alt: "The HaskeHub home page: \u201cYour creativity deserves to be seen\u201d, with buttons to find creators or create a profile" },
    summary:
      "A two-sided marketplace connecting Ghanaian creators, brands and photo-friendly venues, with privacy-first introductions.",
    brief:
      "Brands in Ghana needed a reliable way to find creators by real reach and location, and creators wanted control over who could contact them.",
    built: [
      "Creator profiles with reach, niche, town and portfolio",
      "Introductions that share contact details only after the creator accepts",
      "A directory of cafés, rooftops and studios that allow photography, with light windows and house rules",
      "A text-message log for the team that follows every SMS to delivery and resends any that fail",
    ],
    services: ["Web development", "Software development"],
    facts: [
      { label: "Client", value: "HaskeHub, a Haske Group company" },
      { label: "Industry", value: "Creator marketing" },
      { label: "Service", value: "Web platform" },
      { label: "Website", value: "www.haskehub.com" },
    ],
  },
];

/** Clients shown in the strip under the homepage hero. */
export const clientNames = ["KODI Pets", "Haney's Plant Buddy", "HaskeHub"];

/* ------------------------------------------------------------------ */
/* Pricing and FAQ (Services page)                                     */
/* ------------------------------------------------------------------ */

/** The ways to work with us, each with how it's priced. */
export const engagements = [
  {
    title: "A fixed-scope project",
    body: "A defined system or website, delivered in milestones with an agreed price for each one.",
    price: "A fixed price per milestone, agreed in the written scope before work starts.",
  },
  {
    title: "Advice and reviews",
    body: "A consultation, an architecture or security review, or a second opinion on a supplier's proposal.",
    price: "A fixed fee for each review, agreed before we start.",
  },
  {
    title: "Ongoing support",
    body: "Hosting, monitoring, updates and improvements after launch, on a monthly plan.",
    price: "A monthly fee, based on your hosting and how much help you need.",
  },
];

/** Answered on the Services page, and given to search engines as an FAQ. */
export const faqs: { q: string; a: string }[] = [
  {
    q: "How much will my project cost?",
    a: "It depends on what it needs to do. After a free consultation we write a scope with you and give a fixed price for each milestone, so you know the cost before any work starts.",
  },
  {
    q: "How long does a project take?",
    a: "We agree the timeline in the written scope. The work is split into short milestones, each one delivered, tested and signed off by you, so you see progress throughout rather than waiting for the end.",
  },
  {
    q: "What happens after launch?",
    a: "We train your staff, hand over documentation and stay on hand. Hosting, monitoring, updates and improvements are available on a monthly support plan.",
  },
  {
    q: "Can you work with mobile money, SMS and WhatsApp?",
    a: "Yes. They are part of how business works in Ghana, so we design for them from the start: mobile money payments, SMS confirmations and reminders, and WhatsApp ordering.",
  },
  {
    q: "We already have a system. Can you help with it?",
    a: "Yes. We usually start with a review of how it is built, where it will struggle and what to fix first. Then we can improve it, or help you choose and move to a replacement.",
  },
  {
    q: "Do we need to be technical?",
    a: "No. We explain things in plain language, write the scope with you, and you sign off each milestone by seeing it working, not by reading code.",
  },
  {
    q: "Do you work with businesses outside Accra?",
    a: "Yes. We are based in Accra and work with businesses across Ghana. Most of a project runs on calls and WhatsApp between milestones.",
  },
];
