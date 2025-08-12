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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
              BÜCHL HUNGARIA Kft.
            </h2>
            <div class="space-y-6">
              <p class="text-lg text-gray-700">
                A BÜCHL HUNGARIA Kft. Magyarország egyik meghatározó szakértője az ipari hulladékkezelés területén, 
                különös fókusz helyezve az autóipari partnerekre. Vállalatunk 2000 óta van jelen a hazai piacon, 
                és azota is elkötelezetten dolgozunk azon, hogy ügyfeleink számára megbízható, innovatív és 
                fenntartható hulladékgazdálkodási megoldásokat kínáljunk.
              </p>
              <p class="text-lg text-gray-700">
                Kiemelt szakterületünk a termelő vállalatok gyártási folyamataiból származó veszélyes hulladékok kezelése, 
                amelyhez korszerű technológiákat és eszközparkot üzemeltetünk.
              </p>
              <p class="text-lg text-gray-700">
                Cégünk a bajorországi székhelyű BÜCHL cégcsoport tagja, amely immár 75 éve tevékenykedik 
                sikeresen a hulladékgazdálkodás, környezetvédelem, szaktanácsadás és innováció területén. 
                A családi tulajdonban lévő, tulajdonosok által irányított vállalatcsoport stabil hátteret 
                és nemzetközi tapasztalatot biztosít számunkra.
              </p>
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800&h=600&fit=crop" 
              alt="BÜCHL Hungaria telephély" 
              class="absolute inset-0 w-full h-full object-cover"
            >
            <div class="absolute bottom-0 left-0 right-0 bg-buchl-blue/90 p-6 text-white">
              <h3 class="font-bold text-xl mb-2">Győri központi telephély</h3>
              <p class="text-white/90">Korszerű technológiával felszerelt hulladékkezelő üzemek és logisztikai központ</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menedzsment szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Vezetőségünk
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
                
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    Gyökeres Sándor, aki több mint 20 éves tapasztalattal rendelkezik a környezetvédelmi szektorban, 
                    2021 óta tölti be a Büchl Hungaria Kft. ügyvezetői pozícióját.
                  </p>
                  
                  <p class="text-gray-700 leading-relaxed">
                    Szakmai pályafutása során elkötelezetten tevékenykedik a fenntartható megoldások kidolgozásán és 
                    megvalósításán. Vezetői munkáját az innováció iránti nyitottság, a csapatmunka támogatása és 
                    a hosszú távú, stratégiai szemléletmód határozza meg.
                  </p>
                </div>
                
                <!-- Szakmai kiemelt pontok -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-academic-cap" class="text-buchl-green mr-3" style="width: 24px; height: 24px;" />
                    <span class="text-sm font-medium text-gray-700">20+ év környezetvédelemben</span>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-light-bulb" class="text-buchl-blue mr-3" style="width: 24px; height: 24px;" />
                    <span class="text-sm font-medium text-gray-700">Innovatív megközelítés</span>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-users" class="text-buchl-green mr-3" style="width: 24px; height: 24px;" />
                    <span class="text-sm font-medium text-gray-700">Csapatmunka-központú</span>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-chart-bar-square" class="text-buchl-blue mr-3" style="width: 24px; height: 24px;" />
                    <span class="text-sm font-medium text-gray-700">Stratégiai látásmód</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Értékeink szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Értékeink és küldetesünk
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Munkánk során kiemelt figyelmet fordítunk a digitalizációra, a hatékonyságnövelésre és a fenntarthatóságra, 
            amelyek 2020 óta vállalati stratégiánk alappillérei.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-8 bg-white rounded-lg shadow-md">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-blue/10 rounded-full mb-6">
              <UIcon name="i-heroicons-face-smile" class="text-buchl-blue" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Vevői elégedettség</h3>
            <p class="text-gray-700">
              A legfontosabb érték számunkra a vevői elégedettség, amelyet minden szolgáltatásunk középpontjába helyezünk.
            </p>
          </div>

          <div class="text-center p-8 bg-white rounded-lg shadow-md">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-green/10 rounded-full mb-6">
              <UIcon name="i-heroicons-arrow-path" class="text-buchl-green" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Magas hasznositási arány</h3>
            <p class="text-gray-700">
              A saját kezelőüzemeinken a hulladékból értékes nyersanyagokat és energiahordozókat állítunk elő.
            </p>
          </div>

          <div class="text-center p-8 bg-white rounded-lg shadow-md">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-blue/10 rounded-full mb-6">
              <UIcon name="i-heroicons-shield-check" class="text-buchl-blue" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Teljes körű biztonság</h3>
            <p class="text-gray-700">
              Megfeleljünk a legszigorúbb jogszábkályi és környezetvédelmi előírásoknak minden tevékenységünkben.
            </p>
          </div>

          <div class="text-center p-8 bg-white rounded-lg shadow-md">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-green/10 rounded-full mb-6">
              <UIcon name="i-heroicons-globe-alt" class="text-buchl-green" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Fenntartható működés</h3>
            <p class="text-gray-700">
              Aktívan hozzájárulunk a körforgásos gazdaság fejlődéséhez és a fenntartható jövő megépítéséhez.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Számok szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            A BÜCHL Hungaria számokban
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold text-buchl-green mb-2">2000</div>
            <div class="text-xl text-white/90">óta Magyarországon</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-buchl-green mb-2">300</div>
            <div class="text-xl text-white/90">munkatárs</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-buchl-green mb-2">10</div>
            <div class="text-xl text-white/90">korszerű hulladékkezelő berendezés</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-buchl-green mb-2">40+</div>
            <div class="text-xl text-white/90">speciális jármű</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA szekció -->
    <section class="py-16 bg-buchl-green text-buchl-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Csatlakozzon elégedett ügyfeleinkhez!
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          Tapasztalja meg, hogy mit jelent egy igazán megbízható és innovatív partnertől kapni 
          hulladékgazdálkodási szolgáltatásokat.
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
            Kapcsolatfelvétel
          </UButton>
          <UButton
            to="/szolgaltatasok"
            variant="outline"
            size="lg"
            icon="i-heroicons-arrow-right"
            :trailing="true"
            class="rounded-none border-2 border-buchl-blue text-buchl-blue"
          >
            Szolgáltatásaink
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO meta adatok
useSeoMeta({
  title: 'Rólunk - BÜCHL HUNGARIA',
  description: 'A BÜCHL HUNGARIA Kft. Magyarország egyik meghatározó szakértője az ipari hulladékkezelés területén. 2000 óta kínálunk megbízható, innovatív és fenntartható hulladékgazdálkodási megoldásokat.',
  keywords: 'BÜCHL HUNGARIA, ipari hulladékkezelés, veszélyes hulladék, hulladékgazdálkodás, környezetvédelem, fenntarthatóság, autóipar'
})
</script>
