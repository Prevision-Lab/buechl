<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">BÜCHL Komponensek - Clean</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Form komponensek tiszta implementációval
      </p>
    </div>

    <!-- Form Inputs Section -->
    <section id="forms" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Űrlap elemek</h2>
      
      <!-- Direct Implementation -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Direct - No Wrappers</h3>
        <div class="space-y-4">
          <UInput v-model="text1" placeholder="Direct input" color="primary" variant="outline" />
          <UTextarea v-model="message1" placeholder="Direct textarea" color="primary" variant="outline" />
          <USelect v-model="selected1" :items="cities" placeholder="Direct select" color="primary" variant="outline" />
        </div>
      </div>

      <!-- With Single Container -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Single Container</h3>
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-4">
          <UInput v-model="text2" placeholder="Input in container" color="primary" variant="outline" />
          <UTextarea v-model="message2" placeholder="Textarea in container" color="primary" variant="outline" />
          <USelect v-model="selected2" :items="cities" placeholder="Select in container" color="primary" variant="outline" />
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Grid Layout</h3>
        <div class="grid gap-4">
          <UInput v-model="text3" placeholder="Input in grid" color="primary" variant="outline" />
          <UTextarea v-model="message3" placeholder="Textarea in grid" color="primary" variant="outline" />
          <USelect v-model="selected3" :items="cities" placeholder="Select in grid" color="primary" variant="outline" />
        </div>
      </div>

      <!-- Flex Layout -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Flex Layout</h3>
        <div class="flex flex-col gap-4">
          <UInput v-model="text4" placeholder="Input in flex" color="primary" variant="outline" />
          <UTextarea v-model="message4" placeholder="Textarea in flex" color="primary" variant="outline" />
          <USelect v-model="selected4" :items="cities" placeholder="Select in flex" color="primary" variant="outline" />
        </div>
      </div>

      <!-- Form Fields -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form Fields</h3>
        <div class="space-y-6">
          <UFormField label="Name" name="name">
            <UInput v-model="name" placeholder="Full name" color="primary" variant="outline" />
          </UFormField>
          
          <UFormField label="Email" name="email">
            <UInput v-model="email" type="email" placeholder="Email address" color="primary" variant="outline" />
          </UFormField>
          
          <UFormField label="Message" name="message">
            <UTextarea v-model="message" placeholder="Your message" :rows="4" color="primary" variant="outline" />
          </UFormField>
          
          <UFormField label="City" name="city">
            <USelect v-model="selectedCity" :items="cities" placeholder="Select city" color="primary" variant="outline" />
          </UFormField>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
const text4 = ref('')
const message1 = ref('')
const message2 = ref('')
const message3 = ref('')
const message4 = ref('')
const selected1 = ref()
const selected2 = ref()
const selected3 = ref()
const selected4 = ref()
const name = ref('')
const email = ref('')
const message = ref('')
const selectedCity = ref()

const cities = ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr']
</script>