<script setup lang="ts">
import slugify from '@sindresorhus/slugify';
import Link from './Link.vue';

defineProps<{
  tags: string[];
}>();

const makeUrl = (tag: string) => `/tags/${slugify(tag, { decamelize: false })}`;
</script>

<template>
  <Link
    v-for="tag in tags"
    :url="makeUrl(tag)"
    :prefetch="true"
    class="text-sm uppercase"
  >
    #{{ tag }}
  </Link>
</template>
