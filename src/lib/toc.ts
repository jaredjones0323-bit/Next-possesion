import { slugify } from "@/lib/utils";

export type TocItem = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split("\n");
  const items: TocItem[] = [];

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2?.[1]) {
      items.push({ id: slugify(h2[1]), text: h2[1], depth: 2 });
    } else if (h3?.[1]) {
      items.push({ id: slugify(h3[1]), text: h3[1], depth: 3 });
    }
  }

  return items;
}
