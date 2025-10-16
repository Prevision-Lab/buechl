<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            :title="$t('transport.hero.title')"
            :subtitle="$t('transport.hero.subtitle')"
            image="/media/images/hulladekgyujtes-szallitas.jpg"
            bg-color="blue"
            :primary-cta="{
                label: $t('transport.hero.primaryCta'),
                to: localePath('/kapcsolat'),
            }"
            :secondary-cta="{
                label: $t('transport.hero.secondaryCta'),
                to: localePath('/szolgaltatasok'),
            }"
        />

        <!-- Főtartalom -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg max-w-none">
                        <p class="text-xl text-gray-700 mb-8">
                            {{ $t('transport.intro.description') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Konténerek és tárolók -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('transport.containers.title') }}
                </h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <p class="text-lg text-gray-700 text-center">
                        {{ $t('transport.containers.description') }}
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-3">
                    <!-- Nagy mennyiség -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cube" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('transport.containers.types.largeQuantity.title') }}</h3>
                        <p class="text-gray-700">
                            {{ $t('transport.containers.types.largeQuantity.description') }}
                        </p>
                    </div>

                    <!-- Folyékony és veszélyes hulladékok -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-beaker" class="text-red-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('transport.containers.types.liquidHazardous.title') }}</h3>
                        <p class="text-gray-700">
                            {{ $t('transport.containers.types.liquidHazardous.description') }}
                        </p>
                    </div>

                    <!-- Üzemen belüli mozgatás -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cpu-chip" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ $t('transport.containers.types.inPlantMovement.title') }}</h3>
                        <p class="text-gray-700">
                            {{ $t('transport.containers.types.inPlantMovement.description') }}
                        </p>
                    </div>
                </div>

                <div class="mt-12 bg-buchl-blue/5 p-8 rounded-lg text-center">
                    <h3 class="text-2xl font-bold text-buchl-blue mb-4">{{ $t('transport.containers.consulting.title') }}</h3>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        {{ $t('transport.containers.consulting.description') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    {{ $t('transport.cta.title') }}
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    {{ $t('transport.cta.description') }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        :to="localePath('/kapcsolat')"
                        size="lg"
                        icon="i-heroicons-envelope"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        {{ $t('transport.cta.quoteButton') }}
                    </UButton>
                    <UButton
                        :to="localePath('/szolgaltatasok')"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-left"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        {{ $t('transport.cta.backButton') }}
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
  title: 'Hulladékgyűjtés és -szállítás - BÜCHL HUNGARIA',
  description: 'A BÜCHL HUNGARIA több mint 40 járműből álló flottával szolgálja ki ipari partnereit. Professzionális hulladékszállítás, ADR tanúsítvánnyal rendelkező sofőrök.',
  keywords: 'BÜCHL HUNGARIA, hulladékszállítás, hulladékgyűjtés, ADR, ipari hulladék, konténer, veszélyes hulladék'
})
</script>
