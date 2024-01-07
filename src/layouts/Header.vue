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
      'flex flex-col items-center gap-4',
      extended ? 'mb-12' : 'mb-8',
      'text-center',
    ]"
  >
    <div>
      <Link url="/" aria-label="Go to homepage">
        <img
          :src="logoImg.src"
          :alt="`${metadata.blogName}'s logo`"
          width="80"
          height="80"
          :class="[
            'rounded-full',
            'hover:ring-2 ring-goldenrod',
            'hover:ring-offset-2 ring-offset-gray-50',
            'transition-shadow motion-reduce:transition-none',
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
