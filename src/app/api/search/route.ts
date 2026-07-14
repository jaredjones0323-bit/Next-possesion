import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/articles";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const results = searchArticles(q)
    .slice(0, 8)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      category: a.category,
      heroImage: a.heroImage,
    }));

  return NextResponse.json({ results });
}
