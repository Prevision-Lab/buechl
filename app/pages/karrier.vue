<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Jelentkezés, álláslehetőségek"
      subtitle="Egy lépéssel előrébb és mindig INNOVATÍVAN, hogy együtt formáljuk a jövőt."
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=800&fit=crop"
      bg-color="blue"
      :primary-cta="{
        label: 'Aktuális állásajánlatok',
        to: '#allasok'
      }"
    />

    <!-- Csatlakozz hozzánk szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            Fedezd fel a lehetőségeidet – olyan <span class="text-buchl-green">SOKSZÍNŰEN</span>, mint amilyen a világunk!
          </h2>
          <div class="max-w-4xl mx-auto space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Mindig egyesített erővel, CSALÁDIASAN és professzionálisan. Üdvözlünk a BÜCHL-nél!
            </p>
            <p class="text-xl text-gray-700 leading-relaxed">
              Ha szeretnél csatlakozni innovatív vállalatunkhoz, számos lehetőség áll rendelkezésedre a belépéshez.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Együtt szeretnénk formálni a jövőt, és ehhez olyan haladó gondolkodású és gyakorlatos embereket keresünk, 
              akik felelősséget vállalnak, és friss ötleteikkel egy tisztább jövőért dolgoznak.
            </p>
            <p class="text-2xl font-bold text-buchl-blue mt-8">
              Légy te is a BÜCHL csoport tagja!
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
            Aktuális állásajánlatok
          </h2>
        </div>

        <!-- Aktuális állásajánlatok - Táblázatos megjelenés -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="grid grid-cols-1 divide-y divide-gray-200">
            
            <!-- Gépkocsivezető pozíció -->
            <div class="p-6 hover:bg-gray-50 transition-colors cursor-pointer" @click="openJobApplication('Gépkocsivezető')">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-buchl-blue mb-2">Gépkocsivezető (m/w/d)</h3>
                  <p class="text-gray-600 text-sm">Hulladékszállítási feladatok ellátása, ADR képesítés előny</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
                  <div class="text-center">
                    <span class="block font-medium">Típus</span>
                    <span>Operatív</span>
                  </div>
                  <div class="text-center">
                    <span class="block font-medium">Helyszín</span>
                    <span>Győr</span>
                  </div>
                  <div class="text-center lg:min-w-[100px]">
                    <UButton 
                      size="sm"
                      color="primary"
                      class="rounded-none"
                    >
                      Jelentkezés
                    </UButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- Targoncavezető pozíció -->
            <div class="p-6 hover:bg-gray-50 transition-colors cursor-pointer" @click="openJobApplication('Targoncavezető')">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-buchl-blue mb-2">Targoncavezető (m/w/d)</h3>
                  <p class="text-gray-600 text-sm">Raktári és udvari anyagmozgatási feladatok</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
                  <div class="text-center">
                    <span class="block font-medium">Típus</span>
                    <span>Operatív</span>
                  </div>
                  <div class="text-center">
                    <span class="block font-medium">Helyszín</span>
                    <span>Győr</span>
                  </div>
                  <div class="text-center lg:min-w-[100px]">
                    <UButton 
                      size="sm"
                      color="primary"
                      class="rounded-none"
                    >
                      Jelentkezés
                    </UButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- Megváltozott munkaképességű pozíció -->
            <div class="p-6 hover:bg-gray-50 transition-colors cursor-pointer" @click="openJobApplication('Megváltozott munkaképességű kolléga')">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-buchl-blue mb-2">Megváltozott munkaképességű kolléga (m/w/d)</h3>
                  <p class="text-gray-600 text-sm">Adminisztrációs és kisegítő feladatok</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
                  <div class="text-center">
                    <span class="block font-medium">Típus</span>
                    <span>Adminisztrációs</span>
                  </div>
                  <div class="text-center">
                    <span class="block font-medium">Helyszín</span>
                    <span>Győr</span>
                  </div>
                  <div class="text-center lg:min-w-[100px]">
                    <UButton 
                      size="sm"
                      color="primary"
                      class="rounded-none"
                    >
                      Jelentkezés
                    </UButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- Portás pozíció -->
            <div class="p-6 hover:bg-gray-50 transition-colors cursor-pointer" @click="openJobApplication('Portás')">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-buchl-blue mb-2">Portás (m/w/d)</h3>
                  <p class="text-gray-600 text-sm">Telephely biztonsági feladatai, beléptetés</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
                  <div class="text-center">
                    <span class="block font-medium">Típus</span>
                    <span>Biztonsági</span>
                  </div>
                  <div class="text-center">
                    <span class="block font-medium">Helyszín</span>
                    <span>Győr</span>
                  </div>
                  <div class="text-center lg:min-w-[100px]">
                    <UButton 
                      size="sm"
                      color="primary"
                      class="rounded-none"
                    >
                      Jelentkezés
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Jelentkezési információ -->
        <div class="mt-12 bg-buchl-blue/5 p-8 rounded-lg text-center">
          <h3 class="text-xl font-bold text-buchl-blue mb-4">
            Hogyan jelentkezzen?
          </h3>
          <p class="text-gray-700 mb-6">
            Az állásokra kattintva megnyílik a levelezője, ahol megadhatja jelentkezési szándékát.
          </p>
          <div class="bg-white p-4 rounded border-l-4 border-buchl-green">
            <p class="text-buchl-blue font-semibold mb-2">Közvetlen elérhetőség:</p>
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
