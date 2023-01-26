<script setup lang="ts">
import { slugifyTag } from '../helper/blog';
import Link from './Link.vue';

defineProps<{
  tags: string[];
}>();

const makeUrl = (tag: string) => `/tags/${slugifyTag(tag)}`;
</script>

<template>
  <div class="flex gap-1.5">
    <Link
      v-for="tag in tags"
      :url="makeUrl(tag)"
      :prefetch="true"
      class="text-sm font-medium uppercase text-goldenrod hover:text-eerie-black transition-colors motion-reduce:transition-none"
    >
      #{{ tag }}
    </Link>
  </div>
</template>
