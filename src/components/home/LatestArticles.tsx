import { ArrowRight } from "lucide-react";
import type { Article } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ButtonLink } from "@/components/ui/Button";

export function LatestArticles({ articles }: { articles: Article[] }) {
  return (
    <section className="border-t border-ink-100 py-20 dark:border-ink-800">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Fresh off the press" title="Latest articles" />
          <ButtonLink href="/blog" variant="outline" icon={ArrowRight}>
            View all articles
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
