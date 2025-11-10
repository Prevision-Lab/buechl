<template>
    <div>
        <!-- Hero szekció Directusból -->
        <BuchlHero
            v-if="heroBanner"
            :title="heroBanner.cim"
            :subtitle="heroBanner.leiras"
            :image="heroBanner.kepUrl || '/media/images/hulladekgyujtes-szallitas.jpg'"
            bg-color="blue"
            :primary-cta="heroBanner.gombok?.[0] || {
                label: $t('transport.hero.primaryCta'),
                to: localePath('/kapcsolat'),
            }"
            :secondary-cta="heroBanner.gombok?.[1] || {
                label: $t('transport.hero.secondaryCta'),
                to: localePath('/szolgaltatasok'),
            }"
        />

        <!-- Dinamikus szekciók Directusból -->
        <template v-if="szekciok">
            <template v-for="szekc in szekciok" :key="szekc.id">
                <!-- Intro típusú szekció -->
                <section v-if="szekc.tipus === 'intro'" :class="[
                    'py-16',
                    szekc.bg_szin === 'gray' ? 'bg-gray-50' : szekc.bg_szin === 'blue' ? 'bg-buchl-blue text-white' : szekc.bg_szin === 'green' ? 'bg-buchl-green text-white' : 'bg-white'
                ]">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 v-if="szekc.cim" :class="[
                                'text-3xl sm:text-4xl font-bold mb-6',
                                szekc.bg_szin === 'blue' || szekc.bg_szin === 'green' ? 'text-white' : 'text-buchl-blue'
                            ]">{{ szekc.cim }}</h2>
                            <div v-if="szekc.leiras" :class="[
                                'text-xl',
                                szekc.bg_szin === 'blue' || szekc.bg_szin === 'green' ? 'text-white' : 'text-gray-700'
                            ]" v-html="szekc.leiras" />
                        </div>
                    </div>
                </section>

                <!-- Cards típusú szekció -->
                <section v-else-if="szekc.tipus === 'cards'" :class="[
                    'py-16',
                    szekc.bg_szin === 'gray' ? 'bg-gray-50' : szekc.bg_szin === 'blue' ? 'bg-buchl-blue text-white' : szekc.bg_szin === 'green' ? 'bg-buchl-green text-white' : 'bg-white'
                ]">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                            {{ szekc.cim }}
                        </h2>
                        <div v-if="szekc.alcim" class="max-w-4xl mx-auto mb-12">
                            <p class="text-lg text-gray-700 text-center">{{ szekc.alcim }}</p>
                        </div>
                        <div v-if="szekc.elemek" class="grid gap-8 md:grid-cols-3">
                            <div v-for="(elem, idx) in szekc.elemek" :key="idx" class="bg-white rounded-lg shadow-md p-6">
                                <div v-if="elem.ikon" class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UIcon :name="elem.ikon" class="text-buchl-blue text-2xl" />
                                </div>
                                <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">{{ elem.cim }}</h3>
                                <p class="text-gray-700 text-center">{{ elem.leiras }}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
        </template>

        <!-- CTA szekció Directusból -->
        <section v-if="transportCta" class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    {{ transportCta.cim }}
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    {{ transportCta.leiras }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        v-if="transportCta.gomb_felirat && transportCta.gomb_link"
                        :to="localePath(transportCta.gomb_link)"
                        size="lg"
                        icon="i-heroicons-envelope"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        {{ transportCta.gomb_felirat }}
                    </UButton>
                    <UButton
                        v-if="transportCta.gomb2_felirat && transportCta.gomb2_link"
                        :to="localePath(transportCta.gomb2_link)"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-left"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        {{ transportCta.gomb2_felirat }}
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Composables
const localePath = useLocalePath()

// Hero banner Directusból (ID: 9 - Szállítás)
const { banner: heroBanner } = useBanner(9)

// Oldal szekciók Directusból
const { szekciok } = useOldalSzekciok('szallitas')

// CTA Directusból (ID: 7 - Szállítás)
const { cta: transportCta } = useCta(7)

// SEO meta adatok - using static content like rolunk.vue
useSeoMeta({
  title: 'Hulladékgyűjtés és -szállítás - BÜCHL HUNGARIA',
  description: 'A BÜCHL HUNGARIA több mint 40 járműből álló flottával szolgálja ki ipari partnereit. Professzionális hulladékszállítás, ADR tanúsítvánnyal rendelkező sofőrök.',
  keywords: 'BÜCHL HUNGARIA, hulladékszállítás, hulladékgyűjtés, ADR, ipari hulladék, konténer, veszélyes hulladék'
})
</script>
