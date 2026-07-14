"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, X, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SearchModal } from "@/components/layout/SearchModal";
import { ButtonLink } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/85 backdrop-blur-lg dark:border-ink-800 dark:bg-ink-950/85"
          : "border-b border-transparent bg-white dark:bg-ink-950"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink-950 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-court-500 text-sm font-black text-white">
            NP
          </span>
          Next Possession
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setMegaOpen(false)}>
          <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-950 dark:text-ink-200 dark:hover:bg-ink-900 dark:hover:text-white"
              aria-expanded={megaOpen}
            >
              Categories
              <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} />
            </button>

            {megaOpen && (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-ink-100 bg-white p-4 shadow-2xl dark:border-ink-800 dark:bg-ink-900">
                  {categories.map((category) => {
                    const Icon = iconMap[category.icon];
                    return (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50 dark:hover:bg-ink-800"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
                          {Icon && <Icon className="h-5 w-5" />}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink-900 dark:text-white">
                            {category.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-ink-500 dark:text-ink-400 line-clamp-1">
                            {category.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-950 dark:text-ink-200 dark:hover:bg-ink-900 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <ThemeToggle />
          <div className="hidden lg:block">
            <ButtonLink href="/blog" size="sm" icon={ArrowRight}>
              Read Latest
            </ButtonLink>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 dark:text-ink-200 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-ink-950 lg:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/" className="font-display text-lg font-bold text-ink-950 dark:text-white">
              Next Possession
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-ink-700 dark:text-ink-200" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-6 py-4">
            <p className="mb-1 mt-3 text-xs font-bold uppercase tracking-wide text-ink-400">Categories</p>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50 dark:text-ink-100 dark:hover:bg-ink-900"
              >
                {category.name}
              </Link>
            ))}
            <div className="my-3 h-px bg-ink-100 dark:bg-ink-800" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50 dark:text-ink-100 dark:hover:bg-ink-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
