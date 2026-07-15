import type { Metadata } from "next";
import {
  getAllArticles,
  getEditorsPicks,
  getPopularArticles,
  getTrendingArticles,
} from "@/lib/articles";
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { LatestArticles } from "@/components/home/LatestArticles";
import { EditorsPicks } from "@/components/home/EditorsPicks";
import { MostPopular } from "@/components/home/MostPopular";
import { BestProducts } from "@/components/home/BestProducts";
import { TrendingReviews } from "@/components/home/TrendingReviews";
import { Newsletter } from "@/components/home/Newsletter";
import { SocialProof } from "@/components/home/SocialProof";
import { HomeFaq } from "@/components/home/HomeFaq";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const allArticles = getAllArticles();
  const featured = allArticles.find((a) => a.featured) ?? allArticles[0];
  const editorsPicks = getEditorsPicks();
  const popular = getPopularArticles();
  const trending = getTrendingArticles();

  if (!featured) {
    return null;
  }

  return (
    <>
      <Hero featured={featured} />
      <FeaturedCategories />
      <LatestArticles articles={allArticles} />
      <EditorsPicks articles={editorsPicks} />
      <BestProducts articles={allArticles} />
      <MostPopular articles={popular} />
      <TrendingReviews articles={trending} />
      <SocialProof />
      <Newsletter />
      <HomeFaq />
    </>
  );
}
