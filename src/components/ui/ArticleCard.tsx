import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/types/content";
import { getCategoryBySlug } from "@/data/categories";
import { getAuthorBySlug } from "@/data/authors";
import { formatDateShort, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function ArticleCard({
  article,
  variant = "default",
  className,
  onDark = false,
}: {
  article: Omit<Article, "content">;
  variant?: "default" | "horizontal" | "compact" | "featured";
  className?: string;
  onDark?: boolean;
}) {
  const category = getCategoryBySlug(article.category);
  const author = getAuthorBySlug(article.authorSlug);
  const href = `/blog/${article.slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-ink-50 dark:hover:bg-ink-900",
          className
        )}
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
          <Image src={article.heroImage} alt={article.heroImageAlt} fill sizes="64px" className="object-cover" />
        </div>
        <div className="min-w-0">
          {category && (
            <p className="text-[11px] font-bold uppercase tracking-wide text-court-600 dark:text-court-400">
              {category.shortName}
            </p>
          )}
          <h3 className="line-clamp-2 text-sm font-semibold text-ink-900 group-hover:text-court-600 dark:text-white dark:group-hover:text-court-400">
            {article.title}
          </h3>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex flex-col gap-5 overflow-hidden rounded-2xl border border-ink-100 bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:flex-row dark:border-ink-800 dark:bg-ink-900",
          className
        )}
      >
        <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-64">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center py-2 pr-3">
          {category && (
            <Badge variant="court" className="mb-3 w-fit">
              {category.shortName}
            </Badge>
          )}
          <h3 className="text-xl font-semibold leading-snug text-ink-950 transition-colors group-hover:text-court-600 dark:text-white dark:group-hover:text-court-400">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-ink-500 dark:text-ink-400">
            {article.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-ink-400 dark:text-ink-500">
            {author && <span className="font-medium text-ink-600 dark:text-ink-300">{author.name}</span>}
            <span aria-hidden>&middot;</span>
            <span>{formatDateShort(article.publishedAt)}</span>
            <span aria-hidden>&middot;</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {article.readingTime}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className={cn(
          "group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8",
          className
        )}
      >
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="relative">
          {category && (
            <Badge variant="dark" className="mb-4 bg-court-500 text-white">
              {category.shortName}
            </Badge>
          )}
          <h2 className="text-display-sm font-display font-semibold leading-tight text-white">
            {article.title}
          </h2>
          <p className="mt-3 line-clamp-2 max-w-xl text-sm text-white/70">{article.description}</p>
          <div className="mt-5 flex items-center gap-3 text-xs text-white/60">
            {author && <span className="font-medium text-white/90">{author.name}</span>}
            <span aria-hidden>&middot;</span>
            <span>{formatDateShort(article.publishedAt)}</span>
            <span aria-hidden>&middot;</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <Badge variant="dark" className="absolute left-3 top-3 bg-ink-950/80 backdrop-blur">
            {category.shortName}
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3
          className={cn(
            "line-clamp-2 text-lg font-semibold leading-snug transition-colors group-hover:text-court-500",
            onDark ? "text-white" : "text-ink-950 dark:text-white dark:group-hover:text-court-400"
          )}
        >
          {article.title}
        </h3>
        <p className={cn("mt-2 line-clamp-2 flex-1 text-sm", onDark ? "text-white/60" : "text-ink-500 dark:text-ink-400")}>
          {article.description}
        </p>
        <div
          className={cn(
            "mt-4 flex items-center gap-3 border-t pt-4 text-xs",
            onDark ? "border-white/10 text-white/40" : "border-ink-100 text-ink-400 dark:border-ink-800 dark:text-ink-500"
          )}
        >
          {author && (
            <span className={cn("font-medium", onDark ? "text-white/80" : "text-ink-600 dark:text-ink-300")}>
              {author.name}
            </span>
          )}
          <span aria-hidden>&middot;</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {article.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
