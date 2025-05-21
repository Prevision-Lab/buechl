<template>
  <UContainer>
    <UPageHeader 
      title="Layout & Spacing"
      description="A BÜCHL design system térköz és elrendezési rendszere"
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
      <!-- Grid System -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Grid rendszer</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          A BÜCHL weboldal rugalmas, reszponzív 12 oszlopos grid rendszert használ, amely a Tailwind CSS-re épül.
        </p>
        
        <div class="grid gap-4">
          <!-- 12 oszlopos példa -->
          <div>
            <h3 class="text-lg font-semibold mb-3">12 oszlopos grid</h3>
            <div class="grid grid-cols-12 gap-4">
              <div v-for="n in 12" :key="n" class="bg-buchl-500 text-black text-center py-4 rounded">
                {{ n }}
              </div>
            </div>
          </div>

          <!-- Különböző felosztások -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Gyakori elrendezések</h3>
            <div class="space-y-3">
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 bg-sapphire-500 text-white text-center py-4 rounded">
                  6 oszlop
                </div>
                <div class="col-span-6 bg-sapphire-500 text-white text-center py-4 rounded">
                  6 oszlop
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-4 bg-sapphire-500 text-white text-center py-4 rounded">
                  4 oszlop
                </div>
                <div class="col-span-4 bg-sapphire-500 text-white text-center py-4 rounded">
                  4 oszlop
                </div>
                <div class="col-span-4 bg-sapphire-500 text-white text-center py-4 rounded">
                  4 oszlop
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-3 bg-sapphire-500 text-white text-center py-4 rounded">
                  3 oszlop
                </div>
                <div class="col-span-9 bg-sapphire-500 text-white text-center py-4 rounded">
                  9 oszlop
                </div>
              </div>
            </div>
          </div>

          <!-- Reszponzív grid -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Reszponzív viselkedés</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-buchl-500 text-black text-center py-4 rounded">
                Mobil: teljes szél.
              </div>
              <div class="bg-buchl-500 text-black text-center py-4 rounded">
                Tablet: 2 oszlop
              </div>
              <div class="bg-buchl-500 text-black text-center py-4 rounded">
                Desktop: 4 oszlop
              </div>
              <div class="bg-buchl-500 text-black text-center py-4 rounded">
                Rugalmas elrendezés
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Térközök -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Térköz rendszer</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          A következetesen alkalmazott térközök biztosítják a tiszta és rendezett megjelenést. 
          A BÜCHL design system meghatározott térköz skálát használ.
        </p>

        <div class="space-y-4">
          <div 
            v-for="space in spacingScale" 
            :key="space.name"
            class="flex items-center gap-4"
          >
            <div class="w-20 text-sm font-mono text-gray-600">{{ space.name }}</div>
            <div class="w-20 text-sm text-gray-600">{{ space.value }}</div>
            <div 
              class="bg-buchl-500 h-6 transition-all duration-300"
              :style="{ width: space.value }"
            ></div>
          </div>
        </div>

        <UCard class="mt-8">
          <h3 class="text-lg font-semibold mb-4">Használati példák</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">p-2xs</code>
              <span>Kis padding kisebb elemekhez</span>
            </div>
            <div class="flex items-center gap-4">
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">m-sm</code>
              <span>Standard margin elemek között</span>
            </div>
            <div class="flex items-center gap-4">
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">gap-md</code>
              <span>Közepes távolság grid elemek között</span>
            </div>
            <div class="flex items-center gap-4">
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">py-xl</code>
              <span>Nagy függőleges padding szekciókhoz</span>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Container méretezés -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Container méretezés</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          A tartalom maximális szélességének korlátozása biztosítja az optimális olvashatóságot különböző képernyőméreteken.
        </p>

        <div class="space-y-6">
          <div v-for="container in containerSizes" :key="container.name">
            <h3 class="text-lg font-semibold mb-2">{{ container.name }} ({{ container.maxWidth }})</h3>
            <div 
              class="bg-gray-100 dark:bg-gray-800 rounded p-4 mx-auto transition-all duration-500"
              :style="{ maxWidth: container.maxWidth }"
            >
              <div class="bg-sapphire-500 text-white p-4 rounded text-center">
                Container minta tartalom
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Breakpoints -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Breakpoints</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          A reszponzív design érdekében különböző töréspontokat használunk.
        </p>

        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Névtér
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Min. szélesség
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Használat
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="breakpoint in breakpoints" :key="breakpoint.name">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {{ breakpoint.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ breakpoint.minWidth }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ breakpoint.usage }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <UCard class="mt-8">
          <h3 class="text-lg font-semibold mb-4">Használati példa</h3>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
<code>&lt;div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"&gt;
  &lt;!-- Reszponzív grid elemek --&gt;
&lt;/div&gt;</code>
          </pre>
        </UCard>
      </section>

      <!-- Best Practices -->
      <section>
        <h2 class="text-2xl font-bold mb-6">Best Practices</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <UCard>
            <h3 class="text-lg font-semibold mb-3">
              <UIcon name="i-heroicons-check-circle" class="text-success-500" /> 
              Ajánlott
            </h3>
            <ul class="space-y-2 text-sm">
              <li>• Következetes térközök használata</li>
              <li>• Mobile-first megközelítés</li>
              <li>• Rugalmas elrendezések preferálása</li>
              <li>• Container használata tartalomhoz</li>
              <li>• Skálázható térköz rendszer</li>
            </ul>
          </UCard>
          
          <UCard>
            <h3 class="text-lg font-semibold mb-3">
              <UIcon name="i-heroicons-x-circle" class="text-error-500" />
              Kerülendő
            </h3>
            <ul class="space-y-2 text-sm">
              <li>• Fix szélességek mobil eszközökön</li>
              <li>• Inline stílusok térközökhöz</li>
              <li>• Inkonzisztens padding/margin</li>
              <li>• Túl sok különböző térköz</li>
              <li>• Desktop-first tervezés</li>
            </ul>
          </UCard>
        </div>
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Térköz skála
const spacingScale = [
  { name: '2xs', value: '0.25rem' },
  { name: 'xs', value: '0.5rem' },
  { name: 'sm', value: '1rem' },
  { name: 'md', value: '1.5rem' },
  { name: 'lg', value: '2rem' },
  { name: 'xl', value: '3rem' },
  { name: '2xl', value: '4rem' },
  { name: '3xl', value: '6rem' }
]

// Container méretek
const containerSizes = [
  { name: 'Small', maxWidth: '640px', usage: 'Kis szövegblokkok' },
  { name: 'Medium', maxWidth: '768px', usage: 'Blog bejegyzések' },
  { name: 'Large', maxWidth: '1024px', usage: 'Általános oldalak' },
  { name: 'X-Large', maxWidth: '1280px', usage: 'Nagy felületek' }
]

// Breakpoints
const breakpoints = [
  { name: 'sm', minWidth: '640px', usage: 'Kis tabletek' },
  { name: 'md', minWidth: '768px', usage: 'Tabletek' },
  { name: 'lg', minWidth: '1024px', usage: 'Kis laptokok' },
  { name: 'xl', minWidth: '1280px', usage: 'Desktop' },
  { name: '2xl', minWidth: '1536px', usage: 'Nagy monitorok' }
]

// Nuxt UI v3 columns with explicit id
const breakpointColumns = [
  { key: 'name', label: 'Névtér', id: 'name' },
  { key: 'minWidth', label: 'Min. szélesség', id: 'minWidth' },
  { key: 'usage', label: 'Használat', id: 'usage' }
]
</script>