export type Pathway = {
  id: string;
  title: string;
  summary: string;
  /** Where the pathway should take someone. */
  href: string;
  cta: string;
};

export const pathways: Pathway[] = [
  {
    id: "donate",
    title: "Donate",
    summary: "Fuel programs that build healthier minds, wider opportunity, and stronger communities.",
    href: "/donate",
    cta: "Give",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    summary: "Show up for events, camps, and community days.",
    href: "/contact?interest=volunteer#contact-form",
    cta: "Offer your time",
  },
  {
    id: "mentor",
    title: "Become a mentor",
    summary: "Walk with a young person. Matching starts only after screening is in place.",
    href: "/contact?interest=mentor#contact-form",
    cta: "Start a conversation",
  },
  {
    id: "corporate",
    title: "Corporate partnerships",
    summary: "Sponsor a program, fund a community day, or bring your team alongside this work.",
    href: "/contact?interest=corporate#contact-form",
    cta: "Talk partnership",
  },
  {
    id: "program",
    title: "Bring a program to your community",
    summary: "Schools, teams, and organizations can ask about hosting Mind of a Champion or the Basketball Experience.",
    href: "/contact?interest=program#contact-form",
    cta: "Request a program",
  },
  {
    id: "schools",
    title: "Schools & organizations",
    summary: "Build programming with educators, athletic departments, and youth organizations.",
    href: "/contact?interest=schools#contact-form",
    cta: "Connect",
  },
  {
    id: "community-org",
    title: "Community organizations",
    summary: "Partner on resources, events, and support that meet families where they are.",
    href: "/contact?interest=community-org#contact-form",
    cta: "Partner locally",
  },
  {
    id: "athletes",
    title: "Athletes",
    summary: "Lend your voice, your time, or a visit. Appearances are set with the foundation ahead of time.",
    href: "/contact?interest=athletes#contact-form",
    cta: "Raise your hand",
  },
];

const homepageOrder = ["corporate", "volunteer", "mentor", "program", "donate"] as const;

export const homepagePathways = homepageOrder.map((id) => {
  const pathway = pathways.find((item) => item.id === id);
  if (!pathway) throw new Error(`Missing pathway ${id}`);
  const title =
    id === "corporate" ? "Partner" : id === "mentor" ? "Mentor" : id === "program" ? "Support" : pathway.title;
  return { ...pathway, title };
});

export const interestOptions = pathways
  .filter((pathway) => pathway.id !== "donate")
  .map((pathway) => ({ id: pathway.id, label: pathway.title }));

export type InterestId = (typeof interestOptions)[number]["id"];

export const donationAmounts = [25, 50, 100, 250, 500] as const;

export type GiftFrequency = "once" | "monthly";
