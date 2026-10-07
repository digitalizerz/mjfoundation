import { legal, site, socialLinks } from "./site";

/**
 * Search language drawn from how athlete and mental-health foundations
 * are actually described: Kevin Love Fund, The Hidden Opponent, Hilinski's Hope,
 * and basketball-and-wellness groups such as LACE UP.
 * Those sites rank for athlete and student-athlete mental health, youth
 * mentorship, resilience, and community — not generic charity phrases.
 * LoveJoy Health is named as the care-access partner. No tax status is claimed.
 */
export const seo = {
  title: `${site.name} · Stronger Minds. Stronger Futures.`,
  description:
    "The Mike James Foundation helps young people, athletes, and families build mental wellness, mentorship, and opportunity through sport and community. Mind of a Champion is offered with LoveJoy Health, the foundation's mental health and care-access partner.",
  keywords: [
    "Mike James Foundation",
    "Mike James Mental Health Foundation",
    "Mike James",
    "NBA champion",
    "athlete mental health",
    "student-athlete mental health",
    "youth mental wellness",
    "mental health and basketball",
    "youth basketball mentorship",
    "basketball mentorship",
    "Mind of a Champion",
    "LoveJoy Health",
    "mental health care access",
    "The Porch",
    "Mike James Day",
    "youth mentorship",
    "community mental health",
    "resilience",
  ],
  image: {
    url: "/images/mj-rockets-hero.jpg",
    alt: "Mike James smiling in a Houston Rockets jersey during his NBA career.",
  },
} as const;

export const pageSeo = {
  about: {
    title: "About",
    description:
      "About Mike James and the Mike James Foundation: an NBA champion's work in youth mental wellness, athlete mental health, mentorship, basketball, and community, with LoveJoy Health as care-access partner.",
  },
  programs: {
    title: "Programs",
    description:
      "Mike James Foundation programs: Mind of a Champion with LoveJoy Health, the Mike James Basketball Experience, education and mentorship, and Mike James Day.",
  },
  impact: {
    title: "Our Impact",
    description:
      "How the Mike James Foundation will account for youth mental wellness, mentorship, basketball, and community impact. Counts are published only after they are verified.",
  },
  getInvolved: {
    title: "Get Involved",
    description:
      "Get involved with the Mike James Foundation. Donate, volunteer, mentor, or bring youth mental wellness and basketball programs to your school or community.",
  },
  donate: {
    title: "Donate",
    description:
      "How a gift supports the Mike James Foundation's youth mental wellness, mentorship, basketball, and community programs. This website does not collect payment.",
  },
  mentalHealth: {
    title: "Mind of a Champion | Mike James Foundation × LoveJoy Health",
    description:
      "Mind of a Champion is the Mike James Foundation's mental health program with LoveJoy Health, its care-access partner. Download the LoveJoy patient app and join Mike James' community on The Porch.",
  },
  privacy: {
    title: "Privacy",
    description: "Privacy policy for the Mike James Foundation website.",
  },
  terms: {
    title: "Terms",
    description: "Terms for the Mike James Foundation website. The foundation is a Texas domestic nonprofit corporation.",
  },
} as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: legal.legalName,
        url: site.url,
        description: seo.description,
        logo: `${site.url}/brand/mj-mark.png`,
        image: `${site.url}${seo.image.url}`,
        founder: {
          "@type": "Person",
          name: "Mike James",
          jobTitle: "Founder",
        },
        areaServed: "United States",
        sameAs: socialLinks.flatMap((link) => (link.href ? [link.href] : [])),
        knowsAbout: [
          "Athlete mental health",
          "Student-athlete mental health",
          "Youth mental wellness",
          "Basketball mentorship",
          "Youth mentorship",
          "Community programs",
        ],
        affiliation: {
          "@type": "Organization",
          name: "LoveJoy Health",
          url: "https://lovejoy.health",
          description: "Mental health and care-access partner of the Mike James Foundation.",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: seo.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}
