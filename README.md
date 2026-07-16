# Next Possession

Basketball recruiting and player development education for AAU and high school players and their families — built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

> "You cannot control the last possession. You can only control the next one."

Next Possession is written from a real coach's perspective: honest, direct advice on recruiting, AAU, player development, coach perspective, and parent education — no training-company sales pitch, no motivational-influencer fluff.

## Tech Stack

- **Next.js 14** (App Router, React Server Components, `next/og`)
- **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS** + `@tailwindcss/typography`
- **next-mdx-remote** for MDX article rendering
- **next-themes** for dark mode
- **lucide-react** for icons
- Zero external CMS — articles are Markdown/MDX files in the repo (see [Content & CMS](#content--cms))

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
npm run typecheck
```

## Folder Structure

```
next-possession/
├── content/
│   └── articles/                # All articles as .mdx files (see below)
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router routes
│   │   ├── layout.tsx           # Root layout: fonts, theme provider, nav, footer, org/website schema
│   │   ├── page.tsx             # Home page
│   │   ├── opengraph-image.tsx  # Dynamic default OG image (next/og)
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   ├── robots.ts            # robots.txt
│   │   ├── globals.css
│   │   ├── blog/
│   │   │   ├── page.tsx         # Articles listing (search, filter, sort, pagination)
│   │   │   └── [slug]/page.tsx  # Article template
│   │   ├── category/[slug]/page.tsx   # Recruiting / AAU / Player Development / Coach Perspective / Parent Education
│   │   ├── authors/[slug]/page.tsx
│   │   ├── search/page.tsx
│   │   ├── resources/page.tsx   # Digital guides + coaching services (roadmap page)
│   │   ├── newsletter/page.tsx  # Dedicated newsletter signup page
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── editorial-guidelines/page.tsx
│   │   ├── not-found.tsx        # 404 page
│   │   └── api/search/route.ts  # Instant search endpoint
│   ├── components/
│   │   ├── ui/                  # Design system: Button, Card, Badge, Accordion, ArticleCard, NewsletterForm...
│   │   ├── layout/               # Navbar (mega menu + mobile menu), Footer, ThemeToggle, SearchModal
│   │   ├── home/                 # Hero, FeaturedCategories, LatestArticles, CoachesPicks,
│   │   │                          MostPopular, TrendingArticles, SocialProof, HomeFaq
│   │   ├── article/               # Breadcrumbs, TableOfContents, KeyTakeaways, CoachesTake,
│   │   │                          ArticleFaq, AuthorBio, ShareButtons, Sources, CommentsSection...
│   │   ├── blog/                  # ArticleExplorer (client-side search/filter/sort/pagination)
│   │   ├── contact/                # ContactForm
│   │   └── providers/              # ThemeProvider (next-themes)
│   ├── data/
│   │   ├── categories.ts        # The 5 content pillars (single source of truth)
│   │   └── authors.ts           # Coach/contributor profiles
│   ├── lib/
│   │   ├── articles.ts          # Reads & parses content/articles/*.mdx (gray-matter + reading-time)
│   │   ├── schema.ts            # JSON-LD builders (Article, FAQ, Breadcrumb, Org, Website)
│   │   ├── toc.ts                # Extracts H2/H3 headings for the sticky table of contents
│   │   ├── icon-map.ts
│   │   └── utils.ts              # cn(), date formatting, SITE constants
│   └── types/
│       └── content.ts           # Article, Author, Category types
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Content Pillars

Every article belongs to one of five categories, defined in `src/data/categories.ts`:

1. **Recruiting** — how the process actually works, timelines, D1/D2/D3/NAIA/juco, emailing coaches
2. **AAU Basketball** — choosing a team, exposure, live periods, shoe circuits
3. **Player Development** — coachability, basketball IQ, decision-making, habits (not drills)
4. **Coach Perspective** — what coaches actually notice, told directly by a coach
5. **Parent Education** — how to support a player's journey without working against it

## Content & CMS

**There is no external CMS required.** Every article is a single `.mdx` file in `content/articles/`. This keeps the site git-versioned, fast (everything is statically generated at build time), and trivially portable to a headless CMS later (Sanity, Contentful, etc.) if the team outgrows file-based content — the `src/lib/articles.ts` module is the only place that would need to change.

### Adding a new article

1. Create a new file: `content/articles/your-article-slug.mdx`
2. Add frontmatter (see schema below) and Markdown/MDX body content.
3. Reference an author slug that exists in `src/data/authors.ts`.
4. Reference a category slug that exists in `src/data/categories.ts`.
5. Run `npm run dev` — the article is immediately available at `/blog/your-article-slug` and appears in `/blog`, its category page, search, and the homepage sections if the relevant boolean flags are set.

### Frontmatter schema

```yaml
---
title: "Article Title"
slug: "article-title" # must match the filename
description: "SEO meta description, 150-160 characters."
category: "recruiting" # must match a slug in src/data/categories.ts
tags: ["recruiting", "college-basketball"]
authorSlug: "jared-jones" # must match a slug in src/data/authors.ts
publishedAt: "2026-01-08"
updatedAt: "2026-06-24"
heroImage: "https://images.unsplash.com/..."
heroImageAlt: "Descriptive alt text"
featured: true # eligible for homepage hero
coachesPick: true # appears in Coach's Picks
trending: true # appears in Trending Articles
popular: true # appears in Most Popular
articleType: "guide" # guide | perspective | story | news
keyTakeaways:
  - "Bullet point summary readers can scan"
coachesTake: "A one or two sentence, first-person pull-quote-style summary — rendered in the Coach's Take box near the end of the article."
faqs:
  - question: "..."
    answer: "..."
sources:
  - label: "Source name"
    url: "https://..."
---

Markdown/MDX body content goes here. `##` headings automatically populate the
sticky table of contents; `###` headings are nested under them.
```

### Adding a category

Add an entry to the `categories` array in `src/data/categories.ts`. The slug, icon (see `src/lib/icon-map.ts` for available icons), and SEO intro copy will automatically flow into the mega menu, footer, homepage topic grid, and generate a category page at `/category/[slug]`.

### Adding an author

Add an entry to the `authors` array in `src/data/authors.ts`. A profile page is automatically generated at `/authors/[slug]`.

### Tags

Tags are fully dynamic — just add strings to an article's `tags` array. `getAllTags()` in `src/lib/articles.ts` aggregates every tag in use across all articles.

## SEO

- Per-page `generateMetadata` with canonical URLs, Open Graph, and Twitter Card data
- JSON-LD structured data: `Organization`, `WebSite` (with `SearchAction`), `Article`, `BreadcrumbList`, and `FAQPage` (via `src/lib/schema.ts`)
- Dynamic `sitemap.xml` (`src/app/sitemap.ts`) covering all articles, categories, and authors
- `robots.txt` (`src/app/robots.ts`)
- Dynamic Open Graph image generation via `next/og`
- Semantic heading hierarchy, `next/image` optimization, and internal linking throughout (related articles, category cross-links, author archives)

## Design System

Brand color is a warm court-orange (`court-*` in `tailwind.config.ts`) paired with a near-black ink neutral scale (`ink-*`) — black, white, and orange, per the brand guide. Typography uses Sora (display) + Inter (body) via `next/font`. All interactive components (`Accordion`, `SearchModal`, `ArticleExplorer`, `ThemeToggle`) are client components; everything else is a server component for performance.

## Deployment

The site is a standard Next.js app and deploys cleanly to **Vercel**:

1. Push this repository to GitHub.
2. Import the repo in Vercel → it auto-detects Next.js, no config needed.
3. Set the production environment variable `NEXT_PUBLIC_SITE_URL` if you change the domain (also update `SITE.url` in `src/lib/utils.ts` to match, since server-rendered metadata reads from that constant).
4. Deploy. Every push to `main` triggers a new deployment; content changes (new `.mdx` files) ship on the next build since content is read from the filesystem at build time.

Other hosts (Netlify, self-hosted Node, Docker) work too — this is a standard `next build && next start` app with no serverless-specific dependencies beyond the `/api/search` route, which runs fine on any Node runtime.

## Recommended Next Steps

- **Newsletter + comments backends**: `NewsletterForm` and `CommentsSection` currently simulate submission client-side. Wire the newsletter form to an ESP (ConvertKit, Beehiiv, Substack) and comments to a provider like Giscus.
- **Resources page → real commerce**: `/resources` presents the Digital Guides and Coaching Services from the brand vision as an honest "coming soon" roadmap with an email waitlist. When those products are ready, wire them to a real checkout (Stripe, Gumroad) and a booking tool (Calendly) for consultations rather than building a fake purchase flow ahead of time.
- **Analytics**: add a privacy-respecting analytics snippet (Plausible, Vercel Analytics) in `src/app/layout.tsx`.
- **Headless CMS migration path**: if editors need a UI instead of committing `.mdx` files, swap the filesystem reads in `src/lib/articles.ts` for calls to a headless CMS SDK — no other file needs to change, since every page consumes articles through that module.
- **Legal review**: the Privacy Policy, Terms, and Editorial Guidelines pages are solid starting templates but should be reviewed by counsel, particularly the "no guaranteed outcomes" language once paid services launch.
- **Author roster**: currently two coach personas (`src/data/authors.ts`). Expand as real contributors join.
