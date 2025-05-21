<template>
  <div class="relative group">
    <pre class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700 text-sm">
      <code :class="`language-${language}`">{{ code }}</code>
    </pre>
    <button 
      @click="copyCode"
      class="absolute top-2 right-2 p-2 bg-gray-700 dark:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
      :title="copied ? 'Másolva!' : 'Kód másolása'"
    >
      <Icon :name="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard-document'" class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  code: string
  language?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript'
})

const copied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>