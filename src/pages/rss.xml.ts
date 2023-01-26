import rss from '@astrojs/rss';
import { getPublishedBlogEntries } from '@helpers/blog';
import metadata from '@metadata.json';
import type { APIRoute } from 'astro';

export const get: APIRoute = async (context) => {
  const blogEntries = await getPublishedBlogEntries();
  const rssItems = blogEntries.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.publishedDate,
    link: `/posts/${entry.slug}`,
  }));
  return rss({
    title: metadata.blogName,
    description: metadata.blogDescription,
    site: context.site?.toString() ?? '',
    items: rssItems,
    customData: `<language>en-us</language>`,
  });
};
