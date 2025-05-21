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
            v-for="item in currentNavigation" 
            :key="item.label"
            :to="item.to"
            class="text-gray-700 hover:text-buchl-blue transition-colors font-medium"
            :class="{ 'text-buchl-blue': isActive(item.to) }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA and Back -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Context Info -->
          <UBadge
            :color="sectionColor"
            variant="soft"
            size="md"
            class="min-w-[60px]"
          >
            {{ currentSection }}
          </UBadge>

          <!-- Back Button (if not on home) -->
          <NuxtLink v-if="currentSection !== 'Kezdőlap'" to="/">
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-home"
            >
              Vissza a főoldalra
            </UButton>
          </NuxtLink>
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
              v-for="item in currentNavigation"
              :key="item.label"
              :to="item.to"
              class="block py-2 text-gray-700 hover:text-buchl-blue transition-colors font-medium"
              :class="{ 'text-buchl-blue': isActive(item.to) }"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- Context Info and Home Mobile -->
          <div class="mt-6 pt-6 border-t border-gray-200 space-y-4">
            <UBadge
              :color="sectionColor"
              variant="soft"
              size="lg"
              class="block"
            >
              {{ currentSection }}
            </UBadge>

            <!-- Back to Home Button -->
            <NuxtLink v-if="currentSection !== 'Kezdőlap'" to="/">
              <UButton
                color="gray"
                variant="ghost"
                size="md"
                icon="i-heroicons-home"
                block
                @click="mobileMenuOpen = false"
              >
                Vissza a főoldalra
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Design System navigation items
const designSystemNavigation = [
  { label: 'Áttekintés', to: '/design-system' },
  { label: 'Színek', to: '/design-system/colors' },
  { label: 'Tipográfia', to: '/design-system/typography' },
  { label: 'Layout', to: '/design-system/layout' },
  { label: 'Komponensek', to: '/design-system/components' },
  { label: 'Kártyák', to: '/design-system/cards' },
  { label: 'Űrlapok', to: '/design-system/forms' },
  { label: 'Táblázatok', to: '/design-system/tables' },
]

// Oldaltervek navigation items
const oldaltervekNavigation = [
  { label: 'Áttekintés', to: '/oldaltervek' },
  { label: 'Tartalmi terv', to: '/oldaltervek/tartalmiterv' },
  { label: 'Főoldal', to: '/oldaltervek/fooldal' },
  { label: 'Szolgáltatások', to: '/oldaltervek/szolgaltatasok' },
  { label: 'Rólunk', to: '/oldaltervek/rolunk' },
]

// Home navigation
const homeNavigation = [
  { label: 'Design System', to: '/design-system' },
  { label: 'Oldaltervek', to: '/oldaltervek' },
]

// Getting the current route to determine context
const route = useRoute()

// Determine current section based on route
const currentSection = computed(() => {
  if (route.path === '/') return 'Kezdőlap'
  if (route.path.startsWith('/design-system')) return 'Design System'
  if (route.path.startsWith('/oldaltervek')) return 'Oldaltervek'
  return 'Egyéb'
})

// Style based on section
const sectionColor = computed(() => {
  switch(currentSection.value) {
    case 'Design System': return 'primary'
    case 'Oldaltervek': return 'secondary'
    default: return 'gray'
  }
})

// Get correct navigation based on current section
const currentNavigation = computed(() => {
  switch(currentSection.value) {
    case 'Design System': return designSystemNavigation
    case 'Oldaltervek': return oldaltervekNavigation
    default: return homeNavigation
  }
})

// Check if a route is active (for styling)
function isActive(path: string) {
  if (path === '/design-system' && route.path === '/design-system') return true
  if (path === '/oldaltervek' && route.path === '/oldaltervek') return true
  return route.path.startsWith(path) && path !== '/' && path !== '/design-system' && path !== '/oldaltervek'
}
</script>