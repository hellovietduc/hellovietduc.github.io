<script setup lang="ts">
defineProps<{
  contentType: string;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}>();
</script>

<template>
  <meta property="og:type" :content="contentType" />
  <meta property="og:url" :content="url" />
  <meta property="og:title" :content="title" />
  <meta property="og:description" :content="description" />
  <meta property="og:image" :content="imageUrl" />
</template>
