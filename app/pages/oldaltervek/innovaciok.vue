<template>
    <div>
        <!-- SEO Meta -->
        <Head>
            <Title>Innovációk - BÜCHL Hungaria</Title>
            <Meta
                name="description"
                content="BÜCHL Hungaria innovatív technológiái és fejlesztései a hulladékkezelés és környezetvédelem területén."
            />
        </Head>

        <!-- Hero Section with Video and Skewed Background -->
        <BuchlHero
            title="Innovációk"
            subtitle="Technológiai fejlesztések a jövőért"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=800&fit=crop"
            :video-url="'https://www.youtube.com/watch?v=dQw4w9WgXcQ'"
            bg-color="blue"
            title-font="permanent-marker"
            :skewed="true"
            :primary-cta="{
                label: 'Technológiáink',
                to: '/oldaltervek/hulladekkezeles',
            }"
        />

        <!-- Introduction Section with Creative Layout -->
        <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            Folyamatos fejlesztés a
                            <span class="text-buchl-blue"
                                >fenntarthatóságért</span
                            >
                        </h2>
                        <p class="text-xl text-gray-600 mb-8">
                            A BÜCHL Hungaria elkötelezett az innováció mellett.
                            Céljunk a költségcsökkentés, a hasznosítási arányok
                            javítása, a szállítási útvonalak rövidítése és a
                            biztonság növelése.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <div
                                class="flex items-center bg-buchl-green/10 px-4 py-2 rounded-full"
                            >
                                <UIcon
                                    name="i-heroicons-currency-dollar"
                                    class="text-buchl-green mr-2"
                                    style="width: 20px; height: 20px"
                                />
                                <span class="text-buchl-blue font-medium"
                                    >Költségcsökkentés</span
                                >
                            </div>
                            <div
                                class="flex items-center bg-buchl-green/10 px-4 py-2 rounded-full"
                            >
                                <UIcon
                                    name="i-heroicons-arrow-trending-up"
                                    class="text-buchl-green mr-2"
                                    style="width: 20px; height: 20px"
                                />
                                <span class="text-buchl-blue font-medium"
                                    >Hasznosítási arányok</span
                                >
                            </div>
                            <div
                                class="flex items-center bg-buchl-green/10 px-4 py-2 rounded-full"
                            >
                                <UIcon
                                    name="i-heroicons-shield-check"
                                    class="text-buchl-green mr-2"
                                    style="width: 20px; height: 20px"
                                />
                                <span class="text-buchl-blue font-medium"
                                    >Biztonság növelése</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div
                            class="bg-buchl-blue/5 rounded-2xl p-8 border-2 border-buchl-blue/20"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                                alt="Innovatív technológiák"
                                class="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Innovations Timeline -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Kiemelt innovációink
                    </h2>
                    <p class="text-xl text-gray-600">
                        Technológiai mérföldkövek az elmúlt években
                    </p>
                </div>

                <div class="relative">
                    <!-- Timeline Line -->
                    <div
                        class="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-buchl-blue/20"
                    ></div>

                    <!-- 2017 Innovation -->
                    <div class="relative flex items-center mb-16">
                        <div class="flex-1 pr-8 text-right">
                            <div
                                class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-buchl-blue"
                            >
                                <div
                                    class="text-buchl-blue font-bold text-lg mb-2"
                                >
                                    2017
                                </div>
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3"
                                >
                                    Festékipari Szennyvíz Kezelő
                                </h3>
                                <p class="text-gray-600 mb-4">
                                    Pilot üzem létrehozása festékipari
                                    szennyvizek kezelésére. Innovatív megoldás a
                                    festőüzemek környezeti terhelésének
                                    csökkentésére.
                                </p>
                                <div class="flex justify-end">
                                    <div
                                        class="bg-buchl-green/10 p-3 rounded-full"
                                    >
                                        <UIcon
                                            name="i-heroicons-beaker"
                                            class="text-buchl-green"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Timeline Dot -->
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-buchl-blue rounded-full border-4 border-white shadow-lg"
                        ></div>

                        <div class="flex-1 pl-8"></div>
                    </div>

                    <!-- 2019 Innovation -->
                    <div class="relative flex items-center mb-16">
                        <div class="flex-1 pr-8"></div>

                        <!-- Timeline Dot -->
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-buchl-green rounded-full border-4 border-white shadow-lg"
                        ></div>

                        <div class="flex-1 pl-8">
                            <div
                                class="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-buchl-green"
                            >
                                <div
                                    class="text-buchl-green font-bold text-lg mb-2"
                                >
                                    2019
                                </div>
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3"
                                >
                                    Mobil Légzsák Ártalmatlanító
                                </h3>
                                <p class="text-gray-600 mb-4">
                                    ELOGlpan GmbH által fejlesztett mobil
                                    konténer légzsákok helyszíni
                                    ártalmatlanítására. Biztonságos és törvényes
                                    hulladékkezelés garantálva.
                                </p>
                                <div class="flex justify-start">
                                    <div
                                        class="bg-buchl-blue/10 p-3 rounded-full"
                                    >
                                        <UIcon
                                            name="i-heroicons-truck"
                                            class="text-buchl-blue"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2024 Innovation -->
                    <div class="relative flex items-center">
                        <div class="flex-1 pr-8 text-right">
                            <div
                                class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-buchl-blue"
                            >
                                <div
                                    class="text-buchl-blue font-bold text-lg mb-2"
                                >
                                    2024
                                </div>
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-3"
                                >
                                    AI-támogatott Válogatás
                                </h3>
                                <p class="text-gray-600 mb-4">
                                    Mesterséges intelligencia alapú
                                    válogatórendszer fejlesztése a
                                    hulladékkezelési hatékonyság
                                    maximalizálására.
                                </p>
                                <div class="flex justify-end">
                                    <div
                                        class="bg-buchl-green/10 p-3 rounded-full"
                                    >
                                        <UIcon
                                            name="i-heroicons-cpu-chip"
                                            class="text-buchl-green"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Timeline Dot -->
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-buchl-blue rounded-full border-4 border-white shadow-lg"
                        ></div>

                        <div class="flex-1 pl-8"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Innovation Statistics with Creative Layout -->
        <section class="py-16 bg-buchl-blue">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">
                        Innováció számokban
                    </h2>
                    <p class="text-xl text-blue-100">
                        Mérhető eredmények és fejlesztések
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <div class="text-center">
                        <div
                            class="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <div
                                class="text-5xl font-bold text-buchl-green mb-2 font-display"
                            >
                                15+
                            </div>
                            <div class="text-white text-lg font-medium">
                                Innovatív technológia
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <div
                            class="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <div
                                class="text-5xl font-bold text-buchl-green mb-2 font-display"
                            >
                                85%
                            </div>
                            <div class="text-white text-lg font-medium">
                                Hatékonyság növekedés
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <div
                            class="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <div
                                class="text-5xl font-bold text-buchl-green mb-2 font-display"
                            >
                                50+
                            </div>
                            <div class="text-white text-lg font-medium">
                                Kutatás-fejlesztési projekt
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <div
                            class="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <div
                                class="text-5xl font-bold text-buchl-green mb-2 font-display"
                            >
                                7
                            </div>
                            <div class="text-white text-lg font-medium">
                                Év folyamatos fejlesztés
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Future Vision -->
        <section class="py-16 bg-gradient-to-br from-white to-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div class="order-2 lg:order-1">
                        <div
                            class="bg-gradient-to-br from-buchl-green/10 to-buchl-blue/10 rounded-2xl p-8 border-2 border-buchl-green/20"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
                                alt="Jövő technológiái"
                                class="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    <div class="order-1 lg:order-2">
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            A jövő
                            <span class="text-buchl-green">technológiái</span>
                        </h2>
                        <p class="text-xl text-gray-600 mb-8">
                            Folyamatosan kutatjuk és fejlesztjük a legújabb
                            technológiákat, hogy ügyfeleinknek mindig a
                            leghatékonyabb és legfenntarthatóbb megoldásokat
                            kínálhassuk.
                        </p>

                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div
                                    class="bg-buchl-green/20 p-2 rounded-lg mr-4 flex-shrink-0"
                                >
                                    <UIcon
                                        name="i-heroicons-cpu-chip"
                                        class="text-buchl-green"
                                        style="width: 24px; height: 24px"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="text-lg font-semibold text-gray-900 mb-2"
                                    >
                                        Mesterséges Intelligencia
                                    </h3>
                                    <p class="text-gray-600">
                                        AI-alapú hulladékválogatás és prediktív
                                        karbantartás
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div
                                    class="bg-buchl-blue/20 p-2 rounded-lg mr-4 flex-shrink-0"
                                >
                                    <UIcon
                                        name="i-heroicons-cloud"
                                        class="text-buchl-blue"
                                        style="width: 24px; height: 24px"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="text-lg font-semibold text-gray-900 mb-2"
                                    >
                                        IoT és Felhő Technológiák
                                    </h3>
                                    <p class="text-gray-600">
                                        Valós idejű monitoring és optimalizáció
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div
                                    class="bg-buchl-green/20 p-2 rounded-lg mr-4 flex-shrink-0"
                                >
                                    <UIcon
                                        name="i-heroicons-arrow-path"
                                        class="text-buchl-green"
                                        style="width: 24px; height: 24px"
                                    />
                                </div>
                                <div>
                                    <h3
                                        class="text-lg font-semibold text-gray-900 mb-2"
                                    >
                                        Körforgásos Gazdaság
                                    </h3>
                                    <p class="text-gray-600">
                                        100%-os újrahasznosítás és zero waste
                                        megoldások
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 bg-buchl-green">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-4xl font-bold text-buchl-blue mb-6 font-display"
                >
                    Legyünk innovációs partnerei!
                </h2>
                <p class="text-xl text-buchl-blue/90 mb-8">
                    Fedezze fel velünk a hulladékkezelés jövőjét. Innovatív
                    megoldásainkkal együtt alakíthatjuk a fenntartható jövőt.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        label="Technológiáink"
                        color="neutral"
                        variant="solid"
                        size="lg"
                        class="rounded-none font-semibold bg-buchl-blue text-white hover:bg-buchl-blue/90"
                        to="/oldaltervek/hulladekkezeles"
                    />
                    <UButton
                        label="Kapcsolatfelvétel"
                        color="neutral"
                        variant="outline"
                        size="lg"
                        class="rounded-none font-semibold text-buchl-blue border-buchl-blue hover:bg-buchl-blue hover:text-white"
                        to="/oldaltervek/kapcsolat"
                    />
                </div>
            </div>
        </section>

        <!-- Navigációs szekció -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-8">
                    <h3 class="text-xl font-semibold text-buchl-blue mb-4">
                        Kapcsolódó oldaltervek
                    </h3>
                </div>

                <div class="grid md:grid-cols-3 gap-6">
                    <NuxtLink to="/oldaltervek/fenntarthatosag">
                        <UButton
                            color="primary"
                            variant="outline"
                            block
                            class="h-full rounded-none"
                        >
                            <div class="text-center">
                                <p class="font-bold">Fenntarthatóság</p>
                                <p class="text-xs opacity-80">
                                    Green initiatives
                                </p>
                            </div>
                            <template #trailing>
                                <UIcon name="i-heroicons-arrow-right" />
                            </template>
                        </UButton>
                    </NuxtLink>

                    <NuxtLink to="/oldaltervek/hulladekkezeles">
                        <UButton
                            color="primary"
                            variant="outline"
                            block
                            class="h-full rounded-none"
                        >
                            <div class="text-center">
                                <p class="font-bold">Hulladékkezelés</p>
                                <p class="text-xs opacity-80">
                                    Specialized solutions
                                </p>
                            </div>
                            <template #trailing>
                                <UIcon name="i-heroicons-arrow-right" />
                            </template>
                        </UButton>
                    </NuxtLink>

                    <NuxtLink to="/oldaltervek">
                        <UButton
                            color="neutral"
                            variant="ghost"
                            block
                            class="h-full rounded-none"
                        >
                            <div class="text-center">
                                <p class="font-bold">Oldaltervek áttekintés</p>
                                <p class="text-xs opacity-80">
                                    Vissza a tervekhez
                                </p>
                            </div>
                            <template #trailing>
                                <UIcon name="i-heroicons-arrow-left" />
                            </template>
                        </UButton>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Komment szekció -->
        <section class="bg-gray-50 py-16 mt-20">
            <div class="container mx-auto px-4 max-w-4xl">
                <h2 class="text-3xl font-bold text-center mb-4">
                    Visszajelzések és észrevételek
                </h2>
                <p class="text-gray-600 text-center mb-12 text-lg">
                    Ossza meg véleményét ezzel az oldaltervvel kapcsolatban!
                    GitHub fiókkal tud hozzászólni.
                </p>
                <GiscusComments />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
    title: "Innovációk - BÜCHL Hungaria",
    description:
        "BÜCHL Hungaria innovatív technológiái és fejlesztései a hulladékkezelés és környezetvédelem területén.",
    ogTitle: "Innovációk - BÜCHL Hungaria",
    ogDescription:
        "BÜCHL Hungaria innovatív technológiái és fejlesztései a hulladékkezelés és környezetvédelem területén.",
    ogImage: "/images/buchl-innovaciok-og.jpg",
    twitterCard: "summary_large_image",
});
</script>
