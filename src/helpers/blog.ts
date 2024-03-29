import slugify from '@sindresorhus/slugify'
import { getCollection } from 'astro:content'

export const getPublishedBlogEntries = async () => {
  const entries = await getCollection('blog')
  return entries
    .filter(({ data }) => !data.draft && data.publishedDate != null)
    .sort(
      ({ data: a }, { data: b }) =>
        b.publishedDate.getTime() - a.publishedDate.getTime(),
    )
}

export const getPublishedBlogEntriesByTag = async (tag: string | undefined) => {
  if (!tag) return []
  const blogEntries = await getPublishedBlogEntries()
  return blogEntries.filter(({ data }) =>
    data.tags.some((rawTag) => slugify(rawTag, { decamelize: false }) === tag),
  )
}

export const getTags = async (options?: {
  slugify?: boolean
  sort?: 'asc' | 'desc'
}) => {
  const blogEntries = await getPublishedBlogEntries()
  const tags = new Set<string>()
  blogEntries.forEach(({ data }) =>
    data.tags.forEach((rawTag) =>
      tags.add(
        options?.slugify ? slugify(rawTag, { decamelize: false }) : rawTag,
      ),
    ),
  )
  return options?.sort ? [...tags].sort() : [...tags]
}
