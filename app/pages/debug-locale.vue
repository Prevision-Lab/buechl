<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold">LocaleSwitcher Debug Page</h1>
      
      <!-- Current State -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Current State</h2>
        <div class="space-y-2">
          <p><strong>Current Locale:</strong> {{ locale }}</p>
          <p><strong>Available Locales:</strong> {{ JSON.stringify(locales, null, 2) }}</p>
        </div>
      </div>

      <!-- LocaleSwitcher Component Test -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">LocaleSwitcher Component</h2>
        <div class="border-2 border-blue-500 p-4 inline-block">
          <LocaleSwitcher />
        </div>
      </div>

      <!-- Manual USelect Test -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Manual USelect Test</h2>
        <div class="space-y-4">
          <div>
            <label class="block mb-2 font-medium">Test Select:</label>
            <USelect
              v-model="testValue"
              :items="testOptions"
              size="md"
              color="neutral"
              variant="outline"
            />
            <p class="mt-2 text-sm text-gray-600">Selected: {{ testValue }}</p>
          </div>
        </div>
      </div>

      <!-- Manual Locale Select Test -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Manual Locale Select Test</h2>
        <div class="space-y-4">
          <div>
            <label class="block mb-2 font-medium">Locale Select:</label>
            <USelect
              v-model="manualLocale"
              :items="manualLocaleOptions"
              size="md"
              color="neutral"
              variant="outline"
              @update:model-value="onManualLocaleChange"
            />
            <p class="mt-2 text-sm text-gray-600">Selected: {{ manualLocale }}</p>
          </div>
        </div>
      </div>

      <!-- Raw Button Test -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Raw Button Locale Switcher</h2>
        <div class="flex gap-2">
          <button
            v-for="loc in locales"
            :key="loc.code"
            @click="switchToLocale(loc.code)"
            :class="[
              'px-4 py-2 rounded border',
              locale === loc.code 
                ? 'bg-blue-500 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            ]"
          >
            {{ getLocaleFlag(loc.code) }} {{ loc.name }}
          </button>
        </div>
      </div>

      <!-- Console Log Test -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Console Tests</h2>
        <button 
          @click="logEverything"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Log Everything to Console
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

// Test data
const testValue = ref('option1')
const testOptions = [
  { value: 'option1', label: '🇭🇺 Option 1' },
  { value: 'option2', label: '🇺🇸 Option 2' },
  { value: 'option3', label: '🇩🇪 Option 3' }
]

// Manual locale test
const manualLocale = ref(locale.value)

const getLocaleFlag = (code: string): string => {
  const flags: Record<string, string> = {
    hu: '🇭🇺',
    en: '🇺🇸',
    de: '🇩🇪',
  }
  return flags[code] || '🌍'
}

const manualLocaleOptions = computed(() => {
  return locales.value.map((loc) => ({
    value: loc.code,
    label: `${getLocaleFlag(loc.code)} ${loc.name}`
  }))
})

const onManualLocaleChange = async (newLocale: string) => {
  console.log('Manual locale change to:', newLocale)
  try {
    const newPath = switchLocalePath(newLocale)
    console.log('Switching to path:', newPath)
    await router.push(newPath)
  } catch (error) {
    console.error('Failed to change locale:', error)
  }
}

const switchToLocale = async (newLocale: string) => {
  console.log('Button click - switching to:', newLocale)
  try {
    const newPath = switchLocalePath(newLocale)
    console.log('New path:', newPath)
    await router.push(newPath)
  } catch (error) {
    console.error('Error:', error)
  }
}

const logEverything = () => {
  console.log('=== LOCALE DEBUG INFO ===')
  console.log('Current locale:', locale.value)
  console.log('Available locales:', locales.value)
  console.log('Manual locale options:', manualLocaleOptions.value)
  console.log('switchLocalePath function:', switchLocalePath)
  console.log('Current route:', router.currentRoute.value)
  console.log('========================')
}

// Log on mount
onMounted(() => {
  console.log('Debug page mounted')
  logEverything()
})
</script>
