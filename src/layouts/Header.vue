<script setup lang="ts">
import logoImg from '@assets/logo.png'
import Link from '@components/Link.vue'
import metadata from '@metadata.json'
import UsefulLinks from '@components/UsefulLinks.vue'
</script>

<template>
  <header
    :class="[
      '@container/header',
      'flex',
      'justify-between',
      'items-center',
      'mb-8 2xs:mb-10',
    ]"
  >
    <div class="flex items-center gap-2">
      <Link class="shrink-0" url="/" title="Home" aria-label="Go to homepage">
        <img
          :src="logoImg.src"
          :alt="`${metadata.blogName}'s logo`"
          :class="[
            'rounded-full',
            'size-8',
            'hover:ring-2 ring-goldenrod',
            'hover:ring-offset-1 ring-offset-gray-50',
            'transition-shadow',
          ]"
        />
      </Link>
      <p class="hidden @[21rem]/header:inline grow text-1.5xl font-semibold">
        {{ metadata.blogName }}
      </p>
    </div>
    <UsefulLinks />
  </header>
</template>
