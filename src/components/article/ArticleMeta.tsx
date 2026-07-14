import Image from "next/image";
import Link from "next/link";
import { Clock, CalendarDays, RefreshCw } from "lucide-react";
import type { ArticleWithAuthor } from "@/types/content";
import { formatDate } from "@/lib/utils";

export function ArticleMeta({ article }: { article: ArticleWithAuthor }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500 dark:text-ink-400">
      <Link href={`/authors/${article.author.slug}`} className="flex items-center gap-2.5 group">
        <div className="relative h-9 w-9 overflow-hidden rounded-full">
          <Image src={article.author.avatar} alt={article.author.name} fill sizes="36px" className="object-cover" />
        </div>
        <span>
          <span className="block font-medium text-ink-900 group-hover:text-court-600 dark:text-white dark:group-hover:text-court-400">
            {article.author.name}
          </span>
          <span className="block text-xs text-ink-400">{article.author.role}</span>
        </span>
      </Link>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" /> Published {formatDate(article.publishedAt)}
      </span>
      {article.updatedAt !== article.publishedAt && (
        <span className="inline-flex items-center gap-1.5">
          <RefreshCw className="h-3.5 w-3.5" /> Updated {formatDate(article.updatedAt)}
        </span>
      )}
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" /> {article.readingTime}
      </span>
    </div>
  );
}
