<script setup lang="ts">
import metadata from '../metadata.json';
import Link from './Link.vue';
</script>

<template>
  <div class="flex gap-6">
    <Link
      v-for="link in metadata.links"
      :url="link.url"
      :prefetch="true"
      class="flex flex-col items-center"
    >
      <img :src="link.icon" :alt="link.text" width="24" height="24" />
      <p class="text-sm">{{ link.text }}</p>
    </Link>
  </div>
</template>
