<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">BÜCHL Kártya Komponensek</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Nuxt UI alapú kártya komponensek különböző felhasználási esetekre
      </p>
    </div>

    <!-- Basic Cards -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Alap Kártyák</h2>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Simple Card -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold">Egyszerű Kártya</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            Ez egy egyszerű kártya alapvető tartalommal. Használható általános információk megjelenítésére.
          </p>
          <template #footer>
            <UButton label="Művelet" color="primary" size="sm" class="rounded-none" />
          </template>
        </UCard>

        <!-- Card with Variants -->
        <UCard variant="outline">
          <template #header>
            <h3 class="text-lg font-semibold">Keretezett Kártya</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            Ez egy outline változatú kártya, amely keret nélküli megjelenést biztosít.
          </p>
          <template #footer>
            <UButton label="Részletek" variant="ghost" size="sm" class="rounded-none" />
          </template>
        </UCard>

        <!-- Soft Variant Card -->
        <UCard variant="soft">
          <template #header>
            <h3 class="text-lg font-semibold">Lágy Kártya</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            A soft variant háttérszínt ad a kártyának finomabb megjelenésért.
          </p>
          <template #footer>
            <UButton label="Tovább" variant="soft" color="primary" size="sm" class="rounded-none" />
          </template>
        </UCard>
      </div>
    </section>

    <!-- Icon Cards -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Ikonos Kártyák</h2>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature Card with Icon -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <UIcon name="i-heroicons-light-bulb" class="text-primary-600 dark:text-primary-400 text-2xl" />
              </div>
              <h3 class="text-lg font-semibold">Innovatív Megoldások</h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            Folyamatosan fejlesztjük megoldásainkat a legjobb szolgáltatás érdekében.
          </p>
          <template #footer>
            <UButton label="Tudj meg többet" color="primary" variant="ghost" size="sm" block class="rounded-none" />
          </template>
        </UCard>

        <!-- Service Card -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <UIcon name="i-heroicons-trash" class="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <h3 class="text-lg font-semibold">Hulladékkezelés</h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            Professzionális hulladékkezelési szolgáltatások ipari partnereknek.
          </p>
          <template #footer>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">24/7 elérhetőség</span>
              <UButton icon="i-heroicons-arrow-right" color="green" variant="ghost" size="sm" class="rounded-none" />
            </div>
          </template>
        </UCard>

        <!-- Support Card -->
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <UIcon name="i-heroicons-users" class="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 class="text-lg font-semibold">Ügyfélszolgálat</h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-400">
            Dedikált csapatunk készséggel áll rendelkezésére minden kérdésben.
          </p>
          <template #footer>
            <UButton label="Kapcsolat" color="blue" variant="soft" size="sm" block class="rounded-none" />
          </template>
        </UCard>
      </div>
    </section>

    <!-- Statistics Cards -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Statisztikai Kártyák</h2>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- Simple Stat Card -->
        <UCard>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Telephelyek</p>
              <p class="text-3xl font-bold text-primary-600">7</p>
            </div>
            <UIcon name="i-heroicons-building-office-2" class="text-primary-400 text-3xl" />
          </div>
        </UCard>

        <!-- Stat with Progress -->
        <UCard>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Újrahasznosítás</p>
                <p class="text-3xl font-bold text-green-600">89%</p>
              </div>
              <UIcon name="i-heroicons-arrow-path" class="text-green-400 text-3xl" />
            </div>
            <UProgress :value="89" color="green" size="sm" />
          </div>
        </UCard>

        <!-- Stat with Change -->
        <UCard>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Ügyfelek</p>
                <p class="text-3xl font-bold">2,450</p>
              </div>
              <UIcon name="i-heroicons-user-group" class="text-blue-400 text-3xl" />
            </div>
            <div class="flex items-center gap-1">
              <UIcon name="i-heroicons-arrow-trending-up" class="text-green-500 text-sm" />
              <span class="text-sm text-green-600">+12.5% az előző évhez képest</span>
            </div>
          </div>
        </UCard>

        <!-- Revenue Stat -->
        <UCard>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Éves Bevétel</p>
                <p class="text-3xl font-bold">€45M</p>
              </div>
              <UIcon name="i-heroicons-currency-euro" class="text-yellow-400 text-3xl" />
            </div>
            <UBadge color="yellow" variant="soft" size="sm">
              Stabil növekedés
            </UBadge>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Blog Cards -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog Kártyák</h2>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Blog Card with Image -->
        <UCard
          :ui="{
            root: 'shadow-none ring-1 ring-neutral-300 hover:shadow-sm transition-all duration-300 relative cursor-pointer divide-y-0 group rounded-md hover:bg-secondary-950',
            header: 'p-0 sm:p-0',
          }"
        >
          <template #header>
            <div class="overflow-hidden rounded-t-md">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2560&auto=format&fit=crop"
                alt="Fenntarthatóság"
                class="w-full h-48 object-cover"
              >
            </div>
          </template>
          <template #default>
            <UBadge color="green" variant="soft" size="sm" class="mb-3">
              Fenntarthatóság
            </UBadge>
            <h3 class="text-xl font-semibold mb-2">Zöld Kezdeményezéseink 2024-ben</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              Büszkeséggel mutatjuk be idei környezetvédelmi programjainkat és fenntarthatósági célkitűzéseinket.
            </p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>Kovács Anna</span>
              <span>2024. márc. 15.</span>
            </div>
          </template>
          <template #footer>
            <UButton label="Olvasd tovább" icon="i-heroicons-arrow-right" :trailing="true" variant="link" color="primary" class="rounded-none" />
          </template>
        </UCard>

        <!-- Blog Card Horizontal -->
        <div class="md:col-span-2">
          <UCard class="overflow-hidden">
            <div class="flex flex-col md:flex-row gap-6">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2560&auto=format&fit=crop" 
                alt="Hulladékkezelés" 
                class="w-full md:w-48 h-48 object-cover rounded-lg"
              >
              <div class="flex-1">
                <UBadge color="blue" variant="soft" size="sm" class="mb-3">
                  Technológia
                </UBadge>
                <h3 class="text-xl font-semibold mb-2">Modern Hulladékkezelési Megoldások</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  Fedezd fel legújabb technológiai fejlesztéseinket a hatékonyabb és környezetbarátabb hulladékkezelés terén.
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3 text-sm text-gray-500">
                    <img src="https://ui-avatars.com/api/?name=TP" alt="Avatar" class="w-8 h-8 rounded-full" >
                    <span>Tóth Péter</span>
                    <span>•</span>
                    <span>2024. márc. 10.</span>
                  </div>
                  <UButton icon="i-heroicons-arrow-right" variant="ghost" color="primary" size="sm" class="rounded-none" />
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Action Cards -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Akció Kártyák</h2>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- CTA Card -->
        <UCard class="text-center">
          <UIcon name="i-heroicons-phone" class="text-primary-500 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">Kérjen Ajánlatot</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Kapcsolódjon szakértőinkkel még ma egy személyre szabott ajánlatért.
          </p>
          <UButton label="Kapcsolatfelvétel" color="primary" size="lg" block class="rounded-none" />
        </UCard>

        <!-- Download Card -->
        <UCard class="text-center">
          <UIcon name="i-heroicons-document-arrow-down" class="text-green-500 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">Letölthető Anyagok</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Töltse le részletes szolgáltatási katalógusunkat PDF formátumban.
          </p>
          <UButton label="Letöltés" color="green" size="lg" block variant="soft" class="rounded-none" />
        </UCard>

        <!-- Newsletter Card -->
        <UCard class="text-center">
          <UIcon name="i-heroicons-envelope" class="text-blue-500 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">Hírlevél Feliratkozás</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Értesüljön elsőként legújabb híreinkről és ajánlatainkról.
          </p>
          <UButton label="Feliratkozás" color="blue" size="lg" block variant="outline" class="rounded-none" />
        </UCard>
      </div>
    </section>

    <!-- Complex Cards -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Komplex Kártyák</h2>
      
      <div class="grid gap-6 md:grid-cols-2">
        <!-- Pricing Card -->
        <UCard>
          <template #header>
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-2">Prémium Csomag</h3>
              <p class="text-gray-600">Nagyvállalatoknak</p>
            </div>
          </template>
          
          <div class="text-center py-6">
            <p class="text-5xl font-bold text-primary-600">€999</p>
            <p class="text-gray-500">/hónap</p>
          </div>
          
          <ul class="space-y-3 mb-6">
            <li class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span>Korlátlan telephely lefedettség</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span>24/7 ügyfélszolgálat</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span>Egyedi riportok</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="text-green-500" />
              <span>Dedikált kapcsolattartó</span>
            </li>
          </ul>
          
          <template #footer>
            <UButton label="Választom" color="primary" size="lg" block class="rounded-none" />
          </template>
        </UCard>

        <!-- Team Member Card -->
        <UCard>
          <div class="text-center">
            <img 
              src="https://ui-avatars.com/api/?name=SK&size=200" 
              alt="Profil" 
              class="w-32 h-32 rounded-full mx-auto mb-4"
            >
            <h3 class="text-xl font-semibold mb-2">Szabó Károly</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Vezérigazgató</p>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              20+ év tapasztalattal rendelkezik a hulladékkezelési iparágban, és elkötelezett a fenntartható megoldások mellett.
            </p>
            <div class="flex items-center justify-center gap-3">
              <UButton icon="i-simple-icons-linkedin" variant="soft" color="blue" size="sm" class="rounded-none" />
              <UButton icon="i-heroicons-envelope" variant="soft" size="sm" class="rounded-none" />
              <UButton icon="i-heroicons-phone" variant="soft" size="sm" class="rounded-none" />
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Kód Példák</h2>
      
      <div class="space-y-8">
        <!-- Basic Card Code -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Alap Kártya</h3>
          <UCard>
            <CodeBlock :code="basicCardCode" language="vue" />
          </UCard>
        </div>

        <!-- Icon Card Code -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Ikonos Kártya</h3>
          <UCard>
            <CodeBlock :code="iconCardCode" language="vue" />
          </UCard>
        </div>

        <!-- Statistics Card Code -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Statisztikai Kártya</h3>
          <UCard>
            <CodeBlock :code="statsCardCode" language="vue" />
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const basicCardCode = `<UCard>
  <template #header>
    <h3 class="text-lg font-semibold">Kártya Cím</h3>
  </template>
  
  <p class="text-gray-600 dark:text-gray-400">
    Ez a kártya tartalma.
  </p>
  
  <template #footer>
    <UButton label="Művelet" color="primary" size="sm" class="rounded-none" />
  </template>
</UCard>`

const iconCardCode = `<UCard>
  <template #header>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
        <UIcon name="i-heroicons-light-bulb" class="text-primary-600 dark:text-primary-400 text-2xl" />
      </div>
      <h3 class="text-lg font-semibold">Innovatív Megoldások</h3>
    </div>
  </template>
  
  <p class="text-gray-600 dark:text-gray-400">
    Folyamatosan fejlesztjük megoldásainkat.
  </p>
  
  <template #footer>
    <UButton label="Tudj meg többet" color="primary" variant="ghost" size="sm" block class="rounded-none" />
  </template>
</UCard>`

const statsCardCode = `<UCard>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Telephelyek</p>
      <p class="text-3xl font-bold text-primary-600">7</p>
    </div>
    <UIcon name="i-heroicons-building-office-2" class="text-primary-400 text-3xl" />
  </div>
</UCard>`
</script>