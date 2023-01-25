import type { CollectionEntry } from 'astro:content';

export const isPostPublished = (post: CollectionEntry<'blog'>['data']): boolean => {
  return !post.draft && post.publishedDate != null
}
