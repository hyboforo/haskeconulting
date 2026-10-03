// The team shown on the About page. Edit here; the page lays itself out.
//
// To add a photo: put a square image (at least 600×600) in /public/team/,
// e.g. /public/team/hanan.jpg, and set `photo: "/team/hanan.jpg"`.
// Without a photo, the person's initials are shown instead.

export type Person = {
  name: string;
  initials: string;
  role: string;
  /** A few sentences for the team card. */
  short: string;
  photo?: string;
  linkedin?: string;
  github?: string;
  /** Optional skill tags shown on the team card. */
  skills?: string[];
  /** Optional one-line qualification shown on the team card. */
  qualification?: string;
};

export type Founder = Omit<Person, "qualification"> & {
  /** Paragraphs for the founder section. */
  bio: string[];
  highlights: { value: string; label: string }[];
};

export const founder: Founder = {
  name: "Hanan Yaro Boforo",
  initials: "HB",
  role: "Co-founder & CEO",
  photo: "",
  linkedin: "https://www.linkedin.com/in/hananboforo/",
  short:
    "15+ years delivering national-scale identity and payments systems across Africa, from hands-on development to running engineering teams. Leads HaskeConsulting's strategy, delivery and engineering.",
  bio: [
    "Hanan co-founded HaskeConsulting and leads it as CEO. He has spent more than 15 years building and running software that has to work at national scale, growing from developer to leading a full engineering organisation. His work has spanned identity, health-insurance and payments systems for government and enterprise clients across Africa.",
    "He has stayed hands-on throughout, and still writes code, reviews it and handles technical escalations. That's the standard he sets for HaskeConsulting: the people who plan your project are the people who build it.",
  ],
  highlights: [
    { value: "15+", label: "years delivering software" },
    { value: "25", label: "engineers, QA and support staff led" },
  ],
};

export const team: Person[] = [
  founder,
  {
    name: "Whitney Adu-Yaro",
    initials: "WA",
    role: "Co-founder & COO",
    photo: "",
    short:
      "Whitney co-founded HaskeConsulting and, as Chief Operating Officer, runs the business day to day, keeping projects, people and clients moving together. Whitney also leads creative direction and marketing: the brand, the campaigns and the way our work for clients is presented to the world.",
    skills: ["Operations", "Creative direction", "Marketing"],
  },
  {
    name: "Salifu Boforo Yakubu",
    initials: "SY",
    role: "Co-founder & Lead Developer",
    photo: "",
    linkedin: "https://www.linkedin.com/in/salifu-yakubu",
    github: "https://github.com/salifu25",
    short:
      "Salifu leads development at HaskeConsulting, building the Java and Spring Boot backends behind our products, with automated testing built in from the start. At Patatte, Salifu leads backend development for a food-ordering product and designed its order and notification services.",
    skills: ["Java & Spring Boot", "REST APIs", "PostgreSQL", "Docker", "Automated testing"],
    qualification: "BSc Information Technology, Ghana Communication Technology University",
  },
  {
    name: "Angela Ayettey",
    initials: "AA",
    role: "Quality Assurance",
    photo: "",
    linkedin: "https://www.linkedin.com/in/angela-ayettey-b18706361/",
    short:
      "Angela looks after quality assurance at HaskeConsulting: planning tests, checking every release against what was agreed with the client, and supporting user acceptance testing before anything goes live.",
  },
];
