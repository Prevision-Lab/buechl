<template>
  <UContainer>
    <UPageHeader 
      title="Tipográfia"
      description="Betűtípusok, méretek és tipográfiai hierarchia"
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
      <!-- Betűtípusok -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Betűtípusok</h2>
        
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Catamaran -->
          <UCard>
            <template #header>
              <h3 class="text-xl font-semibold">Catamaran</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Elsődleges betűtípus</p>
            </template>
            
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-200">
                Használat: Főcímek, alcímek, navigáció, gombok
              </p>
              
              <div class="space-y-3">
                <div v-for="weight in catamaranWeights" :key="weight.value">
                  <p class="text-sm text-gray-500 mb-1">{{ weight.name }} ({{ weight.value }})</p>
                  <p 
                    class="text-2xl"
                    :style="`font-weight: ${weight.value}`"
                  >
                    BÜCHL Magyarország - Egy ötlettel előrébb
                  </p>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Permanent Marker -->
          <UCard>
            <template #header>
              <h3 class="text-xl font-semibold">Permanent Marker</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Másodlagos betűtípus</p>
            </template>
            
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-200">
                Használat: Kiemelések, slogen, egyedi hangsúlyok
              </p>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-500 mb-1">Regular (400)</p>
                <p class="text-2xl font-display">
                  BÜCHL - Innovatív, Vielfältig, Familiär
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Tipográfiai skála -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Tipográfiai skála</h2>
        
        <UCard>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th class="text-left py-3 px-4">Elem</th>
                  <th class="text-left py-3 px-4">Méret</th>
                  <th class="text-left py-3 px-4">Súly</th>
                  <th class="text-left py-3 px-4">Sormagasság</th>
                  <th class="text-left py-3 px-4">Példa</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="item in typographyScale" :key="item.element">
                  <td class="py-3 px-4 font-medium">{{ item.element }}</td>
                  <td class="py-3 px-4 font-mono text-sm">{{ item.size }}</td>
                  <td class="py-3 px-4">{{ item.weight }}</td>
                  <td class="py-3 px-4">{{ item.lineHeight }}</td>
                  <td class="py-3 px-4">
                    <component
                      :is="item.tag"
                      :class="item.class"
                    >
                      {{ item.example }}
                    </component>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UCard>
      </section>

      <!-- Tipográfiai szabályok -->
      <section>
        <h2 class="text-2xl font-bold mb-6">Tipográfiai szabályok</h2>
        
        <UCard>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-buchl-500 mt-0.5" />
              <span>Szövegtörzs esetén kerülendő a túl keskeny (kevesebb mint 45 karakter) vagy túl széles (több mint 80 karakter) sorhosszúság</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-buchl-500 mt-0.5" />
              <span>A címsorok és szövegtörzs között megfelelő térköz alkalmazandó (minimum 16px / 1rem)</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-buchl-500 mt-0.5" />
              <span>A szöveg alapértelmezett színe fekete (#000000) vagy sötétszürke (#333333)</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-buchl-500 mt-0.5" />
              <span>Kiemelt szövegek esetén a Büchl zöld (#00F189) használandó</span>
            </li>
          </ul>
        </UCard>
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Catamaran súlyok
const catamaranWeights = [
  { name: 'Thin', value: 100 },
  { name: 'Regular', value: 400 },
  { name: 'Medium', value: 500 },
  { name: 'SemiBold', value: 600 },
  { name: 'Bold', value: 700 }
]

// Tipográfiai skála
const typographyScale = [
  {
    element: 'H1',
    size: '48px / 3rem',
    weight: 'Bold (700)',
    lineHeight: '1.2',
    tag: 'h1',
    class: 'text-5xl font-bold',
    example: 'Főcím'
  },
  {
    element: 'H2',
    size: '36px / 2.25rem',
    weight: 'SemiBold (600)',
    lineHeight: '1.3',
    tag: 'h2',
    class: 'text-4xl font-semibold',
    example: 'Szekciócím'
  },
  {
    element: 'H3',
    size: '28px / 1.75rem',
    weight: 'SemiBold (600)',
    lineHeight: '1.4',
    tag: 'h3',
    class: 'text-3xl font-semibold',
    example: 'Alszekció címe'
  },
  {
    element: 'H4',
    size: '24px / 1.5rem',
    weight: 'Medium (500)',
    lineHeight: '1.4',
    tag: 'h4',
    class: 'text-2xl font-medium',
    example: 'Kártya cím'
  },
  {
    element: 'H5',
    size: '20px / 1.25rem',
    weight: 'Medium (500)',
    lineHeight: '1.5',
    tag: 'h5',
    class: 'text-xl font-medium',
    example: 'Kisebb cím'
  },
  {
    element: 'H6',
    size: '18px / 1.125rem',
    weight: 'Medium (500)',
    lineHeight: '1.5',
    tag: 'h6',
    class: 'text-lg font-medium',
    example: 'Legkisebb cím'
  },
  {
    element: 'Body Large',
    size: '18px / 1.125rem',
    weight: 'Regular (400)',
    lineHeight: '1.6',
    tag: 'p',
    class: 'text-lg',
    example: 'Kiemelt szövegtörzs'
  },
  {
    element: 'Body',
    size: '16px / 1rem',
    weight: 'Regular (400)',
    lineHeight: '1.6',
    tag: 'p',
    class: 'text-base',
    example: 'Általános szövegtörzs'
  },
  {
    element: 'Body Small',
    size: '14px / 0.875rem',
    weight: 'Regular (400)',
    lineHeight: '1.6',
    tag: 'p',
    class: 'text-sm',
    example: 'Másodlagos információk'
  },
  {
    element: 'Caption',
    size: '12px / 0.75rem',
    weight: 'Regular (400)',
    lineHeight: '1.4',
    tag: 'p',
    class: 'text-xs',
    example: 'Képaláírások, jogi szövegek'
  }
]
</script>