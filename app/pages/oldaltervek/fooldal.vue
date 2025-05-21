<template>
  <div>
    <!-- Hero szekció - Ferde stílusú, nagy hatású megjelenítéssel -->
    <BuchlHero
      title="Egy ötlettel mindig tovább"
      subtitle="Hulladékkezelés a fenntartható jövőért."
      image="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=1600&h=800&fit=crop"
      :video-url="videoUrl"
      :video-start-time="videoStartTime"
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
                A BÜCHL Hungaria több mint 20 éves tapasztalattal rendelkező vezető hulladékgazdálkodási vállalat Magyarországon, amely átfogó megoldásokat kínál az ipari ügyfelek számára.
              </p>
              <p class="text-lg text-gray-700">
                A németországi BÜCHL cégcsoport tagjaként közel 70 éves szakmai háttérrel rendelkezünk a fenntartható hulladékgazdálkodás területén.
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
          <div class="relative rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800&h=600&fit=crop" 
              alt="BÜCHL Hungaria Kft." 
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-buchl-blue/80 p-4 text-white">
              <p class="font-semibold">Győri telephely</p>
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
            Átfogó hulladékgazdálkodási megoldásokat kínálunk, a begyűjtéstől a feldolgozáson át az újrahasznosításig.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 1. Szolgáltatás kártya -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <UIcon name="i-heroicons-truck" class="text-primary-600 dark:text-primary-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Hulladékgyűjtés és szállítás</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Specializált járműparkunk 40 különböző típusú szállítójárművel biztosítja a biztonságos hulladékszállítást.
            </p>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Veszélyes hulladék szállítás</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>ADR képzett szakemberek</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Konténeres megoldások</span>
              </li>
            </ul>
            <template #footer>
              <UButton 
                label="Részletek" 
                to="/szolgaltatasok/szallitas" 
                color="primary" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>

          <!-- 2. Szolgáltatás kártya -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <UIcon name="i-heroicons-arrow-path" class="text-green-600 dark:text-green-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Hulladékkezelés és újrahasznosítás</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Magas újrahasznosítási aránnyal rendelkező feldolgozási technológiák a fenntarthatóság érdekében.
            </p>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Veszélyes hulladék kezelése</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Folyadék és emulzió feldolgozás</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Másodlagos nyersanyagok előállítása</span>
              </li>
            </ul>
            <template #footer>
              <UButton 
                label="Részletek" 
                to="/szolgaltatasok/ujrahasznositas" 
                color="green" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>

          <!-- 3. Szolgáltatás kártya -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <UIcon name="i-heroicons-cog-6-tooth" class="text-blue-600 dark:text-blue-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Belső üzemi logisztika (ELOG SYSTEM®)</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Innovatív üzemi logisztikai rendszer, amely optimalizálja a hulladékgazdálkodási folyamatokat.
            </p>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Papírmentes hulladéklogisztika</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Digitalizált folyamatok</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Testreszabható megoldások</span>
              </li>
            </ul>
            <template #footer>
              <UButton 
                label="Részletek" 
                to="/szolgaltatasok/elog-system" 
                color="blue" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>
        </div>

        <div class="text-center mt-12">
          <UButton
            to="/szolgaltatasok"
            color="white"
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
            A BÜCHL Hungaria Kft. számokban kifejezve
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 1. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">300+</div>
            <div class="text-xl text-white/90">Munkatárs</div>
          </div>

          <!-- 2. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">40</div>
            <div class="text-xl text-white/90">Szállítójármű</div>
          </div>

          <!-- 3. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">20+</div>
            <div class="text-xl text-white/90">Év a piacon</div>
          </div>

          <!-- 4. Statisztika -->
          <div class="text-center p-6 border border-white/20 rounded-lg">
            <div class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2">10</div>
            <div class="text-xl text-white/90">Hulladékkezelő berendezés</div>
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
          image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1600&h=600&fit=crop"
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
            image="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=400&fit=crop"
            to="/hirek/uj-hulladekkezelo-berendezes"
            category="Technológia"
            date="2025-05-10"
            readingTime="3 perc olvasás"
            readMoreText="Tovább"
          />

          <!-- 2. Blog poszt -->
          <BuchlBlogPost
            title="BÜCHL a Fenntarthatósági Expón"
            description="Cégünk sikeresen képviselte a hulladékgazdálkodási szektor innovációit a 2025-ös Fenntarthatósági Expón Budapesten."
            image="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop"
            to="/hirek/fenntarthatosagi-expo-2025"
            category="Események"
            date="2025-04-25"
            readingTime="4 perc olvasás"
            readMoreText="Tovább"
          />

          <!-- 3. Blog poszt -->
          <BuchlBlogPost
            title="Elindult az új ELOG SYSTEM® digitalizációs platform"
            description="A teljesen papírmentes hulladékgazdálkodási rendszer bevezetésével új szintre emeljük a belső üzemi logisztikát."
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop"
            to="/hirek/elog-system-bevezetes"
            category="Innováció"
            date="2025-04-15"
            readingTime="5 perc olvasás"
            readMoreText="Tovább"
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

    <!-- Partnerek / Ügyfelek szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Kiemelt partnereink
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Büszkék vagyunk, hogy vezető vállalatok választanak minket fenntartható hulladékgazdálkodási partnereiknek
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <!-- Partner logók -->
          <div class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4">
            <img src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png" alt="Audi" class="h-8 w-auto" />
          </div>
          <div class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" alt="Bosch" class="h-8 w-auto" />
          </div>
          <div class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4">
            <img src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png" alt="Mercedes" class="h-8 w-auto" />
          </div>
          <div class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Opel-Logo_2017.png" alt="Opel" class="h-8 w-auto" />
          </div>
          <div class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4">
            <img src="https://www.logo.wine/a/logo/Nokia/Nokia-Logo.wine.svg" alt="Nokia" class="h-8 w-auto" />
          </div>
          <div class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Flex_logo_%282015%29.svg" alt="Flex" class="h-8 w-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA szekció -->
    <section class="py-16 bg-buchl-green text-buchl-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Szüksége van fenntartható hulladékgazdálkodási megoldásra?
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          Szakértő csapatunk személyre szabott megoldásokat kínál az Ön vállalkozása számára, függetlenül a mérettől vagy az iparágtól.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/kapcsolat"
            color="white"
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
const videoUrl = ref('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4')
const videoStartTime = ref(15) // Start video at 15 seconds
</script>