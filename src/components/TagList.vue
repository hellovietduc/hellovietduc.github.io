<script setup lang="ts">
import Link from '@components/Link.vue'
import slugify from '@sindresorhus/slugify'

defineProps<{
  tags: string[]
}>()

const makeUrl = (tag: string) => `/tags/${slugify(tag, { decamelize: false })}`
</script>

<template>
  <div class="inline">
    <Link
      v-for="tag in tags"
      :key="tag"
      :url="makeUrl(tag)"
      :aria-label="`Go to posts tagged with ${tag}`"
      :class="[
        'ms-1.5 first:ms-0',
        'text-sm',
        'font-medium',
        'uppercase',
        'text-goldenrod hover:text-eerie-black',
        'transition-colors motion-reduce:transition-none',
      ]"
    >
      #{{ tag }}
    </Link>
  </div>
</template>
