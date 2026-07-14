"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import type { Article } from "@/types/content";
import { categories as allCategories } from "@/data/categories";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest" | "popular" | "az";

const PAGE_SIZE = 9;

type ArticleSummary = Omit<Article, "content">;

export function ArticleExplorer({
  articles,
  lockCategory,
  initialQuery = "",
}: {
  articles: ArticleSummary[];
  lockCategory?: string;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<string>(lockCategory ?? "all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...articles];

    if (category !== "all") {
      result = result.filter((a) => a.category === category);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case "oldest":
        result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case "popular":
        result.sort((a, b) => Number(b.popular) - Number(a.popular));
        break;
      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return result;
  }, [articles, category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function updateAndResetPage<T>(setter: (v: T) => void) {
    return (v: T) => {
      setter(v);
      setPage(1);
    };
  }

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-4 dark:border-ink-800 dark:bg-ink-900 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => updateAndResetPage(setQuery)(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-xl border border-ink-100 bg-ink-50/50 py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
          />
        </div>

        {!lockCategory && (
          <select
            value={category}
            onChange={(e) => updateAndResetPage(setCategory)(e.target.value)}
            className="rounded-xl border border-ink-100 bg-ink-50/50 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {allCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        )}

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-ink-400" />
          <select
            value={sort}
            onChange={(e) => updateAndResetPage(setSort)(e.target.value as SortOption)}
            className="rounded-xl border border-ink-100 bg-ink-50/50 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
            aria-label="Sort articles"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="az">A–Z</option>
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-400">
        {filtered.length} article{filtered.length !== 1 && "s"} found
      </p>

      {paginated.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <p className="font-semibold text-ink-700 dark:text-ink-200">No articles match your filters</p>
          <p className="text-sm text-ink-400">Try a different search term or category.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 text-ink-500 disabled:opacity-40 dark:border-ink-800"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium",
                page === i + 1
                  ? "bg-court-500 text-white"
                  : "border border-ink-100 text-ink-500 hover:border-court-500 hover:text-court-600 dark:border-ink-800"
              )}
              aria-current={page === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 text-ink-500 disabled:opacity-40 dark:border-ink-800"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
