// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    imageUrl: z.string(),
    publishedDate: z.date(),
    draft: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
