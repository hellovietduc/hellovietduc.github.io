<script setup lang="ts">
import Link from '../components/Link.vue';
import metadata from '../metadata.json';
</script>

<template>
  <div class="flex">
    <Link v-for="link in metadata.links" :url="link.url" class="flex flex-col">
      <img :src="link.icon" :alt="link.text" />
      <p>{{ link.text }}</p>
    </Link>
  </div>
</template>
