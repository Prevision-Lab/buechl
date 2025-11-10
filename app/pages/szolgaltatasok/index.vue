<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            v-if="heroBanner"
            :title="heroBanner.cim"
            :subtitle="heroBanner.leiras"
            :image="heroBanner.kepUrl || '/media/images/szolgaltatasaink.jpg'"
            bg-color="blue"
            :primary-cta="heroBanner.gombok?.[0] ? {
                label: heroBanner.gombok[0].cim,
                to: heroBanner.gombok[0].link
            } : undefined"
            :secondary-cta="heroBanner.gombok?.[1] ? {
                label: heroBanner.gombok[1].cim,
                to: heroBanner.gombok[1].link
            } : undefined"
        />

        <!-- Bevezető szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto text-center">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6"
                    >
                        {{ $t('services.intro.title') }}
                    </h2>
                    <p class="text-lg text-gray-700 mb-8">
                        {{ $t('services.intro.description') }}
                    </p>
                    <div v-if="bevezetoServices" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div v-for="service in bevezetoServices" :key="service.id" class="text-center">
                            <div :class="[
                                'w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4',
                                service.szin === 'green' ? 'bg-buchl-green/10' : 'bg-buchl-blue/10'
                            ]">
                                <UIcon :name="service.ikon" :class="[
                                    'text-4xl',
                                    service.szin === 'green' ? 'text-buchl-green' : 'text-buchl-blue'
                                ]" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">{{ service.cim }}</h3>
                            <p class="text-gray-600 text-sm">{{ service.leiras }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ipari szolgáltatási kategóriák -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center"
                >
                    {{ $t('services.portfolio.title') }}
                </h2>

                <div class="max-w-3xl mx-auto mb-16 text-center">
                    <p class="text-lg text-gray-700">
                        {{ $t('services.portfolio.description') }}
                    </p>
                </div>

                <div v-if="portfolioServices" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
                    <div v-for="service in portfolioServices" :key="service.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div :class="[
                            'text-white p-5',
                            service.szin === 'green' ? 'bg-buchl-green' : 'bg-buchl-blue'
                        ]">
                            <h3 class="text-xl font-bold flex items-center gap-3">
                                <UIcon :name="service.ikon" class="w-7 h-7" />
                                {{ service.cim }}
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                {{ service.leiras }}
                            </p>
                            <ul v-if="service.funkciok" class="space-y-3 mb-6">
                                <li v-for="(funkcio, idx) in service.funkciok" :key="idx" class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        :class="[
                                            'w-6 h-6 shrink-0 mt-0.5',
                                            service.szin === 'green' ? 'text-buchl-green' : 'text-buchl-blue'
                                        ]"
                                    />
                                    <span>{{ funkcio }}</span>
                                </li>
                            </ul>
                            <div v-if="service.gomb_felirat && service.gomb_link">
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    :to="localePath(service.gomb_link)"
                                >
                                    {{ service.gomb_felirat }}
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Környezetvédelmi szolgáltatások szekció -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    {{ $t('services.environmental.title') }}
                </h2>
                
                <div class="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h3 class="text-2xl font-bold text-buchl-blue mb-6">
                            {{ $t('services.environmental.subtitle') }}
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-buchl-green shrink-0 mt-0.5" />
                                <div>
                                    <span class="font-semibold">{{ $t('services.environmental.services.consulting.title') }}</span>
                                    <p class="text-gray-600">{{ $t('services.environmental.services.consulting.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-buchl-green shrink-0 mt-0.5" />
                                <div>
                                    <span class="font-semibold">{{ $t('services.environmental.services.planning.title') }}</span>
                                    <p class="text-gray-600">{{ $t('services.environmental.services.planning.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-buchl-green shrink-0 mt-0.5" />
                                <div>
                                    <span class="font-semibold">{{ $t('services.environmental.services.compliance.title') }}</span>
                                    <p class="text-gray-600">{{ $t('services.environmental.services.compliance.description') }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="relative">
                        <img
                            src="/media/images/szakerto.jpg"
                            alt="Környezetvédelmi szolgáltatások"
                            class="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Statisztikák szekció -->
        <section class="py-16 bg-buchl-green">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">320</div>
                        <div class="text-buchl-blue/80">{{ $t('services.stats.employees') }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">40+</div>
                        <div class="text-buchl-blue/80">{{ $t('services.stats.vehicles') }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">10</div>
                        <div class="text-buchl-blue/80">{{ $t('services.stats.equipment') }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">25</div>
                        <div class="text-buchl-blue/80">{{ $t('services.stats.experience') }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    {{ $t('services.cta.title') }}
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    {{ $t('services.cta.description') }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        :to="localePath('kapcsolat')"
                        size="lg"
                        icon="i-heroicons-envelope"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        {{ $t('services.cta.requestQuote') }}
                    </UButton>
                    <UButton
                        :to="localePath('rolunk')"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-right"
                        :trailing="true"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        {{ $t('services.cta.learnMore') }}
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(3) // ID: 3 - Szolgáltatások

// Bevezető funkciók lekérése
const { services: bevezetoServices } = useServices('bevezeto')

// Portfólió kártyák lekérése
const { services: portfolioServices } = useServices('portfolio')
</script>
