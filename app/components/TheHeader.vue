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
          <NuxtLinkLocale to="/szolgaltatasok" class="text-gray-700 hover:text-buchl-blue transition-colors font-medium">
            {{ $t('nav.services') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/rolunk" class="text-gray-700 hover:text-buchl-blue transition-colors font-medium">
            {{ $t('nav.about') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/fenntarthatosag" class="text-gray-700 hover:text-buchl-blue transition-colors font-medium">
            {{ $t('nav.sustainability') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/tanusitvanyok" class="text-gray-700 hover:text-buchl-blue transition-colors font-medium">
            {{ $t('nav.downloads') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/karrier" class="text-gray-700 hover:text-buchl-blue transition-colors font-medium">
            {{ $t('nav.careers') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/hirek" class="text-gray-700 hover:text-buchl-blue transition-colors font-medium">
            {{ $t('nav.news') }}
          </NuxtLinkLocale>
        </nav>

        <!-- CTA and Language Selector -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Language Selector -->
          <LocaleSwitcher class="w-48" />

          <!-- CTA Button -->
          <UButton
            color="primary"
            size="md"
            class="rounded-none"
            @click="$router.push(localePath('/kapcsolat'))"
          >
            {{$t('nav.contact')}}
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
            <NuxtLinkLocale to="/szolgaltatasok" class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium" @click="mobileMenuOpen = false">
              {{ $t('nav.services') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/rolunk" class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium" @click="mobileMenuOpen = false">
              {{ $t('nav.about') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/fenntarthatosag" class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium" @click="mobileMenuOpen = false">
              {{ $t('nav.sustainability') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/tanusitvanyok" class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium" @click="mobileMenuOpen = false">
              {{ $t('nav.downloads') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/karrier" class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium" @click="mobileMenuOpen = false">
              {{ $t('nav.careers') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/hirek" class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium" @click="mobileMenuOpen = false">
              {{ $t('nav.news') }}
            </NuxtLinkLocale>
          </nav>

          <!-- Mobile Language and CTA -->
          <div class="mt-6 pt-6 border-t border-gray-200 space-y-4">
            <LocaleSwitcher />

            <UButton
              color="primary"
              size="md"
              block
              class="rounded-none"
              @click="$router.push(localePath('/kapcsolat')); mobileMenuOpen = false"
            >
              {{$t('nav.contact')}}
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// Mobile menu state
const mobileMenuOpen = ref(false)
</script>
