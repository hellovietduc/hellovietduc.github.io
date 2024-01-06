<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  url: string
}>()

const isInternal = computed(() => props.url.startsWith('/'))
const rel = computed(() => {
  if (!isInternal.value) {
    return 'noopener nofollow'
  }
  return ''
})
</script>

<template>
  <a :href="url" :target="isInternal ? '_self' : '_blank'" :rel="rel">
    <slot />
  </a>
</template>
