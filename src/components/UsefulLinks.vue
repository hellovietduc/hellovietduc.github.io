<script setup lang="ts">
import Icon from '@components/Icon.vue'
import Link from '@components/Link.vue'
import metadata from '@metadata.json'
</script>

<template>
  <div class="@container/useful-links flex justify-center w-full">
    <div class="flex gap-4 @md/useful-links:gap-6">
      <Link
        v-for="link in metadata.links"
        :key="link.url"
        :url="link.url"
        class="flex flex-col items-center group"
      >
        <Icon
          :name="link.icon"
          :class="[
            'bg-eerie-black group-hover:bg-goldenrod',
            'transition-colors',
          ]"
        />
        <p
          class="hidden @md/useful-links:block text-sm group-hover:text-goldenrod"
        >
          {{ link.text }}
        </p>
      </Link>
    </div>
  </div>
</template>
