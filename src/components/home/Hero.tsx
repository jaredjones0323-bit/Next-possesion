import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import type { Article } from "@/types/content";

export function Hero({ featured }: { featured: Article }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 dark:border-ink-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(249,100,17,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_-10%,rgba(249,100,17,0.16),transparent_45%)]" />
      <Container className="relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-xs font-semibold text-ink-600 shadow-soft dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-court-500" />
            Written by a real high school & college coach
          </span>
          <h1 className="mt-6 text-display-lg font-display font-semibold leading-[1.03] text-ink-950 dark:text-white">
            The Playbook for
            <br />
            the <span className="text-court-500">Next Level.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-500 dark:text-ink-400">
            Helping basketball players and families navigate AAU, recruiting, and the journey to
            college basketball — honest advice, not hype. You can&apos;t control the last possession.
            You can only control the next one.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/blog" size="lg" icon={ArrowRight}>
              Read Articles
            </ButtonLink>
            <ButtonLink href="/newsletter" variant="outline" size="lg">
              Join Newsletter
            </ButtonLink>
          </div>
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group relative block overflow-hidden rounded-3xl shadow-card-hover animate-fade-in"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={featured.heroImage}
              alt={featured.heroImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-8">
            <span className="mb-3 inline-block rounded-full bg-court-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Coach&apos;s Pick
            </span>
            <h2 className="text-2xl font-semibold leading-snug text-white">{featured.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm text-white/70">{featured.description}</p>
          </div>
        </Link>
      </Container>
    </section>
  );
}
