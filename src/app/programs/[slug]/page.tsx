import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramView } from "@/components/ProgramView";
import { getProgram, programs } from "@/content/programs";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  const description =
    program.slug === "mind-of-a-champion"
      ? `${program.summary} Offered with LoveJoy Health, the Mike James Foundation's mental health and care-access partner.`
      : program.summary;

  return {
    title: program.name,
    description,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.name} · ${site.name}`,
      description,
      url: `/programs/${program.slug}`,
    },
  };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  return <ProgramView program={program} />;
}
