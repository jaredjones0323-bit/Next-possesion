import type { Article } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function TrendingReviews({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-ink-950 py-20 text-white">
      <Container>
        <SectionHeading
          eyebrow="Trending now"
          title="What readers are checking out"
          description="The reviews getting the most traffic this week."
          className="[&_h2]:text-white [&_p]:text-white/60"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              onDark
              className="border-white/10 bg-white/[0.03] hover:shadow-none dark:border-white/10 dark:bg-white/[0.03]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
