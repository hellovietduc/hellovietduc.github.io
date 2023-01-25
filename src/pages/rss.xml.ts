import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPublishedBlogEntries } from '../helper/blog';
import metadata from '../metadata.json';

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
