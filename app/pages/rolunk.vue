<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      v-if="heroBanner"
      :title="heroBanner.cim"
      :subtitle="heroBanner.leiras"
      :image="heroBanner.kepUrl || '/media/images/rolunk.jpg'"
      bg-color="blue"
      :primary-cta="heroBanner.gombok?.[0] ? {
        label: heroBanner.gombok[0].cim,
        to: heroBanner.gombok[0].link
      } : undefined"
    />

    <!-- Rólunk részletesen szekció -->
    <section v-if="companyCta" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-8 text-center">
            {{ companyCta.cim }}
          </h2>
          <div class="prose prose-lg max-w-none text-gray-700 space-y-6" v-html="companyCta.szoveg">
          </div>
          <p v-if="companyCta.alcim" class="text-center text-xl font-bold text-buchl-blue mt-8">
            <strong>{{ companyCta.alcim }}</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Menedzsment szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            {{ $t('about.sections.management.title') }}
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            {{ $t('about.sections.management.subtitle') }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <!-- Portré fotó -->
              <div class="lg:col-span-1">
                <div class="relative w-64 h-64 mx-auto lg:w-full lg:h-80">
                  <img 
                    src="/images/gyokeres-sandor.png" 
                    alt="Gyökeres Sándor ügyvezető" 
                    class="w-full h-full object-cover rounded-xl shadow-md"
                  >
                  <div class="absolute inset-0 bg-buchl-blue/10 rounded-xl"></div>
                </div>
              </div>
              
              <!-- Bemutatkozás -->
              <div class="lg:col-span-2 space-y-6">
                <div>
                  <h3 class="text-2xl lg:text-3xl font-bold text-buchl-blue mb-2">
                    {{ $t('about.sections.management.ceo.name') }}
                  </h3>
                  <p class="text-lg text-buchl-green font-semibold mb-4">
                    {{ $t('about.sections.management.ceo.position') }}
                  </p>
                </div>
                
                <div>
                  <p class="text-gray-700 leading-relaxed">
                    {{ $t('about.sections.management.ceo.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- BÜCHL CSOPORT szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-8 text-buchl-green">
            {{ $t('about.sections.group.title') }}
          </h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-lg text-white/90 leading-relaxed font-semibold">
              {{ $t('about.sections.group.slogan') }}
            </p>
            <p class="text-lg text-white/90 leading-relaxed mt-4">
              {{ $t('about.sections.group.description1') }}
            </p>
            <p class="text-lg text-white/90 leading-relaxed mt-4">
              {{ $t('about.sections.group.description2') }}
            </p>
            <p class="text-lg text-white/90 leading-relaxed mt-4">
              {{ $t('about.sections.group.description3') }}
            </p>
            <p class="text-lg text-white/90 leading-relaxed mt-4 font-semibold">
              {{ $t('about.sections.group.mission') }}
            </p>
          </div>
        </div>

        <!-- Animált statisztikák -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12" ref="statsRef">
          <!-- Telephelyek száma -->
          <div class="text-center">
            <div class="mb-6">
              <UIcon name="i-lucide-building-2" class="text-6xl text-buchl-green mx-auto mb-4" />
            </div>
            <div class="text-5xl sm:text-6xl font-bold text-buchl-green mb-2" ref="telephelyRef">
              {{ telephelyCount }}
            </div>
            <div class="text-xl font-medium text-white/90">
              {{ $t('about.sections.group.stats.locations') }}
            </div>
          </div>

          <!-- Munkatársak száma -->
          <div class="text-center">
            <div class="mb-6">
              <UIcon name="i-lucide-users" class="text-6xl text-buchl-green mx-auto mb-4" />
            </div>
            <div class="text-5xl sm:text-6xl font-bold text-buchl-green mb-2" ref="munkatarsRef">
              {{ munkatarsCount }}
            </div>
            <div class="text-xl font-medium text-white/90">
              {{ $t('about.sections.group.stats.employees') }}
            </div>
          </div>

          <!-- Napi hulladék mennyiség -->
          <div class="text-center">
            <div class="mb-6">
              <UIcon name="i-lucide-recycle" class="text-6xl text-buchl-green mx-auto mb-4" />
            </div>
            <div class="text-5xl sm:text-6xl font-bold text-buchl-green mb-2">
              {{ hulladekSzallitasCount }}
            </div>
            <div class="text-xl font-medium text-white/90">
              {{ $t('about.sections.group.stats.dailyTransport') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner logók szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            {{ $t('about.sections.group.title') }}
          </h2>
          <p class="text-lg text-gray-700">
            {{ $t('about.sections.group.companyList') }}
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          <!-- BÜCHL Gruppe -->
          <div class="flex justify-center">
            <a href="https://www.buechl-gruppe.de/hu/" target="_blank">
              <img 
                src="/media/logos/Logo-BUeCHL-Gruppe_weisser-Hintergrund_Firmenstruktur-546x209-1-300x115.jpg" 
                alt="BÜCHL Gruppe"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- BÜCHL Entsorgung -->
          <div class="flex justify-center">
            <a href="https://www.buechl.de/" target="_blank">
              <img 
                src="/media/logos/Logo-BUeCHL-Entsorgung_weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="BÜCHL Entsorgung"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- BÜCHL Hungaria -->
          <div class="flex justify-center">
            <a href="https://www.buechl.hu/" target="_blank">
              <img 
                src="/media/logos/Logo-BUeCHL-Hungaria_weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="BÜCHL Hungaria"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- BÜCHL Verwaltung -->
          <div class="flex justify-center">
            <a href="https://www.buechl-gruppe.de/hu/" target="_blank">
              <img 
                src="/media/logos/Logo-BUeCHL-Verwaltung_weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="BÜCHL Verwaltung"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- PRIOREC -->
          <div class="flex justify-center">
            <a href="https://priorec.de/" target="_blank">
              <img 
                src="/media/logos/PRIOREC.jpg" 
                alt="PRIOREC"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- inas -->
          <div class="flex justify-center">
            <a href="https://www.inas-institut.de/" target="_blank">
              <img 
                src="/media/logos/inas-Institut.jpg" 
                alt="inas Institut"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- SEG Solarenergie -->
          <div class="flex justify-center">
            <a href="https://www.seg-solarenergie.de/" target="_blank">
              <img 
                src="/media/logos/Logo-SEG-Solarenergie_weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="SEG Solarenergie"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- TADAK NETT -->
          <div class="flex justify-center">
            <a href="https://tadaknett.hu/" target="_blank">
              <img 
                src="/media/logos/Logo-TADAK-NETT-Kft._weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="TADAK NETT"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- GEOS -->
          <div class="flex justify-center">
            <a href="https://www.geos-energie.de/" target="_blank">
              <img 
                src="/media/logos/Logo-GEOS_weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="GEOS"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- LOGEX -->
          <div class="flex justify-center">
            <a href="https://www.logex.de/" target="_blank">
              <img 
                src="/media/logos/Logo-LOGEX_weisser-Hintergrund_Firmenstruktur-546x209-1.jpg" 
                alt="LOGEX"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- DONAU BAUSCHUTT -->
          <div class="flex justify-center">
            <a href="https://www.donaubauschutt.de/" target="_blank">
              <img 
                src="/media/logos/BH_01.jpg" 
                alt="DONAU BAUSCHUTT"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- Glasrecycling Neuburg -->
          <div class="flex justify-center">
            <a href="http://www.gr-neuburg.de/" target="_blank">
              <img 
                src="/media/logos/BH-02.jpg" 
                alt="Glasrecycling Neuburg"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- BioIN -->
          <div class="flex justify-center">
            <a href="http://www.bioin-gmbh.de/" target="_blank">
              <img 
                src="/media/logos/BH-08.jpg" 
                alt="BioIN"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <!-- ELOGplan -->
          <div class="flex justify-center">
            <a href="https://www.elogplan.com/" target="_blank">
              <img 
                src="/media/logos/BH-11.jpg" 
                alt="ELOGplan"
                class="max-h-16 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hírek szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            {{ $t('about.sections.newsSection.title') }}
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            {{ $t('about.sections.newsSection.subtitle') }}
          </p>
        </div>
        
        <div class="text-center">
          <UButton
            to="/hirek"
            size="lg"
            icon="i-heroicons-newspaper"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
          >
            {{ $t('about.sections.newsSection.viewAllNews') }}
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const localePath = useLocalePath()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(2) // ID: 2 - Rólunk

// Company CTA adat lekérése Directusból
const { cta: companyCta } = useCta(4) // ID: 4 - BÜCHL HUNGARIA Kft. szekció

// SEO meta adatok
useSeoMeta({
  title: 'Rólunk - BÜCHL HUNGARIA',
  description: 'A BÜCHL HUNGARIA Kft. Magyarország egyik meghatározó szakértője az ipari hulladékkezelés területén. 2000 óta kínálunk megbízható, innovatív és fenntartható hulladékgazdálkodási megoldásokat.',
  keywords: 'BÜCHL HUNGARIA, ipari hulladékkezelés, veszélyes hulladék, hulladékgazdálkodás, környezetvédelem, fenntarthatóság, autóipar'
})

// Animált számok
const telephelyCount = ref(0)
const munkatarsCount = ref(0)
const hulladekSzallitasCount = ref(0)
// A hulladékelőkezelés változó már nem szükséges

const telephelyRef = ref(null)
const munkatarsRef = ref(null)
const hulladekSzallitasRef = ref(null)
// A hulladékelőkezelés ref már nem szükséges
const statsRef = ref(null)

// Számláló animáció
const animateCounter = (start: number, end: number, duration: number, callback: (value: number) => void) => {
  const startTime = Date.now()
  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.floor(start + (end - start) * progress)
    callback(current)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  animate()
}

// Intersection Observer a statisztikák szekció figyeléséhez
let observer: IntersectionObserver | null = null
let animationStarted = false

const startAnimations = () => {
  if (animationStarted) return
  animationStarted = true
  
  // Telephelyek animálása (5 telephely, 3 másodperc alatt)
  animateCounter(0, 5, 3000, (value) => {
    telephelyCount.value = value
  })
  
  // Munkatársak animálása (320 fő, 2.5 másodperc alatt)
  setTimeout(() => {
    animateCounter(0, 320, 2500, (value) => {
      munkatarsCount.value = value
    })
  }, 500)
  
  // Hulladékszálítás animálása (615 tonna naponta, 2 másodperc alatt)
  setTimeout(() => {
    animateCounter(0, 615, 2000, (value) => {
      hulladekSzallitasCount.value = value
    })
  }, 1000)
  
  // Hulladékelőkezelés animáció eltávolítva - már csak szállítás
}

onMounted(() => {
  // Intersection Observer beállítása
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          startAnimations()
        }
      })
    },
    {
      threshold: 0.3
    }
  )
  
  // Statisztikák szekció megfigyelése
  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
})

// Cleanup
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
