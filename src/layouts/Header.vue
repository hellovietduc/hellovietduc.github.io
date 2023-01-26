<script setup lang="ts">
import Link from '../components/Link.vue';
import UsefulLinks from '../components/UsefulLinks.vue';
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
  <header class="flex flex-col items-center">
    <div>
      <Link url="/" :aria-label="`${metadata.blogName}'s logo`">
        <img src="/logo.png" :alt="`${metadata.blogName}'s logo`" width="80" height="80" class="rounded-full" />
      </Link>
    </div>
    <template v-if="extended">
      <h1>
        {{ metadata.blogName }}
      </h1>
      <h2>
        {{ metadata.blogDescription }}
      </h2>
      <UsefulLinks />
    </template>
  </header>
</template>
