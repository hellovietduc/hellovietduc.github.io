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
  <Link :url="url" :prefetch="true">
    <article>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <span>
        <time :datetime="publishedDate.toString()">{{ formattedDate }}</time>
        <TagList :tags="tags" />
      </span>
    </article>
  </Link>
</template>
