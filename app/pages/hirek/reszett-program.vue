<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
            Oktatás
          </span>
          <h1 class="text-4xl font-bold mb-4">
            Játékos módon a fenntarthatóság szolgálatában
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>2025. augusztus 28.</span>
            <span class="mx-3">•</span>
            <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-2" />
            <span>4 perc olvasás</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tartalom szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-700 mb-6">
            A fenntarthatóság cégfilozófiánk központi kérdése. Az egyre növekvő fogyasztás, az intenzíven fejlődő technológia és bővülő szolgáltatások egyre inkább a körforgásos gazdálkodás megvalósítására sarkallnak minket.
          </p>
          
          <div class="my-8">
            <img 
              src="/media/images/hirek/reszett-program.jpeg"
              alt="RESZETT program"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <p>
            A környezetvédelemhez kapcsolódó szemléletformálás és tudatos cselekvés már egészen fiatal kortól az életünk része kell, hogy legyen. Ezt erősítve gondoltuk úgy, hogy ezen a területen is legyen a BÜCHL Hungária Kft. "Egy lépéssel előrébb!"
          </p>
          
          <p>
            Három éves munka után az idei évre elkészült a Büchl Hungaria Kft, az Enviro Partner Kft. és a győri Széchenyi István Egyetem együttműködése eredményeként a "RESZETT" program, mely kiváló eszköze lehet elsősorban iskolai keretek között a fenntarthatóságra nevelésnek.
          </p>
          
          <p>
            Időközben a Szellemi Tulajdon Nemzeti Hivatalánál a program önkéntes műnyilvántartásba került, és a "RESZETT" szó is szóvédjegy bejegyzést kapott.
          </p>
          
          <p>
            Vállalatunk most egy pályázat keretében hat győri általános iskola diákjainak tette elérhetővé a négy oktatási blokkba szervezett tudásanyagot, mely során a gyerekek LEGO® építőelemekkel játékos formában ismerkedhetnek a hulladékgazdálkodás folyamatrendszerével és a körforgásos gazdasággal.
          </p>
        </div>
        
        <!-- Képgaléria -->
        <HirekGallery :images="galleryImages" />
        
        <div class="mt-12 pt-8 border-t border-gray-200">
          <UButton
            to="/hirek"
            variant="outline"
            color="primary"
            class="rounded-none"
            icon="i-heroicons-arrow-left"
          >
            Vissza a hírekhez
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// RESZETT program hír részletes oldala

const galleryImages = [
  {
    src: '/media/images/hirek/reszett-program-2.jpeg',
    alt: 'RESZETT program - 2. kép'
  },
  {
    src: '/media/images/hirek/reszett-program-3.jpeg',
    alt: 'RESZETT program - 3. kép'
  },
  {
    src: '/media/images/hirek/reszett-program-4.jpeg',
    alt: 'RESZETT program - 4. kép'
  },
  {
    src: '/media/images/hirek/reszett-program-5.jpeg',
    alt: 'RESZETT program - 5. kép'
  }
]
</script>
