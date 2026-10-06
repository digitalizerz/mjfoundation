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
    summary: "Show up for events, camps, and community days. Roles will be posted as dates are set.",
    href: "/get-involved?interest=volunteer#interest-form",
    cta: "Offer your time",
  },
  {
    id: "mentor",
    title: "Become a mentor",
    summary: "Walk with a young person. Mentorship details and screening will be shared before anyone is matched.",
    href: "/get-involved?interest=mentor#interest-form",
    cta: "Start a conversation",
  },
  {
    id: "corporate",
    title: "Corporate partnerships",
    summary: "Sponsor a program, fund a community day, or bring your team alongside this work.",
    href: "/get-involved?interest=corporate#interest-form",
    cta: "Talk partnership",
  },
  {
    id: "program",
    title: "Bring a program to your community",
    summary: "Schools, teams, and organizations can ask about hosting Mind of a Champion or the Basketball Experience.",
    href: "/get-involved?interest=program#interest-form",
    cta: "Request a program",
  },
  {
    id: "schools",
    title: "Schools & organizations",
    summary: "Build programming with educators, athletic departments, and youth organizations.",
    href: "/get-involved?interest=schools#interest-form",
    cta: "Connect",
  },
  {
    id: "community-org",
    title: "Community organizations",
    summary: "Partner on resources, events, and support that meet families where they are.",
    href: "/get-involved?interest=community-org#interest-form",
    cta: "Partner locally",
  },
  {
    id: "athletes",
    title: "Athletes",
    summary: "Lend your voice, your time, or a visit. Guest appearances are scheduled, not assumed.",
    href: "/get-involved?interest=athletes#interest-form",
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

export const interestOptions = [
  { id: "volunteer", label: "Volunteer" },
  { id: "mentor", label: "Become a mentor" },
  { id: "corporate", label: "Corporate partnership" },
  { id: "program", label: "Bring a program to my community" },
  { id: "schools", label: "School or organization" },
  { id: "community-org", label: "Community organization" },
  { id: "athletes", label: "Athlete" },
  { id: "camp", label: "Basketball Experience updates" },
  { id: "general", label: "General question" },
] as const;

export type InterestId = (typeof interestOptions)[number]["id"];

export const donationAmounts = [25, 50, 100, 250, 500] as const;

export type GiftFrequency = "once" | "monthly";
