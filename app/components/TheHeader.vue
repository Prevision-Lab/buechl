<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <BuchlLogo :height="48" :width="250" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.label"
            :to="item.to"
            class="text-gray-700 hover:text-buchl-blue transition-colors font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA and Language Selector -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Language Selector -->
          <UDropdown 
            :items="languageOptions"
            :ui="{ width: 'w-auto' }"
          >
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              class="min-w-[60px]"
            >
              {{ currentLanguage.label }}
              <template #trailing>
                <UIcon name="i-heroicons-chevron-down-20-solid" />
              </template>
            </UButton>
          </UDropdown>

          <!-- CTA Button -->
          <UButton
            color="primary"
            size="md"
            class="rounded-none"
            @click="navigateTo('/kapcsolat')"
          >
            Kapcsolat
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-bars-3"
            size="lg"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-200">
        <div class="container mx-auto px-4 py-4">
          <nav class="space-y-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.label"
              :to="item.to"
              class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- Mobile Language and CTA -->
          <div class="mt-6 pt-6 border-t border-gray-200 space-y-4">
            <UDropdown 
              :items="languageOptions"
              :ui="{ width: 'w-full' }"
            >
              <UButton
                color="gray"
                variant="outline"
                size="md"
                block
              >
                {{ currentLanguage.label }}
                <template #trailing>
                  <UIcon name="i-heroicons-chevron-down-20-solid" />
                </template>
              </UButton>
            </UDropdown>

            <UButton
              color="primary"
              size="md"
              block
              class="rounded-none"
              @click="navigateTo('/kapcsolat'); mobileMenuOpen = false"
            >
              Kapcsolat
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Current language (in a real app, this would be from a composable or store)
const currentLanguage = ref({ label: 'HU', value: 'hu' })

// Navigation items
const navigation = [
  { label: 'Szolgáltatások', to: '/szolgaltatasok' },
  { label: 'Rólunk', to: '/rolunk' },
  { label: 'Fenntarthatóság', to: '/fenntarthatosag' },
  { label: 'Karrier', to: '/karrier' },
  { label: 'Hírek', to: '/hirek' },
]

// Language options
const languageOptions = computed(() => [
  [{
    label: 'Magyar',
    icon: currentLanguage.value.value === 'hu' ? 'i-heroicons-check' : undefined,
    click: () => { currentLanguage.value = { label: 'HU', value: 'hu' } }
  }],
  [{
    label: 'English',
    icon: currentLanguage.value.value === 'en' ? 'i-heroicons-check' : undefined,
    click: () => { currentLanguage.value = { label: 'EN', value: 'en' } }
  }],
  [{
    label: 'Deutsch',
    icon: currentLanguage.value.value === 'de' ? 'i-heroicons-check' : undefined,
    click: () => { currentLanguage.value = { label: 'DE', value: 'de' } }
  }]
])
</script>