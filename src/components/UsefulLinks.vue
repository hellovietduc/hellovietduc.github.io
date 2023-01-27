<script setup lang="ts">
import Link from '@components/Link.vue'
import metadata from '@metadata.json'
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <Link
      v-for="link in metadata.links"
      :key="link.url"
      :url="link.url"
      :prefetch="true"
      class="flex flex-col items-center group"
    >
      <i
        :class="[
          'w-6 h-6',
          'bg-eerie-black group-hover:bg-goldenrod',
          'transition-colors motion-reduce:transition-none',
        ]"
        :style="{
          '-webkit-mask': `url(${link.icon}) no-repeat center`,
          mask: `url(${link.icon}) no-repeat center`,
        }"
      ></i>
      <p class="text-sm group-hover:text-goldenrod">{{ link.text }}</p>
    </Link>
  </div>
</template>
