<template>
    <div>
        <!-- Hero Section -->
        <BuchlHero
            v-if="heroBanner"
            :title="heroBanner.cim"
            :subtitle="heroBanner.leiras"
            :image="
                heroBanner.kepUrl || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop'
            "
            bg-color="blue"
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

        <!-- Certificates Section -->
        <section class="py-20 bg-gray-50">
            <UContainer>
                <div class="max-w-6xl mx-auto">
                    <!-- Category Navigation -->
                    <div class="flex justify-center mb-8">
                        <div class="bg-white rounded-lg p-1 shadow-lg flex">
                            <button
                                v-for="category in documentCategories"
                                :key="category.id"
                                @click="selectedCategory = category.id"
                                :class="[
                                    'flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
                                    selectedCategory === category.id
                                        ? 'bg-buchl-blue text-white shadow-md'
                                        : 'text-gray-600 hover:text-buchl-blue',
                                ]"
                            >
                                <UIcon
                                    :name="category.icon"
                                    class="w-4 h-4 mr-2"
                                />
                                {{ $t(`downloads.categories.${category.id}`) }}
                            </button>
                        </div>
                    </div>

                    <!-- Loading State -->
                    <div
                        v-if="pending"
                        class="flex justify-center py-12"
                    >
                        <UIcon
                            name="i-lucide-loader-2"
                            class="w-8 h-8 animate-spin text-buchl-blue"
                        />
                    </div>

                    <!-- Error State -->
                    <div
                        v-else-if="error"
                        class="text-center py-12"
                    >
                        <p class="text-red-500">{{ $t('common.error') }}</p>
                    </div>

                    <!-- Certificates Grid -->
                    <div
                        v-else
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <div
                            v-for="certificate in displayCertificates"
                            :key="certificate.id"
                            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border hover:border-buchl-blue"
                            @click="downloadCertificate(certificate)"
                        >
                            <!-- Certificate Info -->
                            <div class="p-6">
                                <div class="flex items-start justify-between mb-4">
                                    <div class="flex items-center">
                                        <div class="bg-red-50 p-3 rounded-lg mr-4">
                                            <UIcon
                                                name="i-lucide-file-text"
                                                class="w-8 h-8 text-red-500"
                                            />
                                        </div>
                                        <div>
                                            <h3
                                                class="font-bold text-gray-900 mb-1 group-hover:text-buchl-blue transition-colors duration-200"
                                            >
                                                {{ certificate.cim }}
                                            </h3>
                                            <p class="text-sm text-gray-600">
                                                {{ certificate.alcim }}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        v-if="certificate.id === 'hulladekKatalogus'"
                                        class="bg-buchl-blue/10 p-2 rounded-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-magnifying-glass"
                                            class="w-5 h-5 text-buchl-blue"
                                        />
                                    </div>
                                </div>

                                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                                    >
                                        {{ $t('downloads.status.valid') }}
                                    </span>
                                    <div class="flex items-center text-sm text-gray-500">
                                        <span class="mr-3">{{
                                            certificate.id === 'hulladekKatalogus'
                                                ? $t('wasteManagement.catalog.fullCatalog.searchButton')
                                                : certificate.meret
                                        }}</span>
                                        <UIcon
                                            :name="
                                                certificate.id === 'hulladekKatalogus'
                                                    ? 'i-lucide-external-link'
                                                    : 'i-lucide-download'
                                            "
                                            class="w-4 h-4 group-hover:text-buchl-blue transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Info -->
                    <div class="mt-16 bg-white rounded-xl p-8 shadow-lg">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">
                            {{ $t('downloads.additionalInfo.title') }}
                        </h2>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-lg font-semibold text-buchl-blue mb-3">
                                    {{ $t('downloads.additionalInfo.isoCertificates.title') }}
                                </h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li class="flex items-center">
                                        <UIcon
                                            name="i-lucide-check-circle"
                                            class="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                                        />
                                        {{ $t('downloads.additionalInfo.isoCertificates.iso9001') }}
                                    </li>
                                    <li class="flex items-center">
                                        <UIcon
                                            name="i-lucide-check-circle"
                                            class="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                                        />
                                        {{ $t('downloads.additionalInfo.isoCertificates.iso14001') }}
                                    </li>
                                    <li class="flex items-center">
                                        <UIcon
                                            name="i-lucide-check-circle"
                                            class="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                                        />
                                        {{ $t('downloads.additionalInfo.isoCertificates.iso45001') }}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-buchl-blue mb-3">
                                    {{ $t('downloads.additionalInfo.emasCertificate.title') }}
                                </h3>
                                <p class="text-gray-600">
                                    {{ $t('downloads.additionalInfo.emasCertificate.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>

<script setup lang="ts">
interface DisplayCertificate {
    id: string | number;
    cim: string;
    alcim: string;
    meret: string;
    fileUrl?: string | null;
    filename?: string | null;
}

// Composables
const localePath = useLocalePath();
const { locale } = useI18n();
const { dokumentumok, pending, error, getFileUrl } = useDokumentumok();

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(7); // ID: 7 - Letöltések

// SEO meta adatok
useSeoMeta({
    title: 'Letöltések - BÜCHL HUNGARIA',
    description:
        'A BÜCHL HUNGARIA Kft. hivatalos dokumentumai: tanúsítványok, engedélyek és céginformációk. ISO 9001, ISO 14001, ISO 45001, EMAS tanúsítványok és egyéb dokumentumok letöltése.',
    keywords:
        'BÜCHL HUNGARIA, ISO tanúsítványok, EMAS, letöltések, környezetédelmi tanúsítványok, minőségügyi rendszer',
});

// Reactive state - use global locale instead of separate language selector
const selectedLanguage = computed(() => {
    const localeMap: Record<string, 'hu' | 'en' | 'de'> = {
        hu: 'hu',
        en: 'en',
        de: 'de',
    };
    return localeMap[locale.value] || 'hu';
});

// Document categories
const documentCategories = ref([
    { id: 'tanusitvanyok', name: 'Tanúsítványok', icon: 'i-lucide-award' },
    { id: 'engedélyek', name: 'Engedélyek', icon: 'i-lucide-file-check' },
    { id: 'céginformációk', name: 'Céginformációk', icon: 'i-lucide-building' },
]);

const selectedCategory = ref('tanusitvanyok');

// Map category to tipus values
const tipusMap: Record<string, string> = {
    tanusitvanyok: 'tanusitvany',
    engedélyek: 'engedely',
    céginformációk: 'ceginformacio',
};

// Computed property to filter documents by category and language
const displayCertificates = computed((): DisplayCertificate[] => {
    const documentsInCategory = (dokumentumok.value || []).filter(
        (doc) => doc.tipus === tipusMap[selectedCategory.value],
    );

    let result: DisplayCertificate[] = documentsInCategory.map((doc) => ({
        id: doc.id,
        cim: doc.cim,
        alcim: doc.alcim,
        meret: doc.meret,
        fileUrl: getFileUrl(doc.file, doc.filename),
        filename: doc.filename,
    }));

    // For certificates, also filter by language
    if (selectedCategory.value === 'tanusitvanyok') {
        result = result.filter((doc) => {
            const docItem = dokumentumok.value?.find((d) => d.id === doc.id);
            const docNyelv = docItem?.nyelv || 'hu';
            return docNyelv === selectedLanguage.value;
        });
    }

    // Add special hulladekKatalogus card for engedélyek
    if (selectedCategory.value === 'engedélyek') {
        result.unshift({
            id: 'hulladekKatalogus',
            cim: 'Hulladékkatalógus',
            alcim: 'HAK kódok szerint',
            meret: 'Kereső',
        });
    }

    return result;
});

// Download function
const downloadCertificate = (certificate: DisplayCertificate) => {
    if (certificate.id === 'hulladekKatalogus') {
        navigateTo(localePath('/hulladek-katalogus'));
        return;
    }

    if (certificate.fileUrl) {
        const link = document.createElement('a');
        link.href = certificate.fileUrl;
        link.download = certificate.filename || '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
</script>
