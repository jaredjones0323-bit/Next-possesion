# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next Possession — a Next.js content/marketing site for basketball recruiting and player development education (AAU and high school players/families). Written from a real coach's perspective. There is no backend/database; content is git-versioned Markdown/MDX and the site is statically generated at build time.

## Commands

```bash
npm install
npm run dev         # dev server at http://localhost:3000
npm run build        # production build (also type-checks and lints since eslint.ignoreDuringBuilds is false)
npm run start        # serve the production build
npm run lint          # ESLint (next/core-web-vitals config)
npm run typecheck     # tsc --noEmit
```

There is no test suite/framework configured in this repo (no jest/vitest and no `*.test.*` files) — don't assume one exists.

## Architecture

**Content is filesystem-based, not a CMS.** Every article is a single `.mdx` file in `content/articles/`, parsed via `src/lib/articles.ts` (gray-matter for frontmatter + `reading-time`). That module is the *only* place that reads content from disk — every page (`/blog`, `/blog/[slug]`, `/category/[slug]`, `/search`, homepage sections) consumes articles through its exported functions (`getAllArticles`, `getArticleBySlug`, `getArticlesByCategory`, `getRelatedArticles`, `searchArticles`, etc.). If content ever moves to a headless CMS, only this file changes. Articles are cached in a module-level variable (`cachedArticles`) after first read.

**Two other data files act as single sources of truth**, referenced by slug from article frontmatter:
- `src/data/categories.ts` — the 5 content pillars (Recruiting, AAU Basketball, Player Development, Coach Perspective, Parent Education). Adding an entry here automatically wires up the mega menu, footer, homepage topic grid, and a generated `/category/[slug]` page.
- `src/data/authors.ts` — coach/contributor profiles. Adding an entry auto-generates `/authors/[slug]`.

Types for all of the above live in `src/types/content.ts` (`Article`, `ArticleFrontmatter`, `Author`, `Category`, `FaqItem`).

**Rendering split**: all interactive components are client components (`Accordion`, `SearchModal`, `ArticleExplorer`, `ThemeToggle`, `NewsletterForm`, `ContactForm`, `CommentsSection`); everything else is a server component. `ArticleExplorer` (`src/components/blog/ArticleExplorer.tsx`) does client-side search/filter/sort/pagination over article summaries.

**SEO/structured data** is centralized in `src/lib/schema.ts` (JSON-LD builders for `Organization`, `WebSite`, `Article`, `BreadcrumbList`, `FAQPage`) and used via per-page `generateMetadata`. `src/app/sitemap.ts` and `src/app/robots.ts` generate sitemap/robots dynamically from the same article/category/author data. `src/app/opengraph-image.tsx` generates the default OG image via `next/og`; article pages use it too.

**Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).

**Site-wide constants** (name, tagline, description, canonical URL, Twitter handle) live in `SITE` in `src/lib/utils.ts` — update `SITE.url` together with `NEXT_PUBLIC_SITE_URL` if the production domain changes, since metadata reads from that constant.

## Content conventions

Adding a new article: create `content/articles/<slug>.mdx` with frontmatter matching `ArticleFrontmatter` in `src/types/content.ts`. Key rules:
- `slug` must match the filename; `category` must match a slug in `src/data/categories.ts`; `authorSlug` must match a slug in `src/data/authors.ts`.
- `##` headings in the body populate the sticky table of contents (`src/lib/toc.ts`); `###` nests under them.
- Boolean flags (`featured`, `coachesPick`, `trending`, `popular`) control homepage section placement — no code change needed.
- `tags` are fully dynamic; `getAllTags()` in `src/lib/articles.ts` aggregates them across all articles for the tag system.

No dev server restart is needed to see new/edited articles — they're read from the filesystem at request/build time.

## Design system

Brand colors are `court-*` (warm court-orange) and `ink-*` (near-black neutral) in `tailwind.config.ts` — black/white/orange per the brand guide. Typography: Sora (display) + Inter (body) via `next/font`.

## Notes for future work

Per the README's own roadmap notes (still accurate as of this writing):
- `NewsletterForm` and `CommentsSection` currently simulate submission client-side only — no real ESP or comments backend is wired up.
- `/resources` presents Digital Guides and Coaching Services as a "coming soon" roadmap with an email waitlist, not a real checkout/booking flow.
- No analytics snippet is wired into `src/app/layout.tsx` yet.
