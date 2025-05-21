<template>
  <UCard class="overflow-hidden">
    <div 
      class="h-32 -mx-6 -mt-6 mb-4 flex items-center justify-center"
      :style="{ backgroundColor: hex }"
    >
      <span 
        class="text-lg font-bold"
        :style="{ color: textColor }"
      >
        {{ hex }}
      </span>
    </div>
    
    <div class="space-y-2">
      <h3 class="font-semibold text-lg">{{ name }}</h3>
      <dl class="space-y-1 text-sm">
        <div class="flex justify-between">
          <dt class="text-gray-500">HEX:</dt>
          <dd class="font-mono">{{ hex }}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="text-gray-500">RGB:</dt>
          <dd class="font-mono text-xs">{{ rgb }}</dd>
        </div>
      </dl>
      <p class="text-sm text-gray-600 dark:text-gray-300 mt-3">
        {{ usage }}
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  name: string
  hex: string
  rgb: string
  usage: string
  bgClass: string
  textClass: string
}

const props = defineProps<Props>()

// Számítsuk ki a szöveg színét
const textColor = computed(() => {
  if (props.textClass === 'text-white') return '#FFFFFF'
  if (props.textClass === 'text-black') return '#000000'
  return '#333333'
})
</script>