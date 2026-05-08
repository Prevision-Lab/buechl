<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      v-if="heroBanner"
      :title="heroBanner.cim"
      :subtitle="heroBanner.leiras"
      :image="'/media/images/hulladekgyujtes-szallitas.jpg'"
      bg-color="blue"
      :primary-cta="heroBanner.gombok?.[0] ? {
        label: heroBanner.gombok[0].cim,
        to: heroBanner.gombok[0].link
      } : undefined"
    />

    <!-- Csatlakozz hozzánk szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            {{ $t('careers.intro.title') }}
          </h2>
          <div class="max-w-4xl mx-auto space-y-6">
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ $t('careers.intro.description') }}
            </p>
            <p class="text-2xl font-bold text-buchl-blue mt-8">
              {{ $t('careers.intro.callToAction') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Aktuális álláslapok szekció -->
    <section id="allasok" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            {{ $t('careers.jobs.title') }}
          </h2>
        </div>

        <!-- Aktuális állásajánlatok - Táblázatos megjelenés -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div v-if="allasok && allasok.length > 0" class="grid grid-cols-1 divide-y divide-gray-200">
            
            <!-- Dinamikus pozíciók -->
            <div v-for="allas in allasok" :key="allas.id" :class="[
              'p-6 transition-colors',
              allas.lejart ? 'bg-gray-100 opacity-60 cursor-not-allowed' : 'bg-white hover:bg-gray-50'
            ]">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div class="flex-1">
                  <h3 :class="['text-lg font-semibold mb-2', allas.lejart ? 'text-gray-500' : 'text-buchl-blue']">{{ allas.cim }}</h3>
                  <p :class="['text-sm', allas.lejart ? 'text-gray-400' : 'text-gray-600']">{{ allas.leiras }}</p>
                </div>
                <div :class="['flex flex-col sm:flex-row gap-8 text-sm', allas.lejart ? 'text-gray-400' : 'text-gray-700']">
                  <div class="text-center">
                    <span :class="['block font-medium', allas.lejart ? '' : 'text-buchl-blue']">{{ $t('careers.jobs.labels.type') }}</span>
                    <span>{{ allas.munkaido_tipus }}</span>
                  </div>
                  <div class="text-center">
                    <span :class="['block font-medium', allas.lejart ? '' : 'text-buchl-blue']">{{ $t('careers.jobs.labels.location') }}</span>
                    <span>{{ allas.munkavegzes_helye }}</span>
                  </div>
                  <div class="text-center lg:min-w-[100px] flex items-center justify-center">
                    <UButton 
                      size="sm"
                      :color="allas.lejart ? 'gray' : 'neutral'"
                      :class="['rounded-none', allas.lejart ? '' : 'bg-buchl-green text-white hover:bg-buchl-green/90']"
                      :disabled="allas.lejart"
                      @click="!allas.lejart && openJobApplication(allas.cim)"
                    >
                      {{ $t('careers.jobs.labels.apply') }}
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="p-12 text-center text-gray-500">
            <UIcon name="i-heroicons-briefcase" class="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p class="text-lg">Jelenleg nincsenek nyitott pozícióink, de várjuk jelentkezésed adatbázisunkba!</p>
          </div>
        </div>

        <!-- Jelentkezési információ -->
        <div class="mt-12 bg-buchl-blue/5 p-8 rounded-lg text-center">
          <h3 class="text-xl font-bold text-buchl-blue mb-4">
            {{ $t('careers.jobs.applicationInfo.title') }}
          </h3>
          <p class="text-gray-700 mb-6">
            {{ $t('careers.jobs.applicationInfo.description') }}
          </p>
          <div class="bg-white p-4 rounded border-l-4 border-buchl-green">
            <p class="text-buchl-blue font-semibold mb-2">{{ $t('careers.jobs.applicationInfo.directContact') }}</p>
            <a href="mailto:karrier@buechl.hu" class="text-lg font-bold text-buchl-green hover:text-buchl-green/80 transition-colors">
              karrier@buechl.hu
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(6) // ID: 6 - Karrier

// Állások lekérése
const { allasok } = useAllasok()

// Jelentkezés kezelése
const openJobApplication = (position: string) => {
  // Kapcsolat oldalra navigálás a pozíció nevével
  const subject = `Jelentkezés - ${position}`
  const body = `Tisztelt BÜCHL Hungaria!%0D%0A%0D%0AÉrdeklődöm a(z) "${position}" pozíció iránt.%0D%0A%0D%0AKérem, vegyék figyelembe jelentkezésemet.%0D%0A%0D%0AÜdvözlettel`
  
  // Email link megnyitása előre kitöltött tartalommal
  const mailtoLink = `mailto:karrier@buechl.hu?subject=${encodeURIComponent(subject)}&body=${body}`
  window.location.href = mailtoLink
}

// SEO meta adatok
useSeoMeta({
  title: 'Karrier - BÜCHL HUNGARIA',
  description: 'Egy lépéssel előrébb és mindig INNOVATÍVAN! Fedezd fel a lehetőségeidet a BÜCHL Hungaria csapatában. Sokszínűen, családiasan és professzionálisan dolgozunk együtt egy tisztább jövőért.',
  keywords: 'karrier, állás, munka, BÜCHL HUNGARIA, környezetvédelem, innováció, csapatmunka, jelentkezés, karrierlehetőség, hulladékkezelés, gépkocsivezető, targoncavezető, portás'
})
</script>
