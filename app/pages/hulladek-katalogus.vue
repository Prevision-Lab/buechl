<template>
    <div>
        <!-- Hero szekció -->
        <div class="bg-buchl-blue text-white py-16">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h1 class="text-4xl font-bold mb-4">Hulladékkatalógus</h1>
                <p class="text-xl text-blue-100 mb-6">Keresés az engedélyezett hulladéktípusaink között</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                    <div class="flex-1">
                        <UInput
                            v-model="globalSearchQuery"
                            placeholder="Keresés minden telephelyen..."
                            icon="i-heroicons-magnifying-glass"
                            size="lg"
                            variant="outline"
                            class="w-full"
                            color="white"
                            @input="handleGlobalSearch"
                        />
                    </div>
                    <UButton
                        @click="clearAllSearch"
                        variant="outline"
                        color="white"
                        size="lg"
                        icon="i-heroicons-x-mark"
                        class="shrink-0"
                    >
                        Törlés
                    </UButton>
                </div>
            </div>
        </div>

        <!-- Tabos felület -->
        <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-8">
                    <h2 class="text-2xl font-bold text-buchl-blue mb-4">
                        Telephelyek és engedélyek szerint
                    </h2>
                    <p class="text-gray-600">
                        Válasszon telephelyet az engedélyezett hulladéktípusok megtekintéséhez
                    </p>
                </div>

                <!-- Tabos navigáció -->
                <div class="mb-8">
                    <UTabs v-model="activeTab" :items="tabItems" class="w-full" />
                </div>

                <!-- Tab tartalmak -->
                <div class="mt-8">
                    <!-- Helyi keresés az aktív tabon belül -->
                    <div class="mb-6 max-w-xl mx-auto">
                        <UInput
                            v-model="localSearchQuery"
                            :placeholder="`Keresés a ${getCurrentTabName()} telephelyen...`"
                            icon="i-heroicons-magnifying-glass"
                            size="md"
                            variant="outline"
                            class="w-full"
                            color="primary"
                            @input="handleLocalSearch"
                        />
                    </div>

                    <!-- Találatok számláló -->
                    <div class="text-center mb-6">
                        <p class="text-gray-600">
                            <span class="font-semibold">{{ getCurrentFilteredWastes().length }}</span> 
                            találat {{ getCurrentTabWastes().length }} hulladéktípusból
                            <span v-if="localSearchQuery || globalSearchQuery" class="text-buchl-blue">
                                - {{ getCurrentTabName() }} telephely
                            </span>
                        </p>
                    </div>

                    <!-- Eredmény lista -->
                    <div v-if="getCurrentFilteredWastes().length > 0" class="space-y-4">
                        <div
                            v-for="(waste, index) in getCurrentFilteredWastes()"
                            :key="`${waste.location}-${waste.waste_code}`"
                            class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div class="flex flex-col lg:flex-row lg:items-center gap-4">
                                <!-- Hulladék kód -->
                                <div class="flex-shrink-0">
                                    <div class="bg-buchl-blue text-white px-4 py-2 rounded-lg text-center">
                                        <div class="font-mono text-lg font-bold">
                                            {{ waste.waste_code }}
                                        </div>
                                    </div>
                                </div>

                                <!-- Hulladék megnevezés -->
                                <div class="flex-grow">
                                    <h3 class="font-semibold text-lg text-gray-900 mb-2">
                                        {{ formatWasteName(waste.waste_name) }}
                                    </h3>
                                    <div class="flex flex-wrap gap-2 mb-2">
                                        <!-- Telephelyi információ -->
                                        <UBadge
                                            color="blue"
                                            variant="subtle"
                                            :label="waste.location_short"
                                        />
                                        <!-- Kategória badge -->
                                        <UBadge
                                            :color="getCategoryColor(waste.waste_code)"
                                            variant="subtle"
                                            :label="getCategory(waste.waste_code)"
                                        />
                                        <!-- Anyagtípus badge -->
                                        <UBadge
                                            v-if="getMaterialType(waste.waste_name)"
                                            color="gray"
                                            variant="subtle"
                                            :label="getMaterialType(waste.waste_name)"
                                        />
                                        <!-- Veszélyes jelzés -->
                                        <UBadge
                                            v-if="waste.waste_code.includes('*')"
                                            color="red"
                                            variant="subtle"
                                            label="Veszélyes"
                                        />
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        <strong>Telephely:</strong> {{ waste.location }}<br>
                                        <strong>KTJ:</strong> {{ waste.ktj }}<br>
                                        <strong>Engedély:</strong> {{ waste.permit }}
                                    </div>
                                </div>

                                <!-- Akciók -->
                                <div class="flex-shrink-0">
                                    <div class="flex gap-2">
                                        <UButton
                                            variant="ghost"
                                            color="primary"
                                            icon="i-heroicons-clipboard-document-list"
                                            @click="showDetails(waste)"
                                        >
                                            Részletek
                                        </UButton>
                                        <UButton
                                            variant="ghost"
                                            color="green"
                                            icon="i-heroicons-envelope"
                                            to="/kapcsolat"
                                        >
                                            Ajánlat
                                        </UButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Nincs találat -->
                    <div v-else class="text-center py-12">
                        <UIcon name="i-heroicons-magnifying-glass" class="text-gray-400 text-6xl mx-auto mb-4" />
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">
                            Nincs találat
                        </h3>
                        <p class="text-gray-600 max-w-md mx-auto">
                            <span v-if="localSearchQuery || globalSearchQuery">
                                A keresési feltételeknek megfelelő hulladéktípust nem találtunk a {{ getCurrentTabName() }} telephelyen.
                            </span>
                            <span v-else>
                                Nincsenek elérhető hulladéktípusok ezen a telephelyen.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Részletek modal -->
        <UModal v-model:open="showDetailsModal" title="Hulladék részletei">
            <template #body>
                <div v-if="selectedWaste" class="space-y-6">
                    <!-- Kód és megnevezés -->
                    <div>
                        <div class="bg-buchl-blue text-white px-4 py-3 rounded-lg mb-4 text-center">
                            <div class="font-mono text-2xl font-bold">
                                {{ selectedWaste.waste_code }}
                            </div>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">
                            Megnevezés
                        </h4>
                        <p class="text-gray-700">
                            {{ formatWasteName(selectedWaste.waste_name) }}
                        </p>
                    </div>

                    <!-- Kategorizálás -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-3">
                            Kategorizálás
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <UBadge
                                :color="getCategoryColor(selectedWaste.waste_code)"
                                :label="getCategory(selectedWaste.waste_code)"
                            />
                            <UBadge
                                v-if="getMaterialType(selectedWaste.waste_name)"
                                color="gray"
                                :label="getMaterialType(selectedWaste.waste_name)"
                            />
                        </div>
                    </div>

                    <!-- Kezelési információ -->
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <div class="flex items-center gap-3 mb-2">
                            <UIcon name="i-heroicons-information-circle" class="text-blue-500 text-xl" />
                            <h4 class="font-semibold text-blue-900">
                                Kezelési információ
                            </h4>
                        </div>
                        <p class="text-blue-800">
                            Ez a hulladéktípus engedélyezett kezelésre kerül telephelyünkön. 
                            Pontos kezelési módszerről és árazásról vegye fel a kapcsolatot szakembereinkkel.
                        </p>
                    </div>
                </div>
            </template>
            
            <template #footer>
                <div class="flex flex-col gap-3 w-full">
                    <UButton
                        to="/kapcsolat"
                        color="primary"
                        icon="i-heroicons-envelope"
                        class="w-full justify-center"
                        @click="showDetailsModal = false"
                    >
                        Ajánlatkérés
                    </UButton>
                    <UButton
                        variant="outline"
                        color="primary"
                        icon="i-heroicons-phone"
                        href="tel:+36965321100"
                        class="w-full justify-center"
                    >
                        Hívás: +36 96 532 1100
                    </UButton>
                </div>
            </template>
        </UModal>

        <!-- Kapcsolat CTA szekció -->
        <section class="py-16 bg-buchl-green text-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold mb-4">
                    Nem találja a keresett hulladéktípust?
                </h2>
                <p class="text-xl mb-8 text-green-100">
                    Kapcsolódjon szakembereinkhez, és segítünk megtalálni a megfelelő kezelési módot!
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        to="/kapcsolat"
                        size="lg"
                        variant="solid"
                        color="white"
                        icon="i-heroicons-envelope"
                        class="text-buchl-blue"
                    >
                        Kapcsolatfelvétel
                    </UButton>
                    <UButton
                        href="tel:+36965321100"
                        size="lg"
                        variant="outline"
                        color="white"
                        icon="i-heroicons-phone"
                    >
                        +36 96 532 1100
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Import complete waste data from external file
import { allWasteData, tabItems as importedTabItems } from '~/utils/wasteData.js'

// SEO meta adatok
useSeoMeta({
    title: 'Hulladékkatalögus - BÜCHL HUNGARIA',
    description: 'Keresés a BÜCHL HUNGARIA engedélyezett hulladéktípusai között telephelyek szerint. Fejlett keresőfunkció hulladékkódok és megnevezések alapján.',
    keywords: 'hulladékkatalógus, hulladékkód, hulladékkezelés, veszélyes hulladék, nem veszélyes hulladék, telephely, engedély'
})

// Komponens adatok
interface WasteItem {
    waste_code: string
    waste_name: string
    location: string
    location_short: string
    ktj: string
    permit: string
    tab_key: string
}

// Reactive adatok
const globalSearchQuery = ref('')
const localSearchQuery = ref('')
const showDetailsModal = ref(false)
const selectedWaste = ref<WasteItem | null>(null)
const activeTab = ref(0)

// Use imported tab items
const tabItems = importedTabItems

// Computed properties
const getCurrentTabKey = (): string => {
    return tabItems[activeTab.value]?.key || 'szallitas'
}

const getCurrentTabName = (): string => {
    return tabItems[activeTab.value]?.label || 'Szállítás telephely'
}

const getCurrentTabWastes = (): WasteItem[] => {
    return allWasteData[getCurrentTabKey()] || []
}

const getCurrentFilteredWastes = (): WasteItem[] => {
    let filtered = getCurrentTabWastes()
    
    // Globális keresés
    if (globalSearchQuery.value) {
        const query = globalSearchQuery.value.toLowerCase()
        filtered = filtered.filter(waste => 
            waste.waste_code.toLowerCase().includes(query) ||
            waste.waste_name.toLowerCase().includes(query) ||
            waste.location.toLowerCase().includes(query)
        )
    }
    
    // Helyi keresés
    if (localSearchQuery.value) {
        const query = localSearchQuery.value.toLowerCase()
        filtered = filtered.filter(waste => 
            waste.waste_code.toLowerCase().includes(query) ||
            waste.waste_name.toLowerCase().includes(query)
        )
    }
    
    return filtered
}

// Metódusok
const handleGlobalSearch = () => {
    // Az aktív tab változtatása nincs szükség, mert minden tabon keresünk
}

const handleLocalSearch = () => {
    // Nincs teendő, a computed property automatikusan frissíti a listát
}

const clearAllSearch = () => {
    globalSearchQuery.value = ''
    localSearchQuery.value = ''
}

const formatWasteName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

const getCategory = (code: string): string => {
    const prefix = code.substring(0, 2)
    const categoryMap: { [key: string]: string } = {
        '02': '02 - Mezőgazdasági hulladék',
        '03': '03 - Fa feldolgozás hulladéka',
        '04': '04 - Bőr-, szőrme- és textilipar hulladéka',
        '05': '05 - Olajfinomítás hulladéka',
        '06': '06 - Szervetlen vegyipar hulladéka',
        '07': '07 - Szerves vegyipar hulladéka',
        '08': '08 - Bevonatok hulladéka',
        '09': '09 - Fényképészet hulladéka',
        '10': '10 - Szervetlen termikus folyamatok hulladéka',
        '11': '11 - Fémkezelés hulladéka',
        '12': '12 - Fémfeldolgozás hulladéka',
        '13': '13 - Olajos hulladék',
        '14': '14 - Szerves oldószer hulladék',
        '15': '15 - Csomagolási hulladék',
        '16': '16 - Nem máshol szereplő hulladék',
        '17': '17 - Építési-bontási hulladék',
        '19': '19 - Hulladékkezelés hulladéka',
        '20': '20 - Települési hulladék'
    }
    return categoryMap[prefix] || 'Egyéb kategória'
}

const getCategoryColor = (code: string): string => {
    const prefix = code.substring(0, 2)
    const colorMap: { [key: string]: string } = {
        '02': 'green',
        '03': 'emerald',
        '04': 'teal',
        '05': 'orange',
        '06': 'red',
        '07': 'pink',
        '08': 'purple',
        '09': 'violet',
        '10': 'indigo',
        '11': 'blue',
        '12': 'sky',
        '13': 'amber',
        '14': 'yellow',
        '15': 'lime',
        '16': 'gray',
        '17': 'stone',
        '19': 'rose',
        '20': 'cyan'
    }
    return colorMap[prefix] || 'gray'
}

const getMaterialType = (name: string): string => {
    const lowerName = name.toLowerCase()
    if (lowerName.includes('fém')) return 'Fém'
    if (lowerName.includes('műanyag')) return 'Műanyag'
    if (lowerName.includes('üveg')) return 'Üveg'
    if (lowerName.includes('fa')) return 'Fa'
    if (lowerName.includes('papír') || lowerName.includes('karton')) return 'Papír'
    if (lowerName.includes('olaj')) return 'Olaj'
    if (lowerName.includes('festék') || lowerName.includes('lakk')) return 'Festék/Lakk'
    if (lowerName.includes('oldószer')) return 'Oldószer'
    if (lowerName.includes('sav') || lowerName.includes('lúg')) return 'Vegyszer'
    return ''
}

const showDetails = (waste: WasteItem) => {
    selectedWaste.value = waste
    showDetailsModal.value = true
}

// Inicializálás
onMounted(() => {
    // Kezdeti tab beállítás
    activeTab.value = 0
})
</script>
