<script setup lang="ts">
import Link from '@components/Link.vue'
import TagList from '@components/TagList.vue'
import { formatDate } from '@helpers/date'

const props = defineProps<{
  title: string
  description: string
  tags: string[]
  publishedDate: string | number | Date
  url: string
}>()

const formattedDate = formatDate(props.publishedDate)
</script>

<template>
  <article class="flex flex-col items-start gap-4">
    <Link
      :url="url"
      class="hover:text-goldenrod transition-colors motion-reduce:transition-none"
    >
      <h2 class="text-xl font-semibold">{{ title }}</h2>
    </Link>
    <p>{{ description }}</p>
    <div class="text-sm">
      <time :datetime="publishedDate.toString()">{{ formattedDate }}</time>
      <TagList class="ms-3" :tags="tags" />
    </div>
  </article>
</template>
