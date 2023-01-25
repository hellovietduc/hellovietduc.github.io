<script setup lang="ts">
import { computed } from 'vue';
import Link from './Link.vue';

const props = defineProps<{
  title: string;
  description: string;
  publishedDate: string | number | Date;
  url: string;
}>();

const formattedDate = computed(() => {
  const date = new Date(props.publishedDate);
  return date.toLocaleDateString();
});
</script>

<template>
  <Link :url="url">
    <article>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <time :datetime="publishedDate.toString()">{{ formattedDate }}</time>
    </article>
  </Link>
</template>
