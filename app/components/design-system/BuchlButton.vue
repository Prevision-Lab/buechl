<template>
  <UButton
    :color="buttonColor"
    :variant="buttonVariant"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    :rounded="rounded"
    :icon="icon"
    :trailing="iconRight"
    :to="to"
    :href="href"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </UButton>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  label: String,
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'outline', 'ghost', 'green'].includes(value)
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  disabled: Boolean,
  loading: Boolean,
  block: Boolean,
  rounded: {
    type: String,
    default: 'md'
  },
  icon: String,
  iconRight: Boolean,
  href: String,
  to: [String, Object]
})

// Map custom variants to Nuxt UI color/variant combinations
const buttonColor = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'primary'
    case 'green':
      return 'success'
    case 'outline':
      return 'neutral'
    case 'ghost':
      return 'neutral'
    default:
      return 'primary'
  }
})

const buttonVariant = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'solid'
    case 'secondary':
      return 'outline'
    case 'green':
      return 'solid'
    case 'outline':
      return 'outline'
    case 'ghost':
      return 'ghost'
    default:
      return 'solid'
  }
})
</script>