<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-8">UI Test</h1>
    
    <!-- Test UButton - this should work -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Button (should work)</h2>
      <UButton>Test Button</UButton>
    </div>

    <!-- Test UInput -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Input</h2>
      <UInput placeholder="Test input" />
    </div>

    <!-- Test UTextarea -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Textarea</h2>
      <UTextarea placeholder="Test textarea" />
    </div>

    <!-- Test USelect -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Select</h2>
      <USelect :items="['Item 1', 'Item 2', 'Item 3']" />
    </div>

    <!-- Test FormField -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">FormField</h2>
      <FormField label="Test Label">
        <UInput placeholder="With FormField" />
      </FormField>
    </div>

    <!-- Test UFormField -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">UFormField</h2>
      <UFormField label="Test Label">
        <UInput placeholder="With UFormField" />
      </UFormField>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>