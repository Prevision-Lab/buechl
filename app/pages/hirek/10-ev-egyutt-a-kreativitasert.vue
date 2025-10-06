<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
            Események
          </span>
          <h1 class="text-4xl font-bold mb-4">
            10 éve együtt a kreativitásért!
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>2025. augusztus 18.</span>
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
            A BÜCHL HUNGARIA Kft. az AUDI HUNGARIA Zrt.-vel karöltve immár 10 éve, így idén is örömmel támogatta a Generációk Háza által szervezett győri Raklapos Építőtábort.
          </p>
          
          <div class="my-8">
            <img 
              src="/media/images/hirek/raklapos-epitotabor.jpeg"
              alt="Raklapos Építőtábor"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <p>
            A rendkívüli népszerűségnek örvendő nyári programban három héten át, turnusonként 120 8-12 éves kisgyerek épít saját "várost" raklapból és újrahasznosított anyagokból – rengeteg lelkes önkéntes segítségével.
          </p>
          
          <p>
            Az AUDI HUNGARIA Zrt. által felajánlott 800 db raklap térítésmentes szállítását idén is mi vállaltuk, hogy együtt építhessünk élményt, közösséget és jövőt.
          </p>
          
          <p>
            <em>Fotók: Fenesi Bianka és AUDI Hungaria Zrt.</em>
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
// 10 év együtt a kreativitásért hír részletes oldala

const galleryImages = [
  {
    src: '/media/images/hirek/raklapos-epitotabor-2.jpeg',
    alt: 'Raklapos Építőtábor - 2. kép'
  },
  {
    src: '/media/images/hirek/raklapos-epitotabor-3.jpeg',
    alt: 'Raklapos Építőtábor - 3. kép'
  },
  {
    src: '/media/images/hirek/raklapos-epitotabor-4.jpeg',
    alt: 'Raklapos Építőtábor - 4. kép'
  },
  {
    src: '/media/images/hirek/raklapos-epitotabor-5.jpeg',
    alt: 'Raklapos Építőtábor - 5. kép'
  },
  {
    src: '/media/images/hirek/raklapos-epitotabor-6.jpeg',
    alt: 'Raklapos Építőtábor - 6. kép'
  },
  {
    src: '/media/images/hirek/raklapos-epitotabor-7.jpeg',
    alt: 'Raklapos Építőtábor - 7. kép'
  }
]
</script>
