import { getCollection } from 'astro:content';

export const getPublishedBlogEntries = async () => {
  const entries = await getCollection('blog');
  return entries.filter(
    ({ data }) => !data.draft && data.publishedDate != null
  );
};
