import { images } from "./images";
import type { ImageAsset } from "./types";

export type ProgramArea = {
  title: string;
  description: string;
};

export type ProgramBlock =
  | {
      type: "prose";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      image?: ImageAsset;
    }
  | {
      type: "areas";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: ProgramArea[];
    }
  | {
      type: "note";
      id?: string;
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      cta?: { label: string; href: string };
    }
  | {
      type: "gallery";
      title: string;
      intro?: string;
    }
  | {
      type: "video";
      title: string;
    }
  | {
      type: "schedule";
      title: string;
      intro: string;
      items: { title: string; detail: string }[];
      empty: string;
    };

export type Program = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  lede: string;
  image: ImageAsset;
  hero: ImageAsset;
  areas: ProgramArea[];
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Short line used on the homepage feature, when the program has one. */
  signature?: string;
  blocks: ProgramBlock[];
  gallery: ImageAsset[];
  video: {
    poster: ImageAsset;
    src: string | null;
    caption: string;
  } | null;
};

const loveJoyNote: ProgramBlock = {
  type: "note",
  id: "partnership",
  eyebrow: "Mental health & care access partner",
  title: "From conversation to care.",
  paragraphs: [
    "Talking about mental health is important. Making it easier for people to find and stay connected to support is just as important.",
    "LoveJoy Health is the care-access partner for Mind of a Champion. The partnership can connect people to mental-health resources, assessments, care navigation, and appropriate professional support.",
    "LoveJoy connects people to resources, care navigation, and licensed clinicians. In a crisis, call or text 988. What you read here is education and a way to reach support.",
  ],
  cta: { label: "Explore mental health & wellness", href: "/mental-health" },
};

export const programs: Program[] = [
  {
    slug: "mind-of-a-champion",
    name: "Mind of a Champion",
    eyebrow: "Mental health & wellness",
    headline: "The strongest athletes train more than their bodies.",
    summary:
      "Mind of a Champion helps young athletes and students develop the mental and emotional skills needed to navigate pressure, expectations, adversity and life beyond the game.",
    lede: "Mental strength is part of the work. This program makes that work visible, practical, and human — for athletes, students, families, and the adults who coach them.",
    image: images.mind,
    hero: images.mind,
    areas: [
      {
        title: "Athlete conversations",
        description: "Honest rooms where players can talk about pressure, identity, and life off the floor.",
      },
      {
        title: "Mental wellness workshops",
        description: "Practical sessions on resilience, focus, and asking for support before a crisis.",
      },
      {
        title: "School and team programming",
        description: "Sessions that can travel to a school, a club, or a team.",
      },
      {
        title: "Youth mental-health education",
        description: "Language young people already use.",
      },
      {
        title: "Parent and coach resources",
        description: "Tools for the adults closest to a young person: what to notice, and how to respond.",
      },
      {
        title: "Screenings and care connections",
        description: "A path from awareness toward resources and professional support, when that is the right next step.",
      },
    ],
    cta: {
      label: "Explore Mind of a Champion",
      href: "/programs/mind-of-a-champion",
    },
    secondaryCta: {
      label: "Bring Mind of a Champion to your organization",
      href: "/contact?interest=program#contact-form",
    },
    gallery: [images.mind, images.pillarMind, images.classroom, images.partnership],
    video: {
      poster: images.partnership,
      src: null,
      caption: "A program film will play here when it is ready.",
    },
    blocks: [
      {
        type: "prose",
        eyebrow: "Why it matters",
        title: "Pressure does not end when the final horn sounds.",
        paragraphs: [
          "Young athletes are asked to perform, to represent, and to keep their composure while their lives are still being built. School, family, money, identity, and the game can all land at once.",
          "Mind of a Champion exists so mental and emotional skill is trained with the same seriousness as a jump shot. The work is education, conversation, and a connection to care.",
        ],
        image: images.pillarMind,
      },
      {
        type: "prose",
        eyebrow: "Program philosophy",
        title: "Strength includes knowing when to reach.",
        paragraphs: [
          "Resilience is real, and so is support. Sessions ask young people to name what they feel and to know where to turn.",
          "Sessions are built to be direct, age-aware, and hopeful. The goal is a young person who can name what they feel, stay in the work, and know where to turn.",
        ],
      },
      {
        type: "areas",
        eyebrow: "What the work includes",
        title: "What the program holds.",
        intro: "These are the parts of Mind of a Champion.",
        items: [
          {
            title: "Athlete conversations",
            description: "Facilitated conversations with athletes about pressure, confidence, setbacks, and identity beyond the stat line.",
          },
          {
            title: "Mental wellness workshops",
            description: "Workshops for youth on focus, emotional regulation, help-seeking, and recovering after a hard moment.",
          },
          {
            title: "School and team programming",
            description: "A format that can sit inside a school day, a practice week, or a team meeting.",
          },
          {
            title: "Parent and coach education",
            description: "Resources that help adults listen well, drop the stigma, and point a young person toward real support.",
          },
          {
            title: "Resources",
            description: "Plain-language materials people can keep and share.",
          },
          {
            title: "Care connections",
            description: "When a young person needs more than a workshop, the program can point toward professional support and care navigation.",
          },
        ],
      },
      loveJoyNote,
    ],
  },
  {
    slug: "basketball-experience",
    name: "Mike James Basketball Experience",
    eyebrow: "Basketball & opportunity",
    headline: "The game teaches more than the game.",
    summary:
      "Mike founded the Mike James Basketball Experience in Houston for youth, high-school, and collegiate athletes. The foundation picks up that work: player development, leadership, mentorship, and the life skills that travel past the court.",
    lede: "Mike built this program in Houston, coached it, and used it to develop young athletes. The foundation is picking that work back up.",
    image: images.camp,
    hero: images.camp,
    areas: [
      { title: "Player development", description: "Fundamentals, shooting, dribbling, passing, conditioning, and team play, taught to the age and skill in the gym." },
      { title: "Leadership", description: "How to carry a group: voice, effort, and the standard when the drill gets hard." },
      { title: "Mentorship", description: "Time with coaches who treat the person as seriously as the player." },
      { title: "Mental performance", description: "Focus, pressure, and the mind that has to travel with the body." },
      { title: "Education", description: "School sits beside the workouts. Academics are part of how a player develops." },
      { title: "Life skills", description: "Nutrition, preparation, character, and habits that still matter off the court." },
    ],
    cta: { label: "Explore the Basketball Experience", href: "/programs/basketball-experience" },
    secondaryCta: {
      label: "Get involved",
      href: "/contact?interest=volunteer#contact-form",
    },
    gallery: [images.camp, images.story, images.portrait, images.brotherhood],
    video: {
      poster: images.story,
      src: null,
      caption: "From the floor.",
    },
    blocks: [
      {
        type: "prose",
        eyebrow: "Where it started",
        title: "Houston, then forward.",
        paragraphs: [
          "From 2005 to 2013, Mike founded and served as head coach of the Mike James Basketball Experience in Houston. The program worked with youth, high-school, and collegiate athletes.",
          "The curriculum was the game and the life around it: fundamentals, shooting, dribbling, passing, conditioning, team play, nutrition, academics, personal development, and mentorship.",
          "His coaching standard has been consistent. Sportsmanship, teamwork, respect, character, work ethic, and personal integrity sit next to skill. Success is on the court and off it.",
        ],
        image: images.story,
      },
      {
        type: "areas",
        eyebrow: "Under the same name",
        title: "What the experience holds.",
        intro: "Championship Camp, skills clinics, and leadership sessions can live inside this program. None of those dates are published until a camp is actually set.",
        items: [
          {
            title: "Player development",
            description: "Skill work and team concepts, coached with the same seriousness Mike brought to the Houston program.",
          },
          {
            title: "Leadership",
            description: "How players speak, respond, and raise the group without waiting for a title.",
          },
          {
            title: "Mentorship",
            description: "Structured time with mentors. Names are announced when they are confirmed.",
          },
          {
            title: "Mental performance",
            description: "The mind under pressure, in conversation with Mind of a Champion.",
          },
          {
            title: "Education and life skills",
            description: "Academics, nutrition, preparation, and the habits that make an opportunity usable.",
          },
        ],
      },
      {
        type: "note",
        eyebrow: "Championship Camp",
        title: "Championship Camp is one gathering inside the program.",
        paragraphs: [
          "A Mike James Championship Camp may return as one gathering inside the Basketball Experience: instruction, mentorship, leadership, and conversations about life beyond the game.",
          "No camp date, city, or guest list is published on this site.",
        ],
      },
      {
        type: "gallery",
        title: "Mike, in the game",
        intro: "Career photographs of Mike James.",
      },
      { type: "video", title: "From the floor" },
      {
        type: "schedule",
        title: "Upcoming experiences",
        intro: "Clinics and camps will be listed when a date and location are confirmed.",
        items: [],
        empty: "No dates are published yet. Ask for updates and you will hear when one is real.",
      },
    ],
  },
  {
    slug: "education-mentorship",
    name: "Education & Mentorship",
    eyebrow: "Youth, education & mentorship",
    headline: "Education has always been part of the work.",
    summary:
      "Helping young people access mentors, education, experiences, and opportunities that expand what is possible for their futures.",
    lede: "Mike chaired the Mike James Scholarship Foundation & Fund, which helped at-risk students from disenfranchised communities seek financial assistance for post-secondary education. Mentorship and education carry that same commitment forward.",
    image: images.pillarYouth,
    hero: images.pillarYouth,
    areas: [
      {
        title: "Mentorship",
        description: "A consistent adult. Screening comes before anyone is matched.",
      },
      {
        title: "College preparation",
        description: "Help seeing a campus as a real option, and knowing what the path asks.",
      },
      {
        title: "Career exposure",
        description: "Rooms, jobs, and conversations that are usually hard for a young person to reach.",
      },
      {
        title: "Financial literacy",
        description: "Practical money skills, taught plainly, when a partner is ready to host them.",
      },
      {
        title: "Life skills",
        description: "The habits that make an opportunity usable: showing up, communicating, staying with the work.",
      },
    ],
    cta: { label: "Explore education & mentorship", href: "/programs/education-mentorship" },
    secondaryCta: {
      label: "Become a mentor",
      href: "/contact?interest=mentor#contact-form",
    },
    gallery: [images.pillarYouth, images.classroom, images.youthCircle],
    video: null,
    blocks: [
      {
        type: "prose",
        eyebrow: "Already in the record",
        title: "Scholarships were part of his community life.",
        paragraphs: [
          "As chairman of the Mike James Scholarship Foundation & Fund, Mike helped at-risk students from disenfranchised communities obtain financial assistance to pursue post-secondary education.",
          "The Mike James Foundation carries that interest forward through mentorship, college preparation, career exposure, and life skills. When a scholarship opens, the amount, deadline, and application will be posted here.",
        ],
        image: images.classroom,
      },
      {
        type: "areas",
        eyebrow: "What can grow here",
        title: "The shape of the work.",
        intro: "Where the work can go. Counts of students and mentors will be published when they are real.",
        items: [
          {
            title: "Mentorship",
            description: "A consistent adult, with expectations and safeguards set before matching begins.",
          },
          {
            title: "College preparation",
            description: "Guidance that treats school as the opportunity in front of a young person.",
          },
          {
            title: "Career exposure",
            description: "Time in workplaces and rooms that are usually hard for a young person to reach.",
          },
          {
            title: "Financial literacy",
            description: "Plain teaching about money, offered with a partner when the format is ready.",
          },
          {
            title: "Life skills",
            description: "Communication, accountability, and the unglamorous work of becoming reliable.",
          },
        ],
      },
      {
        type: "note",
        eyebrow: "Scholarships",
        title: "The scholarship record.",
        paragraphs: [
          "The scholarship fund is part of Mike's record. A current application will be posted when an award is open.",
        ],
      },
    ],
  },
  {
    slug: "mike-james-day",
    name: "Mike James Day",
    eyebrow: "Community",
    signature: "Basketball. Family. Wellness. Community.",
    headline: "Showing up matters.",
    summary:
      "A community tradition built around bringing people together, creating opportunities, and supporting families.",
    lede: "Mike James Day began as a community event Mike hosted for residents of Amityville, New York. The foundation is bringing that day back for a neighborhood.",
    image: images.community,
    hero: images.community,
    areas: [
      { title: "Youth basketball", description: "Play and instruction that invite people in." },
      { title: "Family activities", description: "Room for the people who came with the player." },
      { title: "School resources", description: "Practical help for the school year, when a partner makes it possible." },
      { title: "Food", description: "Food alongside the day, offered with dignity." },
      { title: "Wellness", description: "Health information people can use the same week." },
      { title: "Mental-health resources", description: "Awareness and a path toward support people can use after the day." },
      { title: "Mentors", description: "Conversations that can continue after the day ends." },
      { title: "Local organizations", description: "Neighborhood groups in the room, talking with families." },
    ],
    cta: { label: "Explore Mike James Day", href: "/programs/mike-james-day" },
    secondaryCta: {
      label: "Partner on Mike James Day",
      href: "/contact?interest=community-org#contact-form",
    },
    gallery: [images.community, images.pillarYouth, images.youthCircle, images.runners],
    video: null,
    blocks: [
      {
        type: "prose",
        eyebrow: "Where it started",
        title: "Amityville was the first version.",
        paragraphs: [
          "Mike hosted Mike James Day in Amityville, New York, a community event for local residents. Showing up for a neighborhood was already part of how he used his platform.",
          "The foundation's Mike James Day is that tradition, widened: basketball, family, wellness, and community in one day. He has also stood with efforts such as Hoodies 4 Healing. The photograph shows him there. Hoodies 4 Healing remains its own organization.",
        ],
        image: images.community,
      },
      {
        type: "areas",
        eyebrow: "What a day can hold",
        title: "Basketball. Family. Wellness. Community.",
        intro: "A future Mike James Day can draw from this list. What shows up depends on the neighborhood and the partners in the room.",
        items: [
          { title: "Youth basketball", description: "Open play and instruction across ages and skill." },
          { title: "Families", description: "Space for parents, siblings, and caregivers to be part of the day." },
          { title: "School resources and food", description: "Supplies and food coordinated with local partners, when those partners are confirmed." },
          { title: "Wellness and mental health", description: "Information and a path toward support. In a crisis, call or text 988." },
          { title: "Mentors, athletes, and local groups", description: "People in the room, including businesses and organizations from the neighborhood." },
        ],
      },
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export const pillars = [
  {
    title: "Mental Health & Wellness",
    description:
      "Helping young people, athletes and families build emotional resilience, understand mental health, and connect with support.",
    href: "/programs/mind-of-a-champion",
    image: images.pillarMind,
  },
  {
    title: "Youth, Education & Mentorship",
    description:
      "Helping young people access mentors, education, experiences, and opportunities that expand what is possible for their futures.",
    href: "/programs/education-mentorship",
    image: images.pillarYouth,
  },
  {
    title: "Basketball & Opportunity",
    description:
      "Basketball as a teacher of discipline, confidence, leadership, character, education, mental strength, and life skills. Rooted in the Mike James Basketball Experience.",
    href: "/programs/basketball-experience",
    image: images.pillarBasketball,
  },
  {
    title: "Community Impact",
    description:
      "Showing up matters. Community events, family support, and partnerships, in the spirit of Mike James Day and the neighborhoods Mike has already stood with.",
    href: "/programs/mike-james-day",
    image: images.pillarCommunity,
  },
] as const;
