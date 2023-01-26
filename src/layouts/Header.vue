<script setup lang="ts">
import Link from '../components/Link.vue';
import metadata from '../metadata.json';

withDefaults(
  defineProps<{
    extended?: boolean;
  }>(),
  {
    extended: false,
  }
);
</script>

<template>
  <header :class="['flex flex-col items-center gap-4', extended ? 'mb-12' : 'mb-8']">
    <div>
      <Link url="/" :aria-label="`${metadata.blogName}'s logo`">
        <img src="/logo.png" :alt="`${metadata.blogName}'s logo`" width="80" height="80" class="rounded-full" />
      </Link>
    </div>
    <template v-if="extended">
      <h1 class="text-3xl">
        {{ metadata.blogName }}
      </h1>
      <h2>
        {{ metadata.blogDescription }}
      </h2>
    </template>
  </header>
</template>
