<script setup lang="ts">
// Get i18n composables
const { locale, locales, setLocale, finalizePendingLocaleChange } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

// Create a local ref for v-model
const selectedLocale = ref(locale.value)

// Watch for external locale changes
watch(locale, (newLocale) => {
    selectedLocale.value = newLocale
})

// Helper function to get flag emoji
const getLocaleFlag = (code: string): string => {
    const flags: Record<string, string> = {
        hu: '🇭🇺',
        en: '🇺🇸',
        de: '🇩🇪',
    }
    return flags[code] || '🌍'
}

// Format locales for USelect
const localeOptions = computed(() => {
    return locales.value.map((loc) => ({
        value: loc.code,
        label: `${getLocaleFlag(loc.code)} ${loc.name}`
    }))
})

// Function to switch locale
const onLocaleChange = async (newLocale: string) => {
    try {
        // Set the new locale
        await setLocale(newLocale)
        // Get the localized path and navigate
        const newPath = switchLocalePath(newLocale)
        await router.push(newPath)
        // Finalize the locale change (required when skipSettingLocaleOnNavigate is true)
        await finalizePendingLocaleChange()
    } catch (error) {
        console.error('Failed to change locale:', error)
    }
}
</script>

<template>
    <USelect
        v-model="selectedLocale"
        :items="localeOptions"
        size="md"
        color="neutral"
        variant="outline"
        @update:model-value="onLocaleChange"
    />
</template>
