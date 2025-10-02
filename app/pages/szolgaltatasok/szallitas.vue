<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            title="Hulladékgyűjtés és -szállítás"
            subtitle="Professzionális hulladékszállítás – rugalmasan és megbízhatóan"
            image="/media/images/hulladekgyujtes-szallitas.jpg"
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
                            A BÜCHL HUNGARIA több mint 40 járműből álló flottával szolgálja ki ipari partnereit – legyen szó 
                            konténeres, folyékony vagy veszélyes hulladék szállításáról. Sofőrjeink jól képzettek, ADR-
                            tanúsítvánnyal rendelkeznek, és ismerik ügyfeleink telephelyi sajátosságait. Igény esetén részletes 
                            dokumentációt biztosítunk az elszállított hulladékok típusáról és mennyiségéről.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Konténerek és tárolók -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center">
                    Konténerek és tárolók minden ipari igényre
                </h2>
                
                <div class="max-w-4xl mx-auto mb-12">
                    <p class="text-lg text-gray-700 text-center">
                        A BÜCHL HUNGARIA az ipari hulladékok kezeléséhez széles konténerválasztékot kínál – a kis tárolóktól 
                        a nagyméretű, tömörítős rendszerekig.
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-3">
                    <!-- Nagy mennyiség -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cube" class="text-buchl-blue text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">Nagy mennyiség esetén</h3>
                        <p class="text-gray-700">
                            Préskonténerek, csigás és görgős tömörítők, borítószerkezetek állnak rendelkezésre.
                        </p>
                    </div>

                    <!-- Folyékony és veszélyes hulladékok -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-beaker" class="text-red-500 text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">Folyékony és veszélyes hulladékok</h3>
                        <p class="text-gray-700">
                            IBC, MGB 1100 típusú hordók, speciális olajleeresztős tárolók és mobil tartályok használhatók.
                        </p>
                    </div>

                    <!-- Üzemen belüli mozgatás -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="bg-buchl-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UIcon name="i-heroicons-cpu-chip" class="text-buchl-green text-2xl" />
                        </div>
                        <h3 class="font-bold text-buchl-blue text-xl mb-4 text-center">Üzemen belüli mozgatás</h3>
                        <p class="text-gray-700">
                            Az ELOG SYSTEM® multifunkciós konténerei nyújtanak hatékony megoldást.
                        </p>
                    </div>
                </div>

                <div class="mt-12 bg-buchl-blue/5 p-8 rounded-lg text-center">
                    <h3 class="text-2xl font-bold text-buchl-blue mb-4">Szakértő tanácsadás</h3>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        Szakértő csapatunk segít a megfelelő tároló és tömörítő rendszer kiválasztásában – a hulladékkezelés 
                        optimalizálása és a szállítási költségek csökkentése érdekében.
                    </p>
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
                    Tapasztalt szakembereink segítségével találja meg a legmegfelelőbb hulladékszállítási megoldást vállalata számára.
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
// Hulladékgyűjtés és -szállítás oldal
</script>
