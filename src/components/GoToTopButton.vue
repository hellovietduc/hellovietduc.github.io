<script setup lang="ts">
import Icon from '@components/Icon.vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const { height: windowHeight } = useWindowSize()
const { y: scrollHeight } = useWindowScroll()

const shouldShow = computed(() => scrollHeight.value > windowHeight.value / 2)
</script>

<template>
  <a
    v-show="shouldShow"
    :class="[
      'group',
      'fixed',
      'bottom-4',
      'end-6',

      'flex',
      'justify-center',
      'items-center',

      'rounded-full',
      'hover:bg-gray-200',
      'transition-colors',

      'size-11',
    ]"
    href="#top"
  >
    <Icon
      :name="'chevron-up'"
      :class="['bg-gray-500', 'group-hover:bg-gray-600', 'transition-colors']"
    />
  </a>
</template>
