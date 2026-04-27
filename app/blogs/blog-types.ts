export type ContentBlock = { type: "p" | "h2" | "h3"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  /** Hero / card image (listing and metadata). */
  image: string;
  imageAlt: string;
  /** Optional in-article image after the intro (e.g. April 2026 `_1` assets). */
  contentImage?: string;
  contentImageAlt?: string;
  readTime: string;
  /** Number of leading paragraph blocks to show as intro before the featured image */
  introLength: number;
  content: ContentBlock[];
}
