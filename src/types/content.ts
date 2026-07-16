export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoIntro: string;
  icon: string;
  color: string;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  credentials: string[];
  twitter?: string;
  linkedin?: string;
  articlesCount?: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  authorSlug: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
  heroImageAlt: string;
  featured?: boolean;
  coachesPick?: boolean;
  trending?: boolean;
  popular?: boolean;
  articleType?: "guide" | "perspective" | "story" | "news";
  keyTakeaways?: string[];
  coachesTake?: string;
  faqs?: FaqItem[];
  sources?: { label: string; url: string }[];
};

export type Article = ArticleFrontmatter & {
  content: string;
  readingTime: string;
};

export type ArticleWithAuthor = Article & {
  author: Author;
};
