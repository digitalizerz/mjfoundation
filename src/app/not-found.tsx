import { ButtonLink } from "@/components/TextLink";

export default function NotFound() {
  return (
    <section className="cta-section">
      <div className="cta-copy">
        <p className="eyebrow">404</p>
        <h1>That page is not on the floor.</h1>
        <p>The link may be old, or the page has not been published.</p>
        <div className="hero-actions">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/programs" variant="secondary">
            See programs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
