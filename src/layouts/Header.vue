<script setup lang="ts">
import Link from '../components/Link.vue';
import metadata from '../metadata.json';
import UsefulLinks from './UsefulLinks.vue';

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
  <header>
    <div>
      <Link url="/" :aria-label="`${metadata.blogName}'s logo`">
        <img src="logo.png" :alt="`${metadata.blogName}'s logo`" />
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
