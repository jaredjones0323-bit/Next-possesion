import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleWithAuthor, getRelatedArticles } from "@/lib/articles";
import { getCategoryBySlug } from "@/data/categories";
import { extractToc } from "@/lib/toc";
import { formatDate, SITE } from "@/lib/utils";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { ArticleMeta } from "@/components/article/ArticleMeta";
import { TableOfContents } from "@/components/article/TableOfContents";
import { KeyTakeaways } from "@/components/article/KeyTakeaways";
import { CoachesTake } from "@/components/article/CoachesTake";
import { ArticleFaq } from "@/components/article/ArticleFaq";
import { Sources } from "@/components/article/Sources";
import { AuthorBio } from "@/components/article/AuthorBio";
import { ShareButtons } from "@/components/article/ShareButtons";
import { InlineNewsletterCta } from "@/components/article/InlineNewsletterCta";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { CommentsSection } from "@/components/article/CommentsSection";
import { mdxComponents } from "@/components/article/MdxComponents";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleWithAuthor(params.slug);
  if (!article) return {};

  const url = `${SITE.url}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    authors: [{ name: article.author.name }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [{ url: article.heroImage, width: 1200, height: 630, alt: article.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleWithAuthor(params.slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const toc = extractToc(article.content);
  const related = getRelatedArticles(article);
  const url = `${SITE.url}/blog/${article.slug}`;

  const breadcrumbItems = [
    { name: "Articles", href: "/blog" },
    ...(category ? [{ name: category.name, href: `/category/${category.slug}` }] : []),
    { name: article.title },
  ];

  const jsonLd = [
    buildArticleSchema(article),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Articles", url: `${SITE.url}/blog` },
      ...(category ? [{ name: category.name, url: `${SITE.url}/category/${category.slug}` }] : []),
      { name: article.title, url },
    ]),
    ...(article.faqs && article.faqs.length > 0 ? [buildFaqSchema(article.faqs)] : []),
  ];

  return (
    <article>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="relative h-[38vh] min-h-[320px] w-full sm:h-[48vh]">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-ink-950/10" />
        <Container className="absolute inset-x-0 bottom-0 pb-8">
          {category && (
            <Badge variant="dark" className="mb-4 bg-court-500 text-white">
              {category.name}
            </Badge>
          )}
          <h1 className="max-w-3xl text-display-md font-display font-semibold leading-tight text-white">
            {article.title}
          </h1>
        </Container>
      </div>

      <Container className="py-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>

      <Container className="pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-100 pb-6 dark:border-ink-800">
              <ArticleMeta article={article} />
              <ShareButtons url={url} title={article.title} />
            </div>

            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="mt-8">
                <KeyTakeaways items={article.keyTakeaways} />
              </div>
            )}

            <div className="prose mt-10 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink-950 prose-p:leading-relaxed prose-p:text-ink-600 prose-a:text-court-600 prose-strong:text-ink-900 dark:prose-invert dark:prose-p:text-ink-300 dark:prose-strong:text-white">
              <MDXRemote source={article.content} components={mdxComponents} />
            </div>

            {article.coachesTake && (
              <div className="mt-12">
                <CoachesTake author={article.author} take={article.coachesTake} />
              </div>
            )}

            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12">
                <ArticleFaq faqs={article.faqs} />
              </div>
            )}

            {article.sources && article.sources.length > 0 && (
              <div className="mt-8">
                <Sources sources={article.sources} />
              </div>
            )}

            <div className="mt-12">
              <AuthorBio author={article.author} />
            </div>

            <div className="mt-12">
              <InlineNewsletterCta />
            </div>

            <RelatedArticles articles={related} />
            <CommentsSection />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents items={toc} />
              <div className="rounded-2xl border border-ink-100 p-5 text-xs text-ink-400 dark:border-ink-800">
                <p className="mb-1 font-semibold text-ink-600 dark:text-ink-300">Fact-checked</p>
                <p>Last reviewed {formatDate(article.updatedAt)} by {article.author.name}.</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
