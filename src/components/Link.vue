<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    url: string;
    prefetch?: boolean;
  }>(),
  {
    prefetch: false,
  }
);

const isInternal = computed(() => props.url.startsWith('/'));
const rel = computed(() => {
  const rels = [];
  if (isInternal.value && props.prefetch) {
    rels.push('prefetch');
  }
  if (!isInternal.value) {
    rels.push('noopener', 'nofollow');
  }
  return rels.join(' ');
});
</script>

<template>
  <a :href="url" :target="isInternal ? '_self' : '_blank'" :rel="rel">
    <slot />
  </a>
</template>
