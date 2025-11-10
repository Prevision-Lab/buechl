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

        <!-- Dinamikus szekciók Directusból -->
        <template v-if="szekciok">
            <template v-for="szekc in szekciok" :key="szekc.id">
                <!-- Technológiák típus -->
                <section v-if="szekc.tipus === 'technologiak'" :class="[
                    'py-16',
                    szekc.bg_szin === 'gray' ? 'bg-gray-50' : szekc.bg_szin === 'blue' ? 'bg-buchl-blue text-white' : szekc.bg_szin === 'green' ? 'bg-buchl-green text-white' : 'bg-white'
                ]">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                            {{ szekc.cim }}
                        </h2>

                        <div v-if="szekc.technologiak?.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div v-for="tech in szekc.technologiak" :key="tech.id" class="bg-white rounded-lg shadow-md p-6">
                                <div :class="[
                                    'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                                    tech.szin === 'green' ? 'bg-buchl-green/10' : '',
                                    tech.szin === 'blue' ? 'bg-buchl-blue/10' : '',
                                    tech.szin === 'orange' ? 'bg-orange-100' : '',
                                    tech.szin === 'gray' ? 'bg-gray-100' : '',
                                    tech.szin === 'red' ? 'bg-red-50' : '',
                                    tech.szin === 'purple' ? 'bg-purple-100' : ''
                                ]">
                                    <UIcon v-if="tech.ikon" :name="tech.ikon" :class="[
                                        'text-2xl',
                                        tech.szin === 'green' ? 'text-buchl-green' : '',
                                        tech.szin === 'blue' ? 'text-buchl-blue' : '',
                                        tech.szin === 'orange' ? 'text-orange-500' : '',
                                        tech.szin === 'gray' ? 'text-gray-600' : '',
                                        tech.szin === 'red' ? 'text-red-500' : '',
                                        tech.szin === 'purple' ? 'text-purple-600' : ''
                                    ]" />
                                </div>
                                <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">{{ tech.cim }}</h3>
                                <p class="text-gray-700 text-sm text-center">{{ tech.leiras }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cards típus -->
                <section v-else-if="szekc.tipus === 'cards'" :class="[
                    'py-16',
                    szekc.bg_szin === 'gray' ? 'bg-gray-50' : szekc.bg_szin === 'blue' ? 'bg-buchl-blue text-white' : szekc.bg_szin === 'green' ? 'bg-buchl-green text-white' : 'bg-white'
                ]">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                            {{ szekc.cim }}
                        </h2>
                        <div v-if="szekc.leiras" class="max-w-4xl mx-auto mb-12">
                            <div class="text-lg text-gray-700 text-center" v-html="szekc.leiras" />
                        </div>
                        <div v-if="szekc.elemek" class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                            <div v-for="(elem, idx) in szekc.elemek" :key="idx" class="bg-white rounded-lg shadow-md p-6">
                                <div v-if="elem.ikon" :class="[
                                    'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                                    elem.ikon.includes('beaker') ? 'bg-buchl-blue/10' : 'bg-red-50'
                                ]">
                                    <UIcon :name="elem.ikon" :class="[
                                        'text-2xl',
                                        elem.ikon.includes('beaker') ? 'text-buchl-blue' : 'text-red-500'
                                    ]" />
                                </div>
                                <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ elem.cim }}</h3>
                                <p class="text-gray-700">{{ elem.leiras }}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
        </template>

        <!-- Másodnyersanyagok Directusból -->
        <section v-if="secondaryMaterialsCta" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            {{ secondaryMaterialsCta.cim }}
                        </h2>
                        <h3 v-if="secondaryMaterialsCta.alcim" class="text-xl text-buchl-green font-semibold mb-4">
                            {{ secondaryMaterialsCta.alcim }}
                        </h3>
                        <div v-if="secondaryMaterialsCta.leiras" class="text-lg text-gray-700 mb-6" v-html="secondaryMaterialsCta.leiras" />
                        <div v-if="secondaryMaterialsCta.szoveg" class="text-gray-700 mb-6" v-html="secondaryMaterialsCta.szoveg" />
                        <UButton
                            v-if="secondaryMaterialsCta.gomb_felirat && secondaryMaterialsCta.gomb_link"
                            :to="localePath(secondaryMaterialsCta.gomb_link)"
                            size="lg"
                            icon="i-heroicons-envelope"
                            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                        >
                            {{ secondaryMaterialsCta.gomb_felirat }}
                        </UButton>
                    </div>
                    <div v-if="secondaryMaterialsCta.kepUrl" class="relative">
                        <img
                            :src="secondaryMaterialsCta.kepUrl"
                            alt="Másodnyersanyagok előállítása"
                            class="rounded-lg shadow-lg"
                        />
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

// Oldal szekciók Directusból (technológiák)
const { szekciok } = useOldalSzekciok('hulladekkezeles')

// Másodnyersanyagok CTA Directusból (ID: 9)
const { cta: secondaryMaterialsCta } = useCta(9)

// CTA Directusból (ID: 6 - Szolgáltatások CTA)
const { cta: wasteCta } = useCta(6)

// SEO meta adatok - using static content like rolunk.vue
useSeoMeta({
  title: 'Hulladékkezelés - BÜCHL HUNGARIA',
  description: 'A BÜCHL győri telephelyen fejlett technológiák működnek az ipari hulladékok biztonságos és hatékony kezelésére. Speciális technológiák, másodnyersúnyagok előállítása és innovatív megoldások.',
  keywords: 'BÜCHL HUNGARIA, hulladékkezelés, veszélyes hulladék, ipari hulladék, másodnyersúnyag, emulziókezelés, bepárlás'
})
</script>
