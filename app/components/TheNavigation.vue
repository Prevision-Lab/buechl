<template>
  <nav class="bg-buchl-blue">
    <UContainer>
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <BuchlLogo variant="white" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <template v-for="item in navigation" :key="item.label">
            <div v-if="item.children" class="relative group">
              <button 
                class="text-white hover:text-buchl-green transition-colors duration-200 font-medium flex items-center"
                @click="toggleDropdown(item.label)"
              >
                {{ item.label }}
                <UIcon 
                  :name="isDropdownOpen(item.label) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" 
                  class="ml-1 w-4 h-4" 
                />
              </button>
              <!-- Dropdown -->
              <div 
                v-if="isDropdownOpen(item.label)"
                class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
              >
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.label"
                  :to="child.to"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-buchl-blue transition-colors duration-200"
                  @click="closeDropdown(item.label)"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
            <NuxtLink
              v-else
              :to="item.to"
              class="text-white hover:text-buchl-green transition-colors duration-200 font-medium"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Language Selector -->
          <div class="relative">
            <button 
              class="text-white hover:text-buchl-green transition-colors duration-200 flex items-center"
              @click="toggleLanguage"
            >
              {{ currentLanguage }}
              <UIcon name="i-lucide-globe" class="ml-1 w-4 h-4" />
            </button>
            <div 
              v-if="languageOpen"
              class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-buchl-blue transition-colors duration-200"
                @click="selectLanguage(lang)"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>

          <!-- Search Button -->
          <button 
            class="text-white hover:text-buchl-green transition-colors duration-200"
            @click="openSearch"
          >
            <UIcon name="i-lucide-search" class="w-5 h-5" />
          </button>

          <!-- Contact Button -->
          <UButton
            label="Kapcsolat"
            color="neutral"
            variant="solid"
            class="bg-buchl-green text-buchl-blue hover:bg-white hover:text-buchl-blue"
            to="/kapcsolat"
          />
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white hover:text-buchl-green transition-colors duration-200"
          @click="toggleMobileMenu"
        >
          <UIcon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-6 h-6" />
        </button>
      </div>
    </UContainer>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform -translate-x-full"
    >
      <div 
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-buchl-blue z-50 md:hidden overflow-y-auto"
      >
        <UContainer>
          <div class="flex justify-between items-center h-20">
            <NuxtLink to="/" @click="closeMobileMenu">
              <BuchlLogo variant="white" />
            </NuxtLink>
            <button
              class="text-white hover:text-buchl-green transition-colors duration-200"
              @click="toggleMobileMenu"
            >
              <UIcon name="i-lucide-x" class="w-6 h-6" />
            </button>
          </div>

          <div class="mt-8">
            <template v-for="item in navigation" :key="item.label">
              <div v-if="item.children" class="mb-4">
                <button 
                  class="text-white text-lg font-medium flex items-center justify-between w-full py-2"
                  @click="toggleMobileDropdown(item.label)"
                >
                  {{ item.label }}
                  <UIcon 
                    :name="isMobileDropdownOpen(item.label) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" 
                    class="w-5 h-5" 
                  />
                </button>
                <div 
                  v-if="isMobileDropdownOpen(item.label)"
                  class="ml-4 mt-2"
                >
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.label"
                    :to="child.to"
                    class="block text-white/80 hover:text-white py-2"
                    @click="closeMobileMenu"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </div>
              <NuxtLink
                v-else
                :to="item.to"
                class="block text-white text-lg font-medium py-2"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </template>

            <!-- Mobile Actions -->
            <div class="mt-8 border-t border-white/20 pt-8">
              <!-- Language Selector -->
              <div class="mb-4">
                <p class="text-white/60 text-sm mb-2">Nyelv</p>
                <div class="flex gap-2">
                  <button
                    v-for="lang in languages"
                    :key="lang.code"
                    :class="[
                      'px-4 py-2 rounded-md transition-colors duration-200',
                      currentLanguage === lang.code
                        ? 'bg-white text-buchl-blue'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    ]"
                    @click="selectLanguage(lang)"
                  >
                    {{ lang.code.toUpperCase() }}
                  </button>
                </div>
              </div>

              <!-- Contact Button -->
              <UButton
                label="Kapcsolat"
                color="neutral"
                variant="solid"
                class="w-full bg-buchl-green text-buchl-blue hover:bg-white hover:text-buchl-blue"
                to="/kapcsolat"
                @click="closeMobileMenu"
              />
            </div>
          </div>
        </UContainer>
      </div>
    </Transition>

    <!-- Search Modal -->
    <UModal 
      v-model="searchOpen"
      :ui="{
        container: 'flex items-start'
      }"
    >
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-4">Keresés</h3>
        <UInput
          v-model="searchQuery"
          placeholder="Keresés..."
          size="lg"
          icon="i-lucide-search"
          class="mb-4"
          @keyup.enter="performSearch"
        />
        <div class="flex justify-end gap-2">
          <UButton
            label="Mégse"
            color="neutral"
            variant="ghost"
            @click="searchOpen = false"
          />
          <UButton
            label="Keresés"
            color="primary"
            @click="performSearch"
          />
        </div>
      </div>
    </UModal>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  label: string
  to?: string
  children?: NavItem[]
}

interface Language {
  code: string
  name: string
}

// Navigation items
const navigation = ref<NavItem[]>([
  {
    label: 'Szolgáltatások',
    children: [
      { label: 'Áttekintés', to: '/oldaltervek/szolgaltatasok' },
      { label: 'Szelektív gyűjtés', to: '/szolgaltatasok/szelektiv-gyujtes' },
      { label: 'Veszélyes hulladék', to: '/szolgaltatasok/veszelyes-hulladek' },
      { label: 'Tanácsadás', to: '/szolgaltatasok/tanacsadas' }
    ]
  },
  {
    label: 'Rólunk',
    children: [
      { label: 'Cégünkről', to: '/rolunk' },
      { label: 'Történetünk', to: '/rolunk/tortenetek' },
      { label: 'Csapatunk', to: '/rolunk/csapat' },
      { label: 'Tanúsítványok', to: '/rolunk/tanusitvanyok' }
    ]
  },
  {
    label: 'Hulladékkezelés',
    to: '/oldaltervek/hulladekkezeles'
  },
  {
    label: 'Fenntarthatóság',
    to: '/oldaltervek/fenntarthatosag'
  },
  {
    label: 'Innovációk',
    to: '/oldaltervek/innovaciok'
  },
  {
    label: 'Kapcsolat',
    to: '/oldaltervek/kapcsolat'
  },
  {
    label: 'Hírek',
    to: '/hirek'
  },
  {
    label: 'Karrier',
    to: '/karrier'
  }
])

// Language options
const languages = ref<Language[]>([
  { code: 'hu', name: 'Magyar' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' }
])

// State
const mobileMenuOpen = ref(false)
const dropdownStates = ref<Record<string, boolean>>({})
const mobileDropdownStates = ref<Record<string, boolean>>({})
const languageOpen = ref(false)
const currentLanguage = ref('hu')
const searchOpen = ref(false)
const searchQuery = ref('')

// Functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const toggleDropdown = (label: string) => {
  dropdownStates.value[label] = !dropdownStates.value[label]
}

const closeDropdown = (label: string) => {
  dropdownStates.value[label] = false
}

const isDropdownOpen = (label: string) => {
  return dropdownStates.value[label] || false
}

const toggleMobileDropdown = (label: string) => {
  mobileDropdownStates.value[label] = !mobileDropdownStates.value[label]
}

const isMobileDropdownOpen = (label: string) => {
  return mobileDropdownStates.value[label] || false
}

const toggleLanguage = () => {
  languageOpen.value = !languageOpen.value
}

const selectLanguage = (lang: Language) => {
  currentLanguage.value = lang.code
  languageOpen.value = false
  // Itt implementálhatod a nyelv váltás logikát
}

const openSearch = () => {
  searchOpen.value = true
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    // Itt implementálhatod a keresés logikát
    console.log('Searching for:', searchQuery.value)
    searchOpen.value = false
    searchQuery.value = ''
  }
}

// Close dropdowns when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.group')) {
      Object.keys(dropdownStates.value).forEach(key => {
        dropdownStates.value[key] = false
      })
    }
    if (!target.closest('.relative')) {
      languageOpen.value = false
    }
  })
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>