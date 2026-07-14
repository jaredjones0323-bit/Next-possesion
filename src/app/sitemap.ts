import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/data/categories";
import { authors } from "@/data/authors";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/contact`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/how-we-test`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/editorial-guidelines`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${SITE.url}/category/${category.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const authorRoutes: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${SITE.url}/authors/${author.slug}`,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${SITE.url}/blog/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...authorRoutes, ...articleRoutes];
}
