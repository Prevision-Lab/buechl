<template>
  <UContainer>
    <UPageHeader 
      title="Színpaletta"
      description="A BÜCHL márka színvilága és alkalmazási szabályai"
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
      <!-- Elsődleges színek -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Elsődleges márka színek</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="color in primaryColors"
            :key="color.hex"
            class="rounded-lg overflow-hidden shadow-md"
          >
            <div 
              class="h-32 flex items-center justify-center"
              :style="{ 
                backgroundColor: color.hex,
                border: color.hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
              }"
            >
              <span 
                class="text-lg font-bold"
                :style="{ color: color.textColor }"
              >
                {{ color.hex }}
              </span>
            </div>
            
            <div class="p-4 bg-white dark:bg-gray-800">
              <h3 class="font-semibold text-lg">{{ color.name }}</h3>
              <dl class="space-y-1 text-sm mt-2">
                <div class="flex justify-between">
                  <dt class="text-gray-500">HEX:</dt>
                  <dd class="font-mono">{{ color.hex }}</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-gray-500">RGB:</dt>
                  <dd class="font-mono text-xs">{{ color.rgb }}</dd>
                </div>
              </dl>
              <p class="text-sm text-gray-600 dark:text-gray-300 mt-3">
                {{ color.usage }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Másodlagos színek -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Másodlagos színek</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="color in secondaryColors"
            :key="color.hex"
            class="rounded-lg overflow-hidden shadow-md"
          >
            <div 
              class="h-32 flex items-center justify-center"
              :style="{ 
                backgroundColor: color.hex,
                border: color.hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
              }"
            >
              <span 
                class="text-lg font-bold"
                :style="{ color: color.textColor }"
              >
                {{ color.hex }}
              </span>
            </div>
            
            <div class="p-4 bg-white dark:bg-gray-800">
              <h3 class="font-semibold text-lg">{{ color.name }}</h3>
              <dl class="space-y-1 text-sm mt-2">
                <div class="flex justify-between">
                  <dt class="text-gray-500">HEX:</dt>
                  <dd class="font-mono">{{ color.hex }}</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-gray-500">RGB:</dt>
                  <dd class="font-mono text-xs">{{ color.rgb }}</dd>
                </div>
              </dl>
              <p class="text-sm text-gray-600 dark:text-gray-300 mt-3">
                {{ color.usage }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Kiegészítő színek -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Kiegészítő színek</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="color in utilityColors"
            :key="color.hex"
            class="rounded-lg overflow-hidden shadow-md"
          >
            <div 
              class="h-32 flex items-center justify-center"
              :style="{ 
                backgroundColor: color.hex,
                border: color.hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
              }"
            >
              <span 
                class="text-lg font-bold"
                :style="{ color: color.textColor }"
              >
                {{ color.hex }}
              </span>
            </div>
            
            <div class="p-4 bg-white dark:bg-gray-800">
              <h3 class="font-semibold text-lg">{{ color.name }}</h3>
              <dl class="space-y-1 text-sm mt-2">
                <div class="flex justify-between">
                  <dt class="text-gray-500">HEX:</dt>
                  <dd class="font-mono">{{ color.hex }}</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-gray-500">RGB:</dt>
                  <dd class="font-mono text-xs">{{ color.rgb }}</dd>
                </div>
              </dl>
              <p class="text-sm text-gray-600 dark:text-gray-300 mt-3">
                {{ color.usage }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Szín használati szabályok -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Színhasználati szabályok</h2>
        <UCard>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary mt-0.5" />
              <span>A Büchl kék (#002F5C) az elsődleges márkaidentitás színe, a Büchl zöld (#00F189) másodlagosként használandó</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary mt-0.5" />
              <span>Kontrasztarányok betartása a WCAG AA (minimum 4.5:1 szöveg esetén) szabvány szerint</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary mt-0.5" />
              <span>Másodlagos színek csak támogató szerepben használandók</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary mt-0.5" />
              <span>Színátmenetek csak indokolt esetben alkalmazhatók</span>
            </li>
          </ul>
        </UCard>
      </section>

      <!-- Színárnyalatok -->
      <section>
        <h2 class="text-2xl font-bold mb-6">Színárnyalatok</h2>
        <div class="space-y-8">
          <!-- Sapphire árnyalatok -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Büchl Kék (Saphirblau)</h3>
            <div class="flex flex-wrap gap-0">
              <div
                v-for="shade in sapphireShades"
                :key="shade.value"
                class="flex-1 min-w-[120px]"
              >
                <div
                  class="h-16 flex items-center justify-center"
                  :style="{ backgroundColor: shade.hex }"
                >
                  <span 
                    class="text-xs font-medium"
                    :style="{ color: shade.textColor }"
                  >
                    {{ shade.value }}
                  </span>
                </div>
                <div class="p-2 text-center bg-gray-50 dark:bg-gray-800">
                  <p class="text-xs font-mono">{{ shade.hex }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Büchl Zöld árnyalatok -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Büchl Zöld</h3>
            <div class="flex flex-wrap gap-0">
              <div
                v-for="shade in buchlShades"
                :key="shade.value"
                class="flex-1 min-w-[120px]"
              >
                <div
                  class="h-16 flex items-center justify-center"
                  :style="{ backgroundColor: shade.hex }"
                >
                  <span 
                    class="text-xs font-medium"
                    :style="{ color: shade.textColor }"
                  >
                    {{ shade.value }}
                  </span>
                </div>
                <div class="p-2 text-center bg-gray-50 dark:bg-gray-800">
                  <p class="text-xs font-mono">{{ shade.hex }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Elsődleges színek
const primaryColors = [
  {
    name: 'Büchl Kék (Saphirblau)',
    hex: '#002F5C',
    rgb: 'rgb(0, 47, 92)',
    usage: 'Elsődleges márkaidentitás, CTA gombok',
    bgClass: 'bg-sapphire-500',
    textClass: 'text-white',
    textColor: '#FFFFFF'
  },
  {
    name: 'Büchl Zöld',
    hex: '#00F189',
    rgb: 'rgb(0, 241, 137)',
    usage: 'Fenntarthatóság, másodlagos elemek',
    bgClass: 'bg-buchl-500',
    textClass: 'text-white',
    textColor: '#000000'
  },
  {
    name: 'Fekete',
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    usage: 'Főcímek, alapszöveg',
    bgClass: 'bg-black',
    textClass: 'text-white',
    textColor: '#FFFFFF'
  },
  {
    name: 'Fehér',
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
    usage: 'Háttér, inverz tartalom',
    bgClass: 'bg-white border border-gray-200',
    textClass: 'text-black',
    textColor: '#000000'
  }
]

// Másodlagos színek
const secondaryColors = [
  {
    name: 'Világosszürke',
    hex: '#F5F5F5',
    rgb: 'rgb(245, 245, 245)',
    usage: 'Háttérszínek, szekciók elkülönítése',
    bgClass: 'bg-gray-100',
    textClass: 'text-gray-800',
    textColor: '#333333'
  },
  {
    name: 'Középszürke',
    hex: '#D9D9D9',
    rgb: 'rgb(217, 217, 217)',
    usage: 'Elválasztók, kártyakeret',
    bgClass: 'bg-gray-300',
    textClass: 'text-gray-800',
    textColor: '#333333'
  },
  {
    name: 'Sötétszürke',
    hex: '#333333',
    rgb: 'rgb(51, 51, 51)',
    usage: 'Alcímek, másodlagos szöveg',
    bgClass: 'bg-gray-700',
    textClass: 'text-white',
    textColor: '#FFFFFF'
  }
]

// Kiegészítő színek
const utilityColors = [
  {
    name: 'Figyelmeztető',
    hex: '#FFB800',
    rgb: 'rgb(255, 184, 0)',
    usage: 'Figyelmeztetés, kiemelések',
    bgClass: 'bg-warning-500',
    textClass: 'text-black',
    textColor: '#000000'
  },
  {
    name: 'Hiba',
    hex: '#D9001B',
    rgb: 'rgb(217, 0, 27)',
    usage: 'Hibaüzenetek',
    bgClass: 'bg-error-500',
    textClass: 'text-white',
    textColor: '#FFFFFF'
  },
  {
    name: 'Sikeres',
    hex: '#00D965',
    rgb: 'rgb(0, 217, 101)',
    usage: 'Pozitív visszajelzés',
    bgClass: 'bg-success-500',
    textClass: 'text-white',
    textColor: '#000000'
  }
]

// Büchl színárnyalatok
const buchlShades = [
  { value: '50', hex: '#e6f4ea', textColor: '#000000' },
  { value: '100', hex: '#cce9d5', textColor: '#000000' },
  { value: '200', hex: '#99d3ab', textColor: '#000000' },
  { value: '300', hex: '#66bd82', textColor: '#000000' },
  { value: '400', hex: '#33a758', textColor: '#000000' },
  { value: '500', hex: '#00F189', textColor: '#000000' },
  { value: '600', hex: '#006937', textColor: '#FFFFFF' },
  { value: '700', hex: '#004d26', textColor: '#FFFFFF' },
  { value: '800', hex: '#003319', textColor: '#FFFFFF' },
  { value: '900', hex: '#001a0d', textColor: '#FFFFFF' },
  { value: '950', hex: '#000d06', textColor: '#FFFFFF' }
]

// Sapphire színárnyalatok
const sapphireShades = [
  { value: '50', hex: '#e6f0f8', textColor: '#000000' },
  { value: '100', hex: '#cce1f1', textColor: '#000000' },
  { value: '200', hex: '#99c3e3', textColor: '#000000' },
  { value: '300', hex: '#66a5d5', textColor: '#000000' },
  { value: '400', hex: '#3387c7', textColor: '#000000' },
  { value: '500', hex: '#002F5C', textColor: '#FFFFFF' },
  { value: '600', hex: '#002549', textColor: '#FFFFFF' },
  { value: '700', hex: '#001c38', textColor: '#FFFFFF' },
  { value: '800', hex: '#001224', textColor: '#FFFFFF' },
  { value: '900', hex: '#000912', textColor: '#FFFFFF' },
  { value: '950', hex: '#000509', textColor: '#FFFFFF' }
]
</script>