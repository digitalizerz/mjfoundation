import type { Program } from "@/content/programs";
import { crisisNote } from "@/content/site";
import { CTASection } from "./CTASection";
import { EditorialSection } from "./EditorialSection";
import { PageHero } from "./PageHero";
import { PhotoGallery } from "./PhotoGallery";
import { ButtonLink, TextLink } from "./TextLink";
import { VideoSection } from "./VideoSection";

export function ProgramView({ program }: { program: Program }) {
  return (
    <>
      <PageHero eyebrow={program.eyebrow} title={program.name} lede={program.lede} image={program.hero} />

      {program.blocks.map((block) => {
        if (block.type === "prose") {
          return (
            <EditorialSection
              key={block.title}
              eyebrow={block.eyebrow}
              title={block.title}
              paragraphs={block.paragraphs}
              image={block.image}
              tone={block.image ? "ink" : "cream"}
            />
          );
        }

        if (block.type === "areas") {
          return (
            <section key={block.title} className="area-section">
              <div className="section-intro">
                {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
                <h2>{block.title}</h2>
                {block.intro ? <p>{block.intro}</p> : null}
              </div>
              <ol className="area-list">
                {block.items.map((item, index) => (
                  <li key={item.title}>
                    <span className="area-index">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          );
        }

        if (block.type === "note") {
          return (
            <section key={block.title} id={block.id} className="note-section">
              <div className="note-panel">
                {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
                <h2>{block.title}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {block.cta ? <TextLink href={block.cta.href}>{block.cta.label}</TextLink> : null}
              </div>
            </section>
          );
        }

        if (block.type === "gallery") {
          return (
            <section key={block.title} className="band">
              <div className="section-intro">
                <h2>{block.title}</h2>
                {block.intro ? <p>{block.intro}</p> : null}
              </div>
              <PhotoGallery images={program.gallery} title={block.title} />
            </section>
          );
        }

        if (block.type === "video" && program.video?.src) {
          return (
            <section key={block.title} className="band">
              <div className="section-intro">
                <h2>{block.title}</h2>
              </div>
              <VideoSection poster={program.video.poster} src={program.video.src} caption={program.video.caption} />
            </section>
          );
        }

        if (block.type === "schedule" && block.items.length > 0) {
          return (
            <section key={block.title} className="band band-cream">
              <div className="section-intro">
                <h2>{block.title}</h2>
                <p>{block.intro}</p>
              </div>
              <ul className="schedule-list">
                {block.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
              {program.secondaryCta ? (
                <div className="band-actions">
                  <ButtonLink href={program.secondaryCta.href}>{program.secondaryCta.label}</ButtonLink>
                </div>
              ) : null}
            </section>
          );
        }

        return null;
      })}

      {program.slug === "mind-of-a-champion" ? (
        <p className="crisis-note">{crisisNote}</p>
      ) : null}

      <CTASection
        title={program.secondaryCta?.label ?? program.cta.label}
        body={program.summary}
        actions={[
          {
            label: program.secondaryCta?.label ?? program.cta.label,
            href: program.secondaryCta?.href ?? program.cta.href,
            variant: "primary",
          },
          { label: "All programs", href: "/programs", variant: "secondary" },
        ]}
      />
    </>
  );
}
