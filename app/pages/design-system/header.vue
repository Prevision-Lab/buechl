<template>
  <UContainer>
    <UPageHeader 
      title="Header"
      description="A header komponens a weboldal fejlécéhez biztosít reszponzív navigációt."
    >
      <template #links>
        <UButton
          to="/design-system"
          icon="i-heroicons-arrow-left"
          color="neutral"
          variant="ghost"
          size="sm"
        >
          Vissza
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Live Example -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Élő példa</h2>
        <p class="text-gray-600 mb-4">
          A header fehér háttérrel és szürke árnyékkal jelenik meg:
        </p>
        <div class="border rounded-lg overflow-hidden">
          <div class="h-[400px] relative">
            <TheHeader />
            <div class="p-8 text-center text-gray-500">
              Tartalom példa a header alatt
            </div>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Funkciók</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-2">Desktop nézet</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Logo a bal oldalon</li>
              <li>Navigációs menü középen</li>
              <li>Nyelvi választó és CTA gomb jobb oldalon</li>
              <li>Sticky pozicionálás görgetésnél</li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-2">Mobil nézet</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Hamburger menü gomb</li>
              <li>Slide-down animált menü</li>
              <li>Teljes szélességű linkek</li>
              <li>Nyelvi választó és CTA a menü alján</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Structure -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Struktúra</h2>
        <div class="space-y-4">
          <div class="border rounded-lg p-6">
            <h3 class="font-semibold text-lg mb-2">Fő navigáció</h3>
            <p class="text-gray-600 mb-4">A következő menüpontokat tartalmazza:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Szolgáltatások</li>
              <li>Rólunk</li>
              <li>Fenntarthatóság</li>
              <li>Karrier</li>
              <li>Hírek</li>
            </ul>
          </div>
          
          <div class="border rounded-lg p-6">
            <h3 class="font-semibold text-lg mb-2">Nyelvi választó</h3>
            <p class="text-gray-600 mb-4">Támogatott nyelvek:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Magyar (HU)</li>
              <li>English (EN)</li>
              <li>Deutsch (DE)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Styling -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Stílusok</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-2">Színek</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Háttér: Fehér (#FFFFFF)</li>
              <li>Szöveg: Szürke (#374151)</li>
              <li>Hover: BÜCHL kék (#002F5C)</li>
              <li>Border: Világosszürke (#E5E7EB)</li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-2">Méretek</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Magasság: 80px (h-20)</li>
              <li>Logo: 40px magas (h-10)</li>
              <li>Z-index: 50 (sticky pozíció)</li>
              <li>Container: max-width + padding</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Responsive Behavior -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Reszponzív viselkedés</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Mobile first megközelítés</h3>
            <p class="text-sm text-gray-600">
              A komponens alapértelmezésben mobil nézetet mutat, majd breakpoint-oknál
              vált át desktop nézetre. A breakpoint lg (1024px).
            </p>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Animációk</h3>
            <p class="text-sm text-gray-600">
              A mobil menü Transition komponenst használ smooth animációhoz.
              A hover effektek transition-colors osztállyal működnek.
            </p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Használat</h2>
        <p class="text-gray-600 mb-4">
          A header komponens a default layout része:
        </p>
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>&lt;template&gt;
  &lt;div class="min-h-screen flex flex-col"&gt;
    &lt;TheHeader /&gt;
    &lt;main class="flex-1"&gt;
      &lt;slot /&gt;
    &lt;/main&gt;
    &lt;TheFooter /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code>
        </pre>
      </div>

      <!-- Accessibility -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Akadálymentesség</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-600">
          <li>Szemantikus HTML elemek (header, nav)</li>
          <li>Megfelelő kontrasztarányok</li>
          <li>Billentyűzet navigáció támogatása</li>
          <li>ARIA label-ek a gombokon</li>
          <li>Skip navigation link (implementálandó)</li>
        </ul>
      </div>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Header documentation page
</script>