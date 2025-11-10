<template>
  <div v-if="hir" class="min-h-screen bg-gray-50">
    <!-- Hero szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
            {{ getCategoryLabel(hir.kategoria) }}
          </span>
          <h1 class="text-4xl font-bold mb-4">
            {{ hir.cim }}
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>{{ formatDate(hir.datum) }}</span>
            <span v-if="hir.olvasasi_ido" class="mx-3">•</span>
            <UIcon v-if="hir.olvasasi_ido" name="i-heroicons-clock" class="w-4 h-4 mr-2" />
            <span v-if="hir.olvasasi_ido">{{ getReadingTime(hir.olvasasi_ido) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tartalom szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Főkép -->
        <div v-if="hir.kepUrl" class="my-8">
          <img 
            :src="hir.kepUrl"
            :alt="hir.cim"
            class="w-full h-96 object-cover rounded-lg"
          />
        </div>
        
        <!-- Tartalom -->
        <div class="prose prose-lg max-w-none" v-html="hir.tartalom"></div>
        
        <!-- Képgaléria -->
        <HirekGallery v-if="hir.galeriaKepek && hir.galeriaKepek.length > 0" :images="hir.galeriaKepek" />
        
        <!-- Vissza gomb -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <UButton
            :to="localePath('/hirek')"
            variant="outline"
            color="primary"
            class="rounded-none"
            icon="i-heroicons-arrow-left"
          >
            {{ $t('news.page.backToNews') }}
          </UButton>
        </div>
      </div>
    </section>
  </div>
  
  <!-- 404 ha nincs hír -->
  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-buchl-blue mb-4">{{ $t('news.page.notFound') }}</h1>
      <UButton :to="localePath('/hirek')" variant="outline">
        {{ $t('news.page.backToNews') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const slug = route.params.slug as string

// Hír lekérése Directusból
const { fetchHirBySlug } = useHirek()
const { data: hir } = await useAsyncData(`hir-${slug}`, () => fetchHirBySlug(slug))

// Ha nincs hír, 404
if (!hir.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'News not found'
  })
}

// Kategória label lekérése
const getCategoryLabel = (kategoria: string) => {
  const categoryMap: Record<string, string> = {
    'events': t('news.page.categories.events'),
    'education': t('news.page.categories.education'),
    'sustainability': t('news.page.categories.sustainability'),
    'technology': t('news.page.categories.technology'),
    'community': t('news.page.categories.community'),
    'recognition': t('news.page.categories.recognition')
  }
  return categoryMap[kategoria] || kategoria
}

// Dátum formázása
const formatDate = (datum: string) => {
  const date = new Date(datum)
  return new Intl.DateTimeFormat(t('locale'), {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// Olvasási idő formázása
const getReadingTime = (minutes: number) => {
  return `${minutes} ${t('news.page.minRead')}`
}

// SEO
useSeoMeta({
  title: `${hir.value?.cim} - BÜCHL HUNGARIA`,
  description: hir.value?.leiras || '',
  ogTitle: hir.value?.cim,
  ogDescription: hir.value?.leiras || '',
  ogImage: hir.value?.kepUrl || '',
  twitterCard: 'summary_large_image'
})
</script>
