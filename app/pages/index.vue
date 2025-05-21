<template>
  <UContainer as="section" class="py-12">
    <BaseTitle tag="h1" variant="xlarge" class="text-center mb-8">
      BÜCHL Magyarország
    </BaseTitle>
    
    <p class="text-center text-lg mb-16 max-w-3xl mx-auto text-neutral-600">
      Weboldal fejlesztési projekt: design system és oldaltervek
    </p>

    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <!-- Design System Card -->
      <UCard
        :ui="{
          root: 'shadow-lg ring-1 ring-neutral-300 hover:shadow-xl transition-all duration-300',
          header: 'p-0 sm:p-0',
        }"
        class="h-full flex flex-col"
      >
        <template #header>
          <div class="overflow-hidden rounded-t-md">
            <img
              src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&h=400&fit=crop"
              alt="BÜCHL Design System"
              class="w-full h-52 object-cover"
            />
          </div>
        </template>
        <template #default>
          <div class="flex-1">
            <h3 class="text-2xl font-semibold mb-3 text-buchl-blue">Design System</h3>
            <p class="text-gray-600 mb-6">
              A BÜCHL Magyarország digitális arculati rendszere, komponensek és stílusok gyűjteménye. 
              Tekintse meg a vállalati színeket, tipográfiát, komponenseket és UI elemeket.
            </p>
          </div>
          <UButton 
            to="/design-system" 
            color="primary"
            size="lg"
            class="w-full"
          >
            Design System megtekintése
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
          </UButton>
        </template>
      </UCard>

      <!-- Website Plans Card -->
      <UCard
        :ui="{
          root: 'shadow-lg ring-1 ring-neutral-300 hover:shadow-xl transition-all duration-300',
          header: 'p-0 sm:p-0',
        }"
        class="h-full flex flex-col"
      >
        <template #header>
          <div class="overflow-hidden rounded-t-md">
            <img
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=400&fit=crop"
              alt="BÜCHL Oldaltervek"
              class="w-full h-52 object-cover"
            />
          </div>
        </template>
        <template #default>
          <div class="flex-1">
            <h3 class="text-2xl font-semibold mb-3 text-buchl-blue">Oldaltervek</h3>
            <p class="text-gray-600 mb-6">
              A BÜCHL Hungaria weboldal fejlesztési tervei, oldalminták, tartalmi tervek és prototípusok. 
              Tekintse meg a készülő oldalak terveit és részletes tartalmát.
            </p>
          </div>
          <UButton 
            to="/oldaltervek" 
            color="primary"
            size="lg"
            class="w-full"
          >
            Oldaltervek megtekintése
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
          </UButton>
        </template>
      </UCard>
    </div>

    <!-- Footer informations -->
    <div class="mt-16 text-center text-neutral-500 text-sm">
      <p>
        © {{ new Date().getFullYear() }} BÜCHL Hungaria Kft. | Minden jog fenntartva
      </p>
      <p class="mt-2">
        Webfejlesztési projekt | Design System és Oldaltervek
      </p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
</script>