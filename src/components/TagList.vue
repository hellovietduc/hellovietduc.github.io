<script setup lang="ts">
import slugify from '@sindresorhus/slugify';
import Link from './Link.vue';

defineProps<{
  tags: string[];
}>();

const makeUrl = (tag: string) => `/tags/${slugify(tag, { decamelize: false })}`;
</script>

<template>
  <div class="flex gap-1.5">
    <Link
      v-for="tag in tags"
      :url="makeUrl(tag)"
      :prefetch="true"
      class="text-sm font-medium uppercase"
    >
      #{{ tag }}
    </Link>
  </div>
</template>
