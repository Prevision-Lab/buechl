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
                <div class="max-w-4xl mx-auto text-center">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6"
                    >
                        Komplex hulladékkezelés ipari partnerek számára
                    </h2>
                    <p class="text-lg text-gray-700 mb-8">
                        A BÜCHL HUNGARIA közel 40 járműből álló flottával szolgálja ki ipari partnereit – legyen szó konténeres, folyékony vagy veszélyes hulladék szállításáról. Specializált technológiáink és szakértő csapatunk átfogó megoldásokat kínál minden iparág számára.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div class="text-center">
                            <div class="bg-buchl-blue/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-truck" class="text-buchl-blue text-4xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">Gyűjtés & Szállítás</h3>
                            <p class="text-gray-600 text-sm">ADR tanúsítvánnyal rendelkező sofőrök és modern járműpark</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-buchl-green/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-cog-6-tooth" class="text-buchl-green text-4xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">Hulladékkezelés</h3>
                            <p class="text-gray-600 text-sm">Speciális technológiák és korszerű berendezések Győrben</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-buchl-blue/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-cpu-chip" class="text-buchl-blue text-4xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue mb-2">ELOG SYSTEM®</h3>
                            <p class="text-gray-600 text-sm">Digitális logisztikai megoldások és papírmentes folyamatok</p>
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
                                Hulladékgyűjtés és -szállítás
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                Professzionális hulladékszállítás rugalmasan és megbízhatóan, ADR-tanúsítvánnyal és részletes dokumentációval.
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Széles konténerválaszték minden ipari igényre</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Folyékony és veszélyes hulladékok speciális tárolása</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Költségoptimalizálás szakértő tanácsadással</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    to="/szolgaltatasok/szallitas"
                                >
                                    Részletek
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
                                Hulladékkezelés
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                Speciális technológiák és korszerű berendezések a győri telephelyünkön a biztonságos és hatékony kezelésre.
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-green shrink-0 mt-0.5"
                                    />
                                    <span>Emulzió- és mosólúg-kezelés, bepárló berendezések</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-green shrink-0 mt-0.5"
                                    />
                                    <span>Másodnyersanyagok előállítása a körforgásos gazdaságért</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-green shrink-0 mt-0.5"
                                    />
                                    <span>Iratmegsemmisítés, válogatás és bálázás</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    to="/szolgaltatasok/hulladekkezeles"
                                >
                                    Részletek
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
                                Logisztika (ELOG SYSTEM®)
                            </h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-700 mb-6">
                                Komplex, digitális megoldások az üzemen belüli hulladéklogisztika optimalizálására, saját fejlesztésű szoftverekkel.
                            </p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Papírmentes, igényalapú elszállítás (GYLOG 1.0)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Teljes körű digitalizáció (CleverWaste®)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-check-circle"
                                        class="w-6 h-6 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <span>Rugalmas szakszemélyzet biztosítása</span>
                                </li>
                            </ul>
                            <div>
                                <UButton
                                    color="primary"
                                    variant="soft"
                                    size="lg"
                                    class="w-full rounded-none"
                                    to="/szolgaltatasok/elog-system"
                                >
                                    Részletek
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hulladékatalógus szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                        Hulladékatalógus - Komplex hulladékkezelés
                    </h2>
                    <p class="text-lg text-gray-700 max-w-4xl mx-auto">
                        Vállalatunk nemcsak saját partnerei, hanem más régiókból érkező hulladékok kezelését is vállalja. 
                        Széles körű nem veszélyes és veszélyes hulladéktípusokat dolgozunk fel biztonságosan.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 items-center mb-12">
                    <div>
                        <div class="bg-buchl-blue/5 p-8 rounded-lg">
                            <h3 class="text-xl font-bold text-buchl-blue mb-4 flex items-center gap-3">
                                <UIcon name="i-heroicons-rectangle-stack" class="w-6 h-6" />
                                Nem veszélyes hulladékok
                            </h3>
                            <ul class="space-y-2 text-gray-700">
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>Műanyag hulladékok</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>Fa hulladékok</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>Fém hulladékok</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-buchl-green" />
                                    <span>Csomagolóanyagok</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <div class="bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
                            <h3 class="text-xl font-bold text-red-700 mb-4 flex items-center gap-3">
                                <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6" />
                                Veszélyes hulladékok (fő szakterület)
                            </h3>
                            <ul class="space-y-2 text-gray-700">
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>Emulziók, mosólúgok</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>Aeroszolok</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>Fémforgácsok</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-red-500" />
                                    <span>Légzsákok és HV-akkumulátorok</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 class="text-2xl font-bold text-buchl-blue mb-4">
                        Teljes hulladékatalógus és kereső funkció
                    </h3>
                    <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Engedélyezett hulladéktípusaink teljes listája letölthető és online kereső funkcióval ellátott. 
                        Könnyen megtalálhatja a megfelelő kezelési módot az Ön hulladékaihoz.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <UButton
                            to="/hulladek-katalogus"
                            size="lg"
                            icon="i-heroicons-magnifying-glass"
                            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                        >
                            Kereső funkció
                        </UButton>
                        <UButton
                            href="/media/documents/hulladek-katalogus.pdf"
                            variant="outline"
                            size="lg"
                            icon="i-heroicons-arrow-down-tray"
                            class="rounded-none border-buchl-blue text-buchl-blue hover:bg-buchl-blue hover:text-white"
                            target="_blank"
                        >
                            Katálógus letöltése
                        </UButton>
                    </div>
                </div>
            </div>
        </section>

        <!-- Környezetvédelmi szolgáltatások szekció -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    Környezetvédelmi szolgáltatások
                </h2>
                
                <div class="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h3 class="text-2xl font-bold text-buchl-blue mb-6">
                            Szakértő tanácsadás és tervezés
                        </h3>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-buchl-green shrink-0 mt-0.5" />
                                <div>
                                    <span class="font-semibold">Környezetvédelmi tanácsadás</span>
                                    <p class="text-gray-600">Szakértő támogatás környezetvédelmi előírások betartásában</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-buchl-green shrink-0 mt-0.5" />
                                <div>
                                    <span class="font-semibold">Hulladékgazdálkodási tervek</span>
                                    <p class="text-gray-600">Testreszabott tervek kidolgozása és optimalizálás</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-buchl-green shrink-0 mt-0.5" />
                                <div>
                                    <span class="font-semibold">Compliance ellenőrzés</span>
                                    <p class="text-gray-600">Jogszabályi megfelelőség biztosítása és auditálás</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
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
                        <div class="text-buchl-blue/80">Szakképzett munkatárs</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">40+</div>
                        <div class="text-buchl-blue/80">Speciális jármű</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">10</div>
                        <div class="text-buchl-blue/80">Hulladékkezelő berendezés</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-buchl-blue mb-2">25</div>
                        <div class="text-buchl-blue/80">Év tapasztalat</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    Kérjen személyre szabott ajánlatot!
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    Tapasztalt szakembereink segítségével találja meg a legmegfelelőbb hulladékgazdálkodási megoldást vállalata számára.
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
                        to="/rolunk"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-right"
                        :trailing="true"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        Rólunk bővebben
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Szolgáltatások oldal
</script>
