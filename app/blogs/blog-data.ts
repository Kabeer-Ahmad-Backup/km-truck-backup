import type { BlogPost, ContentBlock } from "./blog-types";
import { seoBlogMetaList } from "./seo-blog-meta";
import { legacyBlogPosts } from "./legacy-blog-data";

export type { BlogPost, ContentBlock } from "./blog-types";

/** Cards for the blog index (no article body — keeps the client bundle small). */
export const blogPostsForList: Omit<BlogPost, "content">[] = [
  ...seoBlogMetaList,
  ...legacyBlogPosts.map(({ content: _c, ...rest }) => rest),
];
