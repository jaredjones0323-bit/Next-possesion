import type { Article } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function MostPopular({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Reader favorites" title="Most Popular" />
        <div className="mt-10 grid gap-4">
          {articles.slice(0, 5).map((article, index) => (
            <div
              key={article.slug}
              className="flex items-center gap-5 rounded-2xl border border-ink-100 bg-white p-3 transition-shadow hover:shadow-card dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="w-10 shrink-0 text-center font-display text-3xl font-bold text-ink-100 dark:text-ink-800">
                {String(index + 1).padStart(2, "0")}
              </span>
              <ArticleCard article={article} variant="compact" className="flex-1 hover:bg-transparent dark:hover:bg-transparent" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
