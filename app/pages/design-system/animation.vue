<template>
  <div class="container mx-auto p-8">
    <!-- Főcím presettel -->
    <div 
      v-motion-fade-visible
      class="mb-8"
    >
      <h1 class="text-3xl font-bold text-buchl-blue">Animáció</h1>
    </div>

    <!-- Animációs bemutatás -->
    <section class="mb-16 bg-white p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold border-b pb-2 border-gray-200">Animációs lehetőségek</h2>
        <p class="mt-2 text-gray-600">A Vue.js alapú animációk segítségével dinamikus felhasználói élményt hozhatunk létre. Az alábbiakban néhány példát láthat.</p>
      </div>
    </section>

    <!-- Szolgáltatás kártyák -->
    <section class="mb-16">
      <div 
        v-motion-fade-visible
        class="mb-6"
      >
        <h2 class="text-2xl font-semibold">Szolgáltatás Kártyák</h2>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: index * 100
            }
          }"
          :hovered="{ 
            y: -5,
            shadow: 'xl'
          }"
          class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
          <div 
            v-motion
            :hovered="{ scale: 1.05 }"
            class="h-48 overflow-hidden"
          >
            <img 
              :src="service.image" 
              :alt="service.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-buchl-blue">
              {{ service.title }}
            </h3>
            <p class="text-gray-600">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Interaktív elemek -->
    <section class="mb-16">
      <div 
        v-motion-fade-visible
        class="mb-6"
      >
        <h2 class="text-2xl font-semibold">Interaktív Elemek</h2>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Gomb animációk -->
        <div
          v-motion-slide-visible-left
          class="bg-gray-50 p-6 rounded-lg"
        >
          <h3 class="text-lg font-semibold mb-4">Gomb Animációk</h3>
          
          <div class="space-y-4">
            <div
              v-motion
              :hovered="{ scale: 1.05 }"
              :tapped="{ scale: 0.95 }"
              class="inline-block"
            >
              <UButton color="primary" size="lg">
                Hover & Tap Animáció
              </UButton>
            </div>
            
            <div
              v-motion
              :hovered="{ rotate: 5 }"
              :tapped="{ rotate: -5 }"
              class="inline-block ml-4"
            >
              <UButton color="secondary" size="lg" variant="soft">
                Forgás Animáció
              </UButton>
            </div>
          </div>
        </div>
        
        <!-- Progress indikátor -->
        <div
          v-motion-slide-visible-right
          class="bg-gray-50 p-6 rounded-lg"
        >
          <h3 class="text-lg font-semibold mb-4">Progress Animáció</h3>
          
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Projekt haladás</p>
              <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  v-motion
                  :initial="{ scaleX: 0 }"
                  :enter="{ 
                    scaleX: 0.75,
                    transition: {
                      duration: 1500
                    }
                  }"
                  class="h-full bg-buchl-green origin-left"
                />
              </div>
            </div>
            
            <div>
              <p class="text-sm text-gray-600 mb-2">Betöltés</p>
              <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  v-motion
                  :initial="{ x: '-100%' }"
                  :enter="{ 
                    x: '0%',
                    transition: {
                      duration: 2000
                    }
                  }"
                  class="h-full bg-sapphire-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scroll-triggered animációk -->
    <section class="mb-16">
      <div 
        v-motion-fade-visible
        class="mb-6"
      >
        <h2 class="text-2xl font-semibold">Scroll-triggered Animációk</h2>
      </div>
      
      <div class="space-y-8">
        <div
          v-for="(item, index) in scrollItems"
          :key="index"
          v-motion-slide-visible-once-left
          :delay="index * 200"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.content }}</p>
        </div>
      </div>
    </section>

    <!-- Preset animációk bemutató -->
    <section class="mb-16">
      <div 
        v-motion-fade-visible
        class="mb-6"
      >
        <h2 class="text-2xl font-semibold">Preset Animációk</h2>
      </div>
      
      <div class="grid md:grid-cols-4 gap-4">
        <div
          v-motion-fade-visible
          class="bg-buchl-blue text-white p-4 rounded text-center shadow-md"
        >
          v-motion-fade-visible
        </div>
        
        <div
          v-motion-pop-visible
          class="bg-buchl-green text-white p-4 rounded text-center shadow-md"
        >
          v-motion-pop-visible
        </div>
        
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
          class="bg-yellow-500 text-black p-6 rounded text-center shadow-lg border-2 border-yellow-300 font-semibold"
        >
          v-motion-slide-visible-bottom<br/>
          <small class="text-yellow-900">(Alulról csúszik be)</small>
        </div>
        
        <div
          v-motion-roll-visible-left
          class="bg-gray-800 text-white p-4 rounded text-center shadow-md"
        >
          v-motion-roll-visible-left
        </div>
      </div>
      
      <!-- Magyarázó szöveg -->
      <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p class="text-sm text-gray-600">
          <strong>Fontos:</strong> Az animációk csak akkor lépnek életbe, amikor az elemek a viewport-ba kerülnek. 
          Lapozzon le és fel a fenti kártyáktól, hogy újra megtekintse az animációkat.
        </p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Animációs komponens adatok
const services = [
  {
    id: 1,
    title: 'Hulladékkezelés',
    description: 'Környezetbarát megoldások ipari hulladékok kezelésére',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Újrahasznosítás',
    description: 'Innovatív újrahasznosítási technológiák',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Tanácsadás',
    description: 'Szakértői támogatás fenntarthatósági projektekhez',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
  }
]

// Scroll demo elemek
const scrollItems = [
  {
    title: 'Fenntarthatóság',
    content: 'A BÜCHL elkötelezett a környezetvédelem és a fenntartható fejlődés mellett.'
  },
  {
    title: 'Innováció',
    content: 'Folyamatosan fejlesztjük technológiáinkat a hatékonyabb megoldások érdekében.'
  },
  {
    title: 'Partnerség',
    content: 'Hosszú távú partneri kapcsolatokat építünk ügyfeleinkkel.'
  },
  {
    title: 'Minőség',
    content: 'Minden szolgáltatásunkban a legmagasabb minőségi standardokat követjük.'
  }
]
</script>

<style scoped>
/* Néhány egyéni stílus ha szükséges */
.text-buchl-blue {
  color: #002F5C;
}

.bg-buchl-blue {
  background-color: #002F5C;
}

.bg-buchl-green {
  background-color: #00F189;
}
</style>