<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  url: string;
}>();

const isInternal = computed(() => props.url.startsWith('/'));
</script>

<template>
  <a
    :href="url"
    :target="isInternal ? '_self' : '_blank'"
    :rel="isInternal ? '' : 'noopener'"
  >
    <slot />
  </a>
</template>
