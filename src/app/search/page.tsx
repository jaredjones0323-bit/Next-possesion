import type { Metadata } from "next";
import { getAllArticles, toSummaries } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { ArticleExplorer } from "@/components/blog/ArticleExplorer";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Next Possession's articles on recruiting, AAU, player development, and more.",
  alternates: { canonical: `${SITE.url}/search` },
  robots: { index: false, follow: true },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q ?? "";
  const articles = toSummaries(getAllArticles());

  return (
    <Container className="py-16">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-court-600 dark:text-court-400">
        Search
      </p>
      <h1 className="mt-3 text-display-md font-display font-semibold text-ink-950 dark:text-white">
        {query ? `Results for "${query}"` : "Search Next Possession"}
      </h1>

      <div className="mt-10">
        <ArticleExplorer articles={articles} initialQuery={query} />
      </div>
    </Container>
  );
}
