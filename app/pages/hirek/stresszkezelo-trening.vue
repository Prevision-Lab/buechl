<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
            Fejlesztés
          </span>
          <h1 class="text-4xl font-bold mb-4">
            Mentális egészség és reziliencia
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>2025. július 21.</span>
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
            A BÜCHL HUNGARIA Kft.-nél hiszünk abban, hogy a mentális jóllét és a reziliencia nem luxus, hanem alapfeltétele a fenntartható teljesítménynek és a csapat erejének.
          </p>
          
          <div class="my-8">
            <img 
              src="/media/images/hirek/stresszkezelo-trening.jpeg"
              alt="Stresszkezelő tréning"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <p>
            Munkatársaink nemrég a Német-Magyar Tudásközpont - DUWZ stresszkezelő és rezilienciafejlesztő tréningjén vettek részt, melynek célja:
          </p>
          
          <ul class="list-disc pl-6 mb-4">
            <li>a saját stresszreakciók felismerése,</li>
            <li>jól alkalmazható, gyakorlati technikák elsajátítása,</li>
            <li>valamint beépíthető mikro-szokások kialakítása.</li>
          </ul>
          
          <p>
            Köszönjük mindenkinek, aki nyitottan részt vett, fejlődött, és hozzájárult ahhoz, hogy ez a képzés egy olyan közös élmény is legyen, amely megerősít minket a mindennapokban.
          </p>
          
          <p>
            Külön köszönet a szervezőknek, valamint a trénernek a professzionális, mégis emberközeli megvalósításért!
          </p>
        </div>
        
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
// Stresszkezelő tréning hír részletes oldala
</script>