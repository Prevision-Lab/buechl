<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Component Test Page</h1>
    
    <div class="space-y-8">
      <!-- Test UFormField with UInput -->
      <div>
        <h2 class="text-xl font-bold mb-4">Form Field Test</h2>
        <UFormField label="Test Input" required>
          <UInput placeholder="Enter text" />
        </UFormField>
      </div>

      <!-- Test UTextarea -->
      <div>
        <h2 class="text-xl font-bold mb-4">Textarea Test</h2>
        <UTextarea v-model="textareaValue" placeholder="Enter long text" :rows="4" />
        <p class="mt-2">Value: {{ textareaValue }}</p>
      </div>

      <!-- Test USelect -->
      <div>
        <h2 class="text-xl font-bold mb-4">Select Test</h2>
        <USelect 
          v-model="selectValue" 
          :options="['Option 1', 'Option 2', 'Option 3']" 
          placeholder="Choose an option"
        />
        <p class="mt-2">Selected: {{ selectValue }}</p>
      </div>

      <!-- Test UCheckbox -->
      <div>
        <h2 class="text-xl font-bold mb-4">Checkbox Test</h2>
        <UCheckbox v-model="checkboxValue" label="Check me" />
        <p class="mt-2">Checked: {{ checkboxValue }}</p>
      </div>

      <!-- Test USwitch -->
      <div>
        <h2 class="text-xl font-bold mb-4">Switch Test</h2>
        <USwitch v-model="switchValue" />
        <p class="mt-2">Enabled: {{ switchValue }}</p>
      </div>

      <!-- Test URadioGroup -->
      <div>
        <h2 class="text-xl font-bold mb-4">Radio Group Test</h2>
        <URadioGroup 
          v-model="radioValue" 
          :options="[
            { value: 'radio1', label: 'Radio Option 1' },
            { value: 'radio2', label: 'Radio Option 2' },
            { value: 'radio3', label: 'Radio Option 3' }
          ]"
        />
        <p class="mt-2">Selected: {{ radioValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const textareaValue = ref('')
const selectValue = ref('')
const checkboxValue = ref(false)
const switchValue = ref(false)
const radioValue = ref('radio1')
</script>