<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Fixed Component Test Page</h1>
    
    <div class="space-y-8">
      <!-- Test UFormField with UInput -->
      <div>
        <h2 class="text-xl font-bold mb-4">Form Field Test</h2>
        <UFormField label="Test Input" required>
          <UInput placeholder="Enter text" />
        </UFormField>
      </div>
      
      <!-- Another Form Field example with description and help -->
      <div>
        <h2 class="text-xl font-bold mb-4">Form Field with Description</h2>
        <UFormField 
          label="Email Address" 
          description="Enter your primary email address"
          help="We'll never share your email with anyone else."
        >
          <UInput type="email" placeholder="email@example.com" />
        </UFormField>
      </div>

      <!-- Test UTextarea -->
      <div>
        <h2 class="text-xl font-bold mb-4">Textarea Test</h2>
        <UFormField label="Message">
          <UTextarea v-model="textareaValue" placeholder="Enter long text" rows="4" />
        </UFormField>
        <p class="mt-2">Value: {{ textareaValue }}</p>
      </div>

      <!-- Test USelect -->
      <div>
        <h2 class="text-xl font-bold mb-4">Select Test</h2>
        <UFormField label="Select Option">
          <USelect 
            v-model="selectValue" 
            :items="selectOptions"
            placeholder="Choose an option"
          />
        </UFormField>
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
        <div class="flex items-center space-x-2">
          <USwitch v-model="switchValue" />
          <span>Enable feature</span>
        </div>
        <p class="mt-2">Enabled: {{ switchValue }}</p>
      </div>

      <!-- Test URadioGroup -->
      <div>
        <h2 class="text-xl font-bold mb-4">Radio Group Test</h2>
        <URadioGroup 
          v-model="radioValue" 
          :items="radioOptions"
        />
        <p class="mt-2">Selected: {{ radioValue }}</p>
      </div>
      
      <!-- Test Buttons -->
      <div>
        <h2 class="text-xl font-bold mb-4">Button Tests</h2>
        <div class="flex items-center space-x-4">
          <UButton>Default</UButton>
          <UButton variant="outline">Outline</UButton>
          <UButton variant="text">Text Only</UButton>
          <UButton variant="solid" color="success">Success</UButton>
          <UButton variant="soft" color="error">Error</UButton>
          <UButton loading>Loading</UButton>
        </div>
      </div>

      <!-- Test Card -->
      <div>
        <h2 class="text-xl font-bold mb-4">Card Test</h2>
        <UCard>
          <h3 class="text-lg font-semibold">Card Title</h3>
          <p>This is a card with content inside.</p>
        </UCard>
      </div>

      <!-- Test Alert -->
      <div>
        <h2 class="text-xl font-bold mb-4">Alert Test</h2>
        <div class="space-y-4">
          <UAlert title="Information" description="This is an info alert." />
          <UAlert color="success" title="Success!" description="Operation completed successfully." />
          <UAlert color="warning" title="Warning" description="Please check your input." />
          <UAlert color="error" title="Error" description="Something went wrong." />
        </div>
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

// For the select component, we need items with proper structure
const selectOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]

// Radio options
const radioOptions = [
  { label: 'Radio Option 1', value: 'radio1' },
  { label: 'Radio Option 2', value: 'radio2' },
  { label: 'Radio Option 3', value: 'radio3' }
]
</script>