<template>
  <UContainer>
    <UPageHeader 
      title="Footer"
      description="A footer komponens a weboldal láblécéhez biztosít konzisztens megjelenést."
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
          A footer a BÜCHL kék háttérrel és fehér szöveggel jelenik meg:
        </p>
        <div class="border rounded-lg overflow-hidden">
          <TheFooter />
        </div>
      </div>

      <!-- Structure -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Struktúra</h2>
        <p class="text-gray-600 mb-4">
          A footer két fő részből áll:
        </p>
        
        <div class="space-y-4">
          <div class="border rounded-lg p-6">
            <h3 class="font-semibold text-lg mb-2">1. Fő tartalom (4 oszlop)</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Céginformációk és közösségi média linkek</li>
              <li>Szolgáltatások listája</li>
              <li>Cégre vonatkozó linkek</li>
              <li>Kapcsolati információk és CTA gomb</li>
            </ul>
          </div>
          
          <div class="border rounded-lg p-6">
            <h3 class="font-semibold text-lg mb-2">2. Alsó sáv</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Copyright szöveg</li>
              <li>Jogi linkek (adatvédelem, impresszum, ÁSZF)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Design Principles -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Design elvek</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-2">Színek</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Háttér: BÜCHL kék (#002F5C)</li>
              <li>Fő szöveg: Fehér (#FFFFFF)</li>
              <li>Másodlagos szöveg: Átlátszó fehér (white/80)</li>
              <li>Linkek: Átlátszó fehér hover effekttel</li>
              <li>CTA gomb: BÜCHL zöld háttér kék szöveggel</li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-2">Tipográfia</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Címek: font-semibold text-lg</li>
              <li>Szöveg: text-sm</li>
              <li>Copyright és jogi szöveg: text-sm text-white/60</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Accessibility -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Akadálymentesség</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-600">
          <li>Megfelelő színkontraszt a fehér szöveg és kék háttér között</li>
          <li>Szemantikus HTML elemek (footer, nav, address)</li>
          <li>Screen reader barát linkek (sr-only osztályok)</li>
          <li>Fókusz státuszok és hover effektek</li>
        </ul>
      </div>

      <!-- Code Example -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Használat</h2>
        <p class="text-gray-600 mb-4">
          A footer komponens egyszerűen beilleszthető a default layout-ba:
        </p>
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Page content --&gt;
    &lt;slot /&gt;
    &lt;!-- Footer --&gt;
    &lt;TheFooter /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code>
        </pre>
      </div>

      <!-- Responsive Behavior -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Reszponzív viselkedés</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Mobil (&lt; 768px)</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>1 oszlopos elrendezés</li>
              <li>Függőleges stack a fő szekcióknál</li>
              <li>Középre rendezett alsó sáv</li>
            </ul>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Tablet (768px - 1024px)</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>2 oszlopos elrendezés</li>
              <li>Kompaktabb padding</li>
              <li>Alsó sáv flex-row</li>
            </ul>
          </div>
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Desktop (> 1024px)</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>4 oszlopos elrendezés</li>
              <li>Teljes padding és térközök</li>
              <li>Optimális megjelenés</li>
            </ul>
          </div>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Footer documentation page
</script>