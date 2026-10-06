import { images } from "./images";

export const home = {
  hero: {
    titleLead: "Stronger",
    titleAccent: "Minds.",
    titleRest: ["Stronger", "Futures."],
    body: "Building resilience, creating opportunity and strengthening communities through mental wellness, mentorship and sport.",
    cta: { label: "Explore the foundation", href: "/about" },
    script: "More than a Champion.",
    image: {
      ...images.hero,
      src: "/images/mj-rockets-hero.jpg",
      objectPosition: "center 42%",
    },
  },
  mission: {
    title: ["The game can", "change a life.", "So can someone", "believing in you."],
    body: "Mike James knows what opportunity can make possible. His foundation exists to create more of it—for the mind, the individual and the community.",
    cta: { label: "Meet Mike", href: "/about" },
    image: { ...images.story, objectPosition: "center 18%" },
  },
  mind: {
    eyebrow: "Our signature mission",
    title: ["Mind of", "a Champion."],
    statement: "Mental strength is strength.",
    body: "Helping athletes, young people and families build resilience, talk openly about mental health and find support when they need it.",
    foundation: "Mike James Foundation",
    partner: "LoveJoy Health",
    partnerLabel: "Mental Health & Care Access Partner",
    actions: [
      { label: "Explore mental health", href: "/mental-health", variant: "primary" as const },
      { label: "Join Mike's community", href: "/mental-health#download", variant: "secondary" as const },
    ],
  },
  beyond: {
    title: "Beyond the game.",
    line: "Mental wellness. Education. Opportunity. Community.",
    cta: { label: "Explore our programs", href: "/programs" },
    paths: [
      {
        kicker: "Opportunity",
        name: "Education & Mentorship",
        href: "/programs/education-mentorship",
        image: { ...images.classroom, objectPosition: "center 40%" },
      },
      {
        kicker: "The Game",
        name: "Mike James Basketball Experience",
        href: "/programs/basketball-experience",
        image: { ...images.camp, objectPosition: "42% 28%" },
      },
      {
        kicker: "Community",
        name: "Mike James Day & Community Impact",
        href: "/programs/mike-james-day",
        image: { ...images.community, objectPosition: "92% 22%" },
      },
    ],
  },
  close: {
    eyebrow: "The next chapter",
    title: ["Is bigger than", "basketball."],
    body: "Help us build stronger minds, create opportunities and show up for communities.",
    actions: [
      { label: "Get involved", href: "/get-involved", variant: "primary" as const },
      { label: "Donate", href: "/donate", variant: "secondary" as const },
    ],
    image: { ...images.community, objectPosition: "42% 32%" },
  },
};
