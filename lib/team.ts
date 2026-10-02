// The team shown on the About page. Edit here; the page lays itself out.
//
// To add a photo: put a square image (at least 600×600) in /public/team/,
// e.g. /public/team/hanan.jpg, and set `photo: "/team/hanan.jpg"`.
// Without a photo, the person's initials are shown instead.

export type Person = {
  name: string;
  initials: string;
  role: string;
  /** One or two sentences for the team card. */
  short: string;
  photo?: string;
  linkedin?: string;
};

export type Founder = Person & {
  /** Paragraphs for the founder section. */
  bio: string[];
  highlights: { value: string; label: string }[];
  education: string[];
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
    "Hanan co-founded HaskeConsulting and leads it as CEO. He has spent more than 15 years building and running software that has to work at national scale, growing from developer to leading a full engineering organisation. He has helped deliver biometric voter registration and deduplication covering over 34 million voters in Ghana, Cameroon and Tanzania, and biometric health-insurance registration in Ghana and Kenya.",
    "He led the move of a full product suite to Docker and Kubernetes, cutting the time to set up test and demo environments by about 40%, and has run a 25-person engineering, DevOps, QA and support team serving more than 20 government and enterprise clients. At Brij he led payment-partner integrations with platforms such as Remita and Quickteller, cutting integration time by about 30%.",
    "He has stayed hands-on throughout, and still writes code, reviews it and handles technical escalations. That's the standard he sets for HaskeConsulting: the people who plan your project are the people who build it.",
  ],
  highlights: [
    { value: "15+", label: "years delivering software" },
    { value: "34M+", label: "voters covered by systems he helped deliver" },
    { value: "4", label: "countries: Ghana, Cameroon, Tanzania, Kenya" },
    { value: "25", label: "engineers, QA and support staff led" },
  ],
  education: [
    "MSc Management Information Systems, Ghana Technology University College / Coventry University",
    "BSc Computer Science, Ashesi University",
  ],
};

// TODO: replace the placeholders with the rest of the team, or delete them.
export const team: Person[] = [
  founder,
  { name: "[Name]", initials: "", role: "Co-founder", short: "[One or two sentences about what they do and their background.]" },
  { name: "[Name]", initials: "", role: "[Role]", short: "[One or two sentences.]" },
];
