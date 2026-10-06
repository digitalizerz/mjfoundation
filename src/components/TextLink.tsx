import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-link">
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Link href={href} className={`btn btn-${variant}`}>
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}
