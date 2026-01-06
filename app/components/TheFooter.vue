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
            {{ $t('footer.companyDescription') }}
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
          <h3 class="font-semibold text-lg mb-4">{{ $t('footer.servicesTitle') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/szolgaltatasok/hulladekkezeles')" class="text-white/80 hover:text-white transition-colors text-sm">
                {{ $t('footer.servicesLinks.wasteManagement') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/szolgaltatasok')" class="text-white/80 hover:text-white transition-colors text-sm">
                {{ $t('footer.servicesLinks.recycling') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/szolgaltatasok/szallitas')" class="text-white/80 hover:text-white transition-colors text-sm">
                {{ $t('footer.servicesLinks.transport') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/szolgaltatasok')" class="text-white/80 hover:text-white transition-colors text-sm">
                {{ $t('footer.servicesLinks.consulting') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Data Management -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Adatkezelés</h3>
          <ul class="space-y-2">
            <li>
              <a href="/dokumentumok/new/buchl_adatkezelesi.pdf" download target="_blank" class="text-white/80 hover:text-white transition-colors text-sm">
                Adatkezelési nyilatkozat
              </a>
            </li>
            <li>
              <a href="/dokumentumok/new/buchl-impresszum.pdf" download target="_blank" class="text-white/80 hover:text-white transition-colors text-sm">
                Impresszum
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold text-lg mb-4">{{ $t('footer.contactTitle') }}</h3>
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
              :to="localePath('/kapcsolat')"
              class="inline-flex items-center gap-2 bg-buchl-green text-buchl-blue px-4 py-2 font-medium hover:bg-buchl-green/90 transition-colors"
            >
              {{ $t('footer.contactButton') }}
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
            © {{ new Date().getFullYear() }} BÜCHL Hungaria Kft. {{ $t('footer.copyright') }}
          </p>
          <nav class="flex gap-6">
            <NuxtLink to="/adatvedelem" class="text-sm text-white/60 hover:text-white transition-colors">
              {{ $t('footer.legal.privacy') }}
            </NuxtLink>
            <NuxtLink to="/impresszum" class="text-sm text-white/60 hover:text-white transition-colors">
              {{ $t('footer.legal.imprint') }}
            </NuxtLink>
            <NuxtLink to="/aszf" class="text-sm text-white/60 hover:text-white transition-colors">
              {{ $t('footer.legal.terms') }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component for BÜCHL website
const localePath = useLocalePath()
</script>
