<script setup lang="ts">
import logoImg from '@assets/logo.png'
import Link from '@components/Link.vue'
import metadata from '@metadata.json'

withDefaults(
  defineProps<{
    extended?: boolean
  }>(),
  {
    extended: false,
  },
)
</script>

<template>
  <header
    :class="[
      '@container/header',
      'flex flex-col items-center gap-4',
      {
        'mb-6 @md/header:mb-12': extended,
        'mb-4 @md/header:mb-8': !extended,
      },
      'text-center',
    ]"
  >
    <div>
      <Link url="/" aria-label="Go to homepage">
        <img
          :src="logoImg.src"
          :alt="`${metadata.blogName}'s logo`"
          :class="[
            'rounded-full',
            'size-10 @md/header:size-20',
            'hover:ring-2 ring-goldenrod',
            'hover:ring-offset-2 ring-offset-gray-50',
            'transition-shadow',
          ]"
        />
      </Link>
    </div>
    <template v-if="extended">
      <h1 class="text-3xl font-semibold">
        {{ metadata.blogName }}
      </h1>
      <h2>
        {{ metadata.blogDescription }}
      </h2>
    </template>
  </header>
</template>
