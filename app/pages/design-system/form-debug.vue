<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Form Debug</h1>
    
    <!-- Test 1: No wrapper -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 1: No wrapper</h2>
      <UInput v-model="test1" placeholder="No wrapper" color="primary" variant="outline" class="w-full" />
    </section>

    <!-- Test 2: In flex container -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 2: In flex container</h2>
      <div class="flex">
        <UInput v-model="test2" placeholder="In flex" color="primary" variant="outline" class="w-full" />
      </div>
    </section>

    <!-- Test 3: In grid container -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 3: In grid container</h2>
      <div class="grid">
        <UInput v-model="test3" placeholder="In grid" color="primary" variant="outline" class="w-full" />
      </div>
    </section>

    <!-- Test 4: In container with max width -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 4: In max-w-md container</h2>
      <div class="max-w-md">
        <UInput v-model="test4" placeholder="In max-w-md" color="primary" variant="outline" class="w-full" />
      </div>
    </section>

    <!-- Test 5: With explicit width styles -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 5: With explicit styles</h2>
      <UInput v-model="test5" placeholder="Explicit width" color="primary" variant="outline" class="w-full" style="width: 100%;" />
    </section>

    <!-- Test 6: Native input for comparison -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 6: Native input</h2>
      <input v-model="test6" placeholder="Native input" class="w-full p-2 border rounded" />
    </section>

    <!-- Test 7: Parent element inspection -->
    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Test 7: Parent structure</h2>
      <div class="bg-gray-100 p-4">
        <div class="bg-gray-200 p-4">
          <div class="bg-gray-300 p-4">
            <UInput v-model="test7" placeholder="Nested containers" color="primary" variant="outline" class="w-full" />
          </div>
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
const test7 = ref('')
</script>