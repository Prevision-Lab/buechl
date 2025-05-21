<template>
  <div v-if="isLoading">
    <div class="flex justify-center items-center h-screen">
      <UButton loading>Tartalom betöltése...</UButton>
    </div>
  </div>
  
  <div v-else>
    <!-- Hero szekció -->
    <section class="relative h-[70vh] flex items-center overflow-hidden">
      <!-- Kép háttér -->
      <template v-if="pageData.hero.backgroundType === 'image'">
        <div 
          class="absolute inset-0"
          :style="{
            backgroundImage: `url('${pageData.hero.backgroundImage || '/images/hero-placeholder.jpg'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        ></div>
      </template>
      
      <!-- Videó háttér -->
      <template v-else-if="pageData.hero.backgroundType === 'video'">
        <video
          ref="heroVideo"
          class="absolute inset-0 object-cover w-full h-full"
          :src="pageData.hero.backgroundVideo"
          autoplay
          muted
          loop
          playsinline
          :currentTime="pageData.hero.videoStartTime || 0"
        ></video>
      </template>
      
      <!-- Alapértelmezett háttér, ha nincs megadva típus -->
      <template v-else>
        <div 
          class="absolute inset-0"
          :style="{
            backgroundImage: `url('${pageData.hero.backgroundImage || '/images/hero-placeholder.jpg'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        ></div>
      </template>
      
      <!-- Overlay -->
      <div 
        class="absolute inset-0 bg-buchl-blue"
        :style="{ opacity: pageData.hero.overlayOpacity || 0.6 }"
      ></div>
      
      <!-- Tartalom -->
      <div class="container mx-auto px-4 relative z-10 text-white">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {{ pageData.hero.title }}
          </h1>
          <p class="text-xl md:text-2xl mb-6">{{ pageData.hero.subtitle }}</p>
          <p class="text-lg mb-8">{{ pageData.hero.description }}</p>
          
          <div class="flex flex-wrap gap-4">
            <UButton
              v-for="(button, index) in pageData.hero.ctaButtons"
              :key="index"
              :to="button.url"
              :color="button.type === 'primary' ? 'primary' : 'white'"
              class="rounded-none"
              :class="button.type === 'secondary' ? 'text-buchl-blue' : ''"
            >
              {{ button.label }}
            </UButton>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Rólunk röviden szekció -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-2">{{ pageData.rolunkRoviden.title }}</h2>
            <p class="text-xl text-gray-600 mb-6">{{ pageData.rolunkRoviden.subtitle }}</p>
            <p class="mb-8">{{ pageData.rolunkRoviden.content }}</p>
            
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div 
                v-for="(stat, index) in pageData.rolunkRoviden.stats" 
                :key="index"
                class="text-center"
              >
                <p class="text-3xl font-bold text-buchl-blue">{{ stat.value }}</p>
                <p class="text-gray-600">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img 
              :src="pageData.rolunkRoviden.image || '/images/about-placeholder.jpg'" 
              alt="BÜCHL HUNGARIA telephely"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Szolgáltatások szekció -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-2">{{ pageData.szolgaltatasok.title }}</h2>
          <p class="text-xl text-gray-600 mb-2">{{ pageData.szolgaltatasok.subtitle }}</p>
          <p class="max-w-3xl mx-auto">{{ pageData.szolgaltatasok.description }}</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <UCard
            v-for="(service, index) in pageData.szolgaltatasok.items"
            :key="index"
            :ui="{
              root: 'shadow-sm hover:shadow-md transition-all duration-300',
              header: 'p-0 sm:p-0',
            }"
          >
            <template #header>
              <div class="bg-buchl-blue text-white p-4 flex justify-center items-center">
                <UIcon :name="service.icon" class="w-12 h-12" />
              </div>
            </template>
            
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            
            <template #footer>
              <NuxtLink :to="service.url" class="text-buchl-blue hover:underline font-medium">
                Részletek
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 inline-block ml-1" />
              </NuxtLink>
            </template>
          </UCard>
        </div>
        
        <div class="text-center">
          <UButton
            :to="pageData.szolgaltatasok.ctaButton.url"
            color="primary"
            class="rounded-none"
          >
            {{ pageData.szolgaltatasok.ctaButton.label }}
          </UButton>
        </div>
      </div>
    </section>
    
    <!-- Fenntarthatóság szekció -->
    <section 
      class="py-16 relative"
      :style="{
        backgroundImage: `url('${pageData.fenntarthatosag.backgroundImage || '/images/sustainability-placeholder.jpg'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="absolute inset-0 bg-buchl-blue bg-opacity-80"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-2">{{ pageData.fenntarthatosag.title }}</h2>
          <p class="text-xl mb-6">{{ pageData.fenntarthatosag.subtitle }}</p>
          <p class="mb-8">{{ pageData.fenntarthatosag.description }}</p>
          
          <div class="grid grid-cols-2 gap-8 mb-10">
            <div 
              v-for="(stat, index) in pageData.fenntarthatosag.stats" 
              :key="index"
              class="text-center p-6 bg-white bg-opacity-10 rounded-lg"
            >
              <p class="text-4xl font-bold text-buchl-green mb-2">{{ stat.value }}</p>
              <p class="text-lg">{{ stat.label }}</p>
            </div>
          </div>
          
          <UButton
            :to="pageData.fenntarthatosag.ctaButton.url"
            color="secondary"
            class="rounded-none text-buchl-blue"
          >
            {{ pageData.fenntarthatosag.ctaButton.label }}
          </UButton>
        </div>
      </div>
    </section>
    
    <!-- Hírek szekció -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-2">{{ pageData.hirek.title }}</h2>
          <p class="text-xl text-gray-600">{{ pageData.hirek.subtitle }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <UCard
            v-for="(article, index) in pageData.hirek.articles"
            :key="index"
            :ui="{
              root: 'shadow-none ring-1 ring-neutral-300 hover:shadow-sm transition-all duration-300',
              header: 'p-0 sm:p-0',
            }"
          >
            <template #header>
              <div class="overflow-hidden rounded-t-md">
                <img
                  :src="article.image || '/images/news-placeholder.jpg'"
                  :alt="article.title"
                  class="w-full h-48 object-cover"
                />
              </div>
            </template>
            
            <div class="text-sm text-gray-500 mb-2">{{ new Date(article.date).toLocaleDateString('hu-HU') }}</div>
            <h3 class="text-xl font-semibold mb-2">{{ article.title }}</h3>
            <p class="text-gray-600">{{ article.excerpt }}</p>
            
            <template #footer>
              <NuxtLink :to="article.url" class="text-buchl-blue hover:underline font-medium">
                Tovább a hírhez
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 inline-block ml-1" />
              </NuxtLink>
            </template>
          </UCard>
        </div>
        
        <div class="text-center">
          <UButton
            :to="pageData.hirek.ctaButton.url"
            color="white"
            class="rounded-none border border-buchl-blue text-buchl-blue"
          >
            {{ pageData.hirek.ctaButton.label }}
          </UButton>
        </div>
      </div>
    </section>
    
    <!-- Partnerek szekció -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-2">{{ pageData.partnerek.title }}</h2>
          <p class="text-xl text-gray-600 mb-2">{{ pageData.partnerek.subtitle }}</p>
          <p class="max-w-3xl mx-auto">{{ pageData.partnerek.description }}</p>
        </div>
        
        <div class="flex flex-wrap justify-center items-center gap-12">
          <a 
            v-for="(partner, index) in pageData.partnerek.logos"
            :key="index"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            class="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              :src="partner.image || '/images/partner-placeholder.png'" 
              :alt="partner.name"
              class="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
    
    <!-- CTA szekció -->
    <section 
      class="py-16 relative"
      :style="{
        backgroundImage: `url('${pageData.cta.backgroundImage || '/images/cta-placeholder.jpg'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-white text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-4">{{ pageData.cta.title }}</h2>
          <p class="text-lg mb-8">{{ pageData.cta.description }}</p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <UButton
              v-for="(button, index) in pageData.cta.ctaButtons"
              :key="index"
              :to="button.url"
              :color="button.type === 'primary' ? 'primary' : 'white'"
              class="rounded-none"
              :class="button.type === 'secondary' ? 'text-buchl-blue' : ''"
            >
              {{ button.label }}
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getPageContent } = useContent()
const isLoading = ref(true)
const pageData = ref<any>({})
const heroVideo = ref<HTMLVideoElement | null>(null)

// Markdown tartalom betöltése
onMounted(async () => {
  try {
    const result = await getPageContent('oldaltervek/fooldal')
    pageData.value = result.data
    console.log('Markdown adatok betöltve:', pageData.value)
    isLoading.value = false
    
    // Videó kezdeti időpont beállítása, ha szükséges
    nextTick(() => {
      if (heroVideo.value && pageData.value.hero.backgroundType === 'video') {
        // Videó időpontjának beállítása - ha 0, akkor az elejétől indul
        const startTime = pageData.value.hero.videoStartTime || 0
        if (typeof startTime === 'number' && startTime > 0) {
          heroVideo.value.currentTime = startTime
        }
        
        // Videó lejátszás indítása
        heroVideo.value.play().catch(err => {
          console.warn('Videó automatikus lejátszása nem sikerült:', err)
        })
      }
    })
  } catch (error) {
    console.error('Hiba történt a Markdown betöltésekor:', error)
    isLoading.value = false
  }
})

// SEO beállítások
useHead(() => ({
  title: pageData.value?.seoTitle || 'BÜCHL HUNGARIA',
  meta: [
    {
      name: 'description',
      content: pageData.value?.seoDescription || 'BÜCHL HUNGARIA weboldal'
    }
  ]
}))
</script>