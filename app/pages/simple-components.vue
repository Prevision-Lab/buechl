<template>
  <div class="max-w-7xl mx-auto p-8">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-12">Simple Components Test</h1>
    
    <div class="space-y-8">
      <!-- Test basic components -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Basic UInput</h2>
        <UInput v-model="inputValue" placeholder="Enter text..." />
        <p class="mt-2">Value: {{ inputValue }}</p>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Basic UButton</h2>
        <div class="flex gap-4">
          <UButton color="primary">Primary</UButton>
          <UButton variant="outline">Outline</UButton>
          <UButton variant="soft">Soft</UButton>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Basic UTextarea</h2>
        <UTextarea v-model="textValue" placeholder="Enter long text..." :rows="4" />
        <p class="mt-2">Value: {{ textValue }}</p>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Basic USelect</h2>
        <USelect 
          v-model="selectValue" 
          :items="selectItems"
          placeholder="Choose..."
          class="w-64"
        />
        <p class="mt-2">Selected: {{ selectValue }}</p>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Basic USwitch</h2>
        <USwitch v-model="switchValue" />
        <p class="mt-2">Enabled: {{ switchValue }}</p>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Basic URadioGroup</h2>
        <URadioGroup 
          v-model="radioValue" 
          :items="radioItems"
        />
        <p class="mt-2">Selected: {{ radioValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputValue = ref('')
const textValue = ref('')
const selectValue = ref('')
const switchValue = ref(false)
const radioValue = ref('option1')

const selectItems = [
  'Budapest',
  'Debrecen',
  'Szeged',
  'Miskolc',
  'Pécs'
]

const radioItems = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]
</script>