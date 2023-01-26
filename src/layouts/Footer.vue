<script setup lang="ts">
import UsefulLinks from '@components/UsefulLinks.vue';
</script>

<template>
  <footer class="flex flex-col items-center gap-12 mt-12">
    <slot />
    <UsefulLinks />
  </footer>
</template>
