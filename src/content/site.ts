import type { LinkItem } from "./types";

export const site = {
  name: "Mike James Foundation",
  shortName: "Mike James Foundation",
  tagline: "Building Stronger Minds. Stronger Youth. Stronger Communities.",
  description:
    "The Mike James Foundation uses the power of sports, mentorship and community to help young people and families build healthier minds, discover opportunities and create stronger futures.",
  url: "https://mikejamesfoundation.org",
} as const;

export const navLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "LoveJoy Health", href: "/mental-health" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
];

export const footerExplore: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Donate", href: "/donate" },
  { label: "Mental health & wellness", href: "/mental-health" },
];

export const footerPrograms: LinkItem[] = [
  { label: "Mind of a Champion", href: "/programs/mind-of-a-champion" },
  { label: "Basketball Experience", href: "/programs/basketball-experience" },
  { label: "Education & Mentorship", href: "/programs/education-mentorship" },
  { label: "Mike James Day", href: "/programs/mike-james-day" },
];

export const roles = [
  "NBA Champion",
  "Professional Athlete",
  "Coach",
  "Trainer",
  "Mentor",
  "Community Leader",
] as const;

/** Official profiles. Null href renders as text, not a dead link. */
export const socialLinks: { label: string; href: string | null }[] = [
  { label: "Instagram", href: "https://www.instagram.com/who_mikejames13/" },
];

export const legal = {
  publicName: "Mike James Foundation",
  legalName: "Mike James Mental Health Foundation",
  entity: "Texas domestic nonprofit corporation",
  fileNumber: "805645302",
  ein: "99-4361997",
  formed: "July 31, 2024",
  effective: "August 1, 2024",
  purpose: "Mental health awareness",
  /** Texas Secretary of State registered office. Not a residential mailing address. */
  registeredOffice: "3424 FM 1092, Suite 290, Missouri City, Texas 77459",
  privacyHref: "/privacy",
  termsHref: "/terms",
  lines: [
    "Mike James Foundation is the public name of Mike James Mental Health Foundation, a Texas domestic nonprofit corporation.",
  ],
};

export const crisisNote =
  "If you or someone you know is in crisis, contact local emergency services or call or text 988 in the United States to reach the Suicide & Crisis Lifeline. Mind of a Champion and the LoveJoy Health partnership are not emergency services and are not a substitute for professional care.";

export const mission =
  "The Mike James Foundation empowers young people, athletes and families through mental wellness, mentorship, sports and community programs that build resilience, expand opportunity and create stronger futures.";

export const vision =
  "A future where every young person has the support, confidence and opportunity to thrive—on the court, in the classroom and in life.";

/**
 * Working values drawn from the foundation brief.
 * PLACEHOLDER language — confirm with leadership before treating this list as official.
 */
export const values = [
  {
    title: "Resilience",
    body: "Strength is built in hard seasons. We help young people practice the mindset to keep going.",
  },
  {
    title: "Discipline",
    body: "Work ethic is a value, not a slogan. Showing up, doing the work, and staying with it.",
  },
  {
    title: "Respect",
    body: "Sportsmanship, character, and personal integrity. How you treat people is part of the standard.",
  },
  {
    title: "Support",
    body: "No one becomes who they are alone. Mentors, families, coaches, and communities matter.",
  },
  {
    title: "Opportunity",
    body: "Education, mentorship, and the game can each open a door. The work is to make the other side real.",
  },
  {
    title: "Belief",
    body: "Someone believing in you early can change what you think is possible.",
  },
] as const;

export const philosophy = {
  eyebrow: "Core philosophy",
  title: "Championships are bigger than trophies.",
  body: "They are built through resilience, discipline, support, opportunity and believing that something greater is possible.",
};
