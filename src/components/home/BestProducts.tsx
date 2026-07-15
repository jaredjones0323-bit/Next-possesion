import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Article, Product } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RatingStars } from "@/components/ui/RatingStars";
import { Badge } from "@/components/ui/Badge";

export function BestProducts({ articles }: { articles: Article[] }) {
  const entries: { product: Product; article: Article }[] = articles
    .flatMap((article) => (article.products ?? []).map((product) => ({ product, article })))
    .sort((a, b) => b.product.rating.overall - a.product.rating.overall)
    .slice(0, 4);

  if (entries.length === 0) return null;

  return (
    <section className="border-t border-ink-100 py-20 dark:border-ink-800">
      <Container>
        <SectionHeading
          eyebrow="Top rated"
          title="Best Products This Month"
          description="The highest-scoring products across every category we test, ranked by our composite rating."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map(({ product, article }) => (
            <Link
              key={product.id}
              href={`/blog/${article.slug}#${product.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-ink-50 dark:bg-ink-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge variant="gold" className="absolute left-3 top-3">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-medium text-ink-400">{product.brand}</p>
                <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold text-ink-900 dark:text-white">
                  {product.name}
                </h3>
                <RatingStars rating={product.rating.overall} size="sm" className="mt-2" />
                <div className="mt-3 flex items-center justify-between border-t border-ink-100 pt-3 dark:border-ink-800">
                  <span className="font-semibold text-ink-950 dark:text-white">{product.price}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-court-600 dark:text-court-400">
                    View <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
