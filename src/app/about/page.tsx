import type { Metadata } from "next";
import { EditorialSection } from "@/components/EditorialSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PillarCard } from "@/components/PillarCard";
import { RoleStrip } from "@/components/RoleStrip";
import { TextLink } from "@/components/TextLink";
import { images } from "@/content/images";
import { pillars } from "@/content/programs";
import { pageSeo } from "@/content/seo";
import { mission, philosophy, values, vision } from "@/content/site";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  alternates: { canonical: "/about" },
};

const archive = [images.portrait, images.story, images.camp, images.brotherhood, images.community];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={philosophy.eyebrow}
        title={philosophy.title}
        lede={philosophy.body}
        image={images.about}
      />

      <RoleStrip />

      <EditorialSection
        eyebrow="Mike James"
        title="He has been doing the work."
        paragraphs={[
          "Mike James did not finish basketball and then decide to start helping people. Coaching, training, mentorship, scholarships, and community events were already part of his life as a professional athlete.",
          "He is an NBA Champion. He is also a coach, a trainer, a mentor, and a community leader. The path was undrafted and international before it became a long NBA career, including a championship with the Detroit Pistons in 2004.",
          "At Duquesne University he earned a degree in child psychology and communication. That study sits behind a long interest in how young people grow. It is not clinical training, and this foundation does not offer therapy.",
          "He has described his standard in plain terms: sportsmanship, teamwork, respect, character, work ethic, and personal integrity, with faith as part of how he carries that standard. The aim is success on the court and off it.",
          "The Mike James Foundation is the next chapter of that record. The same commitments, held in one place, with mental health and wellness as a signature focus through the partnership with LoveJoy Health.",
        ]}
        image={images.portrait}
      />

      <section className="band" aria-labelledby="journey-heading">
        <div className="section-intro">
          <p className="eyebrow">The journey</p>
          <h2 id="journey-heading">From the court to the work.</h2>
          <p>A life in chapters. Not a list of every team, and not a statistics page.</p>
        </div>
        <JourneyTimeline />
      </section>

      <section className="band" aria-labelledby="why-heading">
        <div className="section-intro">
          <p className="eyebrow">Why the foundation exists</p>
          <h2 id="why-heading">A legacy of giving back. A new chapter of impact.</h2>
          <p>
            Basketball created opportunities for Mike. He has spent years creating opportunities for others: young athletes in Houston, students seeking help with school, and neighbors at Mike James Day in Amityville.
          </p>
          <p>
            The foundation brings mental wellness, education, mentorship, basketball, and community under one long-term mission. Mental health is the signature expanding focus. It is not the only purpose.
          </p>
        </div>
      </section>

      <section className="mission-band" aria-label="Mission and vision">
        <article className="mission-card">
          <p className="eyebrow">Mission</p>
          <h2>What we do</h2>
          <p>{mission}</p>
        </article>
        <article className="mission-card">
          <p className="eyebrow">Vision</p>
          <h2>What we see</h2>
          <p>{vision}</p>
        </article>
      </section>

      <section className="value-band" aria-labelledby="values-heading">
        <div className="section-intro">
          <p className="eyebrow">Our values</p>
          <h2 id="values-heading">How the work is held</h2>
          <p>These follow the standard Mike has coached by: character, work, and belief in a young person before the result is obvious.</p>
        </div>
        <ol className="value-list">
          {values.map((value) => (
            <li key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pillar-section" aria-labelledby="about-pillars">
        <div className="section-intro">
          <p className="eyebrow">Foundation pillars</p>
          <h2 id="about-pillars">Four ways the mission shows up.</h2>
          <p>Mental wellness, education and mentorship, basketball, and community.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.href} {...pillar} />
          ))}
        </div>
      </section>

      <EditorialSection
        reverse
        eyebrow="A bigger world"
        title="Beyond the court."
        paragraphs={[
          "Basketball took Mike around the world. Those experiences shaped how he sees opportunity, community, and the responsibility that comes with having a platform.",
        ]}
        image={images.world}
      />

      <section className="band" aria-labelledby="archive-heading">
        <div className="section-intro">
          <p className="eyebrow">Photographs</p>
          <h2 id="archive-heading">The person, not a stand-in.</h2>
          <p>Career and community photographs of Mike James, including teammates from his season with the Timberwolves.</p>
        </div>
        <PhotoGallery images={archive} title="Photographs of Mike James" />
      </section>

      <section className="band" aria-labelledby="leadership-heading">
        <div className="section-intro">
          <p className="eyebrow">Leadership</p>
          <h2 id="leadership-heading">Founder first. The rest, when named.</h2>
          <p>Staff profiles will replace the open seats. This page does not invent an executive team. Michael Lamont James is the registered agent. Mike James is named as principal officer on the 2025 Form 990-N.</p>
        </div>
        <div className="leader-grid">
          <article className="leader-card">
            <h3>Mike James</h3>
            <span>Founder</span>
            <p>NBA Champion, coach, trainer, mentor, and community leader.</p>
          </article>
          {["Executive leadership", "Program leadership", "Operations"].map((seat) => (
            <article key={seat} className="leader-card">
              <h3>{seat}</h3>
              <span>Profile forthcoming</span>
            </article>
          ))}
        </div>
      </section>

      <section className="band" aria-labelledby="board-heading">
        <div className="section-intro">
          <p className="eyebrow">Board & advisors</p>
          <h2 id="board-heading">Members, not a published board.</h2>
          <p>
            The Texas certificate of formation vests management in the members of the corporation. It does not name a board of directors. Directors and advisors will be listed here only if that structure is changed and the appointments are public.
          </p>
        </div>
        <div className="empty-panel">
          <p>Member directory forthcoming. No directors are named in the certificate of formation.</p>
        </div>
      </section>

      <section className="band" aria-labelledby="partners-heading">
        <div className="section-intro">
          <p className="eyebrow">Partners</p>
          <h2 id="partners-heading">Named when the agreement is real.</h2>
          <p>
            LoveJoy Health is the foundation&apos;s mental-health and care-access partner, connecting education and awareness with resources, care navigation, and pathways to professional support. The foundation is not a LoveJoy Health company, and the partnership is not emergency care.
          </p>
          <p>
            Earlier community participation, including Hoodies 4 Healing and Mike James Day in Amityville, belongs to Mike&apos;s history. Those names are not listed here as current foundation contracts.
          </p>
          <TextLink href="/mental-health">Explore mental health & wellness</TextLink>
        </div>
        <div className="empty-panel">
          <p>Additional partners and sponsors will be recognized here. None are listed until an agreement is public.</p>
        </div>
      </section>
    </>
  );
}
