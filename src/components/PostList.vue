<script setup lang="ts">
import type { CollectionEntry } from 'astro:content';
import PostCard from './PostCard.vue';

type Post = CollectionEntry<'blog'>['data'] & { url: string };

defineProps<{
  posts: Post[];
}>();
</script>

<template>
  <div class="flex flex-col gap-8">
    <PostCard
      v-for="post in posts"
      :url="post.url"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
      :published-date="post.publishedDate"
    />
  </div>
</template>
