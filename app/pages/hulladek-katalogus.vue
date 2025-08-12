<template>
    <div>
        <!-- Egyszerű Hero szekció -->
        <div class="bg-buchl-blue text-white py-16">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h1 class="text-4xl font-bold mb-4">Hulladékkatalógus</h1>
                <p class="text-xl text-blue-100">Keresés az engedélyezett hulladéktípusaink között</p>
            </div>
        </div>

        <!-- Keresési szekció -->
        <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center mb-8">
                    <h2 class="text-2xl font-bold text-buchl-blue mb-4">
                        Keresés a hulladékkatalógusban
                    </h2>
                    <p class="text-gray-600">
                        Adja meg a hulladék kódját vagy leírását a kereséshez
                    </p>
                </div>

                <!-- Keresési beviteli mező -->
                <div class="max-w-xl mx-auto mb-8">
                    <UInput
                        v-model="searchQuery"
                        placeholder="Pl.: 'műanyag' vagy '15 01 04'"
                        icon="i-heroicons-magnifying-glass"
                        size="lg"
                        variant="outline"
                        class="w-full"
                        color="primary"
                        @input="handleSearch"
                    />
                </div>


                <!-- Találatok számláló -->
                <div class="text-center mb-6">
                    <p class="text-gray-600">
                        <span class="font-semibold">{{ filteredWastes.length }}</span> 
                        találat {{ allWastes.length }} hulladéktípusból
                    </p>
                </div>
            </div>
        </section>

        <!-- Eredmények szekció -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Eredmény lista -->
                <div v-if="filteredWastes.length > 0" class="space-y-4">
                    <div
                        v-for="(waste, index) in filteredWastes"
                        :key="waste.waste_code"
                        class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                        <div class="flex flex-col sm:flex-row sm:items-center gap-4">
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
                                <h3 class="font-semibold text-lg text-gray-900 mb-1">
                                    {{ formatWasteName(waste.waste_name) }}
                                </h3>
                                <div class="flex flex-wrap gap-2">
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
                                </div>
                            </div>

                            <!-- Akciók -->
                            <div class="flex-shrink-0">
                                <UButton
                                    variant="ghost"
                                    color="primary"
                                    icon="i-heroicons-clipboard-document-list"
                                    @click="showDetails(waste)"
                                >
                                    Részletek
                                </UButton>
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
                        A keresési feltételeknek megfelelő hulladéktípust nem találtunk. 
                        Próbálja meg módosítani a keresési kifejezést.
                    </p>
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
// SEO meta adatok
useSeoMeta({
    title: 'Hulladékkatalógus - BÜCHL HUNGARIA',
    description: 'Keresés a BÜCHL HUNGARIA engedélyezett hulladéktípusai között. Keresőfunkció hulladékkódok és megnevezések alapján.',
    keywords: 'hulladékkatalógus, hulladékkód, hulladékkezelés, veszélyes hulladék, nem veszélyes hulladék'
})

// Komponens adatok
interface WasteItem {
    waste_code: string
    waste_name: string
}

// Reactive adatok
const searchQuery = ref('')
const showDetailsModal = ref(false)
const selectedWaste = ref<WasteItem | null>(null)

// Hulladék adatok (Excel-ből)
const allWastes = ref<WasteItem[]>([
    { waste_code: "03 01 05", waste_name: "fűrészpor, faforgács, darabos eselék, fa, forgácslap és furnér, amely különbözik" },
    { waste_code: "07 02 13", waste_name: "hulladék műanyag" },
    { waste_code: "07 02 99", waste_name: "közelebbről meg nem határozott hulladék" },
    { waste_code: "10 11 03", waste_name: "üveg alapú, szálas anyagok hulladéka" },
    { waste_code: "10 11 05", waste_name: "egyéb részecskék és por" },
    { waste_code: "10 11 12", waste_name: "üveghulladék, amely különbözik a 10 11 11-től" },
    { waste_code: "10 11 14", waste_name: "üvegcsiszolási és polírozási iszap, amely különbözik a 10 11 13-tól" },
    { waste_code: "10 11 99", waste_name: "közelebbről meg nem határozott hulladék" },
    { waste_code: "12 01 01", waste_name: "vasfém részek és esztergaforgács" },
    { waste_code: "12 01 03", waste_name: "nemvas fém reszelék és esztergaforgács" },
    { waste_code: "12 01 99", waste_name: "közelebbről meg nem határozott hulladék" },
    { waste_code: "15 01 03", waste_name: "fa csomagolási hulladék" },
    { waste_code: "15 01 04", waste_name: "fém csomagolási hulladék" },
    { waste_code: "15 01 07", waste_name: "üveg csomagolási hulladék" },
    { waste_code: "16 01 17", waste_name: "vasfémek" },
    { waste_code: "16 01 18", waste_name: "nemvas fémek" },
    { waste_code: "16 01 19", waste_name: "műanyagok" },
    { waste_code: "16 01 20", waste_name: "üveg" },
    { waste_code: "16 01 99", waste_name: "közelebbről meg nem határozott hulladék" },
    { waste_code: "17 01 07", waste_name: "beton, tégla, cserép és kerámia frakció vagy azok keveréke, amely különbözik" },
    { waste_code: "17 02 01", waste_name: "fa" },
    { waste_code: "17 02 02", waste_name: "üveg" },
    { waste_code: "17 02 03", waste_name: "műanyag" },
    { waste_code: "17 03 02", waste_name: "bitumen keverék, amely különbözik a 17 03 01-től" },
    { waste_code: "17 04 02", waste_name: "alumínium" },
    { waste_code: "17 04 05", waste_name: "vas és acél" },
    { waste_code: "17 04 07", waste_name: "fémkeverék" },
    { waste_code: "17 06 04", waste_name: "szigetelő anyag, amely különbözik a 17 06 01 és a 17 06 03-tól" },
    { waste_code: "17 09 04", waste_name: "kevert építési-bontási hulladék, amely különbözik a 17 09 01-től, a 17 09 02-től és" },
    { waste_code: "19 12 02", waste_name: "fém vas" },
    { waste_code: "19 12 04", waste_name: "műanyag és gumi" },
    { waste_code: "19 12 05", waste_name: "üveg" },
    { waste_code: "19 12 12", waste_name: "egyéb, a 19 12 11-től különböző hulladék mechanikai kezelésével nyert hulladék (ideértve a kevert anyagokat is)" },
    { waste_code: "20 01 02", waste_name: "üveg" },
    { waste_code: "20 01 38", waste_name: "fa, amely különbözik a 20 01 37-től" }
])

// Szűrt eredmények
const filteredWastes = ref<WasteItem[]>([...allWastes.value])

// Szűrő opciók
const categoryOptions = [
    { value: '', label: 'Minden kategória' },
    { value: '03', label: '03 - Fa feldolgozás hulladéka' },
    { value: '07', label: '07 - Szerves vegyipar hulladéka' },
    { value: '10', label: '10 - Szervetlen hulladék' },
    { value: '12', label: '12 - Fémfeldolgozás hulladéka' },
    { value: '15', label: '15 - Csomagolási hulladék' },
    { value: '16', label: '16 - Nem máshol szereplő hulladék' },
    { value: '17', label: '17 - Építési-bontási hulladék' },
    { value: '19', label: '19 - Hulladékkezelés hulladéka' },
    { value: '20', label: '20 - Települési hulladék' }
]

// Metódusok
const handleSearch = () => {
    applyFilters()
}

const applyFilters = () => {
    let filtered = [...allWastes.value]
    
    // Szöveges keresés
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(waste => 
            waste.waste_code.toLowerCase().includes(query) ||
            waste.waste_name.toLowerCase().includes(query)
        )
    }
    
    filteredWastes.value = filtered
}

const formatWasteName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

const getCategory = (code: string): string => {
    const prefix = code.substring(0, 2)
    const category = categoryOptions.find(opt => opt.value === prefix)
    return category ? category.label : 'Egyéb kategória'
}

const getCategoryColor = (code: string): string => {
    const prefix = code.substring(0, 2)
    const colorMap: { [key: string]: string } = {
        '03': 'green',
        '07': 'red',
        '10': 'orange',
        '12': 'blue',
        '15': 'purple',
        '16': 'gray',
        '17': 'yellow',
        '19': 'pink',
        '20': 'indigo'
    }
    return colorMap[prefix] || 'gray'
}

const getMaterialType = (name: string): string => {
    const lowerName = name.toLowerCase()
    if (lowerName.includes('fém')) return 'Fém'
    if (lowerName.includes('műanyag')) return 'Műanyag'
    if (lowerName.includes('üveg')) return 'Üveg'
    if (lowerName.includes('fa')) return 'Fa'
    if (lowerName.includes('papír')) return 'Papír'
    return ''
}

const showDetails = (waste: WasteItem) => {
    selectedWaste.value = waste
    showDetailsModal.value = true
}

// Inicializálás
onMounted(() => {
    applyFilters()
})
</script>
