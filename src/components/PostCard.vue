<script setup lang="ts">
import { computed } from 'vue';
import Link from './Link.vue';
import TagList from './TagList.vue';

const props = defineProps<{
  title: string;
  description: string;
  tags: string[];
  publishedDate: string | number | Date;
  url: string;
}>();

const formattedDate = computed(() => {
  const date = new Date(props.publishedDate);
  return date.toLocaleDateString();
});
</script>

<template>
  <article class="flex flex-col gap-4">
    <Link :url="url" :prefetch="true">
      <h1 class="text-xl">{{ title }}</h1>
    </Link>
    <p>{{ description }}</p>
    <span class="text-sm">
      <time :datetime="publishedDate.toString()">{{ formattedDate }}</time>
      <TagList :tags="tags" />
    </span>
  </article>
</template>
