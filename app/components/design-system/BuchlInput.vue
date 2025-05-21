<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <UInput
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :size="inputSize"
      :color="inputColor"
      :variant="inputVariant"
      :icon="icon"
      :trailing="iconRight"
      class="w-full"
      v-bind="$attrs"
    />
    <p v-if="hint" class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ hint }}</p>
    <p v-if="error" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  disabled: Boolean,
  required: Boolean,
  error: String,
  hint: String,
  icon: String,
  iconRight: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'outline', 'none'].includes(value)
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// Map custom sizes to Nuxt UI sizes
const inputSize = computed(() => {
  const sizeMap: Record<string, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  }
  return sizeMap[props.size] || 'md'
})

// Map custom colors to Nuxt UI colors
const inputColor = computed((): 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral' => {
  // Default to primary if color is not set
  return 'primary'
})

// Map custom variants to Nuxt UI variants  
const inputVariant = computed(() => {
  const variantMap: Record<string, 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'> = {
    default: 'outline',
    outline: 'outline',
    none: 'none'
  }
  return variantMap[props.variant] || 'outline'
})
</script>