import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";
import { TextLink } from "./TextLink";

export function EditorialSection({
  id,
  eyebrow,
  title,
  titleLines,
  paragraphs,
  image,
  cta,
  reverse = false,
  tone = "ink",
  compact = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  titleLines?: string[];
  paragraphs: string[];
  image?: ImageAsset;
  cta?: { label: string; href: string };
  reverse?: boolean;
  tone?: "ink" | "cream";
  compact?: boolean;
}) {
  return (
    <section id={id} className={`editorial tone-${tone} ${reverse ? "is-reverse" : ""} ${image ? "" : "is-text"} ${compact ? "is-compact" : ""}`}>
      {image ? (
        <div className="editorial-media" data-slot={image.slot}>
          <MediaFrame image={image} sizes="(min-width: 900px) 54vw, 100vw" />
        </div>
      ) : null}
      <div className="editorial-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>
          {titleLines
            ? titleLines.map((line) => (
                <span key={line} className="title-line">
                  {line}
                </span>
              ))
            : title}
        </h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {cta ? <TextLink href={cta.href}>{cta.label}</TextLink> : null}
      </div>
    </section>
  );
}
