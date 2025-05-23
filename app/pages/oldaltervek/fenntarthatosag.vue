<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            title="Fenntarthatóság"
            subtitle="Környezettudatos megoldásokkal építjük a jövőt és védjük bolygónkat a következő generációk számára."
            :image="`https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop`"
            image-alt="Fenntartható technológiák"
            bg-color="green"
            :skewed="true"
            :primary-cta="{
                label: 'Kezdeményezéseink',
                to: '/fenntarthatosag',
                icon: 'i-heroicons-leaf',
            }"
            :secondary-cta="{
                label: 'Kapcsolat',
                to: '/kapcsolat',
                icon: 'i-heroicons-mail',
            }"
        />

        <!-- Fenntarthatósági kezdeményezések - Új Design -->
        <section
            class="py-24 bg-gradient-to-br from-gray-50 via-white to-buchl-green/5"
        >
            <UContainer>
                <div class="text-center mb-16">
                    <h2
                        class="text-4xl lg:text-5xl font-bold text-buchl-blue mb-6 font-display"
                    >
                        Fenntarthatósági kezdeményezéseink
                    </h2>
                    <p
                        class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Konkrét intézkedésekkel és innovatív megoldásokkal
                        járulunk hozzá egy fenntarthatóbb jövő megteremtéséhez.
                    </p>
                </div>

                <!-- Kezdeményezések grid - Kártyák helyett modern layout -->
                <div class="grid lg:grid-cols-2 gap-8">
                    <!-- Megújuló energia -->
                    <div
                        class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-buchl-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <div class="p-8 relative z-10">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-green-300 to-green-950 rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-sparkles"
                                            class="text-white"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-buchl-blue mb-3 group-hover:text-buchl-green transition-colors"
                                    >
                                        Megújuló energia használata
                                    </h3>
                                    <p class="text-gray-600 mb-4">
                                        Telephelyeinken napenergiát és egyéb
                                        megújuló forrásokat alkalmazunk az
                                        energiafogyasztás csökkentésére.
                                    </p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Napelemes rendszerek</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >50% megújuló energia</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Energiahatékonyság</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >CO2 csökkentés</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Alsó dekoratív sáv -->
                        <div
                            class="h-1 bg-gradient-to-r from-buchl-green to-buchl-green/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        ></div>
                    </div>

                    <!-- Zöld logisztika -->
                    <div
                        class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-buchl-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <div class="p-8 relative z-10">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-950 rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-truck"
                                            class="text-white"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-buchl-blue mb-3 group-hover:text-buchl-green transition-colors"
                                    >
                                        Zöld logisztika
                                    </h3>
                                    <p class="text-gray-600 mb-4">
                                        Környezetbarát szállítási megoldások és
                                        optimalizált útvonaltervezés a
                                        környezeti terhelés minimalizálására.
                                    </p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Euro 6 járműpark</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Alternatív üzemanyagok</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Optimalizált útvonalak</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-buchl-green flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Helyi beszerzés</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-1 bg-gradient-to-r from-buchl-blue to-buchl-blue/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        ></div>
                    </div>

                    <!-- Vízgazdálkodás -->
                    <div
                        class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <div class="p-8 relative z-10">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-beaker"
                                            class="text-white"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-buchl-blue mb-3 group-hover:text-cyan-600 transition-colors"
                                    >
                                        Vízgazdálkodás
                                    </h3>
                                    <p class="text-gray-600 mb-4">
                                        Fenntartható vízhasználat és
                                        szennyvízkezelés a vízkészletek
                                        védelmében.
                                    </p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-cyan-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Esővíz gyűjtés</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-cyan-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Újrahasznosítás</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-cyan-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Víztakarékosság</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-cyan-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Vízbázis védelem</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        ></div>
                    </div>

                    <!-- Biodiverzitás védelem -->
                    <div
                        class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <div class="p-8 relative z-10">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-globe-americas"
                                            class="text-white"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-buchl-blue mb-3 group-hover:text-emerald-600 transition-colors"
                                    >
                                        Biodiverzitás védelem
                                    </h3>
                                    <p class="text-gray-600 mb-4">
                                        Természetvédelmi programok és ökológiai
                                        területek kialakítása telephelyeinken.
                                    </p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-emerald-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Ökoszisztéma védelem</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-emerald-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Méhbarát területek</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-emerald-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Őshonos növények</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-emerald-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Partnerségek</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        ></div>
                    </div>

                    <!-- Közösségi szerepvállalás -->
                    <div
                        class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <div class="p-8 relative z-10">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-user-group"
                                            class="text-white"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-buchl-blue mb-3 group-hover:text-purple-600 transition-colors"
                                    >
                                        Közösségi szerepvállalás
                                    </h3>
                                    <p class="text-gray-600 mb-4">
                                        Helyi közösségekkel való együttműködés
                                        és környezeti tudatosság növelése.
                                    </p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-purple-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Oktatási programok</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-purple-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Tisztasági akciók</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-purple-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Iskolai programok</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-purple-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Önkéntesség</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        ></div>
                    </div>

                    <!-- Kutatás és fejlesztés -->
                    <div
                        class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        ></div>
                        <div class="p-8 relative z-10">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg"
                                    >
                                        <UIcon
                                            name="i-heroicons-academic-cap"
                                            class="text-white"
                                            style="width: 32px; height: 32px"
                                        />
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="text-2xl font-bold text-buchl-blue mb-3 group-hover:text-amber-600 transition-colors"
                                    >
                                        Kutatás és fejlesztés
                                    </h3>
                                    <p class="text-gray-600 mb-4">
                                        Folyamatos innováció és technológiai
                                        fejlesztések a fenntarthatóság
                                        érdekében.
                                    </p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-amber-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Új technológiák</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-amber-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Egyetemi együttműködés</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-amber-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Pilot projektek</span
                                            >
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <UIcon
                                                name="i-heroicons-check-circle"
                                                class="text-amber-500 flex-shrink-0"
                                            />
                                            <span class="text-sm text-gray-700"
                                                >Tudásmegosztás</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="h-1 bg-gradient-to-r from-amber-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        ></div>
                    </div>
                </div>

                <!-- Központi CTA -->
                <div class="mt-16 text-center">
                    <UButton
                        label="Összes kezdeményezésünk"
                        to="/fenntarthatosag/kezdemenyezesek"
                        color="primary"
                        size="xl"
                        class="rounded-full px-8"
                        icon="i-heroicons-arrow-right"
                        :trailing="true"
                    />
                </div>
            </UContainer>
        </section>

        <!-- Környezeti eredmények -->
        <section class="py-16 bg-white">
            <UContainer>
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-bold text-buchl-blue mb-6">
                            Mérhető környezeti eredményeink
                        </h2>
                        <p class="text-lg text-gray-600 mb-6">
                            Büszkék vagyunk arra, hogy fenntarthatósági
                            törekvéseink mérhető eredményeket hoznak. Minden
                            évben növeljük környezeti teljesítményünket és
                            csökkentjük ökológiai lábnyomunkat.
                        </p>

                        <div class="grid sm:grid-cols-2 gap-6 mb-8">
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <div
                                    class="text-3xl font-bold text-buchl-green mb-2"
                                >
                                    -35%
                                </div>
                                <div class="text-gray-600">
                                    CO2 kibocsátás csökkentés
                                </div>
                            </div>
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <div
                                    class="text-3xl font-bold text-buchl-green mb-2"
                                >
                                    95%
                                </div>
                                <div class="text-gray-600">
                                    Újrahasznosítási arány
                                </div>
                            </div>
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <div
                                    class="text-3xl font-bold text-buchl-green mb-2"
                                >
                                    50%
                                </div>
                                <div class="text-gray-600">
                                    Megújuló energia arány
                                </div>
                            </div>
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <div
                                    class="text-3xl font-bold text-buchl-green mb-2"
                                >
                                    25%
                                </div>
                                <div class="text-gray-600">
                                    Vízfogyasztás csökkentés
                                </div>
                            </div>
                        </div>

                        <UButton
                            label="Fenntarthatósági jelentésünk"
                            to="/fenntarthatosag/jelentes"
                            color="primary"
                            size="lg"
                            class="rounded-none"
                            icon="i-heroicons-file-text"
                            :trailing="true"
                        />
                    </div>

                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                            alt="Fenntartható környezet"
                            class="rounded-lg shadow-lg w-full"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"
                        ></div>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- 2030-as Fenntarthatósági Céljaink - Új Design -->
        <section
            class="py-24 bg-gradient-to-b from-buchl-blue to-buchl-blue/90 text-white relative overflow-hidden"
        >
            <!-- Háttér dekoráció -->
            <div
                class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-80"
            ></div>
            <!-- Sötétítő réteg -->
            <div class="absolute inset-0 bg-black/20"></div>

            <UContainer class="relative z-10">
                <div class="text-center mb-16">
                    <h2
                        class="text-4xl lg:text-5xl font-bold mb-6 font-display"
                    >
                        2030-as fenntarthatósági céljaink
                    </h2>
                    <p
                        class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                    >
                        Ambiciózus célokat tűztünk ki magunk elé a következő
                        évtizedre, hogy még nagyobb hatást gyakoroljunk a
                        környezet védelmére.
                    </p>
                </div>

                <!-- Célok idővonalon -->
                <div class="max-w-6xl mx-auto">
                    <!-- Évszám kijelző -->
                    <div class="text-center mb-12">
                        <div class="inline-flex items-center gap-4">
                            <span class="text-2xl font-bold text-white/60"
                                >2024</span
                            >
                            <div
                                class="h-2 w-64 bg-white/20 rounded-full relative overflow-hidden"
                            >
                                <div
                                    class="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-buchl-green to-buchl-green/70 rounded-full animate-pulse"
                                ></div>
                            </div>
                            <span class="text-3xl font-bold text-buchl-green"
                                >2030</span
                            >
                        </div>
                    </div>

                    <!-- Célok kártyák -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Karbonsemlegesség -->
                        <div class="group relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"
                            ></div>
                            <div
                                class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-buchl-green/50 transition-all duration-300"
                            >
                                <div class="flex items-start gap-4 mb-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-20 h-20 bg-gradient-to-br from-buchl-green to-emerald-400 rounded-2xl flex items-center justify-center shadow-xl"
                                        >
                                            <UIcon
                                                name="i-heroicons-bolt"
                                                class="text-white"
                                                style="
                                                    width: 40px;
                                                    height: 40px;
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold mb-2">
                                            Karbonsemlegesség
                                        </h3>
                                        <p class="text-white/80">
                                            Teljes karbonsemlegességet érünk el
                                            minden telephelyünkön.
                                        </p>
                                    </div>
                                </div>

                                <!-- Progress indicator -->
                                <div class="space-y-2">
                                    <div class="flex justify-between text-sm">
                                        <span class="text-white/60"
                                            >Jelenlegi állapot</span
                                        >
                                        <span class="text-buchl-green font-bold"
                                            >35% csökkentés</span
                                        >
                                    </div>
                                    <div
                                        class="h-3 bg-white/20 rounded-full overflow-hidden"
                                    >
                                        <div
                                            class="h-full w-[35%] bg-gradient-to-r from-buchl-green to-emerald-400 rounded-full"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 100% újrahasznosítás -->
                        <div class="group relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-300"
                            ></div>
                            <div
                                class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-buchl-green/50 transition-all duration-300"
                            >
                                <div class="flex items-start gap-4 mb-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl"
                                        >
                                            <UIcon
                                                name="i-heroicons-arrow-path"
                                                class="text-white"
                                                style="
                                                    width: 40px;
                                                    height: 40px;
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold mb-2">
                                            100% újrahasznosítás
                                        </h3>
                                        <p class="text-white/80">
                                            Minden hulladékot újrahasznosítunk
                                            vagy energiává alakítunk.
                                        </p>
                                    </div>
                                </div>

                                <!-- Progress indicator -->
                                <div class="space-y-2">
                                    <div class="flex justify-between text-sm">
                                        <span class="text-white/60"
                                            >Jelenlegi állapot</span
                                        >
                                        <span class="text-cyan-400 font-bold"
                                            >95% újrahasznosítás</span
                                        >
                                    </div>
                                    <div
                                        class="h-3 bg-white/20 rounded-full overflow-hidden"
                                    >
                                        <div
                                            class="h-full w-[95%] bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 100% zöld energia -->
                        <div class="group relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"
                            ></div>
                            <div
                                class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-buchl-green/50 transition-all duration-300"
                            >
                                <div class="flex items-start gap-4 mb-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl"
                                        >
                                            <UIcon
                                                name="i-heroicons-sun"
                                                class="text-white"
                                                style="
                                                    width: 40px;
                                                    height: 40px;
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold mb-2">
                                            100% zöld energia
                                        </h3>
                                        <p class="text-white/80">
                                            Teljes energiaellátásunk megújuló
                                            forrásokból származik.
                                        </p>
                                    </div>
                                </div>

                                <!-- Progress indicator -->
                                <div class="space-y-2">
                                    <div class="flex justify-between text-sm">
                                        <span class="text-white/60"
                                            >Jelenlegi állapot</span
                                        >
                                        <span class="text-amber-400 font-bold"
                                            >50% megújuló</span
                                        >
                                    </div>
                                    <div
                                        class="h-3 bg-white/20 rounded-full overflow-hidden"
                                    >
                                        <div
                                            class="h-full w-[50%] bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Közösségi impact -->
                        <div class="group relative">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-300"
                            ></div>
                            <div
                                class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-buchl-green/50 transition-all duration-300"
                            >
                                <div class="flex items-start gap-4 mb-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl"
                                        >
                                            <UIcon
                                                name="i-heroicons-heart"
                                                class="text-white"
                                                style="
                                                    width: 40px;
                                                    height: 40px;
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold mb-2">
                                            Közösségi impact
                                        </h3>
                                        <p class="text-white/80">
                                            50.000 embert érünk el környezeti
                                            tudatossági programjainkkal.
                                        </p>
                                    </div>
                                </div>

                                <!-- Progress indicator -->
                                <div class="space-y-2">
                                    <div class="flex justify-between text-sm">
                                        <span class="text-white/60"
                                            >Elért személyek</span
                                        >
                                        <span class="text-purple-400 font-bold"
                                            >12.500 fő</span
                                        >
                                    </div>
                                    <div
                                        class="h-3 bg-white/20 rounded-full overflow-hidden"
                                    >
                                        <div
                                            class="h-full w-[25%] bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cselekvésre ösztönzés -->
                    <div class="mt-16 text-center">
                        <p class="text-xl text-white/80 mb-8">
                            Együtt építjük a fenntartható jövőt. Csatlakozzon
                            hozzánk!
                        </p>
                        <div
                            class="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <UButton
                                label="Fenntarthatósági jelentés"
                                to="/fenntarthatosag/jelentes"
                                size="xl"
                                class="rounded-full bg-buchl-green text-buchl-blue hover:bg-buchl-green/90 px-8"
                                icon="i-heroicons-file-text"
                                :trailing="true"
                            />
                            <UButton
                                label="Partnerség"
                                to="/kapcsolat"
                                size="xl"
                                variant="outline"
                                class="rounded-full border-2 border-white text-white hover:bg-white/10 px-8"
                                icon="i-heroicons-users"
                                :trailing="true"
                            />
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Tanúsítványok és elismerések -->
        <section class="py-16 bg-white">
            <UContainer>
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-buchl-blue mb-4">
                        Elismeréseink és tanúsítványaink
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fenntarthatósági erőfeszítéseinket független szervezetek
                        is elismerik.
                    </p>
                </div>

                <!-- Tanúsítványok horizontális elrendezésben -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                    <!-- ISO 14001 -->
                    <div
                        class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200"
                    >
                        <div class="flex-shrink-0">
                            <UIcon
                                name="i-heroicons-shield-check"
                                class="text-buchl-green"
                                style="width: 48px; height: 48px"
                            />
                        </div>
                        <div>
                            <h3 class="font-semibold text-buchl-blue text-lg">
                                ISO 14001:2015
                            </h3>
                            <p class="text-gray-600">
                                Környezetirányítási rendszer nemzetközi
                                szabványa
                            </p>
                        </div>
                    </div>

                    <!-- EMAS -->
                    <div
                        class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200"
                    >
                        <div class="flex-shrink-0">
                            <UIcon
                                name="i-heroicons-star"
                                class="text-buchl-green"
                                style="width: 48px; height: 48px"
                            />
                        </div>
                        <div>
                            <h3 class="font-semibold text-buchl-blue text-lg">
                                EMAS III
                            </h3>
                            <p class="text-gray-600">
                                Európai Környezetirányítási és Hitelesítési
                                Rendszer
                            </p>
                        </div>
                    </div>

                    <!-- Carbon Trust -->
                    <div
                        class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200"
                    >
                        <div class="flex-shrink-0">
                            <UIcon
                                name="i-heroicons-leaf"
                                class="text-buchl-green"
                                style="width: 48px; height: 48px"
                            />
                        </div>
                        <div>
                            <h3 class="font-semibold text-buchl-blue text-lg">
                                Carbon Trust
                            </h3>
                            <p class="text-gray-600">
                                Karbonlábnyom csökkentési tanúsítvány
                            </p>
                        </div>
                    </div>

                    <!-- Green Award -->
                    <div
                        class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200"
                    >
                        <div class="flex-shrink-0">
                            <UIcon
                                name="i-heroicons-trophy"
                                class="text-buchl-green"
                                style="width: 48px; height: 48px"
                            />
                        </div>
                        <div>
                            <h3 class="font-semibold text-buchl-blue text-lg">
                                Green Business Award
                            </h3>
                            <p class="text-gray-600">
                                Fenntartható üzleti gyakorlat elismerése
                            </p>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-buchl-green text-buchl-blue">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6 font-display">
                    Csatlakozzon fenntarthatósági utunkhoz!
                </h2>
                <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
                    Együtt tehetjük még zöldebbé a jövőt. Tudjon meg többet
                    fenntarthatósági kezdeményezéseinkről és arról, hogyan lehet
                    része a változásnak.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        to="/fenntarthatosag"
                        size="lg"
                        icon="i-heroicons-leaf"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        Fenntarthatósági jelentés
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
            <UContainer>
                <div class="text-center mb-8">
                    <h3 class="text-xl font-semibold text-buchl-blue mb-4">
                        Kapcsolódó oldaltervek
                    </h3>
                </div>

                <div class="grid md:grid-cols-3 gap-6">
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
            </UContainer>
        </section>
    </div>
</template>

<script setup lang="ts">
// SEO beállítások
useSeoMeta({
    title: "Fenntarthatóság Oldal Terv - BÜCHL Hungaria",
    description:
        "A BÜCHL Hungaria fenntarthatósági kezdeményezések oldal tervei és megvalósítása. Környezettudatos megoldások és zöld technológiák bemutatkozása.",
    ogTitle: "Fenntarthatóság Oldal Terv - BÜCHL Hungaria",
    ogDescription:
        "Fenntarthatósági oldal tervei: környezetvédelmi programok, megújuló energia, körforgásos gazdaság, és közösségi szerepvállalás.",
    ogImage:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=630&fit=crop",
    twitterCard: "summary_large_image",
});
</script>
