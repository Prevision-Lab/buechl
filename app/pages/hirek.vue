<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Hírek és Események"
      subtitle="Maradjon naprakész legfrissebb híreinkkel, eseményeinkkel és innovációinkkal"
      image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=800&fit=crop"
      bg-color="blue"
      :primary-cta="{
        label: 'Iratkozzon fel hírlevelünkre',
        to: '#hirlevel'
      }"
    />

    <!-- Legfrissebb hírek szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Legfrissebb híreink
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Kövesse nyomon a BÜCHL Hungaria legújabb fejlesztéseit, projektjeit és eseményeit.
          </p>
        </div>

        <!-- 2x2 Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Hír 1: Új hulladékkezelő berendezés -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=300&fit=crop"
                alt="Új hulladékkezelő berendezés"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Technológia
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
                <span>2025. január 12.</span>
                <span class="mx-2">•</span>
                <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1" />
                <span>5 perc olvasás</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-buchl-blue transition-colors">
                Új hulladékkezelő berendezés üzembe helyezése Győrben
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                A legkorszerűbb technológiát képviselő folyadékkezelő berendezésünk üzembe helyezésével jelentősen megnöveltük újrahasznosítási kapacitásunkat.
              </p>
              <UButton
                to="/hirek/uj-hulladekkezelo-berendezes"
                variant="ghost"
                color="primary"
                icon="i-heroicons-arrow-right"
                :trailing="true"
                class="group-hover:translate-x-1 transition-transform duration-200"
              >
                Részletek
              </UButton>
            </div>
          </div>

          <!-- Hír 2: Fenntarthatósági Expo -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=300&fit=crop"
                alt="Fenntarthatósági Expo"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  Események
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
                <span>2025. január 10.</span>
                <span class="mx-2">•</span>
                <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1" />
                <span>3 perc olvasás</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-buchl-blue transition-colors">
                BÜCHL a Fenntarthatósági Expón
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                Sikeresen képviseltük a hulladékgazdálkodási szektor innovációit a 2025-ös expón. Bemutattuk legújabb környezetbarát megoldásainkat.
              </p>
              <UButton
                to="/hirek/fenntarthatosagi-expo-2025"
                variant="ghost"
                color="primary"
                icon="i-heroicons-arrow-right"
                :trailing="true"
                class="group-hover:translate-x-1 transition-transform duration-200"
              >
                Részletek
              </UButton>
            </div>
          </div>

          <!-- Hír 3: ELOG SYSTEM -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop"
                alt="ELOG SYSTEM platform"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Innováció
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
                <span>2025. január 8.</span>
                <span class="mx-2">•</span>
                <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1" />
                <span>4 perc olvasás</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-buchl-blue transition-colors">
                Új ELOG SYSTEM® platform bevezetése
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                A teljesen papírmentes hulladékgazdálkodási rendszer új szintre emeli logisztikánkat. Digitális megoldások a hatékonyabb munkáért.
              </p>
              <UButton
                to="/hirek/elog-system-bevezetes"
                variant="ghost"
                color="primary"
                icon="i-heroicons-arrow-right"
                :trailing="true"
                class="group-hover:translate-x-1 transition-transform duration-200"
              >
                Részletek
              </UButton>
            </div>
          </div>

          <!-- Hír 4: ISO tanúsítvány -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&h=300&fit=crop"
                alt="ISO tanúsítvány"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Minőség
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
                <span>2025. január 5.</span>
                <span class="mx-2">•</span>
                <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1" />
                <span>2 perc olvasás</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-buchl-blue transition-colors">
                Újabb ISO tanúsítvány megszerzése
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                Büszkék vagyunk, hogy megszereztük az ISO 45001:2018 tanúsítványt. Ez újabb elismerése elkötelezettségünknek a minőség iránt.
              </p>
              <UButton
                to="/hirek/iso-tanusitvany"
                variant="ghost"
                color="primary"
                icon="i-heroicons-arrow-right"
                :trailing="true"
                class="group-hover:translate-x-1 transition-transform duration-200"
              >
                Részletek
              </UButton>
            </div>
          </div>
        </div>

        <!-- Összes hír gomb -->
        <div class="text-center mt-12">
          <UButton
            size="lg"
            variant="outline"
            color="primary"
            icon="i-heroicons-newspaper"
            class="rounded-none border-2 px-8"
          >
            Összes hír megtekintése
          </UButton>
        </div>
      </div>
    </section>


    <!-- Hírlevél feliratkozás -->
    <section id="hirlevel" class="py-16 bg-buchl-blue text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Iratkozzon fel hírlevelünkre
        </h2>
        <p class="text-xl text-white/80 mb-10">
          Legyen az elsők között, akik értesülnek legfrissebb híreinkről, 
          új szolgáltatásainkról és iparági fejlesztéseinkről.
        </p>
        
        <form class="max-w-md mx-auto">
          <div class="flex gap-4">
            <UInput 
              placeholder="Az Ön email címe"
              type="email"
              size="lg"
              class="flex-1"
            />
            <UButton 
              type="submit"
              size="lg"
              color="neutral"
              class="bg-buchl-green text-buchl-blue hover:bg-buchl-green/90 rounded-none px-8"
            >
              Feliratkozás
            </UButton>
          </div>
          <p class="text-sm text-white/60 mt-4">
            Az adatvédelmi szabályzatot elfogadva iratkozik fel. Bármikor leiratkozhat.
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Hírek oldal

const categories = [
  { label: 'Összes kategória', value: 'all' },
  { label: 'Technológia', value: 'technology' },
  { label: 'Fenntarthatóság', value: 'sustainability' },
  { label: 'Események', value: 'events' },
  { label: 'Innováció', value: 'innovation' },
  { label: 'Közösség', value: 'community' },
  { label: 'Elismerés', value: 'recognition' }
]

const years = [
  { label: 'Összes év', value: 'all' },
  { label: '2025', value: '2025' },
  { label: '2024', value: '2024' },
  { label: '2023', value: '2023' }
]
</script>
