import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getArticlesByCategory, toSummaries } from "@/lib/articles";
import { iconMap } from "@/lib/icon-map";
import { Container } from "@/components/ui/Container";
import { ArticleExplorer } from "@/components/blog/ArticleExplorer";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/utils";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `${SITE.url}/category/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const articles = toSummaries(getArticlesByCategory(category.slug));
  const Icon = iconMap[category.icon];

  const jsonLd = buildBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: category.name, url: `${SITE.url}/category/${category.slug}` },
  ]);

  return (
    <Container className="py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[{ name: "Articles", href: "/blog" }, { name: category.name }]} />

      <div className="mt-6 flex items-start gap-4">
        {Icon && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
            <Icon className="h-6 w-6" />
          </span>
        )}
        <div>
          <h1 className="text-display-md font-display font-semibold text-ink-950 dark:text-white">
            {category.name}
          </h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">{articles.length} articles</p>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-500 dark:text-ink-400">
        {category.seoIntro}
      </p>

      <div className="mt-10">
        <ArticleExplorer articles={articles} lockCategory={category.slug} />
      </div>
    </Container>
  );
}
