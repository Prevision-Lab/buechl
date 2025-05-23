<template>
    <div>
        <!-- Hero szekció -->
        <BuchlHero
            title="Vállalatunk"
            subtitle="A BÜCHL HUNGARIA Kft. több mint 20 éve áll partnerei szolgálatában"
            image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&h=800&fit=crop"
            bg-color="blue"
            :primary-cta="{
                label: 'Küldetésünk',
                to: '/kuldetes',
            }"
            :secondary-cta="{
                label: 'Karrier',
                to: '/karrier',
            }"
        />

        <!-- Bemutatkozás szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2
                            class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6"
                        >
                            Rólunk
                        </h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-700">
                                A BÜCHL HUNGARIA Kft. a németországi székhelyű
                                BÜCHL cégcsoport tagjaként, több mint 20 éve
                                nyújt professzionális hulladékgazdálkodási
                                szolgáltatásokat Magyarországon.
                            </p>
                            <p class="text-lg text-gray-700">
                                Tevékenységünk fókuszában az ipari ügyfelek
                                magas színvonalú kiszolgálása áll, a
                                hulladékgyűjtés és -szállítástól kezdve, a
                                hulladékkezelésen és újrahasznosításon át,
                                egészen a vállalaton belüli hulladékgazdálkodási
                                rendszerek teljes körű üzemeltetéséig.
                            </p>
                            <p class="text-lg text-gray-700">
                                Filozófiánk – „Egy ötlettel mindig előbbre" –
                                kifejezi innovatív szemléletünket és
                                elkötelezettségünket a folyamatos fejlesztés
                                mellett, hogy partnereink számára mindig a
                                leghatékonyabb megoldásokat kínálhassuk.
                            </p>
                        </div>
                        <div class="mt-8 flex flex-wrap gap-4">
                            <UButton
                                to="/fenntarthatosag"
                                color="primary"
                                class="rounded-none"
                                icon="i-heroicons-arrow-right"
                                :trailing="true"
                            >
                                Fenntarthatóság
                            </UButton>
                            <UButton
                                to="/szolgaltatasok"
                                color="primary"
                                variant="soft"
                                class="rounded-none"
                                icon="i-heroicons-arrow-right"
                                :trailing="true"
                            >
                                Szolgáltatásaink
                            </UButton>
                        </div>
                    </div>
                    <div class="relative rounded-lg overflow-hidden h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                            alt="BÜCHL Hungaria Kft. irodaépület"
                            class="absolute inset-0 w-full h-full object-cover"
                        >
                        <div
                            class="absolute bottom-0 left-0 right-0 bg-buchl-blue/80 p-4 text-white"
                        >
                            <p class="font-semibold">
                                Központi telephelyünk Győrben
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cégtörténet szekció -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center"
                >
                    Történetünk
                </h2>

                <!-- Egyszerű kártyás elrendezés -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Mérföldkő 1 -->
                    <UCard
                        :ui="{
                            root: 'shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition-all duration-300',
                            header: 'p-0 sm:p-0',
                            body: 'p-6',
                        }"
                    >
                        <template #header>
                            <div
                                class="bg-buchl-blue text-white text-center py-5"
                            >
                                <span class="text-3xl font-bold">1957</span>
                                <h3 class="font-semibold mt-1">A kezdetek</h3>
                            </div>
                        </template>
                        <p class="text-gray-700">
                            A BÜCHL cégcsoport alapítása Németországban, mely
                            kezdetben helyi hulladékszállítással foglalkozott. A
                            vállalat az évek során a környezetvédelmi
                            szolgáltatások komplex kínálatával növekedett.
                        </p>
                    </UCard>

                    <!-- Mérföldkő 2 -->
                    <UCard
                        :ui="{
                            root: 'shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition-all duration-300',
                            header: 'p-0 sm:p-0',
                            body: 'p-6',
                        }"
                    >
                        <template #header>
                            <div
                                class="bg-buchl-blue text-white text-center py-5"
                            >
                                <span class="text-3xl font-bold">2000</span>
                                <h3 class="font-semibold mt-1">
                                    BÜCHL Hungaria Kft. megalapítása
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-700">
                            A cégcsoport magyarországi leányvállalatának
                            létrehozása, kifejezetten az ipari
                            hulladékgazdálkodási igények kielégítésére. A győri
                            telephely megvásárlása és kialakítása.
                        </p>
                    </UCard>

                    <!-- Mérföldkő 3 -->
                    <UCard
                        :ui="{
                            root: 'shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition-all duration-300',
                            header: 'p-0 sm:p-0',
                            body: 'p-6',
                        }"
                    >
                        <template #header>
                            <div
                                class="bg-buchl-blue text-white text-center py-5"
                            >
                                <span class="text-3xl font-bold">2010</span>
                                <h3 class="font-semibold mt-1">
                                    Nagy kapacitású hulladékkezelő üzem
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-700">
                            Jelentős bővítések és beruházások a győri
                            telephelyen. Modern hulladékkezelő és újrahasznosító
                            berendezések üzembe helyezése, melyek tovább
                            növelték a feldolgozási kapacitást és az
                            újrahasznosítási arányt.
                        </p>
                    </UCard>

                    <!-- Mérföldkő 4 -->
                    <UCard
                        :ui="{
                            root: 'shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition-all duration-300',
                            header: 'p-0 sm:p-0',
                            body: 'p-6',
                        }"
                    >
                        <template #header>
                            <div
                                class="bg-buchl-blue text-white text-center py-5"
                            >
                                <span class="text-3xl font-bold">2017</span>
                                <h3 class="font-semibold mt-1">
                                    ELOG SYSTEM® bevezetése
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-700">
                            Az innovatív belső üzemi logisztikai rendszer, az
                            ELOG SYSTEM® bevezetése, amely teljesen
                            digitalizált, papírmentes hulladékgazdálkodást tesz
                            lehetővé az ipari ügyfelek telephelyein.
                        </p>
                    </UCard>

                    <!-- Mérföldkő 5 -->
                    <UCard
                        :ui="{
                            root: 'shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition-all duration-300',
                            header: 'p-0 sm:p-0',
                            body: 'p-6',
                        }"
                    >
                        <template #header>
                            <div
                                class="bg-buchl-blue text-white text-center py-5"
                            >
                                <span class="text-3xl font-bold">2022</span>
                                <h3 class="font-semibold mt-1">
                                    Körösladányi telephely
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-700">
                            A növekvő piaci igények kielégítésére a keleti
                            országrészben is megkezdtük szolgáltatásaink
                            nyújtását a körösladányi telephelyünkről, közelebb
                            kerülve az ott működő ipari partnereinkhez.
                        </p>
                    </UCard>

                    <!-- Mérföldkő 6 (Jövő) -->
                    <UCard
                        :ui="{
                            root: 'shadow-sm ring-1 ring-neutral-200 hover:shadow-md transition-all duration-300',
                            header: 'p-0 sm:p-0',
                            body: 'p-6',
                        }"
                    >
                        <template #header>
                            <div
                                class="bg-buchl-green text-buchl-blue text-center py-5"
                            >
                                <span class="text-3xl font-bold">Jövőkép</span>
                                <h3 class="font-semibold mt-1">
                                    Folyamatos fejlesztés és innováció
                                </h3>
                            </div>
                        </template>
                        <p class="text-gray-700">
                            Célunk, hogy az iparág vezető szolgáltatójaként, a
                            legmodernebb technológiák alkalmazásával tovább
                            bővítsük kapacitásainkat és növeljük az
                            újrahasznosítási arányunkat, hozzájárulva a
                            körforgásos gazdaság megvalósításához.
                        </p>
                    </UCard>
                </div>
            </div>
        </section>

        <!-- Vezetőség szekció -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-12 text-center"
                >
                    Vezetőségünk
                </h2>

                <div class="grid gap-8 md:grid-cols-3 items-start">
                    <!-- Ügyvezető -->
                    <UCard class="text-center">
                        <div class="mb-6">
                            <div
                                class="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-buchl-blue"
                            >
                                <img
                                    src="https://i.pravatar.cc/300?img=60"
                                    alt="Gyökeres Sándor"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-xl font-bold text-buchl-blue">
                                Gyökeres Sándor
                            </h3>
                            <p class="text-gray-600">Ügyvezető Igazgató</p>
                        </div>
                        <p class="text-gray-700 mb-6">
                            Több mint 20 éve vezeti a BÜCHL Hungaria Kft.-t,
                            felelős a vállalat stratégiai irányításáért és
                            üzleti fejlesztéséért.
                        </p>
                        <div class="flex items-center justify-center gap-3">
                            <UButton
                                icon="i-lucide-linkedin"
                                variant="soft"
                                color="primary"
                                size="sm"
                                class="rounded-none"
                            />
                            <UButton
                                icon="i-heroicons-envelope"
                                variant="soft"
                                size="sm"
                                class="rounded-none"
                            />
                        </div>
                    </UCard>

                    <!-- Műszaki vezető -->
                    <UCard class="text-center">
                        <div class="mb-6">
                            <div
                                class="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-buchl-blue"
                            >
                                <img
                                    src="https://i.pravatar.cc/300?img=4"
                                    alt="Nagy Péter"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-xl font-bold text-buchl-blue">
                                Nagy Péter
                            </h3>
                            <p class="text-gray-600">Műszaki vezető</p>
                        </div>
                        <p class="text-gray-700 mb-6">
                            15 éves szakmai tapasztalattal rendelkezik a
                            hulladékkezelési technológiák területén, felelős a
                            telephelyek és berendezések üzemeltetéséért.
                        </p>
                        <div class="flex items-center justify-center gap-3">
                            <UButton
                                icon="i-lucide-linkedin"
                                variant="soft"
                                color="primary"
                                size="sm"
                                class="rounded-none"
                            />
                            <UButton
                                icon="i-heroicons-envelope"
                                variant="soft"
                                size="sm"
                                class="rounded-none"
                            />
                        </div>
                    </UCard>

                    <!-- Kereskedelmi vezető -->
                    <UCard class="text-center">
                        <div class="mb-6">
                            <div
                                class="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-buchl-blue"
                            >
                                <img
                                    src="https://i.pravatar.cc/300?img=32"
                                    alt="Kovács Andrea"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <h3 class="text-xl font-bold text-buchl-blue">
                                Kovács Andrea
                            </h3>
                            <p class="text-gray-600">Kereskedelmi vezető</p>
                        </div>
                        <p class="text-gray-700 mb-6">
                            Több mint 10 éves tapasztalattal rendelkezik az
                            üzletfejlesztés területén, felelős az
                            ügyfélkapcsolatok menedzseléséért és az
                            értékesítésért.
                        </p>
                        <div class="flex items-center justify-center gap-3">
                            <UButton
                                icon="i-lucide-linkedin"
                                variant="soft"
                                color="primary"
                                size="sm"
                                class="rounded-none"
                            />
                            <UButton
                                icon="i-heroicons-envelope"
                                variant="soft"
                                size="sm"
                                class="rounded-none"
                            />
                        </div>
                    </UCard>
                </div>
            </div>
        </section>

        <!-- Cégcsoport szekció -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2
                            class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6"
                        >
                            BÜCHL Cégcsoport
                        </h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-700">
                                A BÜCHL HUNGARIA Kft. a németországi családi
                                tulajdonban lévő BÜCHL cégcsoport tagja, amely
                                közel 70 éves tapasztalattal rendelkezik a
                                hulladékgazdálkodás területén.
                            </p>
                            <p class="text-lg text-gray-700">
                                A cégcsoport teljes szolgáltatási portfóliójára
                                jellemző a magas színvonal, az innovatív
                                szemlélet és a fenntarthatóság iránti
                                elkötelezettség.
                            </p>
                            <p class="text-lg text-gray-700">
                                A németországi és magyarországi telephelyeken
                                összesen több mint 500 munkatárs dolgozik azon,
                                hogy ügyfeleink számára a legjobb
                                hulladékgazdálkodási megoldásokat biztosítsuk.
                            </p>
                        </div>
                        <div class="mt-6">
                            <a
                                href="https://www.buechl.de"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center text-buchl-blue font-semibold hover:underline"
                            >
                                BÜCHL nemzetközi weboldal
                                <UIcon
                                    name="i-heroicons-arrow-up-right"
                                    class="ml-1 w-5 h-5"
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h3
                                class="text-xl font-semibold text-buchl-blue mb-4"
                            >
                                Cégcsoport tagjai
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-building"
                                        class="w-5 h-5 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <div>
                                        <p class="font-semibold">
                                            BÜCHL GmbH & Co. KG
                                        </p>
                                        <p class="text-gray-700 text-sm">
                                            Németország, Vohburg
                                        </p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-building"
                                        class="w-5 h-5 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <div>
                                        <p class="font-semibold">
                                            BÜCHL HUNGARIA Kft.
                                        </p>
                                        <p class="text-gray-700 text-sm">
                                            Magyarország, Győr
                                        </p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-building"
                                        class="w-5 h-5 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <div>
                                        <p class="font-semibold">IBE-R GmbH</p>
                                        <p class="text-gray-700 text-sm">
                                            Németország, Ingolstadt
                                        </p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-3">
                                    <UIcon
                                        name="i-heroicons-building"
                                        class="w-5 h-5 text-buchl-blue shrink-0 mt-0.5"
                                    />
                                    <div>
                                        <p class="font-semibold">IBE-W GmbH</p>
                                        <p class="text-gray-700 text-sm">
                                            Németország, Wolfsburg
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div class="mt-6">
                                <div class="aspect-w-16 aspect-h-9">
                                    <img
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop"
                                        alt="BÜCHL Cégcsoport központi épülete"
                                        class="rounded-lg object-cover w-full h-full"
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA szekció -->
        <section class="py-16 bg-buchl-green text-buchl-blue">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                    Csatlakozzon csapatunkhoz!
                </h2>
                <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
                    A BÜCHL HUNGARIA Kft. folyamatosan keresi az elkötelezett
                    szakembereket, akik szeretnének egy dinamikusan fejlődő,
                    innovatív vállalatnál dolgozni.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                        to="/karrier"
                        size="lg"
                        icon="i-heroicons-user-plus"
                        :trailing="true"
                        class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
                    >
                        Nyitott pozícióink
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

<script setup lang="ts"></script>
