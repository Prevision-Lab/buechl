<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Szolgáltatásaink"
      subtitle="Komplex hulladékgazdálkodási megoldások minden igényre"
      image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=800&fit=crop"
      bg-color="blue"
      :primary-cta="{
        label: 'Ajánlatkérés',
        to: '/kapcsolat'
      }"
      :secondary-cta="{
        label: 'Tanúsítványaink',
        to: '/fenntarthatosag#certificates'
      }"
    />

    <!-- Bevezető szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            Átfogó hulladékgazdálkodási megoldások
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            A BÜCHL több mint 20 éves tapasztalattal rendelkezik a professzionális hulladékgazdálkodás területén. Teljes körű szolgáltatásaink a hulladék gyűjtésétől és szállításától kezdve a feldolgozáson át az újrahasznosításig minden területet lefednek.
          </p>
          <p class="text-lg text-gray-700">
            Szolgáltatásainkat ipari ügyfelek és lakossági felhasználók számára egyaránt kínáljuk, mindig a legmagasabb szakmai színvonalon és környezettudatos megközelítéssel.
          </p>
        </div>
      </div>
    </section>

    <!-- Szolgáltatási kategóriák -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
          Kínálatunk ügyfélcsoportok szerint
        </h2>

        <div class="grid gap-8 md:grid-cols-2 items-start">
          <!-- Ipari ügyfelek szolgáltatási kategória -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-buchl-blue text-white p-6">
              <h3 class="text-2xl font-bold flex items-center gap-3">
                <UIcon name="i-heroicons-building-office-2" class="w-8 h-8" />
                Ipari ügyfelek
              </h3>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-700">
                Ipari partnereink számára specializált, testreszabott hulladékgazdálkodási megoldásokat kínálunk, a teljes folyamat menedzselésével.
              </p>
              <ul class="space-y-3 mt-6">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-truck" class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-semibold text-buchl-blue">Hulladékgyűjtés és szállítás</h4>
                    <p class="text-gray-700">Specializált járműparkunk 40 különböző típusú járművel biztosítja a biztonságos hulladékszállítást.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-arrow-path" class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-semibold text-buchl-blue">Hulladékkezelés és újrahasznosítás</h4>
                    <p class="text-gray-700">Magas újrahasznosítási aránnyal rendelkező feldolgozási technológiák a fenntarthatóság érdekében.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-semibold text-buchl-blue">Belső üzemi logisztika (ELOG SYSTEM®)</h4>
                    <p class="text-gray-700">Innovatív üzemi logisztikai rendszer, amely optimalizálja a hulladékgazdálkodási folyamatokat.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-wrench-screwdriver" class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-semibold text-buchl-blue">Egyedi megoldások</h4>
                    <p class="text-gray-700">Testreszabott hulladékgazdálkodási rendszerek tervezése és üzemeltetése az ipari partnereink számára.</p>
                  </div>
                </li>
              </ul>
              <div class="mt-6">
                <UButton 
                  color="primary" 
                  variant="soft" 
                  size="lg" 
                  class="w-full rounded-none"
                  to="/oldaltervek/szolgaltatasok/ipari"
                >
                  Ipari szolgáltatások részletesen
                </UButton>
              </div>
            </div>
          </div>

          <!-- Lakossági ügyfelek szolgáltatási kategória -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-buchl-green text-buchl-blue p-6">
              <h3 class="text-2xl font-bold flex items-center gap-3">
                <UIcon name="i-heroicons-home" class="w-8 h-8" />
                Lakossági ügyfelek
              </h3>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-700">
                Lakossági ügyfeleink számára rugalmas, egyszerű és költséghatékony hulladékkezelési megoldásokat biztosítunk.
              </p>
              <ul class="space-y-3 mt-6">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-cube" class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-semibold text-buchl-blue">Konténer szolgáltatás</h4>
                    <p class="text-gray-700">Különböző méretű konténerek bérlése és szállítása építkezésekhez, felújításokhoz és lomtalanításhoz.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-building-storefront" class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-semibold text-buchl-blue">Hulladékudvar</h4>
                    <p class="text-gray-700">Korszerű hulladékudvarunk széleskörű lehetőséget biztosít a lakossági hulladékok szabályszerű leadására.</p>
                  </div>
                </li>
              </ul>
              <div class="mt-6">
                <UButton 
                  color="primary"
                  variant="soft" 
                  size="lg" 
                  class="w-full rounded-none bg-buchl-green text-buchl-blue hover:bg-buchl-green/90"
                  to="/oldaltervek/szolgaltatasok/lakossagi"
                >
                  Lakossági szolgáltatások részletesen
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Részletes szolgáltatások szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
          Kiemelt szolgáltatásaink
        </h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
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
                to="/oldaltervek/szolgaltatasok/szallitas" 
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
                to="/oldaltervek/szolgaltatasok/ujrahasznositas" 
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
                to="/oldaltervek/szolgaltatasok/elog-system" 
                color="blue" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>

          <!-- 4. Szolgáltatás kártya -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                  <UIcon name="i-heroicons-wrench-screwdriver" class="text-yellow-600 dark:text-yellow-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Egyedi megoldások</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Testreszabott hulladékgazdálkodási rendszerek tervezése és üzemeltetése az ipari partnereink számára.
            </p>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Vállalaton belüli rendszerek</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Szakszemélyzet biztosítása</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Outsourcing lehetőségek</span>
              </li>
            </ul>
            <template #footer>
              <UButton 
                label="Részletek" 
                to="/oldaltervek/szolgaltatasok/egyedi-megoldasok" 
                color="yellow" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>

          <!-- 5. Szolgáltatás kártya -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <UIcon name="i-heroicons-cube" class="text-orange-600 dark:text-orange-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Konténer szolgáltatás</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Különböző méretű konténerek bérlése és szállítása építkezésekhez, felújításokhoz és lomtalanításhoz.
            </p>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Különböző méretű konténerek</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Rugalmas szállítási idők</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Gyors ügyintézés</span>
              </li>
            </ul>
            <template #footer>
              <UButton 
                label="Részletek" 
                to="/oldaltervek/szolgaltatasok/kontener" 
                color="orange" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>

          <!-- 6. Szolgáltatás kártya -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <UIcon name="i-heroicons-building-storefront" class="text-purple-600 dark:text-purple-400 text-2xl" />
                </div>
                <h3 class="text-lg font-semibold">Hulladékudvar</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Korszerű hulladékudvarunk széleskörű lehetőséget biztosít a lakossági hulladékok szabályszerű leadására.
            </p>
            <ul class="space-y-2 mb-4">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Sokféle hulladéktípus átvétele</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Rugalmas nyitvatartás</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                <span>Környezetbarát feldolgozás</span>
              </li>
            </ul>
            <template #footer>
              <UButton 
                label="Részletek" 
                to="/oldaltervek/szolgaltatasok/hulladekudvar" 
                color="purple" 
                variant="ghost" 
                size="sm" 
                block 
                class="rounded-none" 
              />
            </template>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Ügyfélreferenciák szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
          Elégedett ügyfeleink
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
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

        <div class="mt-16 text-center">
          <UCard class="bg-white p-8 max-w-3xl mx-auto">
            <div class="relative mb-8 inline-block">
              <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="text-buchl-green w-12 h-12 absolute -top-6 -left-6 opacity-30" />
              <blockquote class="text-xl italic text-gray-700 relative z-10">
                "A BÜCHL átfogó hulladékkezelési megoldásai jelentős mértékben hozzájárultak ahhoz, hogy vállalatunk teljesítse környezetvédelmi céljait és optimalizálja a hulladékgazdálkodási folyamatait."
              </blockquote>
            </div>
            <div class="flex items-center justify-center">
              <img src="https://i.pravatar.cc/60?img=3" alt="Ügyfél képe" class="w-12 h-12 rounded-full mr-4" />
              <div class="text-left">
                <p class="font-semibold">Kovács János</p>
                <p class="text-sm text-gray-600">Környezetvédelmi vezető, Autóipari Vállalat Kft.</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- CTA szekció -->
    <section class="py-16 bg-buchl-green text-buchl-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Kérjen egyedi ajánlatot!
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          Szakértő csapatunk személyre szabott megoldást kínál vállalkozása számára, függetlenül annak méretétől vagy az iparágtól.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/kapcsolat"
            size="lg"
            icon="i-heroicons-envelope"
            :trailing="true"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
          >
            Ajánlatkérés
          </UButton>
          <UButton
            to="/oldaltervek"
            variant="outline"
            size="lg"
            icon="i-heroicons-arrow-left"
            class="rounded-none border-2 border-buchl-blue text-buchl-blue"
          >
            Vissza az oldaltervekhez
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>