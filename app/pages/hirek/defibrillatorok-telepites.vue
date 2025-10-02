<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
            Biztonság
          </span>
          <h1 class="text-4xl font-bold mb-4">
            Munkatársaink biztonsága érdekében
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>2025. július 25.</span>
            <span class="mx-3">•</span>
            <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-2" />
            <span>2 perc olvasás</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tartalom szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-700 mb-6">
            A BÜCHL Hungaria számára a munkatársak biztonsága mindig is elsődleges szempont volt. Ennek jegyében három darab automata defibrillátort (AED) telepítettünk telephelyünkön, és kollégáink képzéséről is gondoskodtunk, hogy vészhelyzet esetén magabiztosan és szakszerűen tudjanak cselekedni.
          </p>
          
          <div class="my-8">
            <img 
              src="/media/images/06.jpg" 
              alt="Defibrillátorok telepítése"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <p>
            Ez nem csupán beruházás volt az eszközökbe, hanem elköteleződés az élet védelme mellett. A megfelelő időben adott segítség életet menthet – és mostantól mi is készen állunk erre.
          </p>
          
          <p>
            Köszönjük minden kollégának, aki részt vett a képzésen.
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
// Defibrillátorok telepítése hír részletes oldala
</script>