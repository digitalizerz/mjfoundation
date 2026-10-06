import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramView } from "@/components/ProgramView";
import { getProgram, programs } from "@/content/programs";

type Params = { slug: string };

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return { title: program.name, description: program.summary };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  return <ProgramView program={program} />;
}
