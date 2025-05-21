<template>
  <UContainer>
    <UPageHeader 
      title="BÜCHL Logo"
      description="A BÜCHL Hungaria márka logója és a használati útmutató"
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
      <!-- Intro Section -->
      <section class="mb-12">
        <UCard>
          <p class="text-gray-600 mb-4">
            A BÜCHL Hungaria hivatalos logója, amely tartalmazza a márkanevet és a 25 éves jubileumi elemet.
            A logo PNG képformátumban érhető el optimális megjelenés érdekében.
          </p>
        </UCard>
      </section>

      <!-- Logo Variations -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Logo variációk</h2>
        
        <div class="space-y-8">
          <!-- Default (Blue on White) -->
          <UCard>
            <h3 class="font-semibold mb-4">Alapértelmezett (kék fehér háttéren)</h3>
            <BuchlLogo />
            <pre class="mt-4 bg-gray-100 p-2 rounded text-sm">
&lt;BuchlLogo /&gt;</pre>
          </UCard>

          <!-- White on Blue -->
          <UCard class="bg-buchl-blue">
            <h3 class="font-semibold mb-4 text-white">Fehér kék háttéren</h3>
            <BuchlLogo variant="white" />
            <pre class="mt-4 bg-black/20 text-white p-2 rounded text-sm">
&lt;BuchlLogo variant="white" /&gt;</pre>
          </UCard>

          <!-- Different Sizes -->
          <UCard>
            <h3 class="font-semibold mb-4">Különböző méretek</h3>
            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-600 mb-2">Kicsi (150px széles)</p>
                <BuchlLogo :width="150" :height="30" />
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-2">Közepes (alapértelmezett - 250px széles)</p>
                <BuchlLogo />
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-2">Nagy (400px széles)</p>
                <BuchlLogo :width="400" :height="80" />
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Props -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Props</h2>
        <UCard>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prop
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Típus
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Alapértelmezett
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leírás
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    width
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string | number
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    250
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    A logo szélessége pixelben
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    height
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string | number
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    50
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    A logo magassága pixelben
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    variant
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'blue' | 'white'
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'blue'
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    A logo színváltozata (kék vagy fehér)
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    className
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ''
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    Egyéni CSS osztályok hozzáadásához
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    alt
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'BÜCHL Hungaria Logo'
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    Alternatív szöveg a képhez
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UCard>
      </section>

      <!-- Usage Guidelines -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Használati útmutató</h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <UCard>
            <h3 class="font-semibold mb-2">Fájl elhelyezése</h3>
            <p class="text-gray-600">
              A logo PNG fájl a <code class="bg-gray-100 px-1 py-0.5 rounded">/public/Buchl_25_fekvo_kek-1.png</code> helyen található.
            </p>
          </UCard>
          
          <UCard>
            <h3 class="font-semibold mb-2">Minimális méretek</h3>
            <p class="text-gray-600">
              A logo olvashatósága érdekében a minimális ajánlott szélesség 150px. Ennél kisebb méretben a szöveg nem lesz jól olvasható.
            </p>
          </UCard>
          
          <UCard>
            <h3 class="font-semibold mb-2">Színhasználat</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Fehér háttéren: <code class="bg-gray-100 px-1 py-0.5 rounded">variant="blue"</code> (alapértelmezett)</li>
              <li>Sötét háttéren: <code class="bg-gray-100 px-1 py-0.5 rounded">variant="white"</code></li>
              <li>A fehér verzió CSS filter-ekkel készül a kék PNG-ből</li>
            </ul>
          </UCard>
          
          <UCard>
            <h3 class="font-semibold mb-2">Arányok megtartása</h3>
            <p class="text-gray-600">
              A logo eredeti aránya 5:1 (szélesség:magasság). Az arányok megtartása érdekében mindig ennek megfelelően állítsd a méreteket.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Code Example -->
      <section>
        <h2 class="text-2xl font-bold mb-6">Implementáció példa</h2>
        <UCard>
          <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>&lt;template&gt;
  &lt;header&gt;
    &lt;NuxtLink to="/"&gt;
      &lt;BuchlLogo :height="48" :width="240" /&gt;
    &lt;/NuxtLink&gt;
  &lt;/header&gt;
  
  &lt;footer class="bg-buchl-blue"&gt;
    &lt;BuchlLogo variant="white" /&gt;
  &lt;/footer&gt;
&lt;/template&gt;

&lt;script setup&gt;
import BuchlLogo from '~/components/BuchlLogo.vue'
&lt;/script&gt;</code>
          </pre>
        </UCard>
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Logo documentation page
</script>