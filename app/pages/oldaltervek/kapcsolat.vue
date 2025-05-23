<template>
    <div>
        <!-- SEO Meta -->
        <Head>
            <Title>Kapcsolat - BÜCHL Hungaria</Title>
            <Meta
                name="description"
                content="Vegye fel velünk a kapcsolatot! BÜCHL Hungaria elérhetőségek, címek, telefonszámok és kapcsolattartók minden szolgáltatásunkhoz."
            />
        </Head>

        <!-- Hero szekció -->
        <BuchlHero
            title="Kapcsolat"
            subtitle="Vegye fel velünk a kapcsolatot! Szakértő csapatunk készséggel áll rendelkezésére."
            bg-color="green"
            :skewed="true"
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&h=800&fit=crop"
            :primary-cta="{
                label: 'Azonnali kapcsolat',
                href: 'tel:+3696516620',
                icon: 'i-heroicons-phone',
            }"
            :secondary-cta="{
                label: 'Email írás',
                href: 'mailto:info@buechl.hu',
                icon: 'i-heroicons-envelope',
            }"
        />

        <!-- Gyors elérhetőségek szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Gyors elérhetőségek
                    </h2>
                    <p class="text-xl text-gray-600">
                        Közvetlen kapcsolat szakértőinkkel
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <!-- Központi iroda -->
                    <div
                        class="bg-gradient-to-br from-buchl-blue/5 to-white p-4 rounded-xl border-l-4 border-buchl-blue hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-center mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center"
                                    alt="Irodaépület"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-lg font-bold text-gray-900">
                                Központi iroda
                            </h3>
                        </div>
                        <div class="space-y-2 text-sm text-gray-600">
                            <p><strong>Lipóth Szilvia</strong></p>
                            <p>Ügyvezető asszisztens</p>
                            <a
                                href="tel:+3696516620"
                                class="flex items-center hover:text-buchl-blue"
                            >
                                <UIcon
                                    name="i-heroicons-phone"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                +36 96 516 620
                            </a>
                            <a
                                href="mailto:info@buechl.hu"
                                class="flex items-center hover:text-buchl-blue"
                            >
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                info@buechl.hu
                            </a>
                        </div>
                    </div>

                    <!-- Értékesítés -->
                    <div
                        class="bg-gradient-to-br from-buchl-green/5 to-white p-4 rounded-xl border-l-4 border-buchl-green hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-center mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center"
                                    alt="Üzleti megbeszélés"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-lg font-bold text-gray-900">
                                Értékesítés
                            </h3>
                        </div>
                        <div class="space-y-2 text-sm text-gray-600">
                            <p><strong>Kozicz Pál</strong></p>
                            <p>Értékesítési vezető</p>
                            <a
                                href="tel:+36205597002"
                                class="flex items-center hover:text-buchl-green"
                            >
                                <UIcon
                                    name="i-heroicons-device-phone-mobile"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                +36 20 559 7002
                            </a>
                            <a
                                href="mailto:pal.kozicz@buechl.hu"
                                class="flex items-center hover:text-buchl-green"
                            >
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                pal.kozicz@buechl.hu
                            </a>
                        </div>
                    </div>

                    <!-- Logisztika -->
                    <div
                        class="bg-gradient-to-br from-buchl-blue/5 to-white p-4 rounded-xl border-l-4 border-buchl-blue hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-center mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=100&h=100&fit=crop&crop=center"
                                    alt="Logisztikai teherautók"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-lg font-bold text-gray-900">
                                Logisztika
                            </h3>
                        </div>
                        <div class="space-y-2 text-sm text-gray-600">
                            <p><strong>Lövész Tamás</strong></p>
                            <p>Logisztikai vezető</p>
                            <a
                                href="tel:+36209924560"
                                class="flex items-center hover:text-buchl-blue"
                            >
                                <UIcon
                                    name="i-heroicons-device-phone-mobile"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                +36 20 992 4560
                            </a>
                            <a
                                href="mailto:tlovesz@buechl.hu"
                                class="flex items-center hover:text-buchl-blue"
                            >
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                tlovesz@buechl.hu
                            </a>
                        </div>
                    </div>

                    <!-- Környezetvédelem -->
                    <div
                        class="bg-gradient-to-br from-buchl-green/5 to-white p-4 rounded-xl border-l-4 border-buchl-green hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-center mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop&crop=center"
                                    alt="Zöld környezet"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-lg font-bold text-gray-900">
                                Környezetvédelem
                            </h3>
                        </div>
                        <div class="space-y-2 text-sm text-gray-600">
                            <p><strong>Vaszkó Andrea</strong></p>
                            <p>Környezetvédelmi koordinátor</p>
                            <a
                                href="tel:+36205597012"
                                class="flex items-center hover:text-buchl-green"
                            >
                                <UIcon
                                    name="i-heroicons-device-phone-mobile"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                +36 20 559 7012
                            </a>
                            <a
                                href="mailto:avaszko@buechl.hu"
                                class="flex items-center hover:text-buchl-green"
                            >
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-2"
                                    style="width: 16px; height: 16px"
                                />
                                avaszko@buechl.hu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Kapcsolatfelvételi űrlap -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Írjon nekünk!
                    </h2>
                    <p class="text-xl text-gray-600">
                        Küldje el üzenetét és munkatársunk hamarosan felveszi
                        Önnel a kapcsolatot
                    </p>
                </div>

                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <form class="space-y-6" @submit.prevent="submitForm">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Név *
                                </label>
                                <UInput
                                    v-model="contactForm.name"
                                    placeholder="Teljes név"
                                    color="primary"
                                    variant="outline"
                                    class="w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email cím *
                                </label>
                                <UInput
                                    v-model="contactForm.email"
                                    type="email"
                                    placeholder="email@example.com"
                                    color="primary"
                                    variant="outline"
                                    class="w-full"
                                    required
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Telefonszám
                                </label>
                                <UInput
                                    v-model="contactForm.phone"
                                    type="tel"
                                    placeholder="+36 20 123 4567"
                                    color="primary"
                                    variant="outline"
                                    class="w-full"
                                />
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Szolgáltatás típusa
                                </label>
                                <USelect
                                    v-model="contactForm.service"
                                    :items="serviceOptions"
                                    placeholder="Válasszon szolgáltatást"
                                    color="primary"
                                    variant="outline"
                                    class="w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Üzenet *
                            </label>
                            <UTextarea
                                v-model="contactForm.message"
                                placeholder="Írja le kérését, kérdését..."
                                :rows="5"
                                color="primary"
                                variant="outline"
                                class="w-full"
                                required
                            />
                        </div>

                        <div class="flex items-center">
                            <UCheckbox
                                v-model="contactForm.privacy"
                                color="primary"
                                required
                            />
                            <label class="ml-2 text-sm text-gray-600">
                                Elfogadom az
                                <a
                                    href="#"
                                    class="text-buchl-blue hover:underline"
                                    >adatvédelmi tájékoztatót</a
                                >
                                *
                            </label>
                        </div>

                        <div class="flex gap-4">
                            <UButton
                                type="submit"
                                color="primary"
                                size="lg"
                                class="rounded-none"
                                :loading="submitting"
                            >
                                <UIcon
                                    name="i-heroicons-paper-airplane"
                                    class="mr-2"
                                    style="width: 20px; height: 20px"
                                />
                                Üzenet küldése
                            </UButton>
                            <UButton
                                type="button"
                                variant="outline"
                                size="lg"
                                class="rounded-none"
                                @click="resetForm"
                            >
                                Törlés
                            </UButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Telephelyek -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Telephelyeink
                    </h2>
                    <p class="text-xl text-gray-600">
                        Fedezze fel irodáinkat és telephelyeinket
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Győr - Főiroda -->
                    <div
                        class="bg-gradient-to-br from-buchl-blue/5 to-white rounded-xl p-4 border-2 border-buchl-blue/20 hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-start mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 mt-1 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center"
                                    alt="Modern irodaépület"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <div>
                                <h3
                                    class="text-lg font-bold text-gray-900 mb-1"
                                >
                                    Győr - Főiroda
                                </h3>
                                <UBadge
                                    color="primary"
                                    variant="soft"
                                    size="sm"
                                >
                                    Központi telephely
                                </UBadge>
                            </div>
                        </div>
                        <div class="space-y-3 text-gray-600">
                            <div class="flex items-start">
                                <UIcon
                                    name="i-heroicons-map-pin"
                                    class="mr-3 mt-1 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <span>9027 Győr<br >Csörgőfa sor 8</span>
                            </div>
                            <div class="flex items-center">
                                <UIcon
                                    name="i-heroicons-phone"
                                    class="mr-3 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <a
                                    href="tel:+3696516620"
                                    class="hover:text-buchl-blue"
                                    >+36 96 516 620</a
                                >
                            </div>
                            <div class="flex items-center">
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-3 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <a
                                    href="mailto:info@buechl.hu"
                                    class="hover:text-buchl-blue"
                                    >info@buechl.hu</a
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Győr - Reptéri út -->
                    <div
                        class="bg-gradient-to-br from-buchl-green/5 to-white rounded-xl p-4 border-2 border-buchl-green/20 hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-start mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 mt-1 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=100&h=100&fit=crop&crop=center"
                                    alt="Raktár és logisztika"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <div>
                                <h3
                                    class="text-lg font-bold text-gray-900 mb-1"
                                >
                                    Győr - Logisztika
                                </h3>
                                <UBadge
                                    color="secondary"
                                    variant="soft"
                                    size="sm"
                                >
                                    Logisztikai központ
                                </UBadge>
                            </div>
                        </div>
                        <div class="space-y-3 text-gray-600">
                            <div class="flex items-start">
                                <UIcon
                                    name="i-heroicons-map-pin"
                                    class="mr-3 mt-1 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <span>9027 Győr<br >Reptéri út 2</span>
                            </div>
                            <div class="flex items-center">
                                <UIcon
                                    name="i-heroicons-device-phone-mobile"
                                    class="mr-3 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <a
                                    href="tel:+36202914943"
                                    class="hover:text-buchl-green"
                                    >+36 20 291 4943</a
                                >
                            </div>
                            <div class="flex items-center">
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-3 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <a
                                    href="mailto:szallitas@buechl.hu"
                                    class="hover:text-buchl-green"
                                    >szallitas@buechl.hu</a
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Körösladány -->
                    <div
                        class="bg-gradient-to-br from-buchl-blue/5 to-white rounded-xl p-4 border-2 border-buchl-blue/20 hover:shadow-lg transition-all duration-300"
                    >
                        <div class="flex items-start mb-3">
                            <div
                                class="w-12 h-12 rounded-full mr-3 flex-shrink-0 mt-1 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center"
                                    alt="Ipari üzem"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <div>
                                <h3
                                    class="text-lg font-bold text-gray-900 mb-1"
                                >
                                    Körösladány
                                </h3>
                                <UBadge
                                    color="primary"
                                    variant="soft"
                                    size="sm"
                                >
                                    Feldolgozó üzem
                                </UBadge>
                            </div>
                        </div>
                        <div class="space-y-3 text-gray-600">
                            <div class="flex items-start">
                                <UIcon
                                    name="i-heroicons-map-pin"
                                    class="mr-3 mt-1 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <span
                                    >5516 Körösladány<br >Szeghalmi út 0174/3
                                    hrsz</span
                                >
                            </div>
                            <div class="flex items-center">
                                <UIcon
                                    name="i-heroicons-phone"
                                    class="mr-3 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <a
                                    href="tel:+3696516620"
                                    class="hover:text-buchl-blue"
                                    >+36 96 516 620</a
                                >
                            </div>
                            <div class="flex items-center">
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="mr-3 flex-shrink-0"
                                    style="width: 18px; height: 18px"
                                />
                                <a
                                    href="mailto:info@buechl.hu"
                                    class="hover:text-buchl-blue"
                                    >info@buechl.hu</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Nyitvatartás és további elérhetőségek -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Nyitvatartás -->
                    <div class="bg-white rounded-xl p-4 shadow-lg">
                        <div class="mb-4">
                            <h3 class="text-xl font-bold text-gray-900">
                                Nyitvatartás
                            </h3>
                        </div>
                        <div class="space-y-4">
                            <div
                                class="flex justify-between items-center py-2 border-b border-gray-100"
                            >
                                <span class="font-medium text-gray-900"
                                    >Hétfő - Csütörtök</span
                                >
                                <span class="text-gray-600">7:00 - 15:30</span>
                            </div>
                            <div
                                class="flex justify-between items-center py-2 border-b border-gray-100"
                            >
                                <span class="font-medium text-gray-900"
                                    >Péntek</span
                                >
                                <span class="text-gray-600">7:00 - 14:30</span>
                            </div>
                            <div
                                class="flex justify-between items-center py-2 border-b border-gray-100"
                            >
                                <span class="font-medium text-gray-900"
                                    >Szombat - Vasárnap</span
                                >
                                <span class="text-red-600">Zárva</span>
                            </div>
                            <div class="mt-6 p-4 bg-buchl-green/10 rounded-lg">
                                <p class="text-sm text-gray-600">
                                    <strong>Sürgős esetben:</strong> Logisztikai
                                    diszpécser elérhető a +36 20 291 4943
                                    telefonszámon.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Specializált szolgáltatások -->
                    <div class="bg-white rounded-xl p-4 shadow-lg">
                        <div class="mb-4">
                            <h3 class="text-xl font-bold text-gray-900">
                                Specializált elérhetőségek
                            </h3>
                        </div>
                        <div class="space-y-6">
                            <div class="border-l-4 border-buchl-blue pl-4">
                                <h4 class="font-semibold text-gray-900 mb-1">
                                    Hulladék adatszolgáltatás
                                </h4>
                                <p class="text-gray-600 text-sm mb-2">
                                    Hulladékkezelési nyilvántartások, jelentések
                                </p>
                                <div class="space-y-1">
                                    <a
                                        href="tel:+3696516626"
                                        class="flex items-center text-sm hover:text-buchl-blue"
                                    >
                                        <UIcon
                                            name="i-heroicons-phone"
                                            class="mr-2"
                                            style="width: 14px; height: 14px"
                                        />
                                        +36 96 516 626
                                    </a>
                                    <a
                                        href="mailto:kornyezetvedelem@buechl.hu"
                                        class="flex items-center text-sm hover:text-buchl-blue"
                                    >
                                        <UIcon
                                            name="i-heroicons-envelope"
                                            class="mr-2"
                                            style="width: 14px; height: 14px"
                                        />
                                        kornyezetvedelem@buechl.hu
                                    </a>
                                </div>
                            </div>

                            <div class="border-l-4 border-buchl-green pl-4">
                                <h4 class="font-semibold text-gray-900 mb-1">
                                    Könyvelés
                                </h4>
                                <p class="text-gray-600 text-sm mb-2">
                                    Számlázás, pénzügyi kérdések
                                </p>
                                <div class="space-y-1">
                                    <a
                                        href="tel:+3696516624"
                                        class="flex items-center text-sm hover:text-buchl-green"
                                    >
                                        <UIcon
                                            name="i-heroicons-phone"
                                            class="mr-2"
                                            style="width: 14px; height: 14px"
                                        />
                                        +36 96 516 624
                                    </a>
                                    <a
                                        href="mailto:konyveles@buechl.hu"
                                        class="flex items-center text-sm hover:text-buchl-green"
                                    >
                                        <UIcon
                                            name="i-heroicons-envelope"
                                            class="mr-2"
                                            style="width: 14px; height: 14px"
                                        />
                                        konyveles@buechl.hu
                                    </a>
                                </div>
                            </div>

                            <div class="border-l-4 border-buchl-blue pl-4">
                                <h4 class="font-semibold text-gray-900 mb-1">
                                    Műszaki vezetés
                                </h4>
                                <p class="text-gray-600 text-sm mb-2">
                                    Gyökeres Sándor - Műszaki és üzemeltetési
                                    kérdések
                                </p>
                                <div class="space-y-1">
                                    <a
                                        href="tel:+36205722573"
                                        class="flex items-center text-sm hover:text-buchl-blue"
                                    >
                                        <UIcon
                                            name="i-heroicons-device-phone-mobile"
                                            class="mr-2"
                                            style="width: 14px; height: 14px"
                                        />
                                        +36 20 572 2573
                                    </a>
                                    <a
                                        href="mailto:sgyokeres@buechl.hu"
                                        class="flex items-center text-sm hover:text-buchl-blue"
                                    >
                                        <UIcon
                                            name="i-heroicons-envelope"
                                            class="mr-2"
                                            style="width: 14px; height: 14px"
                                        />
                                        sgyokeres@buechl.hu
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <NuxtLink to="/oldaltervek/szolgaltatasok">
                        <UButton
                            color="primary"
                            variant="outline"
                            block
                            class="h-full rounded-none"
                        >
                            <div class="text-center">
                                <p class="font-bold">Szolgáltatások</p>
                                <p class="text-xs opacity-80">
                                    Teljes szolgáltatási paletta
                                </p>
                            </div>
                            <template #trailing>
                                <UIcon name="i-heroicons-arrow-right" />
                            </template>
                        </UButton>
                    </NuxtLink>

                    <NuxtLink to="/oldaltervek/innovaciok">
                        <UButton
                            color="primary"
                            variant="outline"
                            block
                            class="h-full rounded-none"
                        >
                            <div class="text-center">
                                <p class="font-bold">Innovációk</p>
                                <p class="text-xs opacity-80">
                                    Technológiai fejlesztések
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
// SEO beállítások
useSeoMeta({
    title: "Kapcsolat - BÜCHL Hungaria",
    description:
        "Vegye fel velünk a kapcsolatot! BÜCHL Hungaria elérhetőségek, címek, telefonszámok és kapcsolattartók minden szolgáltatásunkhoz.",
    ogTitle: "Kapcsolat - BÜCHL Hungaria",
    ogDescription:
        "Vegye fel velünk a kapcsolatot! BÜCHL Hungaria elérhetőségek, címek, telefonszámok és kapcsolattartók minden szolgáltatásunkhoz.",
    ogImage: "/images/buchl-kapcsolat-og.jpg",
    twitterCard: "summary_large_image",
});

// Űrlap adatok
const contactForm = ref({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
});

const submitting = ref(false);

// Szolgáltatás opciók
const serviceOptions = [
    { value: "hulladekkezeles", label: "Hulladékkezelés" },
    { value: "logisztika", label: "Logisztikai szolgáltatások" },
    { value: "kornyezetvedelem", label: "Környezetvédelmi tanácsadás" },
    { value: "dokumentummegsemmisites", label: "Dokumentum megsemmisítés" },
    { value: "ajanlatkeres", label: "Általános ajánlatkérés" },
    { value: "egyeb", label: "Egyéb" },
];

// Űrlap beküldése
const submitForm = async () => {
    submitting.value = true;

    try {
        // Itt történne az űrlap feldolgozása
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Szimuláció

        // Siker esetén űrlap resetelése
        resetForm();

        // Siker üzenet megjelenítése (pl. toast notification)
        console.log("Üzenet sikeresen elküldve!");
    } catch (error) {
        console.error("Hiba történt:", error);
    } finally {
        submitting.value = false;
    }
};

// Űrlap törlése
const resetForm = () => {
    contactForm.value = {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        privacy: false,
    };
};
</script>
