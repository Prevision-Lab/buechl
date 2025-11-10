<template>
    <div>
        <!-- Hero szekció from Directus -->
        <BuchlHero
            v-if="banner"
            :title="banner.cim"
            :subtitle="banner.leiras"
            :image="banner.kepUrl"
            bg-color="blue"
            :primary-cta="{
                label: $t('elogSystem.hero.primaryCta'),
                to: localePath('/kapcsolat'),
            }"
            :secondary-cta="{
                label: $t('elogSystem.hero.secondaryCta'),
                to: localePath('/szolgaltatasok'),
            }"
        />

        <!-- Főtartalom -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg max-w-none">
                        <p class="text-xl text-gray-700 mb-8">
                            {{ $t('elogSystem.intro.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ELOG SYSTEM komponensek from Directus -->
        <template v-for="section in sections" :key="section.id">
            <!-- Cards section -->
            <section 
                v-if="section.tipus === 'cards' && section.sorrend === 6"
                :class="[
                    'py-16',
                    section.hatter_szin === 'blue' ? 'bg-buchl-blue text-white' : 'bg-gray-50'
                ]"
            >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 
                        class="text-3xl sm:text-4xl font-bold mb-12 text-center"
                        :class="section.hatter_szin === 'blue' ? 'text-white' : 'text-buchl-blue'"
                    >
                        {{ section.cim }}
                    </h2>

                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div 
                            v-for="(elem, idx) in section.elemek" 
                            :key="idx"
                            :class="[
                                'rounded-lg shadow-md p-6',
                                section.hatter_szin === 'blue' ? 'bg-white/10' : 'bg-white'
                            ]"
                        >
                            <div 
                                :class="[
                                    'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                                    getIconBgClass(elem.ikon, section.hatter_szin)
                                ]"
                            >
                                <UIcon 
                                    :name="elem.ikon" 
                                    :class="[
                                        'text-2xl',
                                        getIconColorClass(elem.ikon, section.hatter_szin)
                                    ]" 
                                />
                            </div>
                            <h3 
                                :class="[
                                    'font-bold text-xl mb-4 text-center',
                                    section.hatter_szin === 'blue' ? 'text-white' : 'text-buchl-blue'
                                ]"
                            >
                                {{ elem.cim }}
                            </h3>
                            <p 
                                :class="[
                                    'text-center',
                                    section.hatter_szin === 'blue' ? 'text-white/80' : 'text-gray-700'
                                ]"
                            >
                                {{ elem.leiras }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <!-- Digitális megoldások -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            {{ $t('elogSystem.digital.title') }}
                        </h2>
                        <div class="space-y-6">
                            <div class="border-l-4 border-buchl-blue pl-6">
                                <h3 class="text-xl font-bold text-buchl-blue mb-2">{{ $t('elogSystem.digital.elogplan.title') }}</h3>
                                <p class="text-gray-700">
                                    {{ $t('elogSystem.digital.elogplan.description') }}
                                </p>
                            </div>
                            
                            <div class="border-l-4 border-buchl-green pl-6">
                                <h3 class="text-xl font-bold text-buchl-green mb-2">{{ $t('elogSystem.digital.cleverWaste.title') }}</h3>
                                <p class="text-gray-700">
                                    {{ $t('elogSystem.digital.cleverWaste.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                            alt="Digitális logisztikai megoldások"
                            class="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Szolgáltatások from Directus -->
        <template v-for="section in sections" :key="section.id">
            <section 
                v-if="section.tipus === 'cards' && section.sorrend === 7"
                class="py-16 bg-gray-50"
            >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                        {{ section.cim }}
                    </h2>
                    
                    <div v-if="section.leiras" class="max-w-4xl mx-auto mb-12" v-html="section.leiras" />

                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div 
                            v-for="(elem, idx) in section.elemek" 
                            :key="idx"
                            class="bg-white rounded-lg shadow-md p-6 text-center"
                        >
                            <div 
                                :class="[
                                    'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                                    getIconBgClass(elem.ikon)
                                ]"
                            >
                                <UIcon 
                                    :name="elem.ikon" 
                                    :class="['text-2xl', getIconColorClass(elem.ikon)]" 
                                />
                            </div>
                            <h3 class="font-bold text-buchl-blue text-lg mb-2">
                                {{ elem.cim }}
                            </h3>
                            <p class="text-gray-600 text-sm">
                                {{ elem.leiras }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <!-- Előnyök from Directus -->
        <template v-for="section in sections" :key="section.id">
            <section 
                v-if="section.tipus === 'cards' && section.sorrend === 8"
                class="py-16 bg-buchl-blue text-white"
            >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                            {{ section.cim }}
                        </h2>
                    </div>
                    
                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div 
                            v-for="(elem, idx) in section.elemek" 
                            :key="idx"
                            class="text-center"
                        >
                            <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon :name="elem.ikon" class="text-white text-3xl" />
                            </div>
                            <h3 class="text-xl font-bold mb-2">{{ elem.cim }}</h3>
                            <p class="text-white/80">{{ elem.leiras }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <!-- CTA szekció from Directus -->
        <BuchlCta v-if="cta" :cta="cta" />
    </div>
</template>

<script setup lang="ts">
// Composables
const localePath = useLocalePath()

// Fetch data from Directus
const { banner } = await useBanner(11)
const { sections } = await useOldalSzekciok('elog-system')
const { cta } = await useCta(6)

// Helper functions for dynamic styling
const getIconBgClass = (icon: string, bgColor?: string) => {
  if (bgColor === 'blue') return 'bg-white/10'
  
  if (icon.includes('truck')) return 'bg-buchl-blue/10'
  if (icon.includes('academic-cap')) return 'bg-buchl-green/10'
  if (icon.includes('funnel')) return 'bg-orange-100'
  if (icon.includes('chart-bar')) return 'bg-purple-100'
  if (icon.includes('cube')) return 'bg-buchl-blue/10'
  if (icon.includes('document-check')) return 'bg-purple-100'
  return 'bg-gray-100'
}

const getIconColorClass = (icon: string, bgColor?: string) => {
  if (bgColor === 'blue') return 'text-white'
  
  if (icon.includes('truck') && !icon.includes('academic')) return 'text-buchl-blue'
  if (icon.includes('academic-cap')) return 'text-buchl-green'
  if (icon.includes('funnel')) return 'text-orange-500'
  if (icon.includes('chart-bar')) return 'text-purple-600'
  if (icon.includes('cube')) return 'text-buchl-blue'
  if (icon.includes('document-check')) return 'text-purple-600'
  return 'text-gray-600'
}

// SEO meta adatok
useSeoMeta({
  title: banner?.cim || 'Logisztika - ELOG SYSTEM® - BÜCHL HUNGARIA',
  description: banner?.alcim || 'Az ELOG SYSTEM® rendszer 4.0 verziója komplex, digitális megoldást kínál a hulladékok gyűjtésére és papírmentes, igényalapú elszállítására. CleverWaste® rendszer.',
  keywords: 'BÜCHL HUNGARIA, ELOG SYSTEM, CleverWaste, digitális logisztika, hulladéklogisztika, papírmentes, GYLOG'
})
</script>
