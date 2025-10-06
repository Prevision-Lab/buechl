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
            Tudomány, élmény, inspiráció – fiataloknak!
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>2025. augusztus 24.</span>
            <span class="mx-3">•</span>
            <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-2" />
            <span>3 perc olvasás</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tartalom szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-700 mb-6">
            Büszkék vagyunk rá, hogy a BÜCHL Hungaria idén is kiemelt támogatója lehetett a VIII. Győri Gyerekegyetemnek!
          </p>
          
          <div class="my-8">
            <img 
              src="/media/images/hirek/gyerekegyetem.jpeg"
              alt="VIII. Győri Gyerekegyetem"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <p>
            A program célja, hogy közelebb hozza az egyetemi világot az általános iskolás korosztályhoz – izgalmas előadásokkal, interaktív laborlátogatásokkal, kiscsoportos foglalkozásokkal és közösségi élményekkel.
          </p>
          
          <p>
            Az idei téma: az online és offline világ kihívásai – amit a 81 résztvevő kisgyerek valódi kutatói környezetben élhetett át. A hét során:
          </p>
          
          <ul class="list-disc pl-6 mb-4">
            <li>bejárhatták az egyetem kutatólaborjait,</li>
            <li>csapatépítő játékokon és sportvetélkedőkön vehettek részt,</li>
            <li>sárkányhajóval fedezték fel Győrt,</li>
            <li>és még könyvtári kincskeresésre is indultak!</li>
          </ul>
          
          <p>
            A tábor zárásaként a kis egyetemisták egy "diplomaosztón" is átvehették elismeréseiket – rengeteg élménnyel és új tudással térhettek haza.
          </p>
          
          <p>
            Öröm számunkra, hogy hozzájárulhattunk a jövő generációjának szemléletformálásához és tudomány iránti érdeklődéséhez!
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
// VIII. Győri Gyerekegyetem hír részletes oldala

const galleryImages = [
  {
    src: '/media/images/hirek/gyerekegyetem-2.jpeg',
    alt: 'Győri Gyerekegyetem - 2. kép'
  },
  {
    src: '/media/images/hirek/gyerekegyetem-3.jpeg',
    alt: 'Győri Gyerekegyetem - 3. kép'
  },
  {
    src: '/media/images/hirek/gyerekegyetem-4.jpeg',
    alt: 'Győri Gyerekegyetem - 4. kép'
  },
  {
    src: '/media/images/hirek/gyerekegyetem-5.jpeg',
    alt: 'Győri Gyerekegyetem - 5. kép'
  },
  {
    src: '/media/images/hirek/gyerekegyetem-6.jpeg',
    alt: 'Győri Gyerekegyetem - 6. kép'
  },
  {
    src: '/media/images/hirek/gyerekegyetem-7.jpeg',
    alt: 'Győri Gyerekegyetem - 7. kép'
  }
]
</script>
