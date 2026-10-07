import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/content/images";
import { pageSeo } from "@/content/seo";
import "./about.css";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  alternates: { canonical: "/about" },
};

const journey = [
  {
    kicker: "Duquesne",
    title: "Student-athlete",
    body: "Graduated in 1998 in child psychology and communication. First-team All-Atlantic 10.",
  },
  {
    kicker: "2004",
    title: "NBA Champion",
    body: "A championship with the Detroit Pistons, after an undrafted and international road.",
  },
  {
    kicker: "Houston",
    title: "Coach and mentor",
    body: "Founded and coached the Mike James Basketball Experience from 2005 to 2013.",
  },
  {
    kicker: "Today",
    title: "Mike James Foundation",
    body: "Wellness, education, mentorship, basketball, and community. LoveJoy Health is the care-access partner.",
  },
];

const marks = [
  {
    title: "Mental wellness",
    body: "Emotional resilience and a path toward real support.",
  },
  {
    title: "Education",
    body: "Mentors and learning, continuing scholarship work already in Mike’s record.",
  },
  {
    title: "The game",
    body: "Basketball as a classroom for discipline and life off the court.",
  },
  {
    title: "Community",
    body: "Neighborhoods where Mike has shown up, and where the work goes next.",
  },
];

const programs = [
  {
    title: "Mentorship",
    body: "A consistent adult beside a young person. Screening comes before anyone is matched.",
    href: "/programs/education-mentorship",
    image: images.pillarYouth,
  },
  {
    title: "Mental health & wellness",
    body: "Mind of a Champion makes room to talk about pressure, setbacks, and life beyond the game.",
    href: "/programs/mind-of-a-champion",
    image: images.mind,
  },
  {
    title: "Education & scholarships",
    body: "College preparation, career exposure, and the scholarship fund Mike has already chaired.",
    href: "/programs/education-mentorship",
    image: images.classroom,
  },
  {
    title: "Community programs",
    body: "Mike James Day brings basketball, family, wellness, and the neighborhood into one day.",
    href: "/programs/mike-james-day",
    image: images.community,
  },
];

export default function AboutPage() {
  return (
    <div className="about-redesign">
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-hero-copy">
          <p className="about-kicker">The foundation</p>
          <h1 id="about-heading">
            Building stronger
            <br />
            futures.
          </h1>
          <p>
            The Mike James Foundation creates opportunities for young people through mentorship, mental wellness, education, basketball, and community.
          </p>
          <div className="about-actions">
            <Link className="about-btn" href="/donate">
              Donate
            </Link>
            <Link className="about-btn is-ghost" href="/programs">
              Our programs
            </Link>
          </div>
        </div>
        <div className="about-hero-photo">
          <Image
            src={images.portrait.src}
            alt={images.portrait.alt}
            fill
            priority
            sizes="(min-width: 960px) 48vw, 100vw"
            style={{ objectPosition: "center 16%" }}
          />
          <p className="about-sign" aria-hidden="true">
            Mike James
          </p>
        </div>
      </section>

      <section className="about-people" aria-labelledby="people-heading">
        <div className="about-people-photo">
          <Image
            src={images.community.src}
            alt={images.community.alt}
            fill
            sizes="(min-width: 960px) 46vw, 100vw"
            style={{ objectPosition: "72% top" }}
          />
          <Image className="about-people-mark" src="/brand/mj-mark.png" alt="" width={433} height={336} />
        </div>
        <div className="about-people-copy">
          <p className="about-kicker">About Mike</p>
          <h2 id="people-heading">More than basketball.</h2>
          <p>
            Mike James is an NBA champion, and he is also a coach, a trainer, a mentor, and a community leader. The playing career, including a championship with the Detroit Pistons in 2004, opened into the work he was already doing off the floor.
          </p>
          <p>
            At Duquesne he studied child psychology and communication. While he was still playing, he coached young athletes in Houston, chaired a scholarship fund, and hosted Mike James Day for neighbors in Amityville.
          </p>
        </div>
      </section>

      <section className="about-journey" aria-labelledby="journey-heading">
        <div className="about-journey-copy">
          <h2 id="journey-heading">
            From the court
            <br />
            to the community.
          </h2>
          <p className="about-journey-lede">The career led into coaching, mentoring, and showing up for a neighborhood.</p>
          <ol>
            {journey.map((step) => (
              <li key={step.kicker}>
                <span>{step.kicker}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="about-journey-photo">
          <Image
            src={images.runners.src}
            alt={images.runners.alt}
            fill
            sizes="(min-width: 960px) 48vw, 100vw"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
      </section>

      <section className="about-why" aria-labelledby="why-heading">
        <p className="about-kicker">Why the foundation exists</p>
        <h2 id="why-heading">Giving back has always been part of the journey.</h2>
        <p>
          The Houston program, the scholarship fund, and Mike James Day were already how Mike used the platform while the career was still going. The foundation holds that same work in one place for the young people coming up now.
        </p>
      </section>

      <section className="about-programs" aria-labelledby="programs-heading">
        <div className="about-programs-intro">
          <h2 id="programs-heading">Supporting young people where it matters most.</h2>
          <p>Mentorship, mental wellness, education, and community programs. Each one continues something Mike has already done.</p>
        </div>
        <ul>
          {programs.map((program) => (
            <li key={program.title}>
              <Link href={program.href}>
                <span className="about-card-photo">
                  <Image
                    src={program.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 960px) 22vw, 100vw"
                    style={{ objectPosition: program.image.objectPosition }}
                  />
                </span>
                <h3>{program.title}</h3>
                <p>{program.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-lovejoy" aria-labelledby="lovejoy-heading">
        <div>
          <p className="about-kicker">LoveJoy partnership</p>
          <h2 id="lovejoy-heading">Making mental wellness part of the conversation.</h2>
          <p>
            LoveJoy Health is the foundation’s mental-health and care-access partner. Mike wants young people, athletes, and families to have a real next step after the conversation: resources, care navigation, and a path toward licensed support.
          </p>
          <p>Mind of a Champion is that conversation. The LoveJoy patient app is where people join Mike’s community and find support. In a crisis, call or text 988.</p>
          <Link className="about-btn" href="/mental-health">
            Explore mental health
          </Link>
        </div>
        <Image
          className="about-lovejoy-mark"
          src="/brand/lovejoy-health.png"
          alt="LoveJoy Health"
          width={981}
          height={207}
        />
      </section>

      <section className="about-impact" aria-labelledby="impact-heading">
        <h2 id="impact-heading">The work in our communities.</h2>
        <p className="about-impact-lede">
          Youth served, scholarships, events, and programs will be published here once the numbers are verified.
        </p>
        <ul>
          {marks.map((mark) => (
            <li key={mark.title}>
              <h3>{mark.title}</h3>
              <p>{mark.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-close" aria-labelledby="close-heading">
        <Image
          src={images.ballArm.src}
          alt=""
          fill
          sizes="100vw"
          style={{ objectPosition: images.ballArm.objectPosition }}
        />
        <div className="about-close-shade" />
        <div className="about-close-copy">
          <h2 id="close-heading">Help us keep the work going.</h2>
          <p>
            Your support helps us reach more young people, strengthen our programs, and create more opportunities in the communities we serve.
          </p>
          <div className="about-actions">
            <Link className="about-btn" href="/donate">
              Donate now
            </Link>
            <Link className="about-btn is-ghost" href="/get-involved">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
