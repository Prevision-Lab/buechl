<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Form Test - Inline Styles</h1>
    
    <!-- Test with inline styles -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test with inline styles</h2>
      <div style="width: 100%; display: block;">
        <UInput 
          v-model="test1" 
          placeholder="Full width with inline styles" 
          color="primary" 
          variant="outline" 
          style="width: 100% !important; display: block !important;"
        />
      </div>
    </section>

    <!-- Test with Tailwind important -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test with Tailwind important</h2>
      <UInput 
        v-model="test2" 
        placeholder="Full width with !w-full" 
        color="primary" 
        variant="outline" 
        class="!w-full !block"
      />
    </section>

    <!-- Test with custom CSS class -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test with custom CSS class</h2>
      <UInput 
        v-model="test3" 
        placeholder="Custom full-width class" 
        color="primary" 
        variant="outline" 
        class="form-input-full"
      />
    </section>

    <!-- Test with Aspect Ratio -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test different container approaches</h2>
      <div class="grid grid-cols-1 gap-4">
        <UInput 
          v-model="test4" 
          placeholder="In grid container" 
          color="primary" 
          variant="outline" 
          class="w-full"
        />
      </div>
    </section>

    <!-- Test block vs inline-block -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Display types</h2>
      <div class="space-y-4">
        <div class="border border-red-500 p-2">
          <UInput 
            v-model="test5" 
            placeholder="Default display" 
            color="primary" 
            variant="outline" 
            class="w-full"
          />
        </div>
        <div class="border border-green-500 p-2">
          <UInput 
            v-model="test6" 
            placeholder="Block display" 
            color="primary" 
            variant="outline" 
            class="w-full block"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const test1 = ref('')
const test2 = ref('')
const test3 = ref('')
const test4 = ref('')
const test5 = ref('')
const test6 = ref('')
</script>

<style scoped>
.form-input-full {
  width: 100% !important;
  display: block !important;
  box-sizing: border-box !important;
}
</style>