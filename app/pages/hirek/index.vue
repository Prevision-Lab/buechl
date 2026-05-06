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
            :category="hir.kategoriaLabel"
            :date="hir.datum"
            :reading-time="hir.olvasasiIdoLabel"
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
const localePath = useLocalePath()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(8) // ID: 8 - Hírek

// Hírek lekérése Directusból
const { hirek } = useHirek()

useSeoMeta({
  title: 'Hírek - BÜCHL HUNGARIA',
  description: 'Legfrissébb hírek, események és újdonságok a BÜCHL HUNGARIA Kft.-től.',
  keywords: 'hírek, események, újdonságok, hulladékgazdálkodás, fenntarthatóság'
})
</script>
