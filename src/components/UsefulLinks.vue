<script setup lang="ts">
import Icon from '@components/Icon.vue'
import Link from '@components/Link.vue'
import metadata from '@metadata.json'
</script>

<template>
  <div class="flex justify-center items-center gap-2 @lg/header:gap-4">
    <Link
      v-for="link in metadata.links"
      :key="link.url"
      :url="link.url"
      :title="link.title"
      :aria-label="link.ariaLabel"
      class="group flex flex-col items-center"
    >
      <Icon
        :name="link.icon"
        :class="[
          link.text && 'inline @lg/header:hidden',
          'bg-eerie-black group-hover:bg-goldenrod',
          'transition-colors',
        ]"
      />
      <span
        v-if="link.text"
        class="hidden @lg/header:inline text-sm group-hover:text-goldenrod transition-colors"
      >
        {{ link.text }}
      </span>
    </Link>
  </div>
</template>
