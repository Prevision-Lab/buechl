<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Hírek és Események"
      subtitle="Maradjon naprakész legfrissebb híreinkkel, eseményeinkkel és innovációinkkal"
      image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=800&fit=crop"
      bg-color="blue"
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
          <!-- Hír 1: VBS Junior Kör -->
          <BuchlBlogPost
            title="VBS Junior Kör látogatása"
            description="Szeptember 12-én örömmel láttuk vendégül a VBS Junior Kört Németországból, akik telephelyünkön ismerkedhettek meg hulladékgazdálkodási technológiáinkkal."
            image="/media/images/02.jpg"
            to="/hirek/vbs-junior-kor-latogatas"
            category="Események"
            date="2025-09-12"
            reading-time="3 perc olvasás"
            read-more-text="Részletek"
          />

          <!-- Hír 2: RESZETT program -->
          <BuchlBlogPost
            title="Játékos módon a fenntarthatóság szolgálatában"
            description="A fenntarthatóság cégfilozófiánk központi kérdése. Három éves munka után elkészült a „RESZETT” program, amely játékos formában ismerteti meg a gyerekeket a hulladékgazdálkodás folyamataival."
            image="/media/images/06.jpg"
            to="/hirek/reszett-program"
            category="Oktatás"
            date="2025-08-28"
            reading-time="4 perc olvasás"
            read-more-text="Részletek"
          />

          <!-- Hír 3: VIII. Győri Gyerekegyetem -->
          <BuchlBlogPost
            title="Tudomány, élmény, inspiráció – fiataloknak!"
            description="Büszkék vagyunk rá, hogy a BÜCHL Hungaria idén is kiemelt támogatója lehetett a VIII. Győri Gyerekegyetemnek! A program célja, hogy közelebb hozza az egyetemi világot az általános iskolás korosztályhoz."
            image="/media/images/image_123650291.JPG"
            to="/hirek/viii-gyori-gyerekegyetem"
            category="Oktatás"
            date="2025-08-24"
            reading-time="3 perc olvasás"
            read-more-text="Részletek"
          />

          <!-- Hír 4: Raklapos Építőtábor -->
          <BuchlBlogPost
            title="10 éve együtt a kreativitásért!"
            description="A BÜCHL HUNGARIA Kft. az AUDI HUNGARIA Zrt.-vel karöltve immár 10 éve támogatja a Generációk Háza által szervezett győri Raklapos Építőtábort."
            image="/media/images/02.jpg"
            to="/hirek/10-ev-egyutt-a-kreativitasert"
            category="Események"
            date="2025-08-18"
            reading-time="2 perc olvasás"
            read-more-text="Részletek"
          />
          
          <!-- Hír 5: Defibrillátorok telepítése -->
          <BuchlBlogPost
            title="Munkatársaink biztonsága érdekében"
            description="A BÜCHL Hungaria számára a munkatársak biztonsága mindig is elsődleges szempont volt. Ennek jegyében három darab automata defibrillátort telepítettünk telephelyünkön."
            image="/media/images/06.jpg"
            to="/hirek/defibrillatorok-telepites"
            category="Biztonság"
            date="2025-07-25"
            reading-time="2 perc olvasás"
            read-more-text="Részletek"
          />

          <!-- Hír 6: Stresszkezelő tréning -->
          <BuchlBlogPost
            title="Mentális egészség és reziliencia"
            description="Munkatársaink részt vettek a Német-Magyar Tudásközpont - DUWZ stresszkezelő és rezilienciafejlesztő tréningjén, melynek célja a stresszreakciók felismerése és kezelési technikák elsajátítása."
            image="/media/images/image_123650291.JPG"
            to="/hirek/stresszkezelo-trening"
            category="Fejlesztés"
            date="2025-07-21"
            reading-time="3 perc olvasás"
            read-more-text="Részletek"
          />
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
