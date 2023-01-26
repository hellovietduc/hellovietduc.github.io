<script setup lang="ts">
import type { CollectionEntry } from 'astro:content';
import PostCard from '../components/PostCard.vue';
import { getPublishedBlogEntries } from '../helper/blog';

const blogEntries = await getPublishedBlogEntries();
const publishedPosts = blogEntries.map<
  CollectionEntry<'blog'>['data'] & { url: string }
>((entry) => ({ ...entry.data, url: `/posts/${entry.slug}` }));
</script>

<template>
  <div class="flex flex-col gap-8">
    <PostCard
      v-for="post in publishedPosts"
      :url="post.url"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
      :published-date="post.publishedDate"
    />
  </div>
</template>
