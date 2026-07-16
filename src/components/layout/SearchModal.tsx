"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, X, TrendingUp } from "lucide-react";

const POPULAR_SEARCHES = [
  "how recruiting works",
  "choosing an AAU team",
  "basketball IQ",
  "what coaches notice",
  "D1 vs D2 vs D3",
];

type Result = {
  slug: string;
  title: string;
  description: string;
  category: string;
  heroImage: string;
};

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => setResults(data.results ?? []))
        .catch(() => {});
    }, 150);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-ink-950/60 px-4 pt-24 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button className="absolute inset-0 cursor-default" aria-label="Close search" onClick={onClose} />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-ink-900">
        <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-ink-100 px-5 py-4 dark:border-ink-800">
          <Search className="h-5 w-5 shrink-0 text-ink-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, recruiting, AAU..."
            className="w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-400 dark:text-white"
          />
          <button type="button" onClick={onClose} aria-label="Close search">
            <X className="h-5 w-5 text-ink-400 hover:text-ink-700 dark:hover:text-white" />
          </button>
        </form>

        <div className="max-h-96 overflow-y-auto p-3">
          {query && results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-ink-400">No results for &ldquo;{query}&rdquo;</p>
          )}

          {results.length > 0 && (
            <ul className="space-y-1">
              {results.map((result) => (
                <li key={result.slug}>
                  <a
                    href={`/blog/${result.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-ink-50 dark:hover:bg-ink-800"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                      <Image src={result.heroImage} alt="" fill sizes="48px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">{result.title}</p>
                      <p className="truncate text-xs text-ink-400">{result.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {!query && (
            <div className="px-3 py-2">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-400">
                <TrendingUp className="h-3.5 w-3.5" /> Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-ink-100 px-3 py-1.5 text-xs font-medium text-ink-600 transition-colors hover:border-court-500 hover:text-court-600 dark:border-ink-700 dark:text-ink-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
