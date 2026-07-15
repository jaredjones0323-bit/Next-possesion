import type { Article } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function CoachesPicks({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-ink-50/60 py-20 dark:bg-ink-900/30">
      <Container>
        <SectionHeading
          eyebrow="Hand-picked"
          title="Coach's Picks"
          description="The pieces Coach Reid tells every player and parent to read first — no fluff, just what actually matters."
        />
        <div className="mt-10 space-y-5">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} variant="horizontal" />
          ))}
        </div>
      </Container>
    </section>
  );
}
