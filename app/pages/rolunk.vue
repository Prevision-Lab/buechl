<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Rólunk"
      subtitle="Megbízható partner az ipari hulladékkezelésben"
      image="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=1600&h=800&fit=crop"
      bg-color="blue"
      :primary-cta="{
        label: 'Kapcsolatfelvétel',
        to: '/kapcsolat'
      }"
    />

    <!-- Rólunk részletesen szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-8 text-center">
            BÜCHL HUNGARIA Kft.
          </h2>
          <div class="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              A <strong>BÜCHL HUNGARIA Kft.</strong> Magyarország egyik meghatározó szakértője az ipari hulladékkezelés 
              területén, különös fókuszt helyezve az <strong>autóipari partnerekre</strong>. Vállalatunk <strong>2000 óta</strong> van jelen a hazai 
              piacon, és azóta is elkötelezetten dolgozunk azon, hogy ügyfeleink számára <strong>megbízható, innovatív és 
              fenntartható hulladékgazdálkodási megoldásokat</strong> kínáljunk. <strong>Kiemelt szakterületünk a termelő 
              vállalatok gyártási folyamataiból származó veszélyes hulladékok kezelése</strong>, amelyhez korszerű 
              technológiákat és eszközparkot üzemeltetünk.
            </p>
            <p>
              Cégünk a <strong>bajorországi székhelyű BÜCHL cégcsoport tagja</strong>, amely immár <strong>75 éve tevékenykedik 
              sikeresen a hulladékgazdálkodás, környezetvédelem, szaktanácsadás és innováció területén</strong>. A családi 
              tulajdonban lévő, tulajdonosok által irányított vállalatcsoport <strong>stabil hátteret és nemzetközi 
              tapasztalatot</strong> biztosít számunkra.
            </p>
            <p>
              Magyarországon <strong>közel 300 munkatárssal, 10 korszerű hulladékkezelő berendezéssel és több mint 40 
              speciális járművel</strong> állunk partnereink rendelkezésére. Szolgáltatásaink <strong>teljeskörű megoldást kínálnak 
              a veszélyes és nem veszélyes ipari hulladékok begyűjtésére, szállítására és újrahasznosítására</strong>. A saját 
              kezelőüzemeinkben a hulladékból <strong>értékes nyersanyagokat és energiahordozókat állítunk elő</strong>, így 
              aktívan hozzájárulunk a <strong>körforgásos gazdaság fejlődéséhez</strong>.
            </p>
            <p>
              Munkánk során <strong>kiemelt figyelmet fordítunk a digitalizációra, a hatékonyságnövelésre és a 
              fenntarthatóságra</strong>, amelyek <strong>2020 óta vállalati stratégiánk alappillérei</strong>. Célunk, hogy a legmodernebb 
              technológiák és testreszabott logisztikai megoldások segítségével <strong>ügyfeleink hulladékgazdálkodási 
              folyamatait optimalizáljuk</strong>, miközben megfelelünk a <strong>legszigorúbb jogszabályi és környezetvédelmi 
              előírásoknak</strong>.
            </p>
            <p>
              <strong>A BÜCHL HUNGARIA Kft. számára a legfontosabb értékek a vevői elégedettség, a magas hasznosítási 
              arány, a teljes körű biztonság, valamint a fenntartható működés.</strong>
            </p>
            <p class="text-center text-xl font-bold text-buchl-blue mt-8">
              <strong>BÜCHL HUNGARIA – Megbízható partner az ipari hulladékkezelésben.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Menedzsment szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Menedzsment
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Tapasztalt vezetőségünk biztosítja a vállalat stratégiai irányítását és a fenntartható növekedést.
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
                    Gyökeres Sándor
                  </h3>
                  <p class="text-lg text-buchl-green font-semibold mb-4">
                    Ügyvezető igazgató
                  </p>
                </div>
                
                <div>
                  <p class="text-gray-700 leading-relaxed">
                    Gyökeres Sándor, aki több mint 20 éves tapasztalattal rendelkezik a környezetvédelmi szektorban, 
                    2021 óta tölti be a Büchl Hungaria Kft. ügyvezetői pozícióját. Szakmai pályafutása során elkötelezetten 
                    tevékenykedik a fenntartható megoldások kidolgozásán és megvalósításán. Vezetői munkáját az innováció 
                    iránti nyitottság, a csapatmunka támogatása és a hosszú távú, stratégiai szemléletmód határozza meg.
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
            BÜCHL CSOPORT
          </h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-lg text-white/90 leading-relaxed">
              A BÜCHL csoport egy komoly teljesítménnyel rendelkező közepes cégcsoport, ahol több mint 500 munkatárs 
              dolgozik olyan telephelyeken, mint Ingolstadt, Stammham, Neuburg an der Donau, Großmehring, valamint a 
              nemzetközi szinten is Győrben. A BÜCHL évente több mint 600 000 tonna hulladékot szállít és kezel.
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
              TELEPHELY
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
              MUNKATÁRS
            </div>
          </div>

          <!-- Napi hulladék mennyiség -->
          <div class="text-center">
            <div class="mb-6">
              <UIcon name="i-lucide-recycle" class="text-6xl text-buchl-green mx-auto mb-4" />
            </div>
            <div class="text-5xl sm:text-6xl font-bold text-buchl-green mb-2" ref="hulladekRef">
              {{ hulladekCount }}
            </div>
            <div class="text-xl font-medium text-white/90">
              TONNA HULLADÉK NAPONTA
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hírek szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            Hírek
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Kövesse nyomon legfrissebb híreinket és fejlesztéseinket a hulladékgazdálkodás területén.
          </p>
        </div>
        
        <div class="text-center">
          <UButton
            to="/hirek"
            size="lg"
            icon="i-heroicons-newspaper"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
          >
            Összes hír megtekintése
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// SEO meta adatok
useSeoMeta({
  title: 'Rólunk - BÜCHL HUNGARIA',
  description: 'A BÜCHL HUNGARIA Kft. Magyarország egyik meghatározó szakértője az ipari hulladékkezelés területén. 2000 óta kínálunk megbízható, innovatív és fenntartható hulladékgazdálkodási megoldásokat.',
  keywords: 'BÜCHL HUNGARIA, ipari hulladékkezelés, veszélyes hulladék, hulladékgazdálkodás, környezetvédelem, fenntarthatóság, autóipar'
})

// Animált számok
const telephelyCount = ref(0)
const munkatarsCount = ref(0)
const hulladekCount = ref(0)

const telephelyRef = ref(null)
const munkatarsRef = ref(null)
const hulladekRef = ref(null)
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
  
  // Telephelyek animálása (6 másodperc alatt)
  animateCounter(0, 6, 3000, (value) => {
    telephelyCount.value = value
  })
  
  // Munkatársak animálása (500+ másodperc alatt)
  setTimeout(() => {
    animateCounter(0, 500, 2500, (value) => {
      munkatarsCount.value = value
    })
  }, 500)
  
  // Hulladék animálása (1700 tonna naponta, 3 másodperc alatt)
  setTimeout(() => {
    animateCounter(0, 1700, 2000, (value) => {
      hulladekCount.value = value
    })
  }, 1000)
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
