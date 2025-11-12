<template>
    <div>
        <!-- Hero szekció - Ferde stílusú, nagy hatású megjelenítéssel -->
        <BuchlHero
            v-if="heroBanner"
            :title="heroBanner.cim"
            :subtitle="heroBanner.leiras"
            :image="heroBanner.kepUrl || '/media/images/elektromos autó.jpg'"
            bg-color="blue"
            title-font="permanent-marker"
            :skewed="true"
            :primary-cta="
                heroBanner.gombok?.[0]
                    ? {
                          label: heroBanner.gombok[0].cim,
                          to: heroBanner.gombok[0].link,
                      }
                    : undefined
            "
            :secondary-cta="
                heroBanner.gombok?.[1]
                    ? {
                          label: heroBanner.gombok[1].cim,
                          to: heroBanner.gombok[1].link,
                      }
                    : undefined
            "
        />

        <!-- Rólunk röviden szekció -->
        <section v-if="companyCta" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2
                            class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6"
                        >
                            {{ companyCta.cim }}
                        </h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-700">
                                {{ companyCta.leiras }}
                            </p>
                        </div>
                        <div class="mt-8">
                            <UButton
                                :to="companyCta.gomb_link"
                                color="primary"
                                class="rounded-none"
                                icon="i-heroicons-arrow-right"
                                :trailing="true"
                            >
                                {{ companyCta.gomb_felirat }}
                            </UButton>
                        </div>
                    </div>
                    <div
                        ref="videoContainer"
                        class="relative rounded-lg overflow-hidden h-[400px]"
                    >
                        <video
                            ref="videoElement"
                            :src="
                                companyCta.videoUrl ||
                                '/media/videos/buchl_intro.mp4'
                            "
                            poster="/media/images/buchl_intro_poster.jpg"
                            :autoplay="false"
                            muted
                            loop
                            playsinline
                            preload="auto"
                            class="absolute inset-0 w-full h-full object-cover"
                            @error="onVideoError"
                            @loadeddata="onVideoLoadedData"
                            @loadstart="onVideoLoadStart"
                            @canplay="onVideoCanPlay"
                            @click="toggleVideo"
                        >
                            <source
                                :src="
                                    companyCta.videoUrl ||
                                    '/media/videos/buchl_intro.mp4'
                                "
                                type="video/mp4"
                            />
                        </video>
                        <!-- Fallback kép, ha a videó nem tölt be -->
                        <img
                            v-if="videoError || !videoCanPlay"
                            src="/media/images/buchl_intro_poster.jpg"
                            :alt="companyCta.cim"
                            class="absolute inset-0 w-full h-full object-cover"
                        />
                        <!-- Play gomb overlay -->
                        <div
                            v-if="!isVideoPlaying && !videoError"
                            class="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                            @click="playVideo"
                        >
                            <div
                                class="bg-white/90 rounded-full p-4 hover:bg-white transition-colors"
                            >
                                <UIcon
                                    name="i-heroicons-play"
                                    class="text-buchl-blue text-3xl ml-1"
                                />
                            </div>
                        </div>
                        <div
                            class="absolute bottom-0 left-0 right-0 bg-buchl-blue/80 p-4 text-white"
                        >
                            <p class="font-semibold">{{ companyCta.cim }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Szolgáltatások szekció -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4"
                    >
                        {{ $t("homepage.services.title") }}
                    </h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        {{ $t("homepage.services.description") }}
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
                >
                    <!-- 1. Szolgáltatás kártya -->
                    <UCard class="h-full">
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-cog-8-tooth"
                                        class="text-primary-600 dark:text-primary-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    {{
                                        $t(
                                            "homepage.services.wasteManagement.title",
                                        )
                                    }}
                                </h3>
                            </div>
                        </template>
                        <div class="flex-1 flex items-center">
                            <p class="text-gray-600 dark:text-gray-400">
                                {{
                                    $t(
                                        "homepage.services.wasteManagement.description",
                                    )
                                }}
                            </p>
                        </div>
                    </UCard>

                    <!-- 2. Szolgáltatás kártya -->
                    <UCard class="h-full">
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-green-100 dark:bg-green-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-truck"
                                        class="text-green-600 dark:text-green-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    {{
                                        $t("homepage.services.collection.title")
                                    }}
                                </h3>
                            </div>
                        </template>
                        <div class="flex-1 flex items-center">
                            <p class="text-gray-600 dark:text-gray-400">
                                {{
                                    $t(
                                        "homepage.services.collection.description",
                                    )
                                }}
                            </p>
                        </div>
                    </UCard>

                    <!-- 3. Szolgáltatás kártya -->
                    <UCard class="h-full">
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-shield-check"
                                        class="text-blue-600 dark:text-blue-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    {{
                                        $t(
                                            "homepage.services.environmental.title",
                                        )
                                    }}
                                </h3>
                            </div>
                        </template>
                        <div class="flex-1 flex items-center">
                            <p class="text-gray-600 dark:text-gray-400">
                                {{
                                    $t(
                                        "homepage.services.environmental.description",
                                    )
                                }}
                            </p>
                        </div>
                    </UCard>

                    <!-- 4. Szolgáltatás kártya -->
                    <UCard class="h-full">
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-light-bulb"
                                        class="text-yellow-600 dark:text-yellow-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    {{
                                        $t("homepage.services.consulting.title")
                                    }}
                                </h3>
                            </div>
                        </template>
                        <div class="flex-1 flex items-center">
                            <p class="text-gray-600 dark:text-gray-400">
                                {{
                                    $t(
                                        "homepage.services.consulting.description",
                                    )
                                }}
                            </p>
                        </div>
                    </UCard>
                </div>

                <div class="text-center mt-12">
                    <UButton
                        :to="localePath('szolgaltatasok')"
                        color="neutral"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                        icon="i-heroicons-arrow-right"
                        :trailing="true"
                        size="lg"
                    >
                        {{ $t("homepage.services.viewAll") }}
                    </UButton>
                </div>
            </div>
        </section>

        <!-- Számok, statisztikák szekció -->
        <section class="py-16 bg-buchl-blue text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl sm:text-4xl font-bold mb-4">
                        {{ $t("homepage.stats.title") }}
                    </h2>
                    <p class="text-lg text-white/80 max-w-3xl mx-auto">
                        {{ $t("homepage.stats.subtitle") }}
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <!-- 1. Statisztika -->
                    <div
                        class="text-center p-6 border border-white/20 rounded-lg"
                    >
                        <div
                            class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2"
                        >
                            320
                        </div>
                        <div class="text-xl text-white/90">
                            {{ $t("homepage.stats.employees") }}
                        </div>
                    </div>

                    <!-- 2. Statisztika -->
                    <div
                        class="text-center p-6 border border-white/20 rounded-lg"
                    >
                        <div
                            class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2"
                            v-if="$i18n.locale === 'hu'"
                        >
                            közel 40
                        </div>
                        <div
                            class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2"
                            v-else-if="$i18n.locale === 'en'"
                        >
                            about 40
                        </div>
                        <div
                            class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2"
                            v-else
                        >
                            rund 40
                        </div>
                        <div class="text-xl text-white/90">{{ $t('stats.fleet') }}</div>
                    </div>

                    <!-- 3. Statisztika -->
                    <div
                        class="text-center p-6 border border-white/20 rounded-lg"
                    >
                        <div
                            class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2"
                        >
                            25
                        </div>
                        <div class="text-xl text-white/90">
                            {{ $t("homepage.stats.experience") }}
                        </div>
                    </div>

                    <!-- 4. Statisztika -->
                    <div
                        class="text-center p-6 border border-white/20 rounded-lg"
                    >
                        <div
                            class="text-4xl sm:text-5xl font-bold text-buchl-green mb-2"
                        >
                            10
                        </div>
                        <div class="text-xl text-white/90">
                            {{ $t("homepage.stats.equipment") }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fenntarthatósági szekció Hero komponenssel -->
        <section v-if="sustainabilityCta" class="pb-0">
            <div class="rounded-lg overflow-hidden">
                <BuchlHero
                    :title="sustainabilityCta.cim"
                    :subtitle="sustainabilityCta.leiras"
                    :image="
                        sustainabilityCta.kepUrl ||
                        '/media/images/elektromos autó.jpg'
                    "
                    bg-color="green"
                    :primary-cta="{
                        label: sustainabilityCta.gomb_felirat,
                        to: sustainabilityCta.gomb_link,
                    }"
                />
            </div>
        </section>

        <!-- Hírek szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-12">
                    <div>
                        <h2
                            class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-2"
                        >
                            {{ $t("news.title") }}
                        </h2>
                        <p class="text-lg text-gray-700">
                            {{ $t("news.subtitle") }}
                        </p>
                    </div>
                    <div class="hidden md:block">
                        <UButton
                            to="/hirek"
                            color="primary"
                            variant="outline"
                            class="rounded-none"
                            icon="i-heroicons-arrow-right"
                            :trailing="true"
                        >
                            {{ $t("news.viewAll") }}
                        </UButton>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <!-- 1. Blog poszt -->
                    <BuchlBlogPost
                        :title="$t('news.posts.vbs.title')"
                        :description="$t('news.posts.vbs.description')"
                        image="/media/images/hirek/vbs-junior.jpeg"
                        to="/hirek/vbs-junior-kor-latogatas"
                        :category="$t('news.posts.vbs.category')"
                        date="2025-09-12"
                        :reading-time="$t('news.posts.vbs.readingTime')"
                        :read-more-text="$t('news.readMore')"
                    />

                    <!-- 2. Blog poszt -->
                    <BuchlBlogPost
                        :title="$t('news.posts.reszett.title')"
                        :description="$t('news.posts.reszett.description')"
                        image="/media/images/hirek/reszett-program.jpeg"
                        to="/hirek/reszett-program"
                        :category="$t('news.posts.reszett.category')"
                        date="2025-08-28"
                        :reading-time="$t('news.posts.reszett.readingTime')"
                        :read-more-text="$t('news.readMore')"
                    />

                    <!-- 3. Blog poszt -->
                    <BuchlBlogPost
                        :title="$t('news.posts.gyerekegyetem.title')"
                        :description="
                            $t('news.posts.gyerekegyetem.description')
                        "
                        image="/media/images/hirek/gyerekegyetem.jpeg"
                        to="/hirek/viii-gyori-gyerekegyetem"
                        :category="$t('news.posts.gyerekegyetem.category')"
                        date="2025-08-24"
                        :reading-time="
                            $t('news.posts.gyerekegyetem.readingTime')
                        "
                        :read-more-text="$t('news.readMore')"
                    />
                </div>

                <div class="mt-12 text-center md:hidden">
                    <UButton
                        to="/hirek"
                        color="primary"
                        variant="outline"
                        class="rounded-none"
                        icon="i-heroicons-arrow-right"
                        :trailing="true"
                    >
                        {{ $t("news.viewAll") }}
                    </UButton>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section
            v-if="certificatesCta"
            class="py-16 bg-buchl-green text-buchl-blue"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    {{ certificatesCta.cim }}
                </h2>
                <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
                    {{ certificatesCta.leiras }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        v-if="
                            certificatesCta.gomb_felirat &&
                            certificatesCta.gomb_link
                        "
                        :to="certificatesCta.gomb_link"
                        color="neutral"
                        size="lg"
                        icon="i-heroicons-document-text"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        {{ certificatesCta.gomb_felirat }}
                    </UButton>
                    <UButton
                        v-if="
                            certificatesCta.gomb2_felirat &&
                            certificatesCta.gomb2_link
                        "
                        :to="certificatesCta.gomb2_link"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-right"
                        :trailing="true"
                        class="rounded-none border-2 border-buchl-blue text-buchl-blue"
                    >
                        {{ certificatesCta.gomb2_felirat }}
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Route és lifecycle imports
const $route = useRoute();
const localePath = useLocalePath();

// Hero banner adat lekérése Directusból useBanner composable-lel
const { banner: heroBanner } = useBanner(1); // ID: 1 - Főoldal hero

// Company CTA adat lekérése Directusból useCta composable-lel
const { cta: companyCta } = useCta(1); // ID: 1 - Company intro CTA

// Sustainability CTA adat lekérése Directusból
const { cta: sustainabilityCta } = useCta(2); // ID: 2 - Sustainability CTA

// Certificates CTA adat lekérése Directusból
const { cta: certificatesCta } = useCta(3); // ID: 3 - Certificates/Downloads CTA

// Videó elemek referenciái
const videoElement = ref<HTMLVideoElement | null>(null);
const videoContainer = ref<HTMLDivElement | null>(null);

// Videó állapotok
const videoError = ref(false);
const videoCanPlay = ref(false);
const isVideoPlaying = ref(false);
const isVideoInViewport = ref(false);
const showPlayButton = ref(true);
const hasUserInteracted = ref(false);

// Intersection Observer a videó automatikus lejátszásához
let observer: IntersectionObserver | null = null;

// Videó eseménykezelők
const onVideoError = () => {
    videoError.value = true;
    showPlayButton.value = false;
    console.log("Video error occurred");
};

const onVideoLoadStart = () => {
    videoCanPlay.value = false;
    isVideoPlaying.value = false;
    showPlayButton.value = true;
};

const onVideoCanPlay = () => {
    videoCanPlay.value = true;
    // Csak akkor próbáljuk meg automatikusan elindítani, ha viewport-ban van
    if (
        isVideoInViewport.value &&
        !isVideoPlaying.value &&
        !hasUserInteracted.value
    ) {
        tryAutoplay();
    }
};

const onVideoLoadedData = () => {
    videoCanPlay.value = true;
    // Csak akkor próbáljuk meg automatikusan elindítani, ha viewport-ban van
    if (
        isVideoInViewport.value &&
        !isVideoPlaying.value &&
        !hasUserInteracted.value
    ) {
        tryAutoplay();
    }
};

// Automatikus lejátszás megkísérlése (csak viewport-ban)
const tryAutoplay = async () => {
    if (!videoElement.value || videoError.value || !isVideoInViewport.value)
        return;

    try {
        await videoElement.value.play();
        isVideoPlaying.value = true;
        showPlayButton.value = false;
    } catch (error) {
        console.log("Autoplay was prevented:", error);
        isVideoPlaying.value = false;
        showPlayButton.value = true;
    }
};

// Manuális videó lejátszás
const playVideo = async () => {
    if (!videoElement.value || videoError.value) return;

    try {
        await videoElement.value.play();
        isVideoPlaying.value = true;
        showPlayButton.value = false;
        hasUserInteracted.value = true;
    } catch (error) {
        console.error("Failed to play video:", error);
        showPlayButton.value = true;
    }
};

// Videó lejátszás/szüneteltetés váltása
const toggleVideo = () => {
    if (!videoElement.value || videoError.value) return;

    if (videoElement.value.paused) {
        playVideo();
    } else {
        videoElement.value.pause();
        isVideoPlaying.value = false;
    }
};

// Video inicializálás függvény
const initializeVideo = () => {
    nextTick(() => {
        // Reset states
        videoError.value = false;
        videoCanPlay.value = false;
        isVideoPlaying.value = false;
        isVideoInViewport.value = false;
        showPlayButton.value = true;
        hasUserInteracted.value = false;

        // Intersection Observer beállítása
        if (videoContainer.value && "IntersectionObserver" in window) {
            if (observer) {
                observer.disconnect();
            }

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        isVideoInViewport.value = entry.isIntersecting;

                        if (entry.isIntersecting) {
                            // Ha a videó látható és betöltődött, próbáljuk meg elindítani
                            if (
                                videoCanPlay.value &&
                                !isVideoPlaying.value &&
                                !hasUserInteracted.value
                            ) {
                                setTimeout(() => tryAutoplay(), 200); // Kis késleltetés
                            }
                        } else {
                            // Ha a videó elhagyja a viewport-ot, szüneteltessük
                            if (
                                videoElement.value &&
                                !videoElement.value.paused
                            ) {
                                videoElement.value.pause();
                                isVideoPlaying.value = false;
                            }
                        }
                    });
                },
                {
                    threshold: 0.3, // 30%-ban látható legyen
                },
            );

            observer.observe(videoContainer.value);
        }

        // Videó események figyelése
        if (videoElement.value) {
            // Force reload video source
            const src = videoElement.value.src;
            videoElement.value.src = "";
            videoElement.value.load();
            videoElement.value.src = src;
            videoElement.value.load();

            videoElement.value.addEventListener("play", () => {
                isVideoPlaying.value = true;
                showPlayButton.value = false;
            });

            videoElement.value.addEventListener("pause", () => {
                isVideoPlaying.value = false;
            });

            videoElement.value.addEventListener("ended", () => {
                isVideoPlaying.value = false;
            });

            // Ha a videó már betöltődött
            if (videoElement.value.readyState >= 2) {
                videoCanPlay.value = true;
                setTimeout(() => {
                    if (isVideoInViewport.value) {
                        tryAutoplay();
                    }
                }, 300);
            }
        }
    });
};

// Watch route changes
watch(
    () => $route.path,
    (newPath, oldPath) => {
        if (newPath === "/" && oldPath !== "/") {
            // Ha visszatértünk a főoldalra
            setTimeout(() => {
                initializeVideo();
            }, 100);
        }
    },
);

// Életciklus hookok
onMounted(() => {
    initializeVideo();
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
