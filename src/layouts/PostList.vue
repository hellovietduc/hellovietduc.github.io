<script setup lang="ts">
import PostCard from '../components/PostCard.vue';

const posts = [{
  title: 'Hello World',
  description: 'This is a description',
  createdAt: '2023-01-01',
  url: '/hello-world',
}]
</script>

<template>
  <div>
    <PostCard v-for="post in posts" v-bind="{ ...post }" />
  </div>
</template>
