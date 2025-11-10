<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      v-if="heroBanner"
      :title="heroBanner.cim"
      :subtitle="heroBanner.leiras"
      :image="heroBanner.kepUrl || '/media/images/buchl-hirek.jpeg'"
      bg-color="blue"
    />

    <!-- Legfrissebb hírek szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            {{ $t('news.page.latest.title') }}
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            {{ $t('news.page.latest.subtitle') }}
          </p>
        </div>

        <!-- Hírek Grid Layout -->
        <div v-if="hirek && hirek.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <BuchlBlogPost
            v-for="hir in hirek"
            :key="hir.id"
            :title="hir.cim"
            :description="hir.leiras"
            :image="hir.kepUrl"
            :to="localePath(`/hirek/${hir.slug}`)"
            :category="getCategoryLabel(hir.kategoria)"
            :date="hir.datum"
            :reading-time="getReadingTime(hir.olvasasi_ido)"
            :read-more-text="$t('news.page.readMore')"
          />
        </div>
        
        <div v-else class="text-center py-12">
          <p class="text-gray-500">{{ $t('news.page.noNews') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(8) // ID: 8 - Hírek

// Hírek lekérése Directusból
const { hirek } = useHirek()

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

// Olvasási idő formázása
const getReadingTime = (minutes: number) => {
  return `${minutes} ${t('news.page.minRead')}`
}

useSeoMeta({
  title: 'Hírek - BÜCHL HUNGARIA',
  description: 'Legfrissébb hírek, események és újdonságok a BÜCHL HUNGARIA Kft.-től.',
  keywords: 'hírek, események, újdonságok, hulladékgazdálkodás, fenntarthatóság'
})
</script>
