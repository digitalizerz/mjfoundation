import Link from "next/link";
import type { ImageAsset } from "@/content/types";
import { ArrowIcon } from "./Icons";
import { MediaFrame } from "./MediaFrame";

export function PillarCard({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: ImageAsset;
}) {
  return (
    <Link href={href} className="pillar-card" data-slot={image.slot}>
      <MediaFrame image={image} sizes="(min-width: 1100px) 25vw, (min-width: 700px) 50vw, 100vw" />
      <span className="pillar-shade" aria-hidden="true" />
      <span className="pillar-copy">
        <h3>{title}</h3>
        <span className="pillar-text">{description}</span>
        <span className="text-link">
          <span>Learn more</span>
          <ArrowIcon />
        </span>
      </span>
    </Link>
  );
}
