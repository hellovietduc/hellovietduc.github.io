<script setup lang="ts">
import Icon from '@components/Icon.vue'
import { useWindowScroll, useWindowSize, useResizeObserver } from '@vueuse/core'
import { watch, computed, ref } from 'vue'
import { debounce } from 'lodash-es'

const { height: windowHeight, width: windowWidth } = useWindowSize()
const { y: scrollHeight } = useWindowScroll()

const shouldShow = computed(() => scrollHeight.value > windowHeight.value / 2)

const button = ref<HTMLElement>()
const isOverlapWithBody = ref(false)

const checkOverlapWithBody = debounce(() => {
  const buttonEl = button.value
  if (!buttonEl) return
  const bodyEl = document.body
  const buttonRect = buttonEl.getBoundingClientRect()
  const bodyRect = bodyEl.getBoundingClientRect()
  isOverlapWithBody.value = !(
    buttonRect.right < bodyRect.left ||
    buttonRect.left > bodyRect.right ||
    buttonRect.bottom < bodyRect.top ||
    buttonRect.top > bodyRect.bottom
  )
}, 200)

watch([windowHeight, windowWidth], checkOverlapWithBody, { immediate: true })
</script>

<template>
  <a
    v-show="shouldShow"
    ref="button"
    :class="[
      'group',
      'fixed',
      isOverlapWithBody ? ['bottom-4', 'end-6'] : ['bottom-16', 'end-20'],

      'flex',
      'justify-center',
      'items-center',

      'rounded-full',
      !isOverlapWithBody && [
        'border',
        'border-solid',
        'border-gray-300',
        'hover:border-gray-400',
      ],
      'hover:bg-gray-200',
      'transition-colors',

      'size-11',
    ]"
    href="#top"
  >
    <Icon
      :name="'chevron-up'"
      :class="[
        isOverlapWithBody
          ? 'bg-gray-500 group-hover:bg-gray-600'
          : 'bg-gray-300 group-hover:bg-gray-400',
        'transition-colors',
      ]"
    />
  </a>
</template>
