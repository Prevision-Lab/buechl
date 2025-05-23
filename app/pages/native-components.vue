<template>
  <div class="max-w-7xl mx-auto p-8">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-12">Native HTML Components</h1>
    
    <div class="space-y-8">
      <!-- Basic Input -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Native Input</h2>
        <input 
          v-model="inputValue" 
          type="text"
          placeholder="Enter text..."
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sapphire-500 focus:ring-sapphire-500"
        >
        <p class="mt-2">Value: {{ inputValue }}</p>
      </div>

      <!-- Textarea -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Native Textarea</h2>
        <textarea 
          v-model="textValue" 
          placeholder="Enter long text..."
          rows="4"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sapphire-500 focus:ring-sapphire-500"
        />
        <p class="mt-2">Value: {{ textValue }}</p>
      </div>

      <!-- Select -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Native Select</h2>
        <select 
          v-model="selectValue"
          class="block w-64 rounded-md border-gray-300 shadow-sm focus:border-sapphire-500 focus:ring-sapphire-500"
        >
          <option value="">Choose...</option>
          <option value="budapest">Budapest</option>
          <option value="debrecen">Debrecen</option>
          <option value="szeged">Szeged</option>
          <option value="miskolc">Miskolc</option>
          <option value="pecs">Pécs</option>
        </select>
        <p class="mt-2">Selected: {{ selectValue }}</p>
      </div>

      <!-- Checkbox -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Native Checkbox</h2>
        <div class="flex items-center">
          <input 
            id="checkbox1"
            v-model="checkboxValue" 
            type="checkbox"
            class="h-4 w-4 text-sapphire-600 focus:ring-sapphire-500 border-gray-300 rounded"
          >
          <label for="checkbox1" class="ml-2">
            Check me
          </label>
        </div>
        <p class="mt-2">Checked: {{ checkboxValue }}</p>
      </div>

      <!-- Radio -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Native Radio</h2>
        <div class="space-y-2">
          <div class="flex items-center">
            <input 
              id="radio1"
              v-model="radioValue" 
              type="radio"
              value="option1"
              class="h-4 w-4 text-sapphire-600 focus:ring-sapphire-500 border-gray-300"
            >
            <label for="radio1" class="ml-2">Option 1</label>
          </div>
          <div class="flex items-center">
            <input 
              id="radio2"
              v-model="radioValue" 
              type="radio"
              value="option2"
              class="h-4 w-4 text-sapphire-600 focus:ring-sapphire-500 border-gray-300"
            >
            <label for="radio2" class="ml-2">Option 2</label>
          </div>
          <div class="flex items-center">
            <input 
              id="radio3"
              v-model="radioValue" 
              type="radio"
              value="option3"
              class="h-4 w-4 text-sapphire-600 focus:ring-sapphire-500 border-gray-300"
            >
            <label for="radio3" class="ml-2">Option 3</label>
          </div>
        </div>
        <p class="mt-2">Selected: {{ radioValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputValue = ref('')
const textValue = ref('')
const selectValue = ref('')
const checkboxValue = ref(false)
const radioValue = ref('option1')
</script>