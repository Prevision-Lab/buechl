<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Fenntarthatóság"
      subtitle="ESG megközelítés - Környezet, Társadalom, Vállalatirányítás"
      image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1600&h=800&fit=crop"
      bg-color="green"
      :primary-cta="{
        label: 'Kapcsolatfelvétel',
        to: '/kapcsolat'
      }"
    />

    <!-- ESG Bevezető szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-6">
            ESG Megközelítésünk
          </h2>
          <p class="text-lg text-gray-700 max-w-4xl mx-auto">
            A BÜCHL HUNGARIA Kft. elkötelezett a fenntartható vállalati működés iránt. 
            ESG (Környezet, Társadalom, Vállalatirányítás) stratégiánk három fő pilléren nyugszik, 
            amelyeken keresztül hozzájárulunk egy fenntarthatóbb jövő építéséhez.
          </p>
        </div>

        <!-- ESG pillérek áttekintése -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center p-8 bg-green-50 rounded-lg">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-green/10 rounded-full mb-6">
              <UIcon name="i-heroicons-globe-alt" class="text-buchl-green" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Környezet</h3>
            <p class="text-gray-700">
              Megújuló energia, zöld technológiák és karbonlábnyom csökkentés a fő céljaink.
            </p>
          </div>
          
          <div class="text-center p-8 bg-blue-50 rounded-lg">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-blue/10 rounded-full mb-6">
              <UIcon name="i-heroicons-users" class="text-buchl-blue" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Társadalom</h3>
            <p class="text-gray-700">
              Oktatási kooperációk, sportszponzoráció és közösségépítés területén vagyunk aktívak.
            </p>
          </div>
          
          <div class="text-center p-8 bg-gray-50 rounded-lg">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-600/10 rounded-full mb-6">
              <UIcon name="i-heroicons-building-office-2" class="text-gray-600" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">Vállalatirányítás</h3>
            <p class="text-gray-700">
              Nemzetközi partneri hálózat és felelős vállalatirányítási gyakorlatok.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tanúsítványok szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Tanúsítványok és akkreditalt munkavégzés
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Nemzetközi standard szerinül. Tanúsítványok és akkreditalt munkával garantáljuk a legmagasabb minőségű szolgáltatást.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-buchl-green/10 rounded-full mb-6">
              <UIcon name="i-heroicons-shield-check" class="text-buchl-green" style="width: 40px; height: 40px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">ISO 14001:2015</h3>
            <p class="text-gray-700">
              Környezetirányítási rendszer tanúsítványa, amely bizonyítja környezetvédelmi elkötelezettségünket.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-buchl-blue/10 rounded-full mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="text-buchl-blue" style="width: 40px; height: 40px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">ISO 9001:2015</h3>
            <p class="text-gray-700">
              Minőségirányítási rendszer tanúsítványa, amely garantiálja szolgáltatásaink folyamatos minőségét.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6">
              <UIcon name="i-heroicons-user-group" class="text-green-500" style="width: 40px; height: 40px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">ISO 45001:2018</h3>
            <p class="text-gray-700">
              Munkahelyi egészség és biztonság irányítási rendszer a munkavállalóink védelméért.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 1. Környezeti kezdeményezések szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            1. Környezet
          </h2>
          <p class="text-lg text-white/80 max-w-3xl mx-auto">
            Fenntartható energiahasználat és környezetbarát technológiák a környezetvedlyünkért
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-sun" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Napelemrendszerek</h3>
            </div>
            <p class="text-white/90 mb-4">
              Vállalatunk központi telephelyének napelemes kiserőművét 2025-ben korszerűsítettük. 
              A teljesítmény 178 kW-ról 494 kW-ra nőtt.
            </p>
            <div class="text-2xl font-bold text-buchl-green">494 kW</div>
            <div class="text-sm text-white/70">napelemes kapacitás</div>
          </div>

          <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-home-modern" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Földhő és napenergia</h3>
            </div>
            <p class="text-white/90 mb-4">
              2015 óta mindket győri telephelyünk fűtése és hűtése fosszilis energiahordozók nélkül működik. 
              Talajszondás hőszivatyúokat használunk.
            </p>
            <div class="text-2xl font-bold text-buchl-green">2015 óta</div>
            <div class="text-sm text-white/70">fosszilis mentes fűtés-hűtés</div>
          </div>

          <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-truck" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Elektromos járművek</h3>
            </div>
            <p class="text-white/90 mb-4">
              Flottánkban évről évre növekszik az elektromos személyautók száma. 
              Egy korábbi dízel horgos konténerszállító is elektromossá alakult.
            </p>
            <div class="text-2xl font-bold text-buchl-green">61%</div>
            <div class="text-sm text-white/70">elektromos munkagépek aránya</div>
          </div>

          <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-bolt" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Zöld energia vásárlás</h3>
            </div>
            <p class="text-white/90 mb-4">
              A működésünkhöz szükséges energiát teljes mértékben megújuló vagy 
              nagy hatásfokú kapcsolt energiatermelésből fedezzük.
            </p>
            <div class="text-2xl font-bold text-buchl-green">3.500 MWh</div>
            <div class="text-sm text-white/70">zöld energia 2025-ben</div>
          </div>

          <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-heart" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Méhcsaládok</h3>
            </div>
            <p class="text-white/90 mb-4">
              2022-ben aktívan bekapcsolódtunk a biológiai sokféleség megőrzésébe. 
              Három méhcsalád telepítését támogattuk.
            </p>
            <div class="text-2xl font-bold text-buchl-green">3</div>
            <div class="text-sm text-white/70">méhcsalád támogatása</div>
          </div>

          <div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-chart-bar" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Karbonlábnyom-elemzés</h3>
            </div>
            <p class="text-white/90 mb-4">
              A KÖVET Egyesület támogatásával elkészült a BÜCHL Hungaria 
              három évet felölelő karbonlábnyom-felmérése (2019–2021).
            </p>
            <div class="text-2xl font-bold text-buchl-green">2019-21</div>
            <div class="text-sm text-white/70">karbonlábnyom felmérés</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Társadalmi szerepvállálás szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            2. Társadalom
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            A BÜCHL HUNGARIA Kft. elkötelezett a közösség és a jövő generációk támogatása mellett.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-academic-cap" class="text-buchl-blue mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Oktatási kooperációk</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Együttműködünk a győri Széchenyi István Egyetemmel, a MOBILIS Interaktív Kiállítási Központtal, 
              és minden évben fogadjuk az Audi Hungaria Iskolaközpont tanulóit egy projektnap keretében.
            </p>
            <div class="text-sm text-gray-500">Tudományos és oktatási projektek, ösztöndíjak</div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-trophy" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Sportszponzoráció</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Büszkék vagyunk rá, hogy a Győri ETO HC, a Győri ETO UNI FKC és a Győri Kosárlabda Club támogatói lehetünk. 
              Lipovics Patrik ifjú autóversenyzo sikereit is támogatjuk.
            </p>
            <div class="text-sm text-gray-500">Kézilabda, jégkorong, kosárlabda, motorsport</div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-user-group" class="text-buchl-blue mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Tömegsport támogatása</h3>
            </div>
            <p class="text-gray-700 mb-4">
              2000 óta minden évben több százan állnak rajthoz a BÜCHL Hungaria Kft. főtámogatásával 
              megvalósuló BÜCHL Éjszakai Futóversenyen.
            </p>
            <div class="text-sm text-gray-500">2000 óta évente megrendezésre kerül</div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-heart" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Közösségépítés élményekkel</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Év közben rendszeresen szervezünk munkatársi programokat: horgászversenyt, gyereknapot, 
              közös kirándulást, retro szendvics napot és karácsonyi sütést.
            </p>
            <div class="text-sm text-gray-500">Valódi közösségi élmények munkatársainknak</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Vállalatirányítás szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            3. Vállalatirányítás
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Nemzetközi szakmai együttműködések és felelős vállalati működés.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="bg-gradient-to-br from-buchl-blue to-buchl-blue/90 p-8 rounded-lg text-buchl-blue">
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-building-office-2" class="text-buchl-blue mr-3" style="width: 40px; height: 40px;" />
                <h3 class="text-2xl font-semibold">DUIHK-tagság</h3>
              </div>
              <p class="text-buchl-blue/90 mb-6">
                A BÜCHL Hungaria Kft. elkötelezett a nemzetközi szakmai együttműködések és a felelős vállalati működés mellett. 
                Hosszu évek óta tagjai vagyunk a Német–Magyar Ipari és Kereskedelmi Kamárának (DUIHK).
              </p>
              
              <div class="space-y-4">
                <div class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="text-buchl-blue mr-3" style="width: 20px; height: 20px;" />
                  <span class="text-sm">Aktív kapcsolat a német gazdasági szereplőkkel</span>
                </div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="text-buchl-blue mr-3" style="width: 20px; height: 20px;" />
                  <span class="text-sm">Szakmai fejlődés és tapasztalatcsere lehetőségei</span>
                </div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-check-circle" class="text-buchl-blue mr-3" style="width: 20px; height: 20px;" />
                  <span class="text-sm">Magas német színvonal képviselet Magyarországon</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div class="bg-gradient-to-br from-buchl-green to-buchl-green/90 p-8 rounded-lg text-buchl-blue">
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-globe-europe-africa" class="text-buchl-blue mr-3" style="width: 40px; height: 40px;" />
                <h3 class="text-2xl font-semibold">KÖVET Egyesület</h3>
              </div>
              <p class="text-buchl-blue/90 mb-6">
                A BÜCHL Hungaria Kft. 2003 óta tagja a KÖVET Egyesületnek, amely 1995 óta dolgozik 
                a megelőző környezetvédelem és a fenntartható vállalati működés elterjestéséért.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-center">
                  <UIcon name="i-heroicons-trophy" class="text-buchl-blue mr-3" style="width: 20px; height: 20px;" />
                  <span class="text-sm">Győri Zöld Expó rendszeres részveval</span>
                </div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-trophy" class="text-buchl-blue mr-3" style="width: 20px; height: 20px;" />
                  <span class="text-sm">EMAS kerekasztal rendezvények támogatása</span>
                </div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-trophy" class="text-buchl-blue mr-3" style="width: 20px; height: 20px;" />
                  <span class="text-sm">"Ablakon Bedobott Pénz" program díjnyertes</span>
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
          Legyen része a változásnak!
        </h2>
        <p class="text-xl text-buchl-blue/80 max-w-3xl mx-auto mb-10">
          Csatlakozzon hozzánk a fenntartható jövő építésében. Együtt tehetjük zoldebbé és tisztábbá a világunkat.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/kapcsolat"
            color="neutral"
            size="lg"
            icon="i-heroicons-envelope"
            :trailing="true"
            class="rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
          >
            Kapcsolatfelvétel
          </UButton>
          <UButton
            to="/szolgaltatasok"
            variant="outline"
            size="lg"
            icon="i-heroicons-arrow-right"
            :trailing="true"
            class="rounded-none border-2 border-buchl-blue text-buchl-blue"
          >
            Szolgáltatásaink
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO meta adatok
useSeoMeta({
  title: 'Fenntarthatóság - BÜCHL HUNGARIA',
  description: 'ESG megközelítésünk: Környezet, Társadalom és Vállalatirányítás területén vagyunk elkötelezettek. Megújuló energia, oktatási kooperációk és nemzetközi partneri hálózat.',
  keywords: 'fenntarthatóság, ESG, környezetvédelem, megújuló energia, napelem, társadalmi felelősség, DUIHK, KÖVET, karbonlábnyom'
})
</script>
