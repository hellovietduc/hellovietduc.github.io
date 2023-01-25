<script setup lang="ts">
import metadata from '../metadata.json';
import Link from './Link.vue';
</script>

<template>
  <div class="flex">
    <Link
      v-for="link in metadata.links"
      :url="link.url"
      :prefetch="true"
      class="flex flex-col"
    >
      <img :src="link.icon" :alt="link.text" />
      <p>{{ link.text }}</p>
    </Link>
  </div>
</template>
