<template>
  <div class="buchl-logo inline-block">
    <img 
      :src="logoSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :class="className"
      :style="styleObject"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string | number
  height?: string | number
  variant?: 'blue' | 'white'
  className?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 250,
  height: 50,
  variant: 'blue',
  className: '',
  alt: 'BÜCHL Hungaria Logo'
})

// Logo forrás - mindig a kék logót használjuk
const logoSrc = '/Buchl_25_fekvo_kek-1.png'

// Style objektum a fehér verzióhoz - filtert alkalmazunk ha fehér variáns kell
const styleObject = computed(() => {
  if (props.variant === 'white') {
    return {
      filter: 'brightness(0) invert(1)'
    }
  }
  return {}
})
</script>