<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Fenntarthatóság"
      subtitle="ESG - Környezet, Társadalom, Vállalatirányítás"
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
            Fenntartható vállalati működés
          </h2>
          <p class="text-lg text-gray-700 max-w-4xl mx-auto">
            A BÜCHL HUNGARIA Kft. elkötelezett a fenntartható vállalati működés iránt. 
            ESG (Környezet, Társadalom, Vállalatirányítás) stratégiánk három fő pilléren nyugszik, 
            amelyeken keresztül hozzájárulunk egy fenntarthatóbb jövő építéséhez.
          </p>
        </div>

        <!-- ESG pillérek áttekintése -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <button @click="scrollToSection('kornyezet')" class="text-center p-8 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-green rounded-full mb-6">
              <UIcon name="i-heroicons-globe-alt" class="text-white" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">1. Környezet</h3>
          </button>
          
          <button @click="scrollToSection('tarsadalmi')" class="text-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-buchl-blue rounded-full mb-6">
              <UIcon name="i-heroicons-users" class="text-white" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">2. Társadalmi szerepvállalás</h3>
          </button>
          
          <button @click="scrollToSection('vallalatiranytias')" class="text-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full mb-6">
              <UIcon name="i-heroicons-building-office-2" class="text-white" style="width: 32px; height: 32px;" />
            </div>
            <h3 class="text-xl font-semibold text-buchl-blue mb-3">3. Vállalatirányítás</h3>
          </button>
        </div>
      </div>
    </section>


    <!-- 1. Környezeti kezdeményezések szekció -->
    <section id="kornyezet" class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            1. Környezet
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Napelemrendszerek -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-sun" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Napelemrendszerek</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              Vállalatunk központi telephelyének napelemes kiserőművét 2025-ben korszerűsítettük, a teljes 
              tetőfelület kihasználásával maximalizáltuk az elérhető kapacitást. 
              Kettős számú telephelyünkön egy új, 100 kW-os rendszer épült ki, igazodva a nappali időszak fogyasztásához.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">494 kW</div>
            <div class="text-sm text-white/70">napelemes kapacitás (178 kW-ról)</div>
          </div>

          <!-- Földhő és napenergia -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-home-modern" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Földhő és napenergia</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              2015 óta mindkét győri telephelyünk fűtése és hűtése fosszilis energiahordozók nélkül működik. 
              A szükséges energiát talajszondás hőszivattyúk biztosítják. 
              A használati melegvíz ellátás kettős számú telephelyünkön napkollektorokkal történik.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">2015 óta</div>
            <div class="text-sm text-white/70">fosszilismentes fűtés-hűtés</div>
          </div>

          <!-- Elektromos járművek -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-truck" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Elektromos járművek</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              Flottánkban évről évre növekszik az elektromos személyautók száma. Emellett egy korábbi dízel 
              konténerszállító teherautót is teljesen elektromos meghajtásúvá alakítottunk.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">Növekvő</div>
            <div class="text-sm text-white/70">elektromos flotta</div>
          </div>

          <!-- Elektromos munkagépek -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-cog-6-tooth" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Elektromos munkagépek</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              2025-ben anyagmozgató és rakodógépeink 61%-a már elektromos meghajtású. Gépparkunkon belül 
              ez az arány folyamatosan nő. Ezzel jelentős mértékben csökkentjük az üvegházhatású gázok kibocsátását.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">61%</div>
            <div class="text-sm text-white/70">elektromos munkagépek</div>
          </div>

          <!-- Zöld energia vásárlás -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-bolt" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Zöld energia vásárlás</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              A működésünkhöz szükséges energiát teljes mértékben megújuló vagy nagy hatásfokú kapcsolt 
              energiatermelésből származó energiával fedezzük. 2025-ben 3 500 MWh mennyiségű zöld energiát vásároltunk.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">3.500 MWh</div>
            <div class="text-sm text-white/70">zöld energia 2025-ben</div>
          </div>

          <!-- Méhcsaládok -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-heart" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Méhcsaládok a fenntarthatóság szolgálatában</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              2022-ben aktívan bekapcsolódtunk a biológiai sokféleség megőrzésébe. Ennek részeként három méhcsalád 
              telepítését támogattuk egy szakképzett méhész állományában. Egyetlen méhcsalád hozzávetőleg 50 000 
              méhből áll – ezek az apró beporzok kulcsszerepet játszanak az ökoszisztéma fenntartásában és a biológiai 
              sokféleség védelmében. A méhek által megtermelt méz nem csupán a természet értékes ajándéka: 
              lehetőséget ad arra is, hogy e fenntarthatósági törekvésünket kézzel fogható formában is megosszuk 
              munkatársainkkal és partnereinkkel.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">3</div>
            <div class="text-sm text-white/70">méhcsalád (~150.000 méh összesen)</div>
          </div>

          <!-- Karbonlábnyom-elemzés -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-chart-bar" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Karbonlábnyom-elemzés</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              A KÖVET Egyesület szakmai támogatásával elkészült a BÜCHL Hungaria három évet felölelő 
              (2019–2021 közötti) karbonlábnyom-felmérése. A vizsgálat megmutatja, mekkora mennyiségű 
              üvegházhatású gázt (főként CO₂-t) bocsátunk ki tevékenységeink során – közvetlenül és közvetve. 
              A három év adatai alapján kibocsátásaink fő forrásai: telephelyi energiafelhasználás, 
              logisztikai műveletek, anyagfelhasználás. A Bilan Carbone® módszertan segítségével pontos képet 
              kaptunk arról, mely területeken van lehetőség csökkentésre – ezzel is támogatva fenntarthatósági 
              céljaink megvalósítását.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">Karbon lábnyom</div>
            <div class="text-sm text-white/70">folyamatos kibocsátásoptimalizálás</div>
          </div>

          <!-- KÖVET Egyesület partnerség -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-globe-europe-africa" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">Partnerség a fenntarthatóságért - KÖVET Egyesület</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              A BÜCHL Hungaria Kft. 2003 óta tagja a KÖVET Egyesületnek, amely 1995 óta dolgozik a megelőző 
              környezetvédelem és a fenntartható vállalati működés elterjesztéséért. Az egyesület célja olyan 
              módszerek kidolgozása és népszerűsítése, amelyek egyszerre szolgálják a környezeti, társadalmi és 
              gazdasági érdekeket. Közös munkánk keretében rendszeresen részt veszünk a Győri Zöld Expón, 
              támogatjuk az EMAS kerekasztal rendezvényeket, és több alkalommal nyertünk díjat a 
              „Ablakon Bedobott Pénz" programban.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">2003 óta</div>
            <div class="text-sm text-white/70">KÖVET tagság</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Társadalmi szerepvállalás szekció -->
    <section id="tarsadalmi" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            2. Társadalmi szerepvállás
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            A BÜCHL HUNGARIA Kft. elkötelezett a közösség és a jövő generációk támogatása mellett – legyen szó oktatásról, sportról vagy közösségi eseményekről. 
            Vállalatunk immár 10 éve töretlenul örömmel támogatja a győri Generációk Háza által szervezett Raklapos Építőtábort.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-academic-cap" class="text-buchl-blue mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Oktatási kooperációk</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Fontos számunkra a szakmai utánpótlás és a tudásmegosztás. Együttműködünk a győri Széchenyi 
              István Egyetemmel, valamint a MOBILIS Interaktív Kiállítási Központtal, ahol tudományos és oktatási 
              projekteket támogatunk, valamint ösztöndíjjal segítjük a diákokat. Az Audi Hungaria Iskolaközpont 
              tanulóit minden évben egy projektnap keretében fogadjuk vállalatunknál. A program célja, hogy a 
              gyerekek testközelből ismerkedhessenek meg a modern hulladékgazdálkodási folyamatokkal, 
              valamint betekintést nyerjenek egy fenntarthatóan működő ipari vállalat mindennappjaiba.
            </p>
            <div class="text-sm text-gray-500">Tudományos és oktatási projektek, ösztöndíjak</div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-trophy" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Sportszponzoráció</h3>
            </div>
            <p class="text-gray-700 mb-4">
              A BÜCHL-nél hisszük, hogy a sport támogatása nem csupán szponzoráció – hanem befektetés a jövőbe, 
              a közösségbe és az értékteremtésbe. A kézilabda, a jégkorong, a kosárlabda dinamizmusa és csapatszelleme 
              tökéletesen tükrözi vállalatunk értékeit. Büszkék vagyunk rá, hogy a Győri ETO HC, a Győri ETO UNI FKC 
              és a Győri Kosárlabda Club támogatói lehetünk. A kezdetektől fogva ott vagyunk Lipovics Patrik ifjú autóversenyező 
              sikereit is támogatjuk, mert hiszünk benne, hogy az elkötelezettség és a folyamatos fejlődés a motorsportban 
              és az üzleti életben egyaránt kulcsfontosságú.
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
              megvalósuló BÜCHL Éjszakai Futóversenyen, köztük nagy büszkeségünkre munkatársaink is, 
              akik egyéniben és váltóban is bizonyítanak. Akik nem húztak futócipőt, önkéntesként segítették a szervezők munkáját.
            </p>
            <div class="text-sm text-gray-500">2000 óta BÜCHL Éjszakai Futóverseny</div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-heart" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Közösségépítés élményekkel</h3>
            </div>
            <p class="text-gray-700 mb-4">
              Az erős csapat alapja a közös élmény. Év közben rendszeresen szervezünk munkatársi programokat – 
              többek között horgászversenyt, gyereknapot, közös kirándulást, retro szendvics napot és karácsonyi sütést – 
              melyek nemcsak kikapcsolódást, hanem valódi közösségi élményt is nyújtanak.
            </p>
            <div class="text-sm text-gray-500">Valódi közösségi élmények munkatársainknak</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Vállalatirányítás szekció -->
    <section id="vallalatiranytias" class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            3. Vállalatirányítás
          </h2>
        </div>

        <div class="flex justify-center">
          <!-- DUIHK-tagság -->
          <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm max-w-md w-full">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-building-office-2" class="text-buchl-green mr-3" style="width: 32px; height: 32px;" />
              <h3 class="text-xl font-semibold text-white">DUIHK-tagság – Aktív kapcsolat a német gazdasággal</h3>
            </div>
            <p class="text-white/90 text-sm mb-4">
              A BÜCHL Hungaria Kft. elkötelezett a nemzetközi szakmai együttműködések és a felelős vállalati működés mellett. 
              Ennek részeként hosszú évek óta tagjai vagyunk a Német–Magyar Ipari és Kereskedelmi Kamárának (DUIHK). 
              A DUIHK-tagság aktív kapcsolatot jelent a német gazdasági szereplőkkel, lehetőséget kínál a szakmai fejlődésre, 
              tapasztalatcserére, és támogatja cégünk célját, hogy a környezetvédelmi szolgáltatások területén is magas német 
              színvonalat képviseljünk Magyarországon.
            </p>
            <div class="text-2xl font-bold text-buchl-green mb-1">Hosszú évek óta</div>
            <div class="text-sm text-white/70">DUIHK tagság</div>
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

// Scroll funkció
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
