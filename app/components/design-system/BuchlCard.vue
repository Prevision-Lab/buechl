<template>
  <UCard 
    :ui="{
      slots: {
        root: `${hover ? 'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer' : ''} ${
                shadow === 'none' ? 'shadow-none' :
                shadow === 'sm' ? 'shadow-sm' :
                shadow === 'md' ? 'shadow-md' :
                shadow === 'lg' ? 'shadow-lg' :
                'shadow-xl'
        } ${
                rounded === 'none' ? 'rounded-none' : 
                rounded === 'sm' ? 'rounded' :
                rounded === 'md' ? 'rounded-md' :
                rounded === 'lg' ? 'rounded-lg' :
                'rounded-xl'
        }`,
        body: bodyPadding,
        header: headerPadding,
        footer: footerPadding
      }
    }"
  >
    <template v-if="$slots.header || title" #header>
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h3>
      </slot>
    </template>
    
    <slot />
    
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: String,
  shadow: {
    type: String,
    default: 'md',
    validator: (value: string) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value: string) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  rounded: {
    type: String,
    default: 'lg',
    validator: (value: string) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  border: Boolean,
  hover: Boolean,
  divided: Boolean
})

const bodyPadding = computed(() => {
  const paddingMap: Record<string, string> = {
    none: '',
    sm: 'p-3',
    md: 'p-4', 
    lg: 'p-6',
    xl: 'p-8'
  }
  return paddingMap[props.padding]
})

const headerPadding = computed(() => {
  const paddingMap: Record<string, string> = {
    none: '',
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
    xl: 'px-8 py-5'
  }
  return paddingMap[props.padding]
})

const footerPadding = computed(() => {
  const paddingMap: Record<string, string> = {
    none: '',
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
    xl: 'px-8 py-5'
  }
  return paddingMap[props.padding]
})
</script>