<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-8">Form Test</h1>
    
    <!-- Simple Input Test -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Egyszerű Input teszt</h2>
      <UInput 
        placeholder="Test input" 
        color="primary" 
        variant="outline"
      />
    </div>

    <!-- Input with width -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Input full width</h2>
      <UInput 
        placeholder="Full width input" 
        color="primary" 
        variant="outline"
        class="w-full"
      />
    </div>

    <!-- Input in container -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Input container-ben</h2>
      <div class="bg-gray-100 p-4">
        <UInput 
          placeholder="Container input" 
          color="primary" 
          variant="outline"
          class="w-full"
        />
      </div>
    </div>

    <!-- Textarea Test -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Textarea teszt</h2>
      <UTextarea 
        placeholder="Test textarea" 
        color="primary" 
        variant="outline"
        :rows="4"
        class="w-full"
      />
    </div>

    <!-- Select Test -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Select teszt</h2>
      <USelect 
        :items="['Option 1', 'Option 2', 'Option 3']" 
        placeholder="Choose option"
        color="primary" 
        variant="outline"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Test page for form components
</script>