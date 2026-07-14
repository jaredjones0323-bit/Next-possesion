import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { iconMap } from "@/lib/icon-map";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedCategories() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title="Shop by category"
          description="Every guide starts with hands-on testing. Find the gear category you're shopping for."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-court-200 hover:shadow-card dark:border-ink-800 dark:bg-ink-900 dark:hover:border-court-500/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-court-50 text-court-600 transition-colors group-hover:bg-court-500 group-hover:text-white dark:bg-court-500/10 dark:text-court-400">
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <div>
                  <p className="flex items-center gap-1 text-sm font-semibold text-ink-900 dark:text-white">
                    {category.shortName}
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-court-500" />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
