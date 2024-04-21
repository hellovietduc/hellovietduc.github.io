<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  name: string
}>()

const link = computed(() => `/icon/${props.name}.svg`)
</script>

<template>
  <i
    class="inline-block size-6"
    :style="{
      '-webkit-mask': `url(${link}) no-repeat center`,
      mask: `url(${link}) no-repeat center`,
    }"
  ></i>
</template>
