<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            title="Hulladékkezelés"
            subtitle="Speciális technológiák és korszerű hulladékkezelés Győrben"
            image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=800&fit=crop"
            bg-color="green"
            :primary-cta="{
                label: 'Ajánlatkérés',
                to: '/kapcsolat',
            }"
            :secondary-cta="{
                label: 'Vissza a szolgáltatásokhoz',
                to: '/szolgaltatasok',
            }"
        />

        <!-- Főtartalom -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg max-w-none">
                        <p class="text-xl text-gray-700 mb-8">
                            A BÜCHL győri telephelyén fejlett technológiák működnek az ipari hulladékok biztonságos és 
                            hatékony kezelésére. Emellett veszélyes hulladékok részére köztes raktár, fedett raktárak, 
                            folyadéktartályok is rendelkezésre állnak – szinte minden hulladéktípus kezelésére.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technológiák -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    Speciális technológiák és berendezések
                </h2>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Emulzió- és mosólúg-kezelő -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-beaker" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Emulzió- és mosólúgkezelés</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Az emulzió- és mosólúgkezelő bepárló berendezések
                        </p>
                    </div>

                    <!-- Lakkozó berendezések szennyvíz -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-funnel" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Speciális szennyvíz kezelése</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Lakkozó berendezésekből származó szennyvíz részére speciális kezelő berendezés
                        </p>
                    </div>

                    <!-- Másodlagos tüzelőanyagok -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-fire" class="text-orange-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Másodlagos tüzelőanyagok</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Cementgyárak részére veszélyes és nem veszélyes hulladékokból másodlagos tüzelőanyagok előállítására alkalmas technológia
                        </p>
                    </div>

                    <!-- Olajtartalmú köszörűiszap -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cog-6-tooth" class="text-gray-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Köszörűiszap kezelése</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Fémmegmunkálásból származó olajtartalmú köszörűiszap számára előkezelő berendezés
                        </p>
                    </div>

                    <!-- Válogató berendezés -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-funnel" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Válogatás</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Válogató berendezés vegyes csomagolóanyagok és egyéb értékes hulladékok részére
                        </p>
                    </div>

                    <!-- Bálázó berendezés -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cube" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Bálázás</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Bálázó berendezés kartonok, textíliák és fóliák részére
                        </p>
                    </div>

                    <!-- Tömörítő berendezés -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-arrows-pointing-in" class="text-purple-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Tömörítés</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Tömörítő berendezés műanyag csomagolási hulladékok (hungarocell, habosító fólia) részére
                        </p>
                    </div>

                    <!-- Iratmegsemmisítő -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-document-minus" class="text-red-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Iratmegsemmisítés</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Iratmegsemmísítő berendezés
                        </p>
                    </div>

                    <!-- Raktározás -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-building-storefront" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-3 text-center">Raktározás</h3>
                        <p class="text-gray-700 text-sm text-center">
                            Veszélyes hulladékok részére köztes raktár, fedett raktárak, folyadéktartályok – szinte minden hulladéktípus kezelésére
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Másodnyersanyagok -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            Másodnyersanyagok előállítása
                        </h2>
                        <h3 class="text-xl text-buchl-green font-semibold mb-4">
                            A körforgásos gazdaság szolgálatában
                        </h3>
                        <p class="text-lg text-gray-700 mb-6">
                            A BÜCHL HUNGARIA Kft. kulcsszereplő a hulladékhasznosításban, amely megbízható partnerként látja 
                            el a feldolgozó- és energiaipart másodnyersanyagokkal Magyarországon és a régióban.
                        </p>
                        <p class="text-gray-700">
                            Termékpalettáján szerepelnek többek között fémforgácsok, különféle fémhulladékok, másodlagos 
                            tüzelőanyagok, előkezelt műanyagok, csomagolóanyagok, valamint textil- és színesfém-hulladékok – 
                            mindezt a fenntartható és körforgásos gazdálkodás jegyében.
                        </p>
                    </div>
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop"
                            alt="Másodnyersanyagok előállítása"
                            class="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Innovatív megoldások -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    Innovatív megoldások speciális ipari hulladékokra
                </h2>
                
                <div class="max-w-4xl mx-auto">
                    <p class="text-lg text-gray-700 mb-8 text-center">
                        A BÜCHL folyamatosan új technológiákat fejleszt az ipari hulladékok költséghatékony, biztonságos és 
                        fenntartható kezelésére.
                    </p>
                    
                    <div class="grid gap-8 md:grid-cols-2">
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-beaker" class="text-buchl-blue text-2xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">Lakktartalmú szennyvizek</h3>
                            <p class="text-gray-700">
                                Lakktartalmú szennyvizek feldolgozására szolgáló pilot-berendezés
                            </p>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UIcon name="i-heroicons-shield-exclamation" class="text-red-500 text-2xl" />
                            </div>
                            <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">Pirotechnikai rendszerek</h3>
                            <p class="text-gray-700">
                                Légzsákok és más, a gépjárművekből származó pirotechnikai rendszerek biztonságos megsemmisítésére alkalmas mobil konténer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hulladékkatalógus -->        
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    Hulladékkatalógus - Komplex hulladékkezelés
                </h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <p class="text-lg text-gray-700 text-center mb-8">
                        Vállalatunk nemcsak saját partnerei, hanem más régiókból érkező hulladékok kezelését is vállalja.
                        Széles körű nem veszélyes hulladéktípusokat is feldolgozunk (pl. műanyag, fa, fém), emellett fő 
                        szakterületünk a veszélyes hulladékok biztonságos átvétele és kezelése – ideértve emulziókat, 
                        mosólúgokat, aeroszolokat, fémforgácsokat, légzsákokat és HV-akkumulátorokat is.
                    </p>
                    <p class="text-gray-700 text-center">
                        Engedélyezett hulladéktípusaink listája letölthető.
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

        <!-- CTA szekció -->
        <section class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    Kérjen személyre szabott ajánlatot!
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    Tapasztalt szakembereink segítségével találja meg a legmegfelelőbb hulladékkezelési megoldást vállalata számára.
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
                        to="/szolgaltatasok"
                        variant="outline"
                        size="lg"
                        icon="i-heroicons-arrow-left"
                        class="rounded-none border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        Vissza a szolgáltatásokhoz
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Hulladékkezelés oldal
</script>
