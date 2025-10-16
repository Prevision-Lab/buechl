<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            :title="$t('services.hero.title')"
            :subtitle="$t('services.hero.subtitle')"
            image="/media/images/szolgaltatasaink.jpg"
            bg-color="blue"
            :primary-cta="{
                label: $t('services.hero.primaryCta'),
                to: localePath('kapcsolat'),
            }"
            :secondary-cta="{
                label: $t('services.hero.secondaryCta'),
                to: localePath('fenntarthatosag') + '#certificates',
            }"
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
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div class="text-center">
                            <div class="bg-buchl-blue/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-truck" class="text-buchl-blue text-4xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">{{ $t('services.intro.features.collection.title') }}</h3>
                            <p class="text-gray-600 text-sm">{{ $t('services.intro.features.collection.description') }}</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-buchl-green/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-cog-6-tooth" class="text-buchl-green text-4xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">{{ $t('services.intro.features.treatment.title') }}</h3>
                            <p class="text-gray-600 text-sm">{{ $t('services.intro.features.treatment.description') }}</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-buchl-blue/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-cpu-chip" class="text-buchl-blue text-4xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">{{ $t('services.intro.features.logistics.title') }}</h3>
                            <p class="text-gray-600 text-sm">{{ $t('services.intro.features.logistics.description') }}</p>
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

                <div
                    class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start"
                >
                    <!-- Hulladékgyűjtés és szállítás kategória -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="bg-buchl-blue text-white p-5">
                            <h3
                                class="text-xl font-bold flex items-center gap-3"
                            >
                                <UIcon
                                    name="i-heroicons-truck"
                                    class="w-7 h-7"
                                />
                                {{ $t('services.portfolio.categories.collection.title') }}
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                {{ $t('services.portfolio.categories.collection.description') }}
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.collection.features.0') }}</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.collection.features.1') }}</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.collection.features.2') }}</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    :to="localePath('/szolgaltatasok/szallitas')"
                                >
                                    {{ $t('services.portfolio.detailsButton') }}
                                </UButton>
                            </div>
                        </div>
                    </div>

                    <!-- Hulladékkezelés kategória -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="bg-buchl-blue text-white p-5">
                            <h3
                                class="text-xl font-bold flex items-center gap-3"
                            >
                                <UIcon
                                    name="i-heroicons-cog-6-tooth"
                                    class="w-7 h-7"
                                />
                                {{ $t('services.portfolio.categories.treatment.title') }}
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                {{ $t('services.portfolio.categories.treatment.description') }}
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-green shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.treatment.features.0') }}</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-green shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.treatment.features.1') }}</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-green shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.treatment.features.2') }}</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    :to="localePath('/szolgaltatasok/hulladekkezeles')"
                                >
                                    {{ $t('services.portfolio.detailsButton') }}
                                </UButton>
                            </div>
                        </div>
                    </div>

                    <!-- Logisztika kategória -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="bg-buchl-blue text-white p-5">
                            <h3
                                class="text-xl font-bold flex items-center gap-3"
                            >
                                <UIcon
                                    name="i-heroicons-cpu-chip"
                                    class="w-7 h-7"
                                />
                                {{ $t('services.portfolio.categories.logistics.title') }}
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                {{ $t('services.portfolio.categories.logistics.description') }}
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.logistics.features.0') }}</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.logistics.features.1') }}</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>{{ $t('services.portfolio.categories.logistics.features.2') }}</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    :to="localePath('/szolgaltatasok/elog-system')"
                                >
                                    {{ $t('services.portfolio.detailsButton') }}
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
// Szolgáltatások oldal
const localePath = useLocalePath()
</script>
