import Image from "next/image";
import { HomeMotion } from "@/components/HomeMotion";
import { MediaFrame } from "@/components/MediaFrame";
import { ButtonLink } from "@/components/TextLink";
import { home } from "@/content/home";
import { lovejoyScreens } from "@/content/lovejoy";
import "./home.css";

const screen = lovejoyScreens.community;

export default function HomePage() {
  return (
    <div className="home">
      <HomeMotion />

      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-media">
          <MediaFrame
            image={home.hero.image}
            priority
            unoptimized
            sizes="100vw"
            className="media-img home-hero-img"
          />
        </div>
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="home-hero-copy">
          <div className="home-hero-lead">
            <h1 id="home-hero-title">
              <span>{home.hero.titleLead}</span>
              <span className="is-gold">{home.hero.titleAccent}</span>
              {home.hero.titleRest.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{home.hero.body}</p>
            <div className="home-hero-actions">
              <ButtonLink href={home.hero.cta.href}>{home.hero.cta.label}</ButtonLink>
            </div>
          </div>
          <p className="home-script">{home.hero.script}</p>
        </div>
      </section>

      <section className="home-mission" aria-labelledby="home-mission-title">
        <div className="home-mission-media home-mask" data-reveal>
          <MediaFrame image={home.mission.image} sizes="(min-width: 900px) 46vw, 100vw" />
        </div>
        <div className="home-mission-copy" data-reveal>
          <h2 id="home-mission-title">
            {home.mission.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{home.mission.body}</p>
          <ButtonLink href={home.mission.cta.href}>{home.mission.cta.label}</ButtonLink>
        </div>
      </section>

      <section className="home-mind" aria-labelledby="home-mind-title">
        <div className="home-goldline" data-reveal aria-hidden="true" />
        <div className="home-mind-copy" data-reveal>
          <p className="eyebrow">{home.mind.eyebrow}</p>
          <h2 id="home-mind-title">
            {home.mind.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="home-mind-statement">{home.mind.statement}</p>
          <p>{home.mind.body}</p>
          <div className="home-lockup">
            <p className="home-lockup-name">
              <Image src="/brand/mj-mark.png" alt="" width={433} height={336} />
              <span>{home.mind.foundation}</span>
            </p>
            <span className="home-lockup-times" aria-hidden="true">
              ×
            </span>
            <figure>
              <Image
                src="/brand/lovejoy-health-light.png"
                alt={home.mind.partner}
                width={981}
                height={207}
              />
              <figcaption>{home.mind.partnerLabel}</figcaption>
            </figure>
          </div>
          <div className="home-mind-actions">
            {home.mind.actions.map((action) => (
              <ButtonLink key={action.href} href={action.href} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>
        {screen ? (
          <div className="home-phone-stage" data-reveal>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              className="home-phone"
            />
          </div>
        ) : null}
      </section>

      <section className="home-beyond" aria-labelledby="home-beyond-title">
        <div className="home-beyond-head" data-reveal>
          <h2 id="home-beyond-title">{home.beyond.title}</h2>
          <p>{home.beyond.line}</p>
        </div>
        <div className="home-paths">
          {home.beyond.paths.map((path) => (
            <a key={path.href} className="home-path" href={path.href}>
              <span className="home-path-media home-mask" data-reveal>
                <MediaFrame image={path.image} sizes="(min-width: 900px) 33vw, 100vw" />
              </span>
              <span className="home-path-shade" aria-hidden="true" />
              <span className="home-path-copy">
                <span className="home-path-kicker">{path.kicker}</span>
                <span className="home-path-name">{path.name}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="home-beyond-cta" data-reveal>
          <ButtonLink href={home.beyond.cta.href}>{home.beyond.cta.label}</ButtonLink>
        </div>
      </section>

      <section className="home-close" aria-labelledby="home-close-title">
        <div className="home-close-media home-mask" data-reveal>
          <MediaFrame image={home.close.image} sizes="100vw" />
        </div>
        <div className="home-close-shade" aria-hidden="true" />
        <div className="home-close-copy" data-reveal>
          <p className="eyebrow">{home.close.eyebrow}</p>
          <h2 id="home-close-title">
            {home.close.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{home.close.body}</p>
          <div className="home-close-actions">
            {home.close.actions.map((action) => (
              <ButtonLink key={action.href} href={action.href} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
