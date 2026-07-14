import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
      <Link href="/" className="flex items-center gap-1 hover:text-court-600 dark:hover:text-court-400">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {items.map((item) => (
        <span key={item.name} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3" />
          {item.href ? (
            <Link href={item.href} className="hover:text-court-600 dark:hover:text-court-400">
              {item.name}
            </Link>
          ) : (
            <span className="truncate text-ink-500 dark:text-ink-300">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
