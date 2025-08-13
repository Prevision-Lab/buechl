<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            title="Logisztika"
            subtitle="ELOG SYSTEM® – Digitális hulladéklogisztikai megoldások"
            image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=800&fit=crop"
            bg-color="blue"
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
                            A BÜCHL HUNGARIA Kft. folyamatos fejlesztésekkel optimalizálja az üzemen belüli hulladéklogisztikát. 
                            Az ELOG SYSTEM® rendszer 4.0 verziója komplex, digitális megoldást kínál, melyet innovatív 
                            gyűjtőeszközök és a gyártósor mellett biztonságos gyűjtésre tervezett Q-Frame Shuttle egészít ki.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ELOG SYSTEM komponensek -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    ELOG SYSTEM® komponensek
                </h2>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <!-- ELOG SYSTEM 4.0 -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cpu-chip" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">ELOG SYSTEM® 4.0</h3>
                        <p class="text-gray-700 text-center">
                            Komplex, digitális megoldás az üzemen belüli hulladéklogisztika optimalizálására
                        </p>
                    </div>

                    <!-- Q-Frame Shuttle -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-truck" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">Q-Frame Shuttle</h3>
                        <p class="text-gray-700 text-center">
                            A gyártósor mellett biztonságos gyűjtésre tervezett innovatív gyűjtőeszköz
                        </p>
                    </div>

                    <!-- GYLOG 1.0 -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-document-check" class="text-purple-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">GYLOG 1.0 vezérlés</h3>
                        <p class="text-gray-700 text-center">
                            Saját fejlesztésű papírmentes, igényalapú elszállítási rendszer
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Digitális megoldások -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
                            ELOGplan és CleverWaste®
                        </h2>
                        <div class="space-y-6">
                            <div class="border-l-4 border-buchl-blue pl-6">
                                <h3 class="text-xl font-bold text-buchl-blue mb-2">ELOGplan (2019-től)</h3>
                                <p class="text-gray-700">
                                    Az ELOG SYSTEM® rendszer külső partnerek számára is elérhető változata, 
                                    mely lehetővé teszi a szélesebb körű alkalmazást.
                                </p>
                            </div>
                            
                            <div class="border-l-4 border-buchl-green pl-6">
                                <h3 class="text-xl font-bold text-buchl-green mb-2">CleverWaste®</h3>
                                <p class="text-gray-700">
                                    Bevezetésre került rendszer, mely a teljes szállítási és hulladékkezelési folyamatot 
                                    digitalizálja – a konténerkihelyezéstől a mérlegelésen át az elszámolásig és dokumentációig.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                            alt="Digitális logisztikai megoldások"
                            class="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Szolgáltatások -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    Rugalmas szolgáltatások szakszemélyzet biztosításával
                </h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <p class="text-lg text-gray-700 text-center mb-8">
                        Az innovatív technológiai megoldások mellett rugalmas szolgáltatásokat nyújtunk szakszemélyzet 
                        biztosításával is. A targoncavezetőtől a hulladékszakértőig teljes csapat dolgozik a szelektív gyűjtés 
                        hatékonyságán, az adatrögzítésen és a költségek optimalizálásán.
                    </p>
                    <p class="text-lg text-gray-700 text-center">
                        A BÜCHL szakértelme a hulladéklogisztikai folyamatok tervezésében és optimalizálásában is rendelkezésre áll.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <!-- Targoncavezetők -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-truck" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">Targoncavezetők</h3>
                        <p class="text-gray-600 text-sm">Szakképzett operátorok az anyagmozgatáshoz</p>
                    </div>

                    <!-- Hulladékszakértők -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-academic-cap" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">Hulladékszakértők</h3>
                        <p class="text-gray-600 text-sm">Szakértő tanácsadás és folyamatoptimalizálás</p>
                    </div>

                    <!-- Szelektív gyűjtés -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-funnel" class="text-orange-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">Szelektív gyűjtés</h3>
                        <p class="text-gray-600 text-sm">Hatékony válogatási és gyűjtési rendszerek</p>
                    </div>

                    <!-- Adatrögzítés -->
                    <div class="bg-white rounded-lg shadow-md p-6 text-center">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-chart-bar" class="text-purple-600 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-lg mb-2">Adatrögzítés</h3>
                        <p class="text-gray-600 text-sm">Precíz dokumentáció és nyomonkövetés</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Előnyök -->
        <section class="py-16 bg-buchl-blue text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                        Az ELOG SYSTEM® előnyei
                    </h2>
                </div>
                
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div class="text-center">
                        <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-document-check" class="text-white text-3xl" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">Papírmentes folyamatok</h3>
                        <p class="text-white/80">Digitális dokumentáció és igényalapú elszállítás</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-chart-pie" class="text-white text-3xl" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">Költségoptimalizálás</h3>
                        <p class="text-white/80">Hatékony erőforrás-felhasználás és költségmegtakarítás</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-clock" class="text-white text-3xl" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">Valós idejű nyomonkövetés</h3>
                        <p class="text-white/80">Teljes folyamat átláthatósága és kontrollja</p>
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
                    Tapasztalt szakembereink segítségével találja meg a legmegfelelőbb digitális hulladéklogisztikai megoldást vállalata számára.
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
// Logisztika (ELOG SYSTEM®) oldal
</script>
