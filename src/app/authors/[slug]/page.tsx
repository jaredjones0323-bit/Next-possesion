import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { authors, getAuthorBySlug } from "@/data/authors";
import { getAllArticles } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SITE } from "@/lib/utils";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    alternates: { canonical: `${SITE.url}/authors/${author.slug}` },
  };
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const articles = getAllArticles().filter((a) => a.authorSlug === author.slug);

  return (
    <Container className="py-16">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          <Image src={author.avatar} alt={author.name} fill sizes="96px" className="object-cover" />
        </div>
        <div>
          <h1 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
            {author.name}
          </h1>
          <p className="mt-1 text-ink-400">{author.role}</p>
        </div>
        <p className="max-w-2xl text-ink-500 dark:text-ink-400">{author.bio}</p>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-ink-500 dark:text-ink-400">
          {author.credentials.map((c) => (
            <li key={c}>&bull; {c}</li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-ink-950 dark:text-white">
          Articles by {author.name} ({articles.length})
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </Container>
  );
}
