import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SITE } from "@/lib/utils";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Editorial Guidelines", href: "/editorial-guidelines" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60 dark:border-ink-800 dark:bg-ink-950">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink-950 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-court-500 text-sm font-black text-white">
                NP
              </span>
              Next Possession
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {SITE.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-court-500 hover:text-court-600 dark:border-ink-700 dark:text-ink-400"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-400">Topics</p>
            <ul className="space-y-2.5">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-sm text-ink-600 transition-colors hover:text-court-600 dark:text-ink-400 dark:hover:text-court-400"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-400">Company</p>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-court-600 dark:text-ink-400 dark:hover:text-court-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-4 mt-6 text-xs font-bold uppercase tracking-wide text-ink-400">Legal</p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-court-600 dark:text-ink-400 dark:hover:text-court-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-ink-400">The Playbook</p>
            <p className="mb-4 text-sm text-ink-500 dark:text-ink-400">
              Recruiting updates and coach insight, one email a week.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-100 py-6 text-xs text-ink-400 dark:border-ink-800 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Next Possession. All rights reserved.</p>
          <p>Next Possession provides basketball education and does not guarantee recruiting outcomes.</p>
        </div>
      </Container>
    </footer>
  );
}
