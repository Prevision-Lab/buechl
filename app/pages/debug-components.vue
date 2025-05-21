<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Debug Components</h1>
    
    <!-- Test different component variations -->
    <div class="space-y-8">
      <!-- Test 1: Basic UInput without wrapper -->
      <div>
        <h2 class="text-xl font-bold mb-4">Test 1: Basic UInput</h2>
        <UInput v-model="testInput" placeholder="Test input" />
        <p>Value: {{ testInput }}</p>
      </div>

      <!-- Test 2: UInput with label -->
      <div>
        <h2 class="text-xl font-bold mb-4">Test 2: UInput with label</h2>
        <label class="block text-sm font-medium mb-1">
          Email
        </label>
        <UInput v-model="testEmail" type="email" placeholder="email@example.com" />
      </div>

      <!-- Test 3: Try FormField (without U prefix) -->
      <div>
        <h2 class="text-xl font-bold mb-4">Test 3: FormField component</h2>
        <FormField label="Name">
          <UInput v-model="testName" placeholder="Enter name" />
        </FormField>
      </div>

      <!-- Test 4: UForm with UInput -->
      <div>
        <h2 class="text-xl font-bold mb-4">Test 4: UForm with UInput</h2>
        <UForm>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Username</label>
              <UInput v-model="testUsername" placeholder="Username" />
            </div>
          </div>
        </UForm>
      </div>

      <!-- Test 5: Component list -->
      <div>
        <h2 class="text-xl font-bold mb-4">Available Components</h2>
        <ul class="list-disc list-inside">
          <li v-for="comp in components" :key="comp">{{ comp }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testInput = ref('')
const testEmail = ref('')
const testName = ref('')
const testUsername = ref('')

// Try to list available components
const components = ref([
  'UInput - exists',
  'UButton - exists',
  'UCard - exists',
  'UTextarea - testing...',
  'USelect - testing...',
  'UCheckbox - testing...',
  'USwitch - testing...',
  'UFormField - testing...',
  'FormField - testing...',
])
</script>