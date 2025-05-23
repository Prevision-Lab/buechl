<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Hulladékkezelés"
      subtitle="Korszerű technológiákkal, környezettudatos megoldásokkal kezeljük a hulladékot a fenntartható jövőért."
      :image="`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop`"
      image-alt="Hulladékkezelő üzem"
      bg-color="blue"
      :skewed="true"
      :primary-cta="{
        label: 'Ajánlatkérés',
        to: '/kapcsolat',
        icon: 'i-heroicons-envelope'
      }"
      :secondary-cta="{
        label: 'Szolgáltatások',
        to: '/szolgaltatasok',
        icon: 'i-heroicons-cog-6-tooth'
      }"
    />

    <!-- Bevezetés szekció -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-buchl-blue mb-6">
            Professzionális hulladékkezelési megoldások
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            A BÜCHL Hungaria több mint 30 éves tapasztalattal rendelkezik a hulladékkezelés területén. 
            Korszerű technológiáinkkal és környezetbarát eljárásainkkal biztosítjuk partnereink 
            számára a leghatékonyabb hulladékkezelési szolgáltatásokat.
          </p>
          
          <div class="grid sm:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-shield-check" class="text-white" style="width: 64px; height: 64px;" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Biztonság</h3>
              <p class="text-gray-600">Engedéllyel és szakértelemmel végezzük a hulladékkezelést</p>
            </div>
            
            <div class="text-center">
              <div class="w-24 h-24 bg-buchl-green rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-arrow-path" class="text-white" style="width: 64px; height: 64px;" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Fenntarthatóság</h3>
              <p class="text-gray-600">95% újrahasznosítási arány környezetbarát technológiákkal</p>
            </div>
            
            <div class="text-center">
              <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-cog-6-tooth" class="text-white" style="width: 64px; height: 64px;" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Innováció</h3>
              <p class="text-gray-600">Legmodernebb berendezések és digitális megoldások</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Főbb szolgáltatások -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-buchl-blue mb-4">
            Hulladékkezelési szolgáltatásaink
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Átfogó hulladékkezelési megoldásokat kínálunk az ipari és kereskedelmi partnerek számára, 
            a gyűjtéstől a végső feldolgozásig.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BuchlServiceCard
            title="Hulladékfeldolgozás és kezelés"
            description="Professzionális hulladékfeldolgozás korszerű technológiákkal és környezetbarát eljárásokkal."
            icon="i-heroicons-cog-6-tooth"
            :features="[
              'Szelektív hulladékfeldolgozás',
              'Automatizált válogatási rendszerek',
              'Minőségi másodnyersanyag előállítás',
              'Környezetbarát technológiák'
            ]"
            :cta="{
              label: 'Részletek',
              to: '/oldaltervek/szolgaltatasok',
              icon: 'i-heroicons-arrow-right'
            }"
          />

          <BuchlServiceCard
            title="Veszélyes hulladék kezelés"
            description="Speciális engedélyekkel rendelkezünk veszélyes hulladékok biztonságos kezelésére és ártalmatlanítására."
            icon="i-heroicons-shield-exclamation"
            :features="[
              'Engedéllyel rendelkező kezelés',
              'Biztonságos szállítás és tárolás',
              'Szakszerű ártalmatlanítás',
              'Teljes körű dokumentáció'
            ]"
            :cta="{
              label: 'Kapcsolat',
              to: '/kapcsolat',
              icon: 'i-heroicons-phone'
            }"
          />

          <BuchlServiceCard
            title="Folyékony hulladék kezelés"
            description="Folyékony hulladékok szakszerű kezelése és tisztítása korszerű berendezésekkel."
            icon="i-heroicons-beaker"
            :features="[
              'Olajok és zsírok kezelése',
              'Ipari folyékony hulladékok',
              'Szennyvíztisztítás',
              'Környezeti regeneráció'
            ]"
            :cta="{
              label: 'Tudjon meg többet',
              to: '/oldaltervek/szolgaltatasok',
              icon: 'i-heroicons-information-circle'
            }"
          />

          <BuchlServiceCard
            title="Újrahasznosítási technológiák"
            description="Innovatív újrahasznosítási eljárásokkal értékes másodnyersanyagokat állítunk elő."
            icon="i-heroicons-arrow-path"
            :features="[
              'Papír és karton újrahasznosítás',
              'Műanyag feldolgozás',
              'Fém hulladék kezelés',
              'Textil újrahasznosítás'
            ]"
            :cta="{
              label: 'Technológiáink',
              to: '/oldaltervek/szolgaltatasok',
              icon: 'i-heroicons-cpu-chip'
            }"
          />

          <BuchlServiceCard
            title="Hulladékkezelő létesítmények"
            description="Modern hulladékkezelő létesítményeink Győrben és Körösladányban várják partnereinket."
            icon="i-heroicons-building-office-2"
            :features="[
              'Győr telephelyi szolgáltatások',
              'Körösladány létesítmény',
              'Korszerű berendezések',
              'Szakképzett személyzet'
            ]"
            :cta="{
              label: 'Telephelyek',
              to: '/kapcsolat',
              icon: 'i-heroicons-map-pin'
            }"
          />

          <BuchlServiceCard
            title="Környezeti tanácsadás"
            description="Szakértő csapatunk segít a legmegfelelőbb hulladékkezelési stratégia kialakításában."
            icon="i-heroicons-light-bulb"
            :features="[
              'Hulladékkezelési audit',
              'Költségoptimalizálás',
              'Jogi megfelelőség',
              'Fenntarthatósági stratégia'
            ]"
            :cta="{
              label: 'Konzultáció',
              to: '/kapcsolat',
              icon: 'i-heroicons-chat-bubble-left-right'
            }"
          />
        </div>
      </UContainer>
    </section>

    <!-- Szakértelem és tapasztalat -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-buchl-blue mb-6">
              Szakértelem és tapasztalat
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Több mint 30 éves tapasztalattal rendelkezünk a hulladékkezelés területén. 
              Innovatív megoldásainkkal és korszerű technológiáinkkal biztosítjuk partnereink 
              számára a leghatékonyabb és környezetbarát hulladékkezelési szolgáltatásokat.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-6 mb-8">
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-blue mb-2">30+</div>
                <div class="text-gray-600">Év tapasztalat</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-blue mb-2">95%</div>
                <div class="text-gray-600">Újrahasznosítási arány</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-blue mb-2">1000+</div>
                <div class="text-gray-600">Elégedett ügyfél</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-blue mb-2">24/7</div>
                <div class="text-gray-600">Elérhetőség</div>
              </div>
            </div>

            <UButton
              label="Tudjon meg többet rólunk"
              to="/oldaltervek/rolunk"
              color="primary"
              size="lg"
              class="rounded-none"
              icon="i-heroicons-arrow-right"
              :trailing="true"
            />
          </div>
          
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
              alt="Hulladékkezelő berendezések"
              class="rounded-lg shadow-lg w-full"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"/>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Folyamatábra -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-buchl-blue mb-4">
            Hulladékkezelési folyamatunk
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Átlátható és hatékony folyamattal biztosítjuk a hulladék teljes életciklusának kezelését.
          </p>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-truck" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">1. Gyűjtés</h3>
            <p class="text-gray-600">
              Szakszerű hulladékgyűjtés és szállítás telephelyéről létesítményeinkbe.
            </p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-funnel" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">2. Válogatás</h3>
            <p class="text-gray-600">
              Automatizált és manuális válogatás a hulladéktípusok szerinti szétválasztáshoz.
            </p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-cog-6-tooth" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">3. Feldolgozás</h3>
            <p class="text-gray-600">
              Modern technológiákkal történő feldolgozás és újrahasznosítás.
            </p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-green rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-arrow-path" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">4. Újrahasznosítás</h3>
            <p class="text-gray-600">
              Értékes másodnyersanyagok előállítása a körforgásos gazdaság érdekében.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Referenciák és tanúsítványok -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-buchl-blue mb-4">
            Referenciák és tanúsítványok
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Büszkék vagyunk szakmai elismeréseinkre és arra, hogy megbízható partnerek lehetünk ügyfeleink számára.
          </p>
        </div>

        <!-- Tanúsítványok horizontális elrendezésben -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- ISO 14001 -->
          <div class="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-shield-check" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">ISO 14001</h3>
              <p class="text-gray-600">Környezetirányítási rendszer tanúsítvány</p>
            </div>
          </div>

          <!-- ISO 9001 -->
          <div class="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-academic-cap" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">ISO 9001</h3>
              <p class="text-gray-600">Minőségirányítási rendszer tanúsítvány</p>
            </div>
          </div>

          <!-- Hulladékkezelési engedélyek -->
          <div class="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-document-check" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">Hulladékkezelési engedélyek</h3>
              <p class="text-gray-600">Minden hulladéktípusra vonatkozó engedélyek</p>
            </div>
          </div>

          <!-- BÜCHL Csoport -->
          <div class="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-star" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">BÜCHL Csoport</h3>
              <p class="text-gray-600">70 év nemzetközi tapasztalat</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA szekció -->
    <section class="py-16 bg-buchl-green text-buchl-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6 font-display">
          Kérjen egyedi ajánlatot!
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          Szakértő csapatunk személyre szabott megoldást kínál vállalkozása számára, függetlenül annak méretétől vagy az iparágtól.
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
      <UContainer>
        <div class="text-center mb-8">
          <h3 class="text-xl font-semibold text-buchl-blue mb-4">Kapcsolódó oldaltervek</h3>
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
                <p class="text-xs opacity-80">Technológiai fejlesztések</p>
              </div>
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right" />
              </template>
            </UButton>
          </NuxtLink>
          
          <NuxtLink to="/oldaltervek/fenntarthatosag">
            <UButton
              color="primary"
              variant="outline"
              block
              class="h-full rounded-none"
            >
              <div class="text-center">
                <p class="font-bold">Fenntarthatóság</p>
                <p class="text-xs opacity-80">Green initiatives</p>
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
                <p class="text-xs opacity-80">Vissza a tervekhez</p>
              </div>
              <template #trailing>
                <UIcon name="i-heroicons-arrow-left" />
              </template>
            </UButton>
          </NuxtLink>
        </div>
      </UContainer>
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
useHead({
  title: 'Hulladékkezelés Oldal Terv - BÜCHL Hungaria',
  meta: [
    {
      name: 'description',
      content: 'A BÜCHL Hungaria hulladékkezelési szolgáltatások oldal tervei és megvalósítása. Korszerű hulladékkezelési megoldások bemutatkozása.'
    },
    {
      property: 'og:title',
      content: 'Hulladékkezelés Oldal Terv - BÜCHL Hungaria'
    },
    {
      property: 'og:description',
      content: 'Professzionális hulladékkezelési szolgáltatások oldal tervei: veszélyes hulladék kezelés, újrahasznosítási teknológiák, folyamatábrák.'
    },
    {
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})

</script>