<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <h1 class="text-4xl font-bold text-sapphire-500 mb-8">{{ title }}</h1>
</template>
