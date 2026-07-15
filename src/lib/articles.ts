import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article, ArticleFrontmatter, ArticleWithAuthor } from "@/types/content";
import { getAuthorBySlug } from "@/data/authors";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readArticleFile(filename: string): Article {
  const filePath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as ArticleFrontmatter;
  const stats = readingTime(content);

  return {
    ...frontmatter,
    content,
    readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
  };
}

let cachedArticles: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (cachedArticles) return cachedArticles;
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  const articles = files
    .map(readArticleFile)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  cachedArticles = articles;
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticleWithAuthor(slug: string): ArticleWithAuthor | undefined {
  const article = getArticleBySlug(slug);
  if (!article) return undefined;
  const author = getAuthorBySlug(article.authorSlug);
  if (!author) return undefined;
  return { ...article, author };
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.category === categorySlug);
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter((a) => a.tags.includes(tag));
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getCoachesPicks(): Article[] {
  return getAllArticles().filter((a) => a.coachesPick);
}

export function getTrendingArticles(): Article[] {
  return getAllArticles().filter((a) => a.trending);
}

export function getPopularArticles(): Article[] {
  return getAllArticles().filter((a) => a.popular);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .map((a) => {
      let score = 0;
      if (a.category === article.category) score += 2;
      score += a.tags.filter((t) => article.tags.includes(t)).length;
      return { article: a, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.article);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllArticles().forEach((a) => a.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function toSummaries(articles: Article[]): Omit<Article, "content">[] {
  return articles.map(({ content: _content, ...rest }) => rest);
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllArticles().filter((a) => {
    const haystack = `${a.title} ${a.description} ${a.tags.join(" ")}`.toLowerCase();
    return haystack.includes(q);
  });
}
