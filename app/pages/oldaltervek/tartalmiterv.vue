<template>
  <UContainer>
    <UPageHeader 
      title="Weboldal Tartalmi Terv"
      description="A BÜCHL Hungaria weboldal tartalmi terve és strukturája"
    >
      <template #links>
        <UButton
          color="primary"
          variant="ghost"
          to="/oldaltervek"
          icon="i-heroicons-arrow-left"
          size="sm"
        >
          Vissza az oldaltervekhez
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Főcím és intro szekció -->
      <UCard class="mb-6">
        <div class="prose dark:prose-invert max-w-none">
          <h1 class="text-3xl font-bold text-buchl-blue mb-6">BÜCHL HUNGARIA Kft. - Weboldal tartalmi terv</h1>
          
          <div class="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-buchl-blue">
            <h2 class="text-xl font-bold text-buchl-blue mb-3">Bevezetés</h2>
            <p class="text-gray-700">
              A BÜCHL HUNGARIA Kft. weboldalának (buechl.hu) továbbfejlesztése és a design tervek bemutatása érdekében készült ez a tartalmi terv. 
              A dokumentum a jelenlegi német (buechl.de) és magyar (buechl.hu) oldalak elemzése alapján készült, figyelembe véve a vállalat értékeit, 
              szolgáltatásait és pozícióját a piacon.
            </p>
            
            <p class="text-gray-700 mt-4">
              A tartalmi terv célja, hogy egységes, informatív és modern weboldalt hozzon létre, amely tükrözi a BÜCHL HUNGARIA Kft. 
              innovatív szemléletét, magas színvonalú szolgáltatásait és elkötelezettségét a fenntarthatóság és körforgásos gazdaság mellett.
            </p>
          </div>

          <!-- Tartalomjegyzék -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-buchl-blue mb-4 flex items-center">
              <UIcon name="i-heroicons-list-bullet" class="mr-2 w-6 h-6" />
              Tartalomjegyzék
            </h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <UButton
                  color="primary"
                  variant="ghost"
                  class="justify-start w-full"
                  @click="scrollToSection('sitemap')"
                >
                  1. Sitemap (Oldaltérkép)
                </UButton>
                <UButton
                  color="primary"
                  variant="ghost"
                  class="justify-start w-full"
                  @click="scrollToSection('oldaltervek')"
                >
                  2. Oldaltervek megtekintése
                </UButton>
                <UButton
                  color="primary"
                  variant="ghost"
                  class="justify-start w-full"
                  @click="scrollToSection('design')"
                >
                  3. Design elemek és funkciók
                </UButton>
              </div>
              <div>
                <UButton
                  color="primary"
                  variant="ghost"
                  class="justify-start w-full"
                  @click="scrollToSection('osszefoglalas')"
                >
                  4. Összefoglalás
                </UButton>
              </div>
            </div>
          </div>

          <!-- Sitemap szekció -->
          <div id="sitemap" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-buchl-blue mb-6 flex items-center">
              <UIcon name="i-heroicons-map" class="mr-2 w-6 h-6" />
              Sitemap (Oldaltérkép)
            </h2>
            <p class="mb-4">A weboldal javasolt struktúrája a következő hierarchiát követi:</p>
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 font-mono text-sm overflow-x-auto">
<pre>buechl.hu/
│
├── Főoldal
│
├── Vállalatunk
│   ├── Bemutatkozás
│   ├── Történetünk
│   ├── Cégcsoport
│   ├── Vezetőség
│   ├── Fenntarthatósági stratégia
│   └── Karrier
│
├── Szolgáltatások
│   ├── Ipari ügyfelek
│   │   ├── Hulladékgyűjtés és szállítás
│   │   ├── Hulladékkezelés és újrahasznosítás
│   │   ├── Belső üzemi logisztika (ELOG SYSTEM®)
│   │   └── Egyedi megoldások
│   │
│   └── Lakossági ügyfelek
│       ├── Konténer szolgáltatás
│       └── Hulladékudvar
│
├── Hulladékkezelő létesítmények
│   ├── Győr telephely
│   ├── Körösladány telephely
│   ├── Folyékony hulladék kezelés
│   ├── Veszélyes hulladék kezelés
│   └── Újrahasznosító berendezések
│
├── Innovációk
│   ├── Technológiai fejlesztések
│   ├── Digitalizáció (CleverWaste®)
│   └── Kutatási projektek
│
├── Fenntarthatóság
│   ├── Környezetgazdálkodás
│   ├── Tanúsítványok
│   ├── Környezetvédelmi célok
│   └── Társadalmi felelősségvállalás
│
├── Hírek
│   └── Archívum
│
├── Kapcsolat
│   ├── Központi iroda
│   ├── Telephelyek
│   └── Kapcsolatfelvételi űrlap
│
└── Letöltések
    ├── Dokumentumok
    ├── Engedélyek
    └── Tanúsítványok</pre>
            </div>
          </div>
        </div>
      </UCard>

      <!-- További oldaltervek megtekintése (új, egyszerűsített szekció) -->
      <UCard class="mb-6" id="oldaltervek">
        <div class="prose dark:prose-invert max-w-none scroll-mt-24">
          <h2 class="text-2xl font-bold text-buchl-blue mb-6 flex items-center">
            <UIcon name="i-heroicons-document-text" class="mr-2 w-6 h-6" />
            Oldaltervek megtekintése
          </h2>

          <p class="text-lg text-gray-700 mb-6">
            Tekintse meg a részletes oldalterveket és megvalósítási koncepciókat az alábbi linkeken.
          </p>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink to="/oldaltervek/fooldal" class="block">
              <UCard class="h-full hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-bold text-buchl-blue">Főoldal</h3>
                  <UIcon name="i-heroicons-home" class="w-6 h-6 text-buchl-blue" />
                </div>
                <p class="text-gray-700 mb-4">A weboldal főoldal tervei és implementációs fázisai</p>
                <UButton color="primary" size="sm" class="mt-auto" icon="i-heroicons-arrow-right" :trailing="true">
                  Megtekintés
                </UButton>
              </UCard>
            </NuxtLink>

            <NuxtLink to="/oldaltervek/szolgaltatasok" class="block">
              <UCard class="h-full hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-bold text-buchl-blue">Szolgáltatások</h3>
                  <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-buchl-blue" />
                </div>
                <p class="text-gray-700 mb-4">A szolgáltatások szekció tervei és részletei</p>
                <UButton color="primary" size="sm" class="mt-auto" icon="i-heroicons-arrow-right" :trailing="true">
                  Megtekintés
                </UButton>
              </UCard>
            </NuxtLink>

            <NuxtLink to="/oldaltervek/rolunk" class="block">
              <UCard class="h-full hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-bold text-buchl-blue">Rólunk</h3>
                  <UIcon name="i-heroicons-users" class="w-6 h-6 text-buchl-blue" />
                </div>
                <p class="text-gray-700 mb-4">A rólunk szekció tervei és oldalelemei</p>
                <UButton color="primary" size="sm" class="mt-auto" icon="i-heroicons-arrow-right" :trailing="true">
                  Megtekintés
                </UButton>
              </UCard>
            </NuxtLink>
          </div>
        </div>
      </UCard>

      <!-- Design elemek és funkcionális ajánlások -->
      <UCard class="mb-6" id="design">
        <div class="prose dark:prose-invert max-w-none scroll-mt-24">
          <h2 class="text-2xl font-bold text-buchl-blue mb-6 flex items-center">
            <UIcon name="i-heroicons-swatch" class="mr-2 w-6 h-6" />
            Design elemek és funkcionális ajánlások
          </h2>

          <!-- Design elemek grid -->
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-bold text-buchl-blue mb-3 flex items-center">
                <UIcon name="i-heroicons-paint-brush" class="mr-2 w-5 h-5" />
                Színvilág
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>A BÜCHL zöld színének dominanciája</li>
                <li>Fehér háttér a jó olvashatóság érdekében</li>
                <li>Szürke árnyalatok használata a strukturáláshoz</li>
                <li>Kiegészítő színként sárga/narancssárga a kiemelésekhez</li>
              </ul>
              <div class="flex gap-2 mt-4">
                <div class="w-10 h-10 bg-buchl-blue rounded-md" title="BÜCHL kék"></div>
                <div class="w-10 h-10 bg-buchl-green rounded-md" title="BÜCHL zöld"></div>
                <div class="w-10 h-10 bg-white border border-gray-200 rounded-md" title="Fehér"></div>
                <div class="w-10 h-10 bg-gray-200 rounded-md" title="Világos szürke"></div>
                <div class="w-10 h-10 bg-gray-600 rounded-md" title="Sötét szürke"></div>
                <div class="w-10 h-10 bg-yellow-500 rounded-md" title="Sárga"></div>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-bold text-buchl-blue mb-3 flex items-center">
                <UIcon name="i-heroicons-document-text" class="mr-2 w-5 h-5" />
                Tipográfia
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Modern, jól olvasható betűtípusok</li>
                <li>Következetes címsor hierarchia</li>
                <li>Megfelelő sortávolság a jó olvashatóság érdekében</li>
              </ul>
              <div class="mt-4 space-y-2">
                <div>
                  <span class="text-sm text-gray-500">Címsor 1</span>
                  <h1 class="text-2xl font-bold">BÜCHL Hungaria</h1>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Címsor 2</span>
                  <h2 class="text-xl font-semibold">Fenntarthatóság</h2>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Normál szöveg</span>
                  <p class="text-base">Hulladékkezelés a fenntartható jövőért.</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-bold text-buchl-blue mb-3 flex items-center">
                <UIcon name="i-heroicons-photo" class="mr-2 w-5 h-5" />
                Képi világ
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Magas minőségű, professzionális fotók a telephelyekről, járművekről</li>
                <li>Dolgozói portrék a személyes jelleg erősítéséhez</li>
                <li>Infografikák a komplex folyamatok szemléltetéséhez</li>
                <li>Ikonok a szolgáltatások és értékek vizuális megjelenítéséhez</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-bold text-buchl-blue mb-3 flex items-center">
                <UIcon name="i-heroicons-cog-6-tooth" class="mr-2 w-5 h-5" />
                Funkcionális ajánlások
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Magyar, német és angol nyelvi verzió</li>
                <li>Mobilbarát, reszponzív tervezés minden oldalon</li>
                <li>Logikus oldalstruktúra és navigáció</li>
                <li>Interaktív térkép a telephelyek megjelenítéséhez</li>
                <li>Fejlett keresési lehetőségek</li>
                <li>Közösségi média integrálás és megosztási lehetőségek</li>
              </ul>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Összefoglalás -->
      <UCard id="osszefoglalas" class="scroll-mt-24">
        <div class="prose dark:prose-invert max-w-none">
          <h2 class="text-2xl font-bold text-buchl-blue mb-6 flex items-center">
            <UIcon name="i-heroicons-document-check" class="mr-2 w-6 h-6" />
            Összefoglalás
          </h2>
          
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-buchl-blue">
            <p class="text-gray-700">
              A javasolt weboldal struktúra és tartalmi terv a BÜCHL HUNGARIA Kft. széles szolgáltatási portfolióját, innovatív megközelítését és fenntarthatóság iránti elkötelezettségét tükrözi. A weboldal modernizálása és a német anyavállalat oldalával való vizuális-tartalmi harmonizálása erősíti a vállalati brandépítést, miközben a magyar specialitások és szolgáltatások hangsúlyozása is megvalósul.
            </p>
            
            <p class="text-gray-700 mt-4">
              A struktúra rugalmas és a jövőben könnyen bővíthető új tartalmakkal, szolgáltatásokkal vagy akár új üzletágakkal is. A design elemek és funkcionális ajánlások modern, felhasználóbarát és informatív weboldalt eredményeznek, amely méltóképpen reprezentálja a vállalatot mind a magyar, mind a nemzetközi piacon.
            </p>
          </div>

          <!-- Navigációs gombok -->
          <div class="mt-8 grid md:grid-cols-3 gap-4">
            <NuxtLink to="/oldaltervek/fooldal">
              <UButton
                color="primary"
                block
                class="h-full"
              >
                <div>
                  <p class="font-bold">Főoldal tervek</p>
                  <p class="text-xs opacity-80">Látványtervek megtekintése</p>
                </div>
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right" />
                </template>
              </UButton>
            </NuxtLink>
            
            <NuxtLink to="/oldaltervek/szolgaltatasok">
              <UButton
                color="primary"
                variant="outline"
                block
                class="h-full"
              >
                <div>
                  <p class="font-bold">Szolgáltatások tervek</p>
                  <p class="text-xs opacity-80">Oldal látványtervek</p>
                </div>
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right" />
                </template>
              </UButton>
            </NuxtLink>

            <NuxtLink to="/oldaltervek">
              <UButton
                color="gray"
                variant="ghost"
                block
                class="h-full"
              >
                <div>
                  <p class="font-bold">Oldaltervek áttekintés</p>
                  <p class="text-xs opacity-80">Vissza a tervekhez</p>
                </div>
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-left" />
                </template>
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </UCard>
      
      <!-- Fel gomb -->
      <div class="fixed bottom-10 right-10">
        <UButton
          v-if="showScrollTop"
          color="primary"
          variant="solid"
          icon="i-heroicons-arrow-up"
          class="rounded-full h-12 w-12 shadow-lg"
          @click="scrollToTop"
        />
      </div>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Scroll Top gomb megjelenítés
const showScrollTop = ref(false)

// Görgetés kezelés
function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Scroll figyelés
function checkScroll() {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Inicializálás
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>