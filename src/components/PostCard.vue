<script setup lang="ts">
import { formatDate } from '../helper/date';
import Link from './Link.vue';
import TagList from './TagList.vue';

const props = defineProps<{
  title: string;
  description: string;
  tags: string[];
  publishedDate: string | number | Date;
  url: string;
}>();

const formattedDate = formatDate(props.publishedDate);
</script>

<template>
  <article class="flex flex-col items-start gap-4">
    <Link :url="url" :prefetch="true" class="hover:text-goldenrod transition-colors motion-reduce:transition-none">
      <h1 class="text-xl font-semibold">{{ title }}</h1>
    </Link>
    <p>{{ description }}</p>
    <div class="flex gap-3 text-sm">
      <time :datetime="publishedDate.toString()">{{ formattedDate }}</time>
      <TagList :tags="tags" />
    </div>
  </article>
</template>
