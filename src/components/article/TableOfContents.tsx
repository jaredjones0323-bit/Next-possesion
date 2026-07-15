"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-400">
        <List className="h-3.5 w-3.5" /> On this page
      </p>
      <ul className="space-y-0.5 border-l border-ink-100 dark:border-ink-800">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l-2 py-1.5 text-sm transition-colors",
                item.depth === 3 && "pl-8",
                item.depth === 2 && "pl-4",
                activeId === item.id
                  ? "border-court-500 font-semibold text-court-600 dark:text-court-400"
                  : "border-transparent text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
