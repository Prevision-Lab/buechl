<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      v-if="heroBanner"
      :title="heroBanner.cim"
      :subtitle="heroBanner.leiras"
      :image="heroBanner.kepUrl || '/media/images/elektromos-jarmuvek.jpg'"
      bg-color="green"
      :primary-cta="heroBanner.gombok?.[0] ? {
        label: heroBanner.gombok[0].cim,
        to: heroBanner.gombok[0].link
      } : undefined"
    />

    <!-- ESG Bevezető szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            {{ $t('sustainability.intro.title') }}
          </h2>
          <p class="text-lg text-gray-700 max-w-4xl mx-auto">
            {{ $t('sustainability.intro.description') }}
          </p>
        </div>

        <!-- ESG pillérek áttekintése -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <button @click="scrollToSection('kornyezet')" class="text-center p-8 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-green rounded-full mb-6">
              <UIcon name="i-heroicons-globe-alt" class="text-white" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">{{ $t('sustainability.pillars.environment.title') }}</h3>
          </button>
          
          <button @click="scrollToSection('tarsadalmi')" class="text-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-blue rounded-full mb-6">
              <UIcon name="i-heroicons-users" class="text-white" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">{{ $t('sustainability.pillars.social.title') }}</h3>
          </button>
          
          <button @click="scrollToSection('vallalatiranytias')" class="text-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full mb-6">
              <UIcon name="i-heroicons-building-office-2" class="text-white" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">{{ $t('sustainability.pillars.governance.title') }}</h3>
          </button>
        </div>
      </div>
    </section>


    <!-- 1. Környezeti kezdeményezések szekció -->
    <section v-if="environmentSection" id="kornyezet" class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            {{ environmentSection.cim }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(elem, idx) in environmentSection.elemek" 
            :key="idx" 
            class="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div v-if="elem.kep" class="relative h-40 mb-4">
              <img 
                :src="getKepUrl(elem.kep)" 
                :alt="elem.cim" 
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div class="flex items-center mb-4">
              <UIcon 
                v-if="elem.ikon" 
                :name="elem.ikon" 
                class="text-buchl-green mr-3" 
                style="width: 32px; height: 32px;" 
              />
              <h3 class="text-xl font-semibold text-white">{{ elem.cim }}</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              {{ elem.leiras }}
            </p>
            <div v-if="elem.statisztika_ertek" class="text-2xl font-bold text-buchl-green mb-1">
              {{ elem.statisztika_ertek }}
            </div>
            <div v-if="elem.statisztika_leiras" class="text-sm text-white/70">
              {{ elem.statisztika_leiras }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Társadalmi szerepvállás szekció -->
    <section v-if="socialSection" id="tarsadalmi" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            {{ socialSection.cim }}
          </h2>
          <p v-if="socialSection.alcim" class="text-lg text-gray-700 max-w-3xl mx-auto">
            {{ socialSection.alcim }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(elem, idx) in socialSection.elemek" 
            :key="idx" 
            class="bg-white p-8 rounded-lg shadow-md"
          >
            <div v-if="elem.kep" class="relative h-56 mb-4">
              <img 
                :src="getKepUrl(elem.kep)" 
                :alt="elem.cim" 
                class="w-full h-full object-cover object-top rounded-md"
              />
            </div>
            <div class="flex items-center mb-4">
              <UIcon 
                v-if="elem.ikon" 
                :name="elem.ikon" 
                :class="idx % 2 === 0 ? 'text-buchl-blue' : 'text-buchl-green'"
                class="mr-3" 
                style="width: 32px; height: 32px;" 
              />
              <h3 class="text-xl font-semibold text-buchl-blue">{{ elem.cim }}</h3>
            </div>
            <p class="text-gray-700 text-sm mb-4">
              {{ elem.leiras }}
            </p>
            <div v-if="elem.statisztika_leiras" class="text-sm text-gray-500">
              {{ elem.statisztika_leiras }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Vállalatirányítás szekció -->
    <section v-if="governanceSection" id="vallalatiranytias" class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            {{ governanceSection.cim }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(elem, idx) in governanceSection.elemek" 
            :key="idx" 
            class="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div class="flex items-center mb-4">
              <UIcon 
                v-if="elem.ikon" 
                :name="elem.ikon" 
                class="text-buchl-green mr-3" 
                style="width: 32px; height: 32px;" 
              />
              <h3 class="text-xl font-semibold text-white">{{ elem.cim }}</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              {{ elem.leiras }}
            </p>
            <div v-if="elem.statisztika_ertek" class="text-2xl font-bold text-buchl-green mb-1">
              {{ elem.statisztika_ertek }}
            </div>
            <div v-if="elem.statisztika_leiras" class="text-sm text-white/70">
              {{ elem.statisztika_leiras }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA szekció -->
    <section class="py-16 bg-buchl-green text-buchl-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          {{ $t('sustainability.cta.title') }}
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          {{ $t('sustainability.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/kapcsolat"
            color="neutral"
            size="lg"
            icon="i-heroicons-envelope"
            :trailing="true"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
          >
            {{ $t('sustainability.cta.contactButton') }}
          </UButton>
          <UButton
            to="/szolgaltatasok"
            variant="outline"
            size="lg"
            icon="i-heroicons-arrow-right"
            :trailing="true"
            class="rounded-none border-2 border-buchl-blue text-buchl-blue"
          >
            {{ $t('sustainability.cta.servicesButton') }}
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(4) // ID: 4 - Fenntarthatóság

// Directus szekciók lekérése
const { szekciok: environmentSections } = await useOldalSzekciok('fenntarthatosag-kornyezet')
const { szekciok: socialSections } = await useOldalSzekciok('fenntarthatosag-tarsadalmi')
const { szekciok: governanceSections } = await useOldalSzekciok('fenntarthatosag-vallalatiranytitas')

// Első szekciók kiválasztása (csak 1-1 van mindből)
const environmentSection = computed(() => environmentSections.value?.[0])
const socialSection = computed(() => socialSections.value?.[0])
const governanceSection = computed(() => governanceSections.value?.[0])

// Kép URL generálás
const getKepUrl = (kepId: string) => {
  if (!kepId) return null
  return `https://buchl-admin.previsionlab.hu/assets/${kepId}?access_token=${config.public.directusToken}`
}

useSeoMeta({
  title: 'Fenntarthatóság - BÜCHL HUNGARIA',
  description: 'ESG megközelítésünk: Környezet, Társadalom és Vállalatirányítás területén vagyunk elkötelezettek. Megújuló energia, oktatási kooperációk és nemzetközi partneri hálózat.',
  keywords: 'fenntarthatóság, ESG, környezetvédelem, megújuló energia, napelem, társadalmi felelősség, DUIHK, KÖVET, karbonlábnyom'
})

// Scroll funkció
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
