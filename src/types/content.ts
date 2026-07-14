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

export type ProductRating = {
  overall: number;
  performance: number;
  value: number;
  durability: number;
  comfort: number;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: ProductRating;
  badge?: "Editor's Choice" | "Best Value" | "Best Overall" | "Premium Pick" | "Budget Pick";
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  retailer: string;
  summary: string;
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
  editorsPick?: boolean;
  trending?: boolean;
  popular?: boolean;
  articleType?: "review" | "guide" | "comparison" | "news";
  products?: Product[];
  keyTakeaways?: string[];
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
