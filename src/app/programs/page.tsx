import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { images } from "@/content/images";
import { pageSeo } from "@/content/seo";
import "./programs.css";

export const metadata: Metadata = {
  title: pageSeo.programs.title,
  description: pageSeo.programs.description,
  alternates: { canonical: "/programs" },
};

const areas = [
  { title: "Youth development", icon: "youth" as const },
  { title: "Mental health & wellness", icon: "mind" as const },
  { title: "Education & scholarships", icon: "edu" as const },
  { title: "Basketball programs", icon: "ball" as const },
  { title: "Community initiatives", icon: "community" as const },
];

const cards = [
  {
    title: "Mentorship",
    body: "A consistent adult, real conversations, and guidance. Screening comes before anyone is matched.",
    href: "/programs/education-mentorship",
    image: images.pillarYouth,
    icon: "youth" as const,
  },
  {
    title: "Mental health & wellness",
    body: "Room to talk about pressure and life beyond the game, with LoveJoy Health as the care-access partner.",
    href: "/programs/mind-of-a-champion",
    image: images.mind,
    icon: "mind" as const,
  },
  {
    title: "Education & scholarships",
    body: "College preparation and the scholarship fund Mike has already chaired. An application is posted when an award is open.",
    href: "/programs/education-mentorship",
    image: images.classroom,
    icon: "edu" as const,
  },
  {
    title: "Basketball development",
    body: "Skill, teamwork, and leadership on and off the court, in the line of the Mike James Basketball Experience.",
    href: "/programs/basketball-experience",
    image: {
      src: "/images/outdoor-player.jpg",
      alt: "A young player rises toward the rim on an outdoor court.",
      objectPosition: "center 40%",
    },
    icon: "ball" as const,
  },
  {
    title: "Community initiatives",
    body: "Mike James Day brings basketball, family, wellness, and the neighborhood into one day.",
    href: "/programs/mike-james-day",
    image: images.community,
    icon: "community" as const,
  },
];

export default function ProgramsPage() {
  return (
    <div className="programs-redesign">
      <section className="programs-hero" aria-labelledby="programs-heading">
        <div className="programs-hero-copy">
          <p className="programs-kicker">Programs</p>
          <h1 id="programs-heading">
            Supporting young people
            <br />
            on and off the court.
          </h1>
          <p>
            Our programs create opportunities through mentorship, basketball, mental wellness, education, and community. Each one helps young people build confidence, develop their skills, and prepare for what is next.
          </p>
        </div>
        <div className="programs-hero-photo">
          <Image
            src="/images/mj-community-hero.jpg"
            alt="Mike James, at right, with community members at a Hoodies 4 Healing gathering."
            fill
            priority
            sizes="(min-width: 960px) 52vw, 100vw"
            style={{ objectPosition: "right center" }}
          />
        </div>
      </section>

      <section className="programs-areas" aria-label="Program areas">
        <ul>
          {areas.map((area) => (
            <li key={area.title}>
              <AreaIcon name={area.icon} />
              <span>{area.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="programs-list" aria-labelledby="programs-list-heading">
        <div className="programs-list-intro">
          <p className="programs-kicker">Our programs</p>
          <h2 id="programs-list-heading">Where young people can find support.</h2>
          <p>
            Mentorship, mental wellness, education, basketball, and community. Each one continues something Mike has already done, in school, in life, and in the neighborhood.
          </p>
        </div>
        <ul>
          {cards.map((card) => (
            <li key={card.title}>
              <Link href={card.href}>
                <span className="programs-card-photo">
                  <Image
                    src={card.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 960px) 30vw, 100vw"
                    style={{ objectPosition: card.image.objectPosition }}
                  />
                </span>
                <span className="programs-card-icon" aria-hidden="true">
                  <AreaIcon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="programs-more">Learn more</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="programs-lovejoy" aria-labelledby="programs-lovejoy-heading">
        <div className="programs-lovejoy-copy">
          <p className="programs-kicker">Mental wellness partner</p>
          <h2 id="programs-lovejoy-heading">
            Making mental wellness
            <br />
            part of the conversation.
          </h2>
          <p>
            The Mike James Foundation partners with LoveJoy Health so young people, athletes, and families can find mental-health resources and a path toward support. Mind of a Champion starts the conversation. The LoveJoy patient app is the next step. In a crisis, call or text 988.
          </p>
          <Link className="programs-btn" href="/mental-health#download">
            Join Mike&apos;s community on LoveJoy Health
          </Link>
          <div className="programs-partner-logos">
            <Logo />
            <Image src="/brand/lovejoy-health-light.png" alt="LoveJoy Health" width={981} height={207} />
          </div>
        </div>
        <div className="programs-lovejoy-photo">
          <Image
            src={images.portrait.src}
            alt={images.portrait.alt}
            fill
            sizes="(min-width: 960px) 46vw, 100vw"
            style={{ objectPosition: "center 18%" }}
          />
        </div>
      </section>

      <section className="programs-close" aria-labelledby="programs-close-heading">
        <Image
          src={images.ballNet.src}
          alt=""
          fill
          sizes="100vw"
          style={{ objectPosition: images.ballNet.objectPosition }}
        />
        <div className="programs-close-shade" />
        <div className="programs-close-copy">
          <p className="programs-kicker">Get involved</p>
          <h2 id="programs-close-heading">Help us keep the work going.</h2>
          <p>
            Your support helps us expand our programs, reach more young people, and create more opportunities in the communities we serve.
          </p>
          <div className="programs-actions">
            <Link className="programs-btn" href="/donate">
              Donate now
            </Link>
            <Link className="programs-btn is-ghost" href="/get-involved">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function AreaIcon({ name }: { name: "youth" | "mind" | "edu" | "ball" | "community" }) {
  const props = {
    viewBox: "0 0 32 32",
    width: 28,
    height: 28,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "youth") {
    return (
      <svg {...props}>
        <circle cx="16" cy="10" r="3.2" />
        <path d="M8 24c1.2-4 3.8-6 8-6s6.8 2 8 6" />
      </svg>
    );
  }
  if (name === "mind") {
    return (
      <svg {...props}>
        <path d="M16 26V14" />
        <path d="M16 18c-4 0-6.5-2-6.5-5.4A4.6 4.6 0 0 1 16 8.2 4.6 4.6 0 0 1 22.5 12.6C22.5 16 20 18 16 18Z" />
      </svg>
    );
  }
  if (name === "edu") {
    return (
      <svg {...props}>
        <path d="M4 13 16 7l12 6-12 6L4 13Z" />
        <path d="M8 15.5V21c2.4 2 5 3 8 3s5.6-1 8-3v-5.5" />
      </svg>
    );
  }
  if (name === "ball") {
    return (
      <svg {...props}>
        <circle cx="16" cy="16" r="8" />
        <path d="M8 16h16M16 8c2.4 2.4 3.6 5.2 3.6 8s-1.2 5.6-3.6 8c-2.4-2.4-3.6-5.2-3.6-8s1.2-5.6 3.6-8Z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="11" cy="12" r="2.6" />
      <circle cx="21" cy="12" r="2.6" />
      <path d="M5 23.5c.7-2.8 2.4-4.4 6-4.4s5.3 1.6 6 4.4" />
      <path d="M16.5 23.5c.5-2 1.8-3.2 4.2-3.2 2.2 0 3.6 1 4.5 3.2" />
    </svg>
  );
}
