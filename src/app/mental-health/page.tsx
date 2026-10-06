import type { Metadata } from "next";
import { DeviceFrame } from "@/components/DeviceFrame";
import { MediaFrame } from "@/components/MediaFrame";
import { StoreButtons } from "@/components/StoreButtons";
import { lovejoyScreens } from "@/content/lovejoy";
import { mentalHealth } from "@/content/mental-health";

export const metadata: Metadata = {
  title: { absolute: mentalHealth.title },
  description: mentalHealth.description,
};

export default function MentalHealthPage() {
  return (
    <>
      <section className="mh-hero" id="download" aria-labelledby="mh-heading">
        <div className="mh-hero-copy">
          <p className="eyebrow">{mentalHealth.hero.eyebrow}</p>
          <p className="mh-with">{mentalHealth.hero.withPartner}</p>
          <h1 id="mh-heading">{mentalHealth.hero.title}</h1>
          {mentalHealth.hero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <StoreButtons />
        </div>
        <div className="mh-stage" data-slot={mentalHealth.hero.image.slot}>
          <MediaFrame image={mentalHealth.hero.image} priority sizes="(min-width: 960px) 48vw, 100vw" />
          <DeviceFrame screen={lovejoyScreens.community} label="The Porch in the LoveJoy patient app" />
        </div>
      </section>

      <section className="mh-why" aria-labelledby="mh-why">
        <div className="mh-inner">
          <p className="eyebrow">{mentalHealth.why.eyebrow}</p>
          <h2 id="mh-why">{mentalHealth.why.title}</h2>
          {mentalHealth.why.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="mh-note">{mentalHealth.why.note}</p>
        </div>
      </section>
    </>
  );
}
