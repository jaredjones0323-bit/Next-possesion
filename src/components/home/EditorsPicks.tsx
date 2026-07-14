import type { Article } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function EditorsPicks({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-ink-50/60 py-20 dark:bg-ink-900/30">
      <Container>
        <SectionHeading
          eyebrow="Hand-picked"
          title="Editor's Picks"
          description="The gear our editorial team stands behind without reservation — tested, retested, and worth every dollar."
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
