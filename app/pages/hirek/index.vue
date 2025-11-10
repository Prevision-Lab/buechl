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

        <!-- 2x2 Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Hír 1: VBS Junior Kör -->
          <BuchlBlogPost
            :title="$t('news.posts.vbs.title')"
            :description="$t('news.posts.vbs.description')"
            image="/media/images/hirek/vbs-junior.jpeg"
            to="/hirek/vbs-junior-kor-latogatas"
            :category="$t('news.posts.vbs.category')"
            date="2025-09-12"
            :reading-time="$t('news.posts.vbs.readingTime')"
            :read-more-text="$t('news.page.readMore')"
          />

          <!-- Hír 2: RESZETT program -->
          <BuchlBlogPost
            :title="$t('news.posts.reszett.title')"
            :description="$t('news.posts.reszett.description')"
            image="/media/images/hirek/reszett-program.jpeg"
            to="/hirek/reszett-program"
            :category="$t('news.posts.reszett.category')"
            date="2025-08-28"
            :reading-time="$t('news.posts.reszett.readingTime')"
            :read-more-text="$t('news.page.readMore')"
          />

          <!-- Hír 3: VIII. Győri Gyerekegyetem -->
          <BuchlBlogPost
            :title="$t('news.posts.gyerekegyetem.title')"
            :description="$t('news.posts.gyerekegyetem.description')"
            image="/media/images/hirek/gyerekegyetem.jpeg"
            to="/hirek/viii-gyori-gyerekegyetem"
            :category="$t('news.posts.gyerekegyetem.category')"
            date="2025-08-24"
            :reading-time="$t('news.posts.gyerekegyetem.readingTime')"
            :read-more-text="$t('news.page.readMore')"
          />

          <!-- Hír 4: Raklapos Építőtábor -->
          <BuchlBlogPost
            :title="$t('news.posts.raklapos.title')"
            :description="$t('news.posts.raklapos.description')"
            image="/media/images/hirek/raklapos-epitotabor.jpeg"
            to="/hirek/10-ev-egyutt-a-kreativitasert"
            :category="$t('news.posts.raklapos.category')"
            date="2025-08-18"
            :reading-time="$t('news.posts.raklapos.readingTime')"
            :read-more-text="$t('news.page.readMore')"
          />
          
          <!-- Hír 5: Defibrillátorok telepítése -->
          <BuchlBlogPost
            :title="$t('news.posts.defibrillator.title')"
            :description="$t('news.posts.defibrillator.description')"
            image="/media/images/hirek/defibrillatorok.jpeg"
            to="/hirek/defibrillatorok-telepites"
            :category="$t('news.posts.defibrillator.category')"
            date="2025-07-25"
            :reading-time="$t('news.posts.defibrillator.readingTime')"
            :read-more-text="$t('news.page.readMore')"
          />

          <!-- Hír 6: Stresszkezelő tréning -->
          <BuchlBlogPost
            :title="$t('news.posts.stressz.title')"
            :description="$t('news.posts.stressz.description')"
            image="/media/images/hirek/stresszkezelo-trening.jpeg"
            to="/hirek/stresszkezelo-trening"
            :category="$t('news.posts.stressz.category')"
            date="2025-07-21"
            :reading-time="$t('news.posts.stressz.readingTime')"
            :read-more-text="$t('news.page.readMore')"
          />
        </div>

        <!-- Összes hír gomb -->
        <div class="text-center mt-12">
          <UButton
            size="lg"
            variant="outline"
            color="primary"
            icon="i-heroicons-newspaper"
            class="rounded-none border-2 px-8"
          >
            {{ $t('news.page.viewAllButton') }}
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(8) // ID: 8 - Hírek

const categories = [
  { label: t('news.page.categories.all'), value: 'all' },
  { label: t('news.page.categories.technology'), value: 'technology' },
  { label: t('news.page.categories.sustainability'), value: 'sustainability' },
  { label: t('news.page.categories.events'), value: 'events' },
  { label: t('news.page.categories.innovation'), value: 'innovation' },
  { label: t('news.page.categories.community'), value: 'community' },
  { label: t('news.page.categories.recognition'), value: 'recognition' }
]

const years = [
  { label: t('news.page.years.all'), value: 'all' },
  { label: t('news.page.years.2025'), value: '2025' },
  { label: t('news.page.years.2024'), value: '2024' },
  { label: t('news.page.years.2023'), value: '2023' }
]
</script>
