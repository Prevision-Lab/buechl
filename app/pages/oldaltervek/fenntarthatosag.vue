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
        icon: 'i-heroicons-leaf'
      }"
      :secondary-cta="{
        label: 'Kapcsolat',
        to: '/kapcsolat',
        icon: 'i-heroicons-envelope'
      }"
    />

    <!-- Bevezetés szekció -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-buchl-blue mb-6">
            Elkötelezettségünk a fenntartható jövőért
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            A BÜCHL Hungaria számára a fenntarthatóság nem csupán egy üzleti stratégia, 
            hanem a vállalati kultúra szerves része. Minden tevékenységünkben törekszünk 
            a környezeti hatások minimalizálására és a körforgásos gazdaság elveinek követésére.
          </p>
          
          <div class="grid sm:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-24 h-24 bg-buchl-green rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-leaf" class="text-white" style="width: 64px; height: 64px;" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Környezetvédelem</h3>
              <p class="text-gray-600">Aktív szerepvállalás a környezet védelmében és helyreállításában</p>
            </div>
            
            <div class="text-center">
              <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-arrow-path" class="text-white" style="width: 64px; height: 64px;" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Körforgásos gazdaság</h3>
              <p class="text-gray-600">Újrahasznosítás és hulladékcsökkentés minden folyamatban</p>
            </div>
            
            <div class="text-center">
              <div class="w-24 h-24 bg-buchl-green rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-light-bulb" class="text-white" style="width: 64px; height: 64px;" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Innováció</h3>
              <p class="text-gray-600">Folyamatos kutatás és fejlesztés a fenntartható technológiákért</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Fenntarthatósági kezdeményezések -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-buchl-blue mb-4">
            Fenntarthatósági kezdeményezéseink
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Konkrét intézkedésekkel és innovatív megoldásokkal járulunk hozzá 
            egy fenntarthatóbb jövő megteremtéséhez.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BuchlServiceCard
            title="Megújuló energia használata"
            description="Telephelyeinken napenergiát és egyéb megújuló forrásokat alkalmazunk az energiafogyasztás csökkentésére."
            icon="i-heroicons-sun"
            :features="[
              'Napelemes rendszerek telepítése',
              '50% megújuló energia arány',
              'Energiahatékonysági programok',
              'CO2 kibocsátás csökkentés'
            ]"
            :cta="{
              label: 'Részletek',
              to: '/fenntarthatosag/energia',
              icon: 'i-heroicons-arrow-right'
            }"
          />

          <BuchlServiceCard
            title="Zöld logisztika"
            description="Környezetbarát szállítási megoldások és optimalizált útvonaltervezés a környezeti terhelés minimalizálására."
            icon="i-heroicons-truck"
            :features="[
              'Euro 6 szabványú járműpark',
              'Alternatív üzemanyagok',
              'Optimalizált szállítási útvonalak',
              'Helyi beszerzési programok'
            ]"
            :cta="{
              label: 'Logisztikánk',
              to: '/fenntarthatosag/logisztika',
              icon: 'i-heroicons-map'
            }"
          />

          <BuchlServiceCard
            title="Vízgazdálkodás"
            description="Fenntartható vízhasználat és szennyvízkezelés a vízkészletek védelmében."
            icon="i-heroicons-beaker"
            :features="[
              'Esővíz gyűjtési rendszerek',
              'Szennyvíz újrahasznosítás',
              'Víztakarékos technológiák',
              'Vízbázis védelem'
            ]"
            :cta="{
              label: 'Vízprogramjaink',
              to: '/fenntarthatosag/vizgazdalkodas',
              icon: 'i-heroicons-eye-dropper'
            }"
          />

          <BuchlServiceCard
            title="Biodiverzitás védelem"
            description="Természetvédelmi programok és ökológiai területek kialakítása telephelyeinken."
            icon="i-heroicons-bug-ant"
            :features="[
              'Helyi ökoszisztémák védelme',
              'Méhbarát területek kialakítása',
              'Őshonos növényfajok telepítése',
              'Természetvédelmi partnerségek'
            ]"
            :cta="{
              label: 'Programjaink',
              to: '/fenntarthatosag/biodiverzitas',
              icon: 'i-heroicons-sparkles'
            }"
          />

          <BuchlServiceCard
            title="Közösségi szerepvállalás"
            description="Helyi közösségekkel való együttműködés és környezeti tudatosság növelése."
            icon="i-heroicons-users"
            :features="[
              'Környezeti oktatási programok',
              'Közösségi tisztasági akciók',
              'Iskolai együttműködések',
              'Önkéntes programok'
            ]"
            :cta="{
              label: 'Csatlakozzon',
              to: '/fenntarthatosag/kozosseg',
              icon: 'i-heroicons-heart'
            }"
          />

          <BuchlServiceCard
            title="Kutatás és fejlesztés"
            description="Folyamatos innováció és technológiai fejlesztések a fenntarthatóság érdekében."
            icon="i-heroicons-beaker"
            :features="[
              'Új technológiák kutatása',
              'Egyetemi együttműködések',
              'Pilot projektek',
              'Tudásmegosztás'
            ]"
            :cta="{
              label: 'Innovációink',
              to: '/fenntarthatosag/kutatas',
              icon: 'i-heroicons-academic-cap'
            }"
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
              Büszkék vagyunk arra, hogy fenntarthatósági törekvéseink mérhető 
              eredményeket hoznak. Minden évben növeljük környezeti teljesítményünket 
              és csökkentjük ökológiai lábnyomunkat.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-6 mb-8">
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-green mb-2">-35%</div>
                <div class="text-gray-600">CO2 kibocsátás csökkentés</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-green mb-2">95%</div>
                <div class="text-gray-600">Újrahasznosítási arány</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-green mb-2">50%</div>
                <div class="text-gray-600">Megújuló energia arány</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-buchl-green mb-2">25%</div>
                <div class="text-gray-600">Vízfogyasztás csökkentés</div>
              </div>
            </div>

            <UButton
              label="Fenntarthatósági jelentésünk"
              to="/fenntarthatosag/jelentes"
              color="primary"
              size="lg"
              class="rounded-none"
              icon="i-heroicons-document-text"
              :trailing="true"
            />
          </div>
          
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
              alt="Fenntartható környezet"
              class="rounded-lg shadow-lg w-full"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Fenntarthatósági céljaink -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-buchl-blue mb-4">
            2030-as fenntarthatósági céljaink
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ambiciózus célokat tűztünk ki magunk elé a következő évtizedre, 
            hogy még nagyobb hatást gyakoroljunk a környezet védelmére.
          </p>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-green rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-bolt" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">Karbonsemlegesség</h3>
            <p class="text-gray-600">
              Teljes karbonsemlegességet érünk el 2030-ra minden telephelyünkön.
            </p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-arrow-path" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">100% újrahasznosítás</h3>
            <p class="text-gray-600">
              Minden hulladékot újrahasznosítunk vagy energiává alakítunk.
            </p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-green rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-sun" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">100% zöld energia</h3>
            <p class="text-gray-600">
              Teljes energiaellátásunk megújuló forrásokból származik.
            </p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-buchl-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-heart" class="text-white" style="width: 48px; height: 48px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-2">Közösségi impact</h3>
            <p class="text-gray-600">
              50.000 embert érünk el környezeti tudatossági programjainkkal.
            </p>
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
            Fenntarthatósági erőfeszítéseinket független szervezetek is elismerik.
          </p>
        </div>

        <!-- Tanúsítványok horizontális elrendezésben -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- ISO 14001 -->
          <div class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-shield-check" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">ISO 14001:2015</h3>
              <p class="text-gray-600">Környezetirányítási rendszer nemzetközi szabványa</p>
            </div>
          </div>

          <!-- EMAS -->
          <div class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-star" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">EMAS III</h3>
              <p class="text-gray-600">Európai Környezetirányítási és Hitelesítési Rendszer</p>
            </div>
          </div>

          <!-- Carbon Trust -->
          <div class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-leaf" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">Carbon Trust</h3>
              <p class="text-gray-600">Karbonlábnyom csökkentési tanúsítvány</p>
            </div>
          </div>

          <!-- Green Award -->
          <div class="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div class="flex-shrink-0">
              <UIcon name="i-heroicons-trophy" class="text-buchl-green" style="width: 48px; height: 48px;" />
            </div>
            <div>
              <h3 class="font-semibold text-buchl-blue text-lg">Green Business Award</h3>
              <p class="text-gray-600">Fenntartható üzleti gyakorlat elismerése</p>
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
          Együtt tehetjük még zöldebbé a jövőt. Tudjon meg többet fenntarthatósági kezdeményezéseinkről és arról, hogyan lehet része a változásnak.
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
          
          <NuxtLink to="/oldaltervek/hulladekkezeles">
            <UButton
              color="primary"
              variant="outline"
              block
              class="h-full rounded-none"
            >
              <div class="text-center">
                <p class="font-bold">Hulladékkezelés</p>
                <p class="text-xs opacity-80">Specialized solutions</p>
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
  </div>
</template>

<script setup lang="ts">
// SEO beállítások
useSeoMeta({
  title: 'Fenntarthatóság Oldal Terv - BÜCHL Hungaria',
  description: 'A BÜCHL Hungaria fenntarthatósági kezdeményezések oldal tervei és megvalósítása. Környezettudatos megoldások és zöld technológiák bemutatkozása.',
  ogTitle: 'Fenntarthatóság Oldal Terv - BÜCHL Hungaria',
  ogDescription: 'Fenntarthatósági oldal tervei: környezetvédelmi programok, megújuló energia, körforgásos gazdaság, és közösségi szerepvállalás.',
  ogImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=630&fit=crop',
  twitterCard: 'summary_large_image'
})
</script>