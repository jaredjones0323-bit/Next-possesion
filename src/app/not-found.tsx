import Link from "next/link";
import { Search, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { categories } from "@/data/categories";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-8xl font-black text-court-500/20">404</p>
      <h1 className="mt-2 text-display-sm font-display font-semibold text-ink-950 dark:text-white">
        This page missed the shot
      </h1>
      <p className="mt-3 max-w-md text-ink-500 dark:text-ink-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try searching, or head back to
        one of our topics below.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/" icon={Home}>
          Back to Home
        </ButtonLink>
        <ButtonLink href="/search" variant="outline" icon={Search}>
          Search the Site
        </ButtonLink>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:border-court-500 hover:text-court-600 dark:border-ink-700 dark:text-ink-300"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </Container>
  );
}
