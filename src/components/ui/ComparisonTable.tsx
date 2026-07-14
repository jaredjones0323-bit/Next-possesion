import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/types/content";
import { RatingStars } from "@/components/ui/RatingStars";
import { Badge } from "@/components/ui/Badge";

export function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-100 dark:border-ink-800">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-ink-100 bg-ink-50 dark:border-ink-800 dark:bg-ink-900">
            <th className="px-4 py-3 font-semibold text-ink-500 dark:text-ink-400">Product</th>
            <th className="px-4 py-3 font-semibold text-ink-500 dark:text-ink-400">Rating</th>
            <th className="px-4 py-3 font-semibold text-ink-500 dark:text-ink-400">Price</th>
            <th className="px-4 py-3 font-semibold text-ink-500 dark:text-ink-400">Best For</th>
            <th className="px-4 py-3 font-semibold text-ink-500 dark:text-ink-400 text-right">Buy</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-ink-900/40">
          {products.map((product) => (
            <tr key={product.id} className="border-b border-ink-100 last:border-0 dark:border-ink-800">
              <td className="px-4 py-4">
                <a href={`#${product.id}`} className="flex items-center gap-3 group">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-ink-50 dark:bg-ink-800">
                    <Image src={product.image} alt={product.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900 group-hover:text-court-600 dark:text-white dark:group-hover:text-court-400">
                      {product.name}
                    </p>
                    <p className="text-xs text-ink-400">{product.brand}</p>
                  </div>
                </a>
              </td>
              <td className="px-4 py-4">
                <RatingStars rating={product.rating.overall} size="sm" />
              </td>
              <td className="px-4 py-4 font-semibold text-ink-900 dark:text-white">{product.price}</td>
              <td className="px-4 py-4">{product.badge && <Badge variant="gold">{product.badge}</Badge>}</td>
              <td className="px-4 py-4 text-right">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-court-600 hover:text-court-700 dark:text-court-400"
                >
                  View <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
