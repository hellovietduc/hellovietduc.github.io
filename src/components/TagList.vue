<script setup lang="ts">
import Link from '@components/Link.vue';
import slugify from '@sindresorhus/slugify';

defineProps<{
  tags: string[];
}>();

const makeUrl = (tag: string) => `/tags/${slugify(tag, { decamelize: false })}`;
</script>

<template>
  <div class="flex flex-wrap gap-1.5">
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
