<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            title="Szolgáltatásaink"
            subtitle="Komplex hulladékgazdálkodási megoldások minden igényre"
            image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=800&fit=crop"
            bg-color="blue"
            :primary-cta="{
                label: 'Ajánlatkérés',
                to: '/kapcsolat',
            }"
            :secondary-cta="{
                label: 'Tanúsítványaink',
                to: '/fenntarthatosag#certificates',
            }"
        />

        <!-- Bevezető szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-3xl mx-auto text-center">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6"
                    >
                        Átfogó hulladékgazdálkodási megoldások
                    </h2>
                    <p class="text-lg text-gray-700 mb-8">
                        A BÜCHL több mint 20 éves tapasztalattal rendelkezik a
                        professzionális hulladékgazdálkodás területén. Teljes
                        körű szolgáltatásaink a hulladék gyűjtésétől és
                        szállításától kezdve a feldolgozáson át az
                        újrahasznosításig minden területet lefednek.
                    </p>
                    <p class="text-lg text-gray-700">
                        Szolgáltatásainkat kizárólag ipari ügyfelek számára
                        kínáljuk, mindig a legmagasabb szakmai színvonalon és
                        környezettudatos megközelítéssel. Szakértelmünk
                        különösen az ipari hulladékkezelés speciális kihívásaira
                        fókuszál.
                    </p>
                </div>
            </div>
        </section>

        <!-- Ipari szolgáltatási kategóriák -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center"
                >
                    Ipari szolgáltatási portfóliónk
                </h2>

                <div class="max-w-3xl mx-auto mb-16 text-center">
                    <p class="text-lg text-gray-700">
                        A BÜCHL kizárólag ipari ügyfelekre specializálódott, így
                        minden szolgáltatásunkat a vállalati igények
                        figyelembevételével alakítottuk ki. Csapatunk szakértő
                        megoldásokat kínál minden iparág számára, különös
                        tekintettel az autóiparra, elektronikai iparra,
                        vegyiparra és feldolgozóiparra.
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
                                Hulladékgyűjtés és szállítás
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                Specializált járműparkunk 40 különböző típusú
                                járművel biztosítja a biztonságos és hatékony
                                hulladékszállítást ipari partnereink számára.
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span
                                        >Közúti és telephelyen belüli
                                        szállítás</span
                                    >
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span
                                        >Veszélyes és nem veszélyes hulladék
                                        kezelése</span
                                    >
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>ADR minősítésű fuvarozás</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    to="/oldaltervek/szolgaltatasok/szallitas"
                                >
                                    Részletek
                                </UButton>
                            </div>
                        </div>
                    </div>

                    <!-- Hulladékkezelés és újrahasznosítás kategória -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="bg-buchl-blue text-white p-5">
                            <h3
                                class="text-xl font-bold flex items-center gap-3"
                            >
                                <UIcon
                                    name="i-heroicons-arrow-path"
                                    class="w-7 h-7"
                                />
                                Hulladékkezelés és újrahasznosítás
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                Magas újrahasznosítási aránnyal rendelkező
                                feldolgozási technológiákat alkalmazunk a
                                fenntarthatóság és körforgásos gazdaság
                                érdekében.
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span
                                        >Ipari hulladékok speciális
                                        kezelése</span
                                    >
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span
                                        >Folyadék és emulzió
                                        újrafeldolgozás</span
                                    >
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span
                                        >Másodlagos nyersanyagok
                                        előállítása</span
                                    >
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    to="/oldaltervek/szolgaltatasok/ujrahasznositas"
                                >
                                    Részletek
                                </UButton>
                            </div>
                        </div>
                    </div>

                    <!-- Belső üzemi logisztika kategória -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="bg-buchl-blue text-white p-5">
                            <h3
                                class="text-xl font-bold flex items-center gap-3"
                            >
                                <UIcon
                                    name="i-heroicons-cog-6-tooth"
                                    class="w-7 h-7"
                                />
                                Belső üzemi logisztika (ELOG SYSTEM®)
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                Innovatív üzemi logisztikai rendszerünk
                                optimalizálja az ipari hulladékgazdálkodási
                                folyamatokat és növeli a hatékonyságot.
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Papírmentes hulladéklogisztika</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Valós idejű folyamatkövetés</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span
                                        >Testreszabható digitális
                                        megoldások</span
                                    >
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    to="/oldaltervek/szolgaltatasok/elog-system"
                                >
                                    Részletek
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Részletes szolgáltatások szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center"
                >
                    Kiemelt szolgáltatásaink
                </h2>

                <div
                    class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start"
                >
                    <!-- 1. Szolgáltatás kártya - Hulladékgyűjtés és szállítás -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-truck"
                                        class="text-primary-600 dark:text-primary-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    Hulladékgyűjtés és szállítás
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Közel 40 speciális szállítójárműből álló flottánk az
                            ipari hulladékok biztonságos és hatékony
                            elszállítását biztosítja egész Magyarországon.
                        </p>
                        <ul class="space-y-2 mb-4">
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >ADR minősítésű veszélyes hulladék
                                    szállítás</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Speciális konténerrendszerek többféle
                                    hulladéktípushoz</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Részletes jelentéskészítés és
                                    visszakövethetőség</span
                                >
                            </li>
                        </ul>
                        <template #footer>
                            <UButton
                                label="Részletek"
                                to="/oldaltervek/szolgaltatasok/szallitas"
                                color="primary"
                                variant="ghost"
                                size="sm"
                                block
                                class="rounded-none"
                            />
                        </template>
                    </UCard>

                    <!-- 2. Szolgáltatás kártya - Hulladékkezelés és újrahasznosítás -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-green-100 dark:bg-green-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-arrow-path"
                                        class="text-green-600 dark:text-green-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    Hulladékkezelés és újrahasznosítás
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Innovatív technológiákkal és magas újrahasznosítási
                            aránnyal alakítjuk az ipari hulladékot értékes
                            másodlagos nyersanyagokká.
                        </p>
                        <ul class="space-y-2 mb-4">
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Emulziók és mosófolyadékok
                                    párologtatása</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Másodlagos tüzelőanyag előállítás
                                    cementgyárak számára</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Fémforgácsok és egyéb fémhulladékok
                                    feldolgozása</span
                                >
                            </li>
                        </ul>
                        <template #footer>
                            <UButton
                                label="Részletek"
                                to="/oldaltervek/szolgaltatasok/ujrahasznositas"
                                color="secondary"
                                variant="ghost"
                                size="sm"
                                block
                                class="rounded-none"
                            />
                        </template>
                    </UCard>

                    <!-- 3. Szolgáltatás kártya - ELOG SYSTEM -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-cog-6-tooth"
                                        class="text-blue-600 dark:text-blue-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    Belső üzemi logisztika (ELOG SYSTEM®)
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            ELOG SYSTEM® 4.0 innovatív logisztikai rendszerünk
                            teljes mértékben papírmentes hulladékkezelést
                            biztosít ipari ügyfeleink számára.
                        </p>
                        <ul class="space-y-2 mb-4">
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >CleverWaste® platform a teljes folyamat
                                    nyomon követésére</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >GYLOG 1.0 vezérlőrendszer a papírmentes
                                    szállításhoz</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Speciális "Shuttle" (Q-Frame) a termelési
                                    területek elválasztására</span
                                >
                            </li>
                        </ul>
                        <template #footer>
                            <UButton
                                label="Részletek"
                                to="/oldaltervek/szolgaltatasok/elog-system"
                                color="secondary"
                                variant="ghost"
                                size="sm"
                                block
                                class="rounded-none"
                            />
                        </template>
                    </UCard>

                    <!-- 4. Szolgáltatás kártya - Speciális konténerrendszerek -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-cube"
                                        class="text-yellow-600 dark:text-yellow-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    Speciális konténerrendszerek
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Széles választékú konténer megoldások az ipari
                            hulladékok hatékony gyűjtésére, tárolására és
                            szállítására.
                        </p>
                        <ul class="space-y-2 mb-4">
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Folyadék és veszélyes anyagok tárolására
                                    alkalmas konténerek</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Multifunkcionális konténerek különböző
                                    kezelőberendezésekhez</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Nagy mennyiségű hulladék tárolására
                                    alkalmas rendszerek</span
                                >
                            </li>
                        </ul>
                        <template #footer>
                            <UButton
                                label="Részletek"
                                to="/oldaltervek/szolgaltatasok/kontener-rendszerek"
                                color="secondary"
                                variant="ghost"
                                size="sm"
                                block
                                class="rounded-none"
                            />
                        </template>
                    </UCard>

                    <!-- 5. Szolgáltatás kártya - Másodnyersanyag előállítás -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-archive-box-arrow-down"
                                        class="text-indigo-600 dark:text-indigo-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    Másodnyersanyag előállítás
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Az ipari hulladékok újrahasznosításával magas
                            minőségű másodlagos nyersanyagokat állítunk elő
                            különböző iparágak számára.
                        </p>
                        <ul class="space-y-2 mb-4">
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Mágneses és nem-mágneses fémforgácsok,
                                    hulladékok</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Előfeldolgozott műanyaghulladék
                                    újrahasznosításra</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Válogatott csomagolóanyagok és textil
                                    alapanyagok</span
                                >
                            </li>
                        </ul>
                        <template #footer>
                            <UButton
                                label="Részletek"
                                to="/oldaltervek/szolgaltatasok/masodnyersanyag"
                                color="primary"
                                variant="ghost"
                                size="sm"
                                block
                                class="rounded-none"
                            />
                        </template>
                    </UCard>

                    <!-- 6. Szolgáltatás kártya - Testreszabott ipari megoldások -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <div
                                    class="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg"
                                >
                                    <UIcon
                                        name="i-heroicons-wrench-screwdriver"
                                        class="text-emerald-600 dark:text-emerald-400 text-2xl"
                                    />
                                </div>
                                <h3 class="text-lg font-semibold">
                                    Testreszabott ipari megoldások
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            Egyedi, a vállalat igényeire szabott
                            hulladékgazdálkodási rendszerek tervezése és
                            üzemeltetése minden iparág számára.
                        </p>
                        <ul class="space-y-2 mb-4">
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Komplett üzemi hulladékkezelési
                                    rendszerek</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Szakképzett személyzet biztosítása
                                    helyszíni munkákhoz</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <UIcon
                                    name="i-heroicons-check-circle"
                                    class="text-green-500"
                                />
                                <span
                                    >Ipari méretű hulladékgazdálkodás
                                    outsourcing</span
                                >
                            </li>
                        </ul>
                        <template #footer>
                            <UButton
                                label="Részletek"
                                to="/oldaltervek/szolgaltatasok/egyedi-megoldasok"
                                color="secondary"
                                variant="ghost"
                                size="sm"
                                block
                                class="rounded-none"
                            />
                        </template>
                    </UCard>
                </div>
            </div>
        </section>

        <!-- Ügyfélreferenciák szekció -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center"
                >
                    Elégedett ügyfeleink
                </h2>

                <div
                    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
                >
                    <div
                        class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4"
                    >
                        <img
                            src="https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png"
                            alt="Audi"
                            class="h-8 w-auto"
                        />
                    </div>
                    <div
                        class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg"
                            alt="Bosch"
                            class="h-8 w-auto"
                        />
                    </div>
                    <div
                        class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4"
                    >
                        <img
                            src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png"
                            alt="Mercedes"
                            class="h-8 w-auto"
                        />
                    </div>
                    <div
                        class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Opel-Logo_2017.png"
                            alt="Opel"
                            class="h-8 w-auto"
                        />
                    </div>
                    <div
                        class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4"
                    >
                        <img
                            src="https://www.logo.wine/a/logo/Nokia/Nokia-Logo.wine.svg"
                            alt="Nokia"
                            class="h-8 w-auto"
                        />
                    </div>
                    <div
                        class="w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-4"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Flex_logo_%282015%29.svg"
                            alt="Flex"
                            class="h-8 w-auto"
                        />
                    </div>
                </div>

                <div class="mt-16 text-center">
                    <UCard class="bg-white p-8 max-w-3xl mx-auto">
                        <div class="relative mb-8 inline-block">
                            <UIcon
                                name="i-heroicons-chat-bubble-bottom-center-text"
                                class="text-buchl-green w-12 h-12 absolute -top-6 -left-6 opacity-30"
                            />
                            <blockquote
                                class="text-xl italic text-gray-700 relative z-10"
                            >
                                "A BÜCHL átfogó hulladékkezelési megoldásai
                                jelentős mértékben hozzájárultak ahhoz, hogy
                                vállalatunk teljesítse környezetvédelmi céljait
                                és optimalizálja a hulladékgazdálkodási
                                folyamatait."
                            </blockquote>
                        </div>
                        <div class="flex items-center justify-center">
                            <img
                                src="https://i.pravatar.cc/60?img=3"
                                alt="Ügyfél képe"
                                class="w-12 h-12 rounded-full mr-4"
                            />
                            <div class="text-left">
                                <p class="font-semibold">Kovács János</p>
                                <p class="text-sm text-gray-600">
                                    Környezetvédelmi vezető, Autóipari Vállalat
                                    Kft.
                                </p>
                            </div>
                        </div>
                    </UCard>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-buchl-green text-buchl-blue">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    Kérjen egyedi ajánlatot!
                </h2>
                <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
                    Szakértő csapatunk személyre szabott megoldást kínál
                    vállalkozása számára, függetlenül annak méretétől vagy az
                    iparágtól.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        to="/kapcsolat"
                        size="lg"
                        icon="i-heroicons-envelope"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        Ajánlatkérés
                    </UButton>
                    <UButton
                        to="/oldaltervek"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-left"
                        class="rounded-none border-2 border-buchl-blue text-buchl-blue"
                    >
                        Vissza az oldaltervekhez
                    </UButton>
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
                    <NuxtLink to="/oldaltervek/kapcsolat">
                        <UButton
                            color="primary"
                            variant="outline"
                            block
                            class="h-full rounded-none"
                        >
                            <div class="text-center">
                                <p class="font-bold">Kapcsolat</p>
                                <p class="text-xs opacity-80">
                                    Lépjen velünk kapcsolatba
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
    </div>
</template>

<script setup lang="ts"></script>
