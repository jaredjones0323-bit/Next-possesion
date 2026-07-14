import Image from "next/image";
import { Check, X, ExternalLink } from "lucide-react";
import type { Product } from "@/types/content";
import { RatingStars } from "@/components/ui/RatingStars";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export function ProductCard({ product, rank }: { product: Product; rank?: number }) {
  return (
    <div
      id={product.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900"
    >
      <div className="grid gap-6 p-6 sm:grid-cols-[200px_1fr] sm:p-8">
        <div className="flex flex-col items-center gap-3">
          <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl bg-ink-50 dark:bg-ink-800">
            <Image src={product.image} alt={product.name} fill sizes="200px" className="object-cover" />
          </div>
          {product.badge && (
            <Badge variant="gold" className="justify-center">
              {product.badge}
            </Badge>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              {rank && (
                <p className="text-xs font-bold uppercase tracking-wide text-court-600 dark:text-court-400">
                  #{rank} Pick &middot; {product.brand}
                </p>
              )}
              <h3 className="mt-1 text-xl font-semibold text-ink-950 dark:text-white">{product.name}</h3>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-ink-950 dark:text-white">{product.price}</p>
              {product.originalPrice && (
                <p className="text-sm text-ink-400 line-through">{product.originalPrice}</p>
              )}
            </div>
          </div>

          <RatingStars rating={product.rating.overall} className="mt-2" />

          <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{product.summary}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Pros
              </p>
              <ul className="space-y-1.5">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400">
                Cons
              </p>
              <ul className="space-y-1.5">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" aria-hidden />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink href={product.affiliateUrl} external icon={ExternalLink} iconPosition="right">
              Check Price on {product.retailer}
            </ButtonLink>
            <span className="text-xs text-ink-400 dark:text-ink-500">
              We may earn a commission — see our{" "}
              <a href="/affiliate-disclosure" className="underline hover:text-court-600">
                disclosure
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
