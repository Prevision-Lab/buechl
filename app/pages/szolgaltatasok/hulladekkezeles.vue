<template>
    <div>
        <!-- Hero szekció Directusból -->
        <BuchlHero
            v-if="heroBanner"
            :title="heroBanner.cim"
            :subtitle="heroBanner.leiras"
            :image="heroBanner.kepUrl || '/media/images/hulladekkezeles.jpg'"
            bg-color="green"
            :primary-cta="heroBanner.gombok?.[0] || {
                label: $t('wasteManagement.hero.primaryCta'),
                to: localePath('/kapcsolat'),
            }"
            :secondary-cta="heroBanner.gombok?.[1] || {
                label: $t('wasteManagement.hero.secondaryCta'),
                to: localePath('/szolgaltatasok'),
            }"
        />

        <!-- Főtartalom -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg max-w-none">
                        <p class="text-xl text-gray-700 mb-8">
                            {{ $t('wasteManagement.intro.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technológiák -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('wasteManagement.technologies.title') }}
                </h2>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Emulzió- és mosólúg-kezelő -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-beaker" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.emulsion.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.emulsion.description') }}
                        </p>
                    </div>

                    <!-- Lakkozó berendezések szennyvíz -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-funnel" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.wastewater.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.wastewater.description') }}
                        </p>
                    </div>

                    <!-- Másodlagos tüzelőanyagok -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-fire" class="text-orange-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.fuel.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.fuel.description') }}
                        </p>
                    </div>

                    <!-- Olajtartalmú köszörűiszap -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cog-6-tooth" class="text-gray-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.grinding.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.grinding.description') }}
                        </p>
                    </div>

                    <!-- Válogató berendezés -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-funnel" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.sorting.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.sorting.description') }}
                        </p>
                    </div>

                    <!-- Bálázó berendezés -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cube" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.baling.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.baling.description') }}
                        </p>
                    </div>

                    <!-- Tömörítő berendezés -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-arrows-pointing-in" class="text-purple-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.compacting.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.compacting.description') }}
                        </p>
                    </div>

                    <!-- Iratmegsemmisítő -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-document-minus" class="text-red-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.shredding.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.shredding.description') }}
                        </p>
                    </div>

                    <!-- Raktározás -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-building-storefront" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ $t('wasteManagement.technologies.items.storage.title') }}</h3>
                        <p class="text-gray-700 text-sm text-center">
                            {{ $t('wasteManagement.technologies.items.storage.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Másodnyersanyagok -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            {{ $t('wasteManagement.secondaryMaterials.title') }}
                        </h2>
                        <h3 class="text-xl text-buchl-green font-semibold mb-4">
                            {{ $t('wasteManagement.secondaryMaterials.subtitle') }}
                        </h3>
                        <p class="text-lg text-gray-700 mb-6">
                            {{ $t('wasteManagement.secondaryMaterials.description1') }}
                        </p>
                        <p class="text-gray-700">
                            {{ $t('wasteManagement.secondaryMaterials.description2') }}
                        </p>
                    </div>
                    <div class="relative">
                        <img
                            src="/media/images/masodnyersanyagok.jpg"
                            alt="Másodnyersanyagok előállítása"
                            class="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Innovatív megoldások -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('wasteManagement.innovative.title') }}
                </h2>
                
                <div class="max-w-4xl mx-auto">
                    <p class="text-lg text-gray-700 mb-8 text-center">
                        {{ $t('wasteManagement.innovative.description') }}
                    </p>
                    
                    <div class="grid gap-8 md:grid-cols-2">
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-beaker" class="text-buchl-blue text-2xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('wasteManagement.innovative.paintWastewater.title') }}</h3>
                            <p class="text-gray-700">
                                {{ $t('wasteManagement.innovative.paintWastewater.description') }}
                            </p>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-shield-exclamation" class="text-red-500 text-2xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('wasteManagement.innovative.pyrotechnic.title') }}</h3>
                            <p class="text-gray-700">
                                {{ $t('wasteManagement.innovative.pyrotechnic.description') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hulladékkatalógus -->        
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('wasteManagement.catalog.title') }}
                </h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <p class="text-lg text-gray-700 text-center mb-8">
                        {{ $t('wasteManagement.catalog.description1') }}
                    </p>
                    <p class="text-gray-700 text-center">
                        {{ $t('wasteManagement.catalog.description2') }}
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 items-center mb-12">
                    <div>
                        <div class="bg-buchl-blue/5 p-8 rounded-lg">
                            <h3 class="text-xl font-bold text-buchl-blue mb-4 flex items-center gap-3">
                                <UIcon name="i-heroicons-rectangle-stack" class="w-6 h-6" />
                                {{ $t('wasteManagement.catalog.nonHazardous.title') }}
                            </h3>
                            <ul class="space-y-2 text-gray-700">
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>{{ $t('wasteManagement.catalog.nonHazardous.items.plastic') }}</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>{{ $t('wasteManagement.catalog.nonHazardous.items.wood') }}</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>{{ $t('wasteManagement.catalog.nonHazardous.items.metal') }}</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>{{ $t('wasteManagement.catalog.nonHazardous.items.packaging') }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <div class="bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
                            <h3 class="text-xl font-bold text-red-700 mb-4 flex items-center gap-3">
                                <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6" />
                                {{ $t('wasteManagement.catalog.hazardous.title') }}
                            </h3>
                            <ul class="space-y-2 text-gray-700">
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>{{ $t('wasteManagement.catalog.hazardous.items.emulsions') }}</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>{{ $t('wasteManagement.catalog.hazardous.items.aerosols') }}</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>{{ $t('wasteManagement.catalog.hazardous.items.metalShavings') }}</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>{{ $t('wasteManagement.catalog.hazardous.items.airbags') }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 class="text-2xl font-bold text-buchl-blue mb-4">
                        {{ $t('wasteManagement.catalog.fullCatalog.title') }}
                    </h3>
                    <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
                        {{ $t('wasteManagement.catalog.fullCatalog.description') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <UButton
                            to="/hulladek-katalogus"
                            size="lg"
                            icon="i-heroicons-magnifying-glass"
                            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                        >
                            {{ $t('wasteManagement.catalog.fullCatalog.searchButton') }}
                        </UButton>
                        <UButton
                            href="/media/documents/hulladek-katalogus.pdf"
                            variant="outline"
                            size="lg"
                            icon="i-heroicons-arrow-down-tray"
                            class="rounded-none border-buchl-blue text-buchl-blue hover:bg-buchl-blue hover:text-white"
                            target="_blank"
                        >
                            {{ $t('wasteManagement.catalog.fullCatalog.downloadButton') }}
                        </UButton>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA szekció Directusból -->
        <section v-if="wasteCta" class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    {{ wasteCta.cim }}
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    {{ wasteCta.leiras }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        v-if="wasteCta.gomb_felirat && wasteCta.gomb_link"
                        :to="localePath(wasteCta.gomb_link)"
                        size="lg"
                        icon="i-heroicons-envelope"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        {{ wasteCta.gomb_felirat }}
                    </UButton>
                    <UButton
                        v-if="wasteCta.gomb2_felirat && wasteCta.gomb2_link"
                        :to="localePath(wasteCta.gomb2_link)"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-left"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        {{ wasteCta.gomb2_felirat }}
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Composables
const localePath = useLocalePath()

// Hero banner Directusból (ID: 10 - Hulladékkezelés)
const { banner: heroBanner } = useBanner(10)

// CTA Directusból (ID: 6 - Szolgáltatások CTA)
const { cta: wasteCta } = useCta(6)

// SEO meta adatok - using static content like rolunk.vue
useSeoMeta({
  title: 'Hulladékkezelés - BÜCHL HUNGARIA',
  description: 'A BÜCHL győri telephelyen fejlett technológiák működnek az ipari hulladékok biztonságos és hatékony kezelésére. Speciális technológiák, másodnyersúnyagok előállítása és innovatív megoldások.',
  keywords: 'BÜCHL HUNGARIA, hulladékkezelés, veszélyes hulladék, ipari hulladék, másodnyersúnyag, emulziókezelés, bepárlás'
})
</script>
