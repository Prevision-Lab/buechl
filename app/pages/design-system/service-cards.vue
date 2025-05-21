<template>
  <div>
    <!-- Page Header -->
    <div class="max-w-7xl mx-auto p-8">
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Szolgáltatás Kártyák</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          A BÜCHL szolgáltatásait bemutató kártya komponensek a weboldal különböző részein
        </p>
      </div>
    </div>

    <!-- Icon-based Services -->
    <section class="mb-16 bg-gray-50 dark:bg-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Ikonos szolgáltatás kártyák</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BuchlServiceCard
            title="Hulladékkezelés"
            description="Komplex hulladékgazdálkodási megoldások ipari és kommunális környezetben."
            icon="i-lucide-recycle"
            :features="['Szelektív gyűjtés', 'ADR-megfelelőség', 'Dokumentált ártalmatlanítás']"
            :cta="{
              label: 'Részletek',
              to: '/szolgaltatasok/hulladekkezeles'
            }"
          />
          
          <BuchlServiceCard
            title="Újrahasznosítás"
            description="Környezetbarát újrahasznosítási folyamatok és körforgásos gazdasági megoldások."
            icon="i-lucide-leaf"
            :features="['Műanyag újrahasznosítás', 'Fém feldolgozás', 'Papír recycling']"
            :cta="{
              label: 'Tudjon meg többet',
              to: '/szolgaltatasok/ujrahasznositas'
            }"
          />
          
          <BuchlServiceCard
            title="Tanácsadás"
            description="Szakértői tanácsadás hulladékgazdálkodási és környezetvédelmi kérdésekben."
            icon="i-lucide-lightbulb"
            :features="['Jogszabályi megfelelőség', 'Optimalizálás', 'Képzések']"
            :cta="{
              label: 'Konzultáció',
              to: '/kapcsolat'
            }"
          />
        </div>
      </div>
    </section>

    <!-- Image-based Services -->
    <section class="mb-16">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Képes szolgáltatás kártyák</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BuchlServiceCard
            title="Ipari hulladékkezelés"
            description="Teljes körű megoldások ipari ügyfelek számára, a veszélyes és nem veszélyes hulladékok kezelésére."
            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
            :cta="{
              label: 'Egyedi ajánlat',
              to: '/kapcsolat'
            }"
          />
          
          <BuchlServiceCard
            title="Fenntarthatósági programok"
            description="Egyedi fenntarthatósági stratégiák és programok fejlesztése vállalatok számára."
            image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&h=400&fit=crop"
            :cta="{
              label: 'Program részletek',
              to: '/fenntarthatosag'
            }"
          />
        </div>
      </div>
    </section>

    <!-- Simplified Version -->
    <section class="mb-16">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Egyszerű verzió</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BuchlServiceCard
            title="Gyors elszállítás"
            description="24 órán belüli hulladék elszállítás garantáltan."
            icon="i-lucide-truck"
          />
          
          <BuchlServiceCard
            title="Zöld tanúsítványok"
            description="ISO 14001 és egyéb környezetvédelmi tanúsítványok."
            icon="i-lucide-award"
          />
          
          <BuchlServiceCard
            title="Digitális nyomon követés"
            description="Online platform a hulladékkezelés teljes dokumentálására."
            icon="i-lucide-monitor"
          />
        </div>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="mb-16">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Használat</h2>
        
        <div class="space-y-8">
          <!-- Basic Example -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Alap példa</h3>
            <CodeBlock :code="basicExample" language="vue" />
          </div>

          <!-- With Features -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Funkciókkal</h3>
            <CodeBlock :code="featuresExample" language="vue" />
          </div>

          <!-- With Image -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Képpel</h3>
            <CodeBlock :code="imageExample" language="vue" />
          </div>
        </div>
      </div>
    </section>

    <!-- Props Documentation -->
    <section class="mb-16">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Props</h2>
        <UTable :data="propsData" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const basicExample = `<BuchlServiceCard
  title="Hulladékkezelés"
  description="Komplex hulladékgazdálkodási megoldások."
  icon="i-lucide-recycle"
  :cta="{
    label: 'Részletek',
    to: '/szolgaltatasok'
  }"
/>`

const featuresExample = `<BuchlServiceCard
  title="Újrahasznosítás"
  description="Környezetbarát újrahasznosítási folyamatok."
  icon="i-lucide-leaf"
  :features="[
    'Műanyag újrahasznosítás',
    'Fém feldolgozás',
    'Papír recycling'
  ]"
  :cta="{
    label: 'Tudjon meg többet',
    to: '/szolgaltatasok/ujrahasznositas'
  }"
/>`

const imageExample = `<BuchlServiceCard
  title="Ipari hulladékkezelés"
  description="Teljes körű megoldások ipari ügyfelek számára."
  image="https://images.unsplash.com/photo.jpg"
  :cta="{
    label: 'Egyedi ajánlat',
    to: '/kapcsolat'
  }"
/>`

const propsData = [
  {
    prop: 'title',
    type: 'string',
    required: 'Igen',
    default: '-',
    description: 'A szolgáltatás címe'
  },
  {
    prop: 'description',
    type: 'string',
    required: 'Igen',
    default: '-',
    description: 'A szolgáltatás leírása'
  },
  {
    prop: 'icon',
    type: 'string',
    required: 'Nem',
    default: 'undefined',
    description: 'Ikon neve (pl. i-lucide-recycle)'
  },
  {
    prop: 'image',
    type: 'string',
    required: 'Nem',
    default: 'undefined',
    description: 'Kép URL-je'
  },
  {
    prop: 'imageAlt',
    type: 'string',
    required: 'Nem',
    default: 'Szolgáltatás kép',
    description: 'Kép alternatív szövege'
  },
  {
    prop: 'features',
    type: 'string[]',
    required: 'Nem',
    default: 'undefined',
    description: 'Funkciók listája'
  },
  {
    prop: 'cta',
    type: 'ServiceCta',
    required: 'Nem',
    default: 'undefined',
    description: 'CTA gomb objektum'
  }
]
</script>