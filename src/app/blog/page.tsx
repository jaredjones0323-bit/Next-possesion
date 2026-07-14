import type { Metadata } from "next";
import { getAllArticles, toSummaries } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { ArticleExplorer } from "@/components/blog/ArticleExplorer";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Basketball Gear Reviews & Buying Guides",
  description:
    "Every basketball gear review, comparison, and buying guide from Next Possession, all in one place. Filter by category, sort by newest or most popular.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  const articles = toSummaries(getAllArticles());

  return (
    <Container className="py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-court-600 dark:text-court-400">
          The Blog
        </p>
        <h1 className="mt-3 text-display-md font-display font-semibold text-ink-950 dark:text-white">
          Every review, guide, and comparison
        </h1>
        <p className="mt-4 text-ink-500 dark:text-ink-400">
          Independently tested basketball gear coverage — shoes, hoops, training equipment, apparel,
          and wearables. Use the filters below to find exactly what you&apos;re shopping for.
        </p>
      </div>

      <div className="mt-10">
        <ArticleExplorer articles={articles} />
      </div>
    </Container>
  );
}
