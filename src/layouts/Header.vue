<script setup lang="ts">
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
  <header>
    <div>
      <img src="logo.png" :alt="`${metadata.blogName}'s logo`" />
    </div>
    <template v-if="extended">
      <h1>
        {{ metadata.blogName }}
      </h1>
      <h2>
        {{ metadata.blogDescription }}
      </h2>
    </template>
  </header>
</template>
