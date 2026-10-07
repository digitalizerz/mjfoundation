/**
 * IMPACT DATA
 * All figures below are PLACEHOLDERS for layout.
 * They are not verified program results. Replace `stats` with confirmed numbers
 * and set `placeholder` to false before presenting them as real impact.
 */

export type ImpactStat = {
  id: string;
  value: string;
  label: string;
};

export type ImpactStatement = {
  id: string;
  title: string;
  body: string;
  href?: string;
};

export const featuredImpact: {
  placeholder: true;
  note: string;
  headline: string;
  eyebrow: string;
  body: string;
  /** Leave empty until numbers are verified. Do not put sample counts here. */
  stats: ImpactStat[];
  statements: ImpactStatement[];
} = {
  placeholder: true,
  note: "No impact totals are published yet. Figures will appear here only after they are verified.",
  eyebrow: "Our impact",
  headline: "The work in our communities.",
  body: "Mentorship, mental wellness, education, basketball, and community. This is how the foundation shows up for young people and families. LoveJoy Health is the care-access partner for Mind of a Champion.",
  stats: [],
  statements: [
    {
      id: "mind",
      title: "Mental wellness",
      body: "Emotional resilience, plain language, and a path toward real support.",
    },
    {
      id: "education",
      title: "Education",
      body: "Mentors and learning, continuing scholarship work Mike has already done.",
    },
    {
      id: "game",
      title: "The game",
      body: "Basketball as a classroom for discipline, character, and life off the court.",
    },
    {
      id: "lovejoy",
      title: "LoveJoy Health",
      body: "The care-access partner for Mind of a Champion. Resources, care navigation, and a path toward licensed support.",
      href: "/mental-health",
    },
  ],
};

export type ImpactArea = {
  id: string;
  title: string;
  summary: string;
  /** Push confirmed metrics here. Leave empty until numbers are real. */
  metrics: ImpactStat[];
  emptyLabel: string;
};

export const impactAreas: ImpactArea[] = [
  {
    id: "youth",
    title: "Youth reached",
    summary: "Young people who take part in programs, clinics, workshops, and Mike James Day.",
    metrics: [],
    emptyLabel: "Verified youth counts will be published here.",
  },
  {
    id: "families",
    title: "Families reached",
    summary: "Parents, caregivers, and households connected to resources and events.",
    metrics: [],
    emptyLabel: "Verified family counts will be published here.",
  },
  {
    id: "wellness",
    title: "Mental wellness",
    summary: "Education, conversations, and connections toward professional support.",
    metrics: [],
    emptyLabel: "Program activity will be reported here without medical claims.",
  },
  {
    id: "programs",
    title: "Programs",
    summary: "Camps, school and team programming, mentorship, and community gatherings delivered.",
    metrics: [],
    emptyLabel: "A program-by-program record will live here.",
  },
  {
    id: "communities",
    title: "Communities",
    summary: "Cities, schools, and neighborhoods where the foundation shows up.",
    metrics: [],
    emptyLabel: "Community listings will be added as work is confirmed.",
  },
  {
    id: "partners",
    title: "Partners",
    summary: "Organizations that extend the foundation's reach. LoveJoy Health is the named care-access partner.",
    metrics: [],
    emptyLabel: "Additional confirmed partners will be listed here.",
  },
];

/** PLACEHOLDER — no report file exists yet. */
export const annualReports: {
  id: string;
  year: string;
  title: string;
  href: string | null;
  placeholder: true;
}[] = [
  {
    id: "forthcoming",
    year: "Forthcoming",
    title: "Annual report",
    href: null,
    placeholder: true,
  },
];
