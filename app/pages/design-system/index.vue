<template>
  <UContainer>
    <UPageHeader 
      title="BÜCHL Design System"
      description="A BÜCHL Magyarország digitális arculati rendszere"
    >
      <template #links>
        <UButton
          color="primary"
          variant="ghost"
          to="/"
          icon="i-heroicons-home"
          size="sm"
        >
          Vissza a főoldalra
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Hero section a design systemről -->
      <section class="mb-12">
        <UCard>
          <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold text-sapphire-500">Üdvözöljük a BÜCHL Design Systemben</h2>
            <p class="text-lg">
              Ez a design system biztosítja a BÜCHL márka egységes megjelenését és következetes felhasználói élményét 
              minden digitális platformon. A rendszer a BÜCHL vállalati arculatán alapul, és rugalmasan bővíthető 
              új elemekkel és funkciókkal.
            </p>
          </div>
        </UCard>
      </section>

      <!-- Navigációs kártyák -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="section in sections"
          :key="section.to"
          :to="section.to"
          class="block"
        >
          <UCard
            class="group hover:shadow-lg transition-shadow duration-300 h-full"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon :name="section.icon" class="w-8 h-8 text-primary" />
                <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
                  {{ section.title }}
                </h3>
              </div>
            </template>
            
            <p class="text-gray-600 dark:text-gray-300">
              {{ section.description }}
            </p>
          </UCard>
        </NuxtLink>
      </div>

      <!-- Gyors linkek -->
      <section class="mt-12">
        <h3 class="text-xl font-semibold mb-6">Gyors elérés</h3>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-for="quickLink in quickLinks"
            :key="quickLink.label"
            :to="quickLink.to"
          >
            <UBadge
              color="primary"
              variant="soft"
              size="lg"
              class="cursor-pointer hover:bg-sapphire-100 dark:hover:bg-sapphire-900 transition-colors"
            >
              {{ quickLink.label }}
            </UBadge>
          </NuxtLink>
        </div>
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Design system szekciók
const sections = [
  {
    title: 'Logo',
    description: 'A BÜCHL Hungaria hivatalos logója és használati útmutatója',
    icon: 'i-heroicons-sparkles',
    to: '/design-system/logo'
  },
  {
    title: 'Színpaletta',
    description: 'A BÜCHL márka színvilága és alkalmazási szabályai',
    icon: 'i-heroicons-swatch',
    to: '/design-system/colors'
  },
  {
    title: 'Tipográfia',
    description: 'Betűtípusok, méretek és tipográfiai hierarchia',
    icon: 'i-heroicons-language',
    to: '/design-system/typography'
  },
  {
    title: 'Layout & Spacing',
    description: 'Rácsrendszer, térközök és elrendezési alapelvek',
    icon: 'i-heroicons-squares-2x2',
    to: '/design-system/layout'
  },
  {
    title: 'Komponensek',
    description: 'UI komponensek katalógusa - gombok, űrlapok, értesítések',
    icon: 'i-heroicons-cube',
    to: '/design-system/components'
  },
  {
    title: 'Hero Szekció',
    description: 'Főoldali hero komponens és variációk',
    icon: 'i-heroicons-photo',
    to: '/design-system/hero'
  },
  {
    title: 'Kártyák',
    description: 'Nuxt UI alapú kártya komponensek különböző felhasználási esetekre',
    icon: 'i-heroicons-credit-card',
    to: '/design-system/cards'
  },
  {
    title: 'Blog Posts',
    description: 'Blog bejegyzés komponensek különböző elrendezésekkel',
    icon: 'i-heroicons-document-text',
    to: '/design-system/blog-posts'
  },
  {
    title: 'Űrlapok',
    description: 'Komplex űrlapok, validáció és form elemek',
    icon: 'i-heroicons-pencil-square',
    to: '/design-system/forms'
  },
  {
    title: 'Táblázatok',
    description: 'Adatok strukturált megjelenítése sorok és oszlopok formájában',
    icon: 'i-heroicons-table-cells',
    to: '/design-system/tables'
  },
  {
    title: 'Szolgáltatás kártyák',
    description: 'Szolgáltatások bemutatására optimalizált kártya komponensek',
    icon: 'i-heroicons-briefcase',
    to: '/design-system/service-cards'
  },
  {
    title: 'Header',
    description: 'Reszponzív navigációs fejléc nyelvi választóval',
    icon: 'i-heroicons-bars-3',
    to: '/design-system/header'
  },
  {
    title: 'Footer',
    description: 'Weboldal lábléc a BÜCHL márka színeivel',
    icon: 'i-heroicons-bars-3-bottom-left',
    to: '/design-system/footer'
  },
  {
    title: 'Projekt Bemutató',
    description: 'Referencia projektek látványos megjelenítése',
    icon: 'i-heroicons-photo',
    to: '/design-system/project-showcase'
  },
  {
    title: 'Testimonials',
    description: 'Ügyfélvélemények megjelenítése különböző módokon',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/design-system/testimonials'
  },
  {
    title: 'Animáció',
    description: 'VueUse Motion helyes implementáció a megfelelő direktívákkal',
    icon: 'i-heroicons-sparkles',
    to: '/design-system/animation'
  }
]

// Gyors linkek
const quickLinks = [
  { label: 'Brand színek', to: '/design-system/colors#brand' },
  { label: 'Gombok', to: '/design-system/components#buttons' },
  { label: 'Űrlapok', to: '/design-system/forms' },
  { label: 'Táblázatok', to: '/design-system/tables' },
  { label: 'Animáció', to: '/design-system/animation' },
  { label: 'Kártyák', to: '/design-system/cards' },
  { label: 'BlogPost kártyák', to: '/design-system/blog-posts' },
  { label: 'Navigáció', to: '/design-system/components#navigation' }
]
</script>