<script setup lang="ts">
import { getCollection } from 'astro:content';
import PostCard from '../components/PostCard.vue';
import { isPostPublished } from '../helper/blog';

const allPosts = await getCollection('blog');
const publishedPosts = allPosts
  .filter((post) => isPostPublished(post.data))
  .map((post) => ({ ...post.data, url: `/posts/${post.slug}` }));
</script>

<template>
  <div>
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
