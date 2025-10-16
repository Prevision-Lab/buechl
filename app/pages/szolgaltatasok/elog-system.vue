<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            :title="$t('elogSystem.hero.title')"
            :subtitle="$t('elogSystem.hero.subtitle')"
            image="/media/images/logisztika.jpg"
            bg-color="blue"
            :primary-cta="{
                label: $t('elogSystem.hero.primaryCta'),
                to: localePath('/kapcsolat'),
            }"
            :secondary-cta="{
                label: $t('elogSystem.hero.secondaryCta'),
                to: localePath('/szolgaltatasok'),
            }"
        />

        <!-- Főtartalom -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg max-w-none">
                        <p class="text-xl text-gray-700 mb-8">
                            {{ $t('elogSystem.intro.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ELOG SYSTEM komponensek -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('elogSystem.system.title') }}
                </h2>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Innovatív gyűjtőeszközök -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cube" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('elogSystem.system.components.collectingTools.title') }}</h3>
                        <p class="text-gray-700 text-center">
                            {{ $t('elogSystem.system.components.collectingTools.description') }}
                        </p>
                    </div>

                    <!-- Q-Frame Shuttle -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-truck" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('elogSystem.system.components.qFrameShuttle.title') }}</h3>
                        <p class="text-gray-700 text-center">
                            {{ $t('elogSystem.system.components.qFrameShuttle.description') }}
                        </p>
                    </div>

                    <!-- GYLOG 1.0 -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-document-check" class="text-purple-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('elogSystem.system.components.gylogControl.title') }}</h3>
                        <p class="text-gray-700 text-center">
                            {{ $t('elogSystem.system.components.gylogControl.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Digitális megoldások -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            {{ $t('elogSystem.digital.title') }}
                        </h2>
                        <div class="space-y-6">
                            <div class="border-l-4 border-buchl-blue pl-6">
                                <h3 class="text-xl font-bold text-buchl-blue mb-2">{{ $t('elogSystem.digital.elogplan.title') }}</h3>
                                <p class="text-gray-700">
                                    {{ $t('elogSystem.digital.elogplan.description') }}
                                </p>
                            </div>
                            
                            <div class="border-l-4 border-buchl-green pl-6">
                                <h3 class="text-xl font-bold text-buchl-green mb-2">{{ $t('elogSystem.digital.cleverWaste.title') }}</h3>
                                <p class="text-gray-700">
                                    {{ $t('elogSystem.digital.cleverWaste.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                            alt="Digitális logisztikai megoldások"
                            class="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Szolgáltatások -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('elogSystem.services.title') }}
                </h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <p class="text-lg text-gray-700 text-center mb-8">
                        {{ $t('elogSystem.services.description1') }}
                    </p>
                    <p class="text-lg text-gray-700 text-center">
                        {{ $t('elogSystem.services.description2') }}
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <!-- Targoncavezetők -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-truck" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">{{ $t('elogSystem.services.staff.forkliftOperators.title') }}</h3>
                        <p class="text-gray-600 text-sm">{{ $t('elogSystem.services.staff.forkliftOperators.description') }}</p>
                    </div>

                    <!-- Hulladékszakértők -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-academic-cap" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">{{ $t('elogSystem.services.staff.wasteExperts.title') }}</h3>
                        <p class="text-gray-600 text-sm">{{ $t('elogSystem.services.staff.wasteExperts.description') }}</p>
                    </div>

                    <!-- Szelektív gyűjtés -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-funnel" class="text-orange-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">{{ $t('elogSystem.services.staff.selectiveCollection.title') }}</h3>
                        <p class="text-gray-600 text-sm">{{ $t('elogSystem.services.staff.selectiveCollection.description') }}</p>
                    </div>

                    <!-- Adatrögzítés -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-chart-bar" class="text-purple-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">{{ $t('elogSystem.services.staff.dataEntry.title') }}</h3>
                        <p class="text-gray-600 text-sm">{{ $t('elogSystem.services.staff.dataEntry.description') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Előnyök -->
        <section class="py-16 bg-buchl-blue text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                        {{ $t('elogSystem.benefits.title') }}
                    </h2>
                </div>
                
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div class="text-center">
                        <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-document-check" class="text-white text-3xl" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ $t('elogSystem.benefits.paperless.title') }}</h3>
                        <p class="text-white/80">{{ $t('elogSystem.benefits.paperless.description') }}</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-chart-pie" class="text-white text-3xl" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ $t('elogSystem.benefits.costOptimization.title') }}</h3>
                        <p class="text-white/80">{{ $t('elogSystem.benefits.costOptimization.description') }}</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-clock" class="text-white text-3xl" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ $t('elogSystem.benefits.realTimeTracking.title') }}</h3>
                        <p class="text-white/80">{{ $t('elogSystem.benefits.realTimeTracking.description') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    {{ $t('elogSystem.cta.title') }}
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    {{ $t('elogSystem.cta.description') }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        :to="localePath('/kapcsolat')"
                        size="lg"
                        icon="i-heroicons-envelope"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        {{ $t('elogSystem.cta.quoteButton') }}
                    </UButton>
                    <UButton
                        :to="localePath('/szolgaltatasok')"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-left"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        {{ $t('elogSystem.cta.backButton') }}
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Composables
const localePath = useLocalePath()

// SEO meta adatok - using static content like rolunk.vue
useSeoMeta({
  title: 'Logisztika - ELOG SYSTEM® - BÜCHL HUNGARIA',
  description: 'Az ELOG SYSTEM® rendszer 4.0 verziója komplex, digitális megoldást kínál a hulladékok gyűjtésére és papírmentes, igényalapú elszállítására. CleverWaste® rendszer.',
  keywords: 'BÜCHL HUNGARIA, ELOG SYSTEM, CleverWaste, digitális logisztika, hulladéklogisztika, papírmentes, GYLOG'
})
</script>
