<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Form Width Fix Test</h1>
    
    <!-- Apply fix via scoped class -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">With Form Fix Class</h2>
      <div class="form-container">
        <UInput v-model="test1" placeholder="Fixed input" color="primary" variant="outline" />
        <UTextarea v-model="test2" placeholder="Fixed textarea" color="primary" variant="outline" />
        <USelect v-model="test3" :items="options" placeholder="Fixed select" color="primary" variant="outline" />
      </div>
    </section>

    <!-- Debug visibility -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Debug Boundaries</h2>
      <div class="debug-container">
        <UInput v-model="test4" placeholder="Debug input" color="primary" variant="outline" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const test1 = ref('')
const test2 = ref('')
const test3 = ref()
const test4 = ref('')

const options = ['Option 1', 'Option 2', 'Option 3']
</script>

<style scoped>
/* Force full width on form container children */
.form-container > * {
  width: 100% !important;
  display: block !important;
}

/* Debug container to see boundaries */
.debug-container {
  border: 2px solid red;
  padding: 1rem;
  background: rgba(255, 0, 0, 0.05);
}

.debug-container > * {
  width: 100% !important;
  border: 2px solid blue;
  background: rgba(0, 0, 255, 0.05);
}

/* Override Nuxt UI specific classes with higher specificity */
:deep(.relative.w-full) {
  width: 100% !important;
}

:deep([role="textbox"]),
:deep([role="combobox"]),
:deep(input),
:deep(textarea),
:deep(select) {
  width: 100% !important;
  display: block !important;
}
</style>