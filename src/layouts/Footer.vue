<script setup lang="ts">
import UsefulLinks from './UsefulLinks.vue';
</script>

<template>
  <footer>
    <slot name="top" />
    <UsefulLinks />
  </footer>
</template>
