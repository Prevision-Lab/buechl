<template>
  <footer class="bg-buchl-blue text-white">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="mb-4">
            <BuchlLogo :height="48" :width="250" variant="white" />
          </div>
          <p class="text-white/80 text-sm">
            A BÜCHL Hungaria Kft. vezető ipari hulladékkezelő vállalat Magyarországon.
            Innovatív megoldásainkkal támogatjuk a fenntartható fejlődést.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="text-white/60 hover:text-white transition-colors">
              <span class="sr-only">Facebook</span>
              <UIcon name="i-heroicons-globe" class="w-6 h-6" />
            </a>
            <a href="#" class="text-white/60 hover:text-white transition-colors">
              <span class="sr-only">LinkedIn</span>
              <UIcon name="i-heroicons-user-group" class="w-6 h-6" />
            </a>
            <a href="#" class="text-white/60 hover:text-white transition-colors">
              <span class="sr-only">YouTube</span>
              <UIcon name="i-heroicons-video-camera" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Szolgáltatások</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/szolgaltatasok/hulladekkezeles" class="text-white/80 hover:text-white transition-colors text-sm">
                Hulladékkezelés
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/szolgaltatasok/ujrahasznositas" class="text-white/80 hover:text-white transition-colors text-sm">
                Újrahasznosítás
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/szolgaltatasok/szallitas" class="text-white/80 hover:text-white transition-colors text-sm">
                Szállítás és logisztika
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/szolgaltatasok/tanacsadas" class="text-white/80 hover:text-white transition-colors text-sm">
                Környezetvédelmi tanácsadás
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Cégünk</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/rolunk" class="text-white/80 hover:text-white transition-colors text-sm">
                Rólunk
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fenntarthatosag" class="text-white/80 hover:text-white transition-colors text-sm">
                Fenntarthatóság
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/karrier" class="text-white/80 hover:text-white transition-colors text-sm">
                Karrier
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hirek" class="text-white/80 hover:text-white transition-colors text-sm">
                Hírek
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Kapcsolat</h3>
          <address class="not-italic space-y-2 text-sm text-white/80">
            <p>
              <strong>BÜCHL Hungaria Kft.</strong>
            </p>
            <p>9027 Győr, Csörgőfa sor 8.</p>
            <p class="pt-2">
              Tel: <a href="tel:+3696516620" class="hover:text-white transition-colors">+36 96 516-620</a>
            </p>
            <p>
              Email: <a href="mailto:info@buechl.hu" class="hover:text-white transition-colors">info@buechl.hu</a>
            </p>
          </address>
          <div class="mt-4">
            <NuxtLink 
              to="/kapcsolat"
              class="inline-flex items-center gap-2 bg-buchl-green text-buchl-blue px-4 py-2 font-medium hover:bg-buchl-green/90 transition-colors"
            >
              Kapcsolatfelvétel
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/20">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-white/60 text-center md:text-left">
            © {{ new Date().getFullYear() }} BÜCHL Hungaria Kft. Minden jog fenntartva.
          </p>
          <nav class="flex gap-6">
            <NuxtLink to="/design-system" class="text-sm text-white/60 hover:text-white transition-colors">
              Design System
            </NuxtLink>
            <NuxtLink to="/adatvedelem" class="text-sm text-white/60 hover:text-white transition-colors">
              Adatvédelem
            </NuxtLink>
            <NuxtLink to="/impresszum" class="text-sm text-white/60 hover:text-white transition-colors">
              Impresszum
            </NuxtLink>
            <NuxtLink to="/aszf" class="text-sm text-white/60 hover:text-white transition-colors">
              ÁSZF
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component for BÜCHL website
</script>