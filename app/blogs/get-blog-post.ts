import "server-only";
import fs from "fs";
import path from "path";
import type { BlogPost } from "./blog-types";
import { paragraphsToBlocks } from "./blog-block-utils";
import { legacyBlogPosts } from "./legacy-blog-data";
import { seoBlogMetaList } from "./seo-blog-meta";

const BODIES_DIR = path.join(process.cwd(), "content/blog-bodies");

export function getPostBySlug(slug: string): BlogPost | undefined {
  const seo = seoBlogMetaList.find((m) => m.slug === slug);
  if (seo) {
    const filePath = path.join(BODIES_DIR, `${slug}.txt`);
    const raw = fs.readFileSync(filePath, "utf8");
    return {
      ...seo,
      content: paragraphsToBlocks(raw),
    };
  }
  return legacyBlogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return [
    ...seoBlogMetaList.map((m) => m.slug),
    ...legacyBlogPosts.map((p) => p.slug),
  ];
}
