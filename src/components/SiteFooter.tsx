import Link from "next/link";
import { footerExplore, footerPrograms, legal, site, socialLinks } from "@/content/site";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo-link" aria-label="Mike James Foundation, home">
            <Logo />
          </Link>
          <p>{site.description}</p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            {footerExplore.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Programs</h2>
          <ul>
            {footerPrograms.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Connect</h2>
          <ul className="social-list">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href}>{link.label}</a>
                ) : (
                  <span>
                    {link.label}
                    <span className="social-pending"> Coming soon</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-news">
        <div>
          <h2>Newsletter</h2>
          <p>Program notes and ways to show up. Sent when there is something worth sending.</p>
        </div>
        <NewsletterForm />
      </div>

      <div className="footer-legal">
        <p>
          © {year} {legal.legalName}. All rights reserved.
        </p>
        {legal.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="footer-legal-links">
          <Link href={legal.privacyHref}>Privacy</Link>
          <Link href={legal.termsHref}>Terms</Link>
        </p>
      </div>
    </footer>
  );
}
