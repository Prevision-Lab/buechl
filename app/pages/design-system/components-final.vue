<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">BÜCHL Komponensek</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        A BÜCHL Design System komponens könyvtára - Nuxt UI Pro alapokon
      </p>
    </div>

    <!-- Navigation -->
    <div class="mb-12">
      <nav class="flex flex-wrap gap-2">
        <UButton 
          v-for="section in sections" 
          :key="section.id"
          :to="`#${section.id}`"
          variant="subtle"
          color="primary"
          size="sm"
        >
          {{ section.title }}
        </UButton>
      </nav>
    </div>

    <!-- Form Inputs Section -->
    <section id="forms" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Űrlap elemek</h2>
      
      <!-- Text Inputs -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beviteli mezők</h3>
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <div class="grid gap-4">
            <UInput v-model="text1" placeholder="Alapértelmezett beviteli mező" />
            <UInput v-model="email" type="email" placeholder="Email cím" icon="i-lucide-mail" />
            <UInput v-model="password" type="password" placeholder="Jelszó" icon="i-lucide-lock" />
          </div>
        </div>
      </div>

      <!-- Textarea -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Szövegterület</h3>
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <div class="grid gap-4">
            <UTextarea v-model="message" placeholder="Írja ide az üzenetét..." :rows="4" />
          </div>
        </div>
      </div>

      <!-- Select -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Legördülő menük</h3>
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <div class="grid gap-4">
            <USelect v-model="selectedCity" :options="cities" placeholder="Válasszon várost" />
          </div>
        </div>
      </div>

      <!-- Form Groups -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form csoportok</h3>
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <form class="grid gap-6">
            <UFormField label="Név" name="name" required>
              <UInput v-model="name" placeholder="Teljes név" />
            </UFormField>

            <UFormField label="Email" name="email" required>
              <UInput v-model="email2" type="email" placeholder="email@example.com" />
            </UFormField>

            <UFormField label="Üzenet" name="message">
              <UTextarea v-model="message2" placeholder="Írja ide üzenetét..." :rows="3" />
            </UFormField>
          </form>
        </div>
      </div>
    </section>

    <!-- Buttons Section -->
    <section id="buttons" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Gombok</h2>
      
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">BÜCHL Márka gombok</h3>
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <div class="flex flex-wrap gap-3">
            <UButton 
              label="Stellenangebote"
              icon="i-heroicons-arrow-right"
              :trailing="true"
              color="sapphire"
            />
            <UButton 
              label="Nachhaltigkeit"
              icon="i-heroicons-arrow-right"
              :trailing="true"
              color="buchl"
              class="text-buchl-blue"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Navigation sections
const sections = [
  { id: 'forms', title: 'Űrlap elemek' },
  { id: 'buttons', title: 'Gombok' }
]

// Form state
const text1 = ref('')
const email = ref('')
const email2 = ref('')
const password = ref('')
const name = ref('')
const message = ref('')
const message2 = ref('')
const selectedCity = ref('')

const cities = ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr']
</script>

<style scoped>
/* Ensure form elements take full width within grid */
:deep(.grid) {
  width: 100%;
}

/* Force full width on all form elements */
:deep(input),
:deep(textarea),
:deep(select) {
  width: 100% !important;
}
</style>