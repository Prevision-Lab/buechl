<template>
  <div>
    <!-- Hero szekció - Ferde stílusú, nagy hatású megjelenítéssel -->
    <BuchlHero
      title="Egy ötlettel mindig tovább"
      subtitle="Hulladékkezelés a fenntartható jövőért."
      image="/media/images/elektromos autó.jpg"
      bg-color="blue"
      title-font="permanent-marker"
      :skewed="true"
      :primary-cta="{
        label: 'Szolgáltatásaink',
        to: '/szolgaltatasok'
      }"
      :secondary-cta="{
        label: 'Kapcsolatfelvétel',
        to: '/kapcsolat'
      }"
    />

        <!-- Rólunk röviden szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            BÜCHL Hungaria Kft.
                        </h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-700">
                                A BÜCHL Hungaria több mint 25 éves tapasztalattal rendelkező vezető hulladékgazdálkodási vállalat Magyarországon, amely átfogó megoldásokat kínál az ipari ügyfelek számára.
                            </p>
                            <p class="text-lg text-gray-700">
                                A németországi BÜCHL cégcsoport tagjaként közel 75 éves szakmai háttérrel rendelkezünk a fenntartható hulladékgazdálkodás területén.
                            </p>
                            <p class="text-lg text-gray-700">
                                Célunk, hogy innovatív megoldásainkkal hozzájáruljunk a körforgásos gazdaság megvalósításához és ügyfeleink környezetvédelmi célkitűzéseinek eléréséhez.
                            </p>
                        </div>
            <div class="mt-8">
              <UButton
                to="/rolunk"
                color="primary"
                class="rounded-none"
                icon="i-heroicons-arrow-right"
                :trailing="true"
              >
                Többet a vállalatról
              </UButton>
            </div>
          </div>
          <div ref="videoContainer" class="relative rounded-lg overflow-hidden h-[400px]">
            <video 
              ref="videoElement"
              src="/media/videos/buchl_intro.mp4" 
              poster="/media/images/buchl_intro_poster.jpg"
              :autoplay="false"
              muted
              loop
              playsinline
              preload="auto"
              class="absolute inset-0 w-full h-full object-cover"
              @error="onVideoError"
              @loadeddata="onVideoLoadedData"
              @loadstart="onVideoLoadStart"
              @canplay="onVideoCanPlay"
              @click="toggleVideo"
            >
              <source src="/media/videos/buchl_intro.mp4" type="video/mp4">
            </video>
            <!-- Fallback kép, ha a videó nem tölt be -->
            <img 
              v-if="videoError || !videoCanPlay"
              src="/media/images/buchl_intro_poster.jpg" 
              alt="BÜCHL Hungaria Kft." 
              class="absolute inset-0 w-full h-full object-cover"
            >
            <!-- Play gomb overlay -->
            <div 
              v-if="!isVideoPlaying && !videoError" 
              class="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              @click="playVideo"
            >
              <div class="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                <UIcon name="i-heroicons-play" class="text-buchl-blue text-3xl ml-1" />
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-buchl-blue/80 p-4 text-white">
              <p class="font-semibold">BÜCHL Hungaria Kft.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Szolgáltatások szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Szolgáltatásaink
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Átfogó hulladékgazdálkodási megoldásokat kínálunk a hulladékkezelés, hulladékgyűjtés és -szállítás, környezetvédelmi szolgáltatások, valamint a tervezési és szaktanácsadási feladatok területén.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          <!-- 1. Szolgáltatás kártya -->
          <UCard class="h-full">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <UIcon name="i-heroicons-cog-8-tooth" class="text-primary-600 dark:text-primary-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Hulladékkezelés</h3>
              </div>
            </template>
            <div class="flex-1 flex items-center">
              <p class="text-gray-600 dark:text-gray-400">
                Korszerű technológiákkal biztosítjuk a hulladékok környezetbarát kezelését és feldolgozását.
              </p>
            </div>
          </UCard>

          <!-- 2. Szolgáltatás kártya -->
          <UCard class="h-full">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <UIcon name="i-heroicons-truck" class="text-green-600 dark:text-green-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Hulladékgyűjtés és -szállítás</h3>
              </div>
            </template>
            <div class="flex-1 flex items-center">
              <p class="text-gray-600 dark:text-gray-400">
                Specializált járműparkunk biztosítja a biztonságos és megbízható hulladékszállítást.
              </p>
            </div>
          </UCard>

          <!-- 3. Szolgáltatás kártya -->
          <UCard class="h-full">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <UIcon name="i-heroicons-shield-check" class="text-blue-600 dark:text-blue-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Környezetvédelmi szolgáltatások</h3>
              </div>
            </template>
            <div class="flex-1 flex items-center">
              <p class="text-gray-600 dark:text-gray-400">
                Átfogó környezetvédelmi megoldások a fenntartható működésért.
              </p>
            </div>
          </UCard>

          <!-- 4. Szolgáltatás kártya -->
          <UCard class="h-full">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                  <UIcon name="i-heroicons-light-bulb" class="text-yellow-600 dark:text-yellow-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Tervezés és szaktanácsadás</h3>
              </div>
            </template>
            <div class="flex-1 flex items-center">
              <p class="text-gray-600 dark:text-gray-400">
                Szakértői tanácsadás és tervezés a hatékony hulladékgazdálkodásért.
              </p>
            </div>
          </UCard>
        </div>

        <div class="text-center mt-12">
          <UButton
            to="/szolgaltatasok"
            color="neutral"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
            icon="i-heroicons-arrow-right"
            :trailing="true"
            size="lg"
          >
            Összes szolgáltatás
          </UButton>
        </div>
      </div>
    </section>

    <!-- Számok, statisztikák szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            Számokban
          </h2>
          <p class="text-lg text-white/80 max-w-3xl mx-auto">
            Széleskörű szolgáltatási spektrumot biztosítunk ügyfeleink számára.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 1. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">320</div>
            <div class="text-xl text-white/90">fő munkatárs</div>
          </div>

          <!-- 2. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">közel 40</div>
            <div class="text-xl text-white/90">gépjárműből álló flotta</div>
          </div>

          <!-- 3. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">25</div>
            <div class="text-xl text-white/90">év a piacon</div>
          </div>

          <!-- 4. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">10</div>
            <div class="text-xl text-white/90">korszerű hulladékkezelő berendezés</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fenntarthatósági szekció Hero komponenssel -->
    <section class="pb-0">
      <div class="rounded-lg overflow-hidden">
        <BuchlHero
          title="A fenntarthatóság a küldetésünk"
          subtitle="Együtt egy tisztább jövőért."
          image="/media/images/elektromos autó.jpg"
          bg-color="green"
          :primary-cta="{
            label: 'Fenntarthatóság',
            to: '/fenntarthatosag'
          }"
        />
      </div>
    </section>

    <!-- Hírek szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-2">
              Aktuális hírek
            </h2>
            <p class="text-lg text-gray-700">
              Legfrissebb híreink és eseményeink
            </p>
          </div>
          <div class="hidden md:block">
            <UButton
              to="/hirek"
              color="primary"
              variant="outline"
              class="rounded-none"
              icon="i-heroicons-arrow-right"
              :trailing="true"
            >
              Összes hír
            </UButton>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 1. Blog poszt -->
          <BuchlBlogPost
            title="Új hulladékkezelő berendezés a győri telephelyen"
            description="A legkorszerűbb technológiát képviselő folyadékkezelő berendezés üzembe helyezésével jelentősen nőtt az újrahasznosítási arányunk."
            image="/media/images/02.jpg"
            to="/hirek/uj-hulladekkezelo-berendezes"
            category="Technológia"
            date="2025-05-10"
            reading-time="3 perc olvasás"
            read-more-text="Tovább"
          />

          <!-- 2. Blog poszt -->
          <BuchlBlogPost
            title="BÜCHL a Fenntarthatósági Expón"
            description="Cégünk sikeresen képviselte a hulladékgazdálkodási szektor innovációit a 2025-ös Fenntarthatósági Expón Budapesten."
            image="/media/images/06.jpg"
            to="/hirek/fenntarthatosagi-expo-2025"
            category="Események"
            date="2025-04-25"
            reading-time="4 perc olvasás"
            read-more-text="Tovább"
          />

          <!-- 3. Blog poszt -->
          <BuchlBlogPost
            title="Elindult az új ELOG SYSTEM® digitalizációs platform"
            description="A teljesen papírmentes hulladékgazdálkodási rendszer bevezetésével új szintre emeljük a belső üzemi logisztikát."
            image="/media/images/image_123650291.JPG"
            to="/hirek/elog-system-bevezetes"
            category="Innováció"
            date="2025-04-15"
            reading-time="5 perc olvasás"
            read-more-text="Tovább"
          />
        </div>

        <div class="mt-12 text-center md:hidden">
          <UButton
            to="/hirek"
            color="primary"
            variant="outline"
            class="rounded-none"
            icon="i-heroicons-arrow-right"
            :trailing="true"
          >
            Összes hír
          </UButton>
        </div>
      </div>
    </section>


    <!-- CTA szekció -->
    <section class="py-16 bg-buchl-green text-buchl-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Ismerd meg minőségirányítási tanúsítványainkat!
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          A BÜCHL HUNGARIA Kft. büszke ISO és EMAS tanúsítványaira, amelyek bizonyítják elkötelezettségünket a minőség és környezetvédelem iránt.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/tanusitvanyok"
            color="neutral"
            size="lg"
            icon="i-heroicons-document-text"
            :trailing="true"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
          >
            Tanúsítványok megtekintése
          </UButton>
          <UButton
            to="/fenntarthatosag"
            variant="outline"
            size="lg"
            icon="i-heroicons-arrow-right"
            :trailing="true"
            class="rounded-none border-2 border-buchl-blue text-buchl-blue"
          >
            Fenntarthatóság
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Route és lifecycle imports
const $route = useRoute()

// Videó elemek referenciái
const videoElement = ref<HTMLVideoElement | null>(null)
const videoContainer = ref<HTMLDivElement | null>(null)

// Videó állapotok
const videoError = ref(false)
const videoCanPlay = ref(false)
const isVideoPlaying = ref(false)
const isVideoInViewport = ref(false)
const showPlayButton = ref(true)
const hasUserInteracted = ref(false)

// Intersection Observer a videó automatikus lejátszásához
let observer: IntersectionObserver | null = null

// Videó eseménykezelők
const onVideoError = () => {
  videoError.value = true
  showPlayButton.value = false
  console.log('Video error occurred')
}

const onVideoLoadStart = () => {
  videoCanPlay.value = false
  isVideoPlaying.value = false
  showPlayButton.value = true
}

const onVideoCanPlay = () => {
  videoCanPlay.value = true
  // Csak akkor próbáljuk meg automatikusan elindítani, ha viewport-ban van
  if (isVideoInViewport.value && !isVideoPlaying.value && !hasUserInteracted.value) {
    tryAutoplay()
  }
}

const onVideoLoadedData = () => {
  videoCanPlay.value = true
  // Csak akkor próbáljuk meg automatikusan elindítani, ha viewport-ban van
  if (isVideoInViewport.value && !isVideoPlaying.value && !hasUserInteracted.value) {
    tryAutoplay()
  }
}

// Automatikus lejátszás megkísérlése (csak viewport-ban)
const tryAutoplay = async () => {
  if (!videoElement.value || videoError.value || !isVideoInViewport.value) return
  
  try {
    await videoElement.value.play()
    isVideoPlaying.value = true
    showPlayButton.value = false
  } catch (error) {
    console.log('Autoplay was prevented:', error)
    isVideoPlaying.value = false
    showPlayButton.value = true
  }
}

// Manuális videó lejátszás
const playVideo = async () => {
  if (!videoElement.value || videoError.value) return
  
  try {
    await videoElement.value.play()
    isVideoPlaying.value = true
    showPlayButton.value = false
    hasUserInteracted.value = true
  } catch (error) {
    console.error('Failed to play video:', error)
    showPlayButton.value = true
  }
}

// Videó lejátszás/szüneteltetés váltása
const toggleVideo = () => {
  if (!videoElement.value || videoError.value) return
  
  if (videoElement.value.paused) {
    playVideo()
  } else {
    videoElement.value.pause()
    isVideoPlaying.value = false
  }
}

// Video inicializálás függvény
const initializeVideo = () => {
  nextTick(() => {
    // Reset states
    videoError.value = false
    videoCanPlay.value = false
    isVideoPlaying.value = false
    isVideoInViewport.value = false
    showPlayButton.value = true
    hasUserInteracted.value = false
    
    // Intersection Observer beállítása
    if (videoContainer.value && 'IntersectionObserver' in window) {
      if (observer) {
        observer.disconnect()
      }
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVideoInViewport.value = entry.isIntersecting
            
            if (entry.isIntersecting) {
              // Ha a videó látható és betöltődött, próbáljuk meg elindítani
              if (videoCanPlay.value && !isVideoPlaying.value && !hasUserInteracted.value) {
                setTimeout(() => tryAutoplay(), 200) // Kis késleltetés
              }
            } else {
              // Ha a videó elhagyja a viewport-ot, szüneteltessük
              if (videoElement.value && !videoElement.value.paused) {
                videoElement.value.pause()
                isVideoPlaying.value = false
              }
            }
          })
        },
        {
          threshold: 0.3 // 30%-ban látható legyen
        }
      )
      
      observer.observe(videoContainer.value)
    }
    
    // Videó események figyelése
    if (videoElement.value) {
      // Force reload video source
      const src = videoElement.value.src
      videoElement.value.src = ''
      videoElement.value.load()
      videoElement.value.src = src
      videoElement.value.load()
      
      videoElement.value.addEventListener('play', () => {
        isVideoPlaying.value = true
        showPlayButton.value = false
      })
      
      videoElement.value.addEventListener('pause', () => {
        isVideoPlaying.value = false
      })
      
      videoElement.value.addEventListener('ended', () => {
        isVideoPlaying.value = false
      })
      
      // Ha a videó már betöltődött
      if (videoElement.value.readyState >= 2) {
        videoCanPlay.value = true
        setTimeout(() => {
          if (isVideoInViewport.value) {
            tryAutoplay()
          }
        }, 300)
      }
    }
  })
}

// Watch route changes
watch(() => $route.path, (newPath, oldPath) => {
  if (newPath === '/' && oldPath !== '/') {
    // Ha visszatértünk a főoldalra
    setTimeout(() => {
      initializeVideo()
    }, 100)
  }
})

// Életciklus hookok
onMounted(() => {
  initializeVideo()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
