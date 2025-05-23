<template>
  <UContainer>
    <UPageHeader 
      title="Project Showcase"
      description="A projekt bemutató komponens lehetővé teszi referencia projektek látványos megjelenítését."
    >
      <template #links>
        <UButton
          to="/design-system"
          icon="i-heroicons-arrow-left"
          color="neutral"
          variant="ghost"
          size="sm"
        >
          Vissza
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Basic Example -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Alap példa</h2>
        <BuchlProjectShowcase :projects="basicProjects" />
      </div>

      <!-- Featured Example -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Kiemelt projekttel</h2>
        <p class="text-gray-600 mb-4">
          Az első projekt nagyobb méretben jelenik meg:
        </p>
        <BuchlProjectShowcase 
          :projects="featuredProjects" 
          :featured="true"
          bg-color="gray"
        />
      </div>

      <!-- Different Columns -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Különböző oszlopszámok</h2>
        
        <!-- 2 Columns -->
        <div class="mb-8">
          <h3 class="font-semibold mb-4">2 oszlop</h3>
          <BuchlProjectShowcase 
            :projects="basicProjects.slice(0, 2)" 
            :columns="2"
            :show-c-t-a="false"
          />
        </div>

        <!-- 4 Columns -->
        <div class="mb-8">
          <h3 class="font-semibold mb-4">4 oszlop</h3>
          <BuchlProjectShowcase 
            :projects="basicProjects" 
            :columns="4"
            :show-c-t-a="false"
          />
        </div>
      </div>

      <!-- Different Backgrounds -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Különböző hátterek</h2>
        
        <div class="space-y-8">
          <!-- Blue Background -->
          <div>
            <h3 class="font-semibold mb-4">Kék háttér</h3>
            <BuchlProjectShowcase 
              :projects="basicProjects.slice(0, 3)" 
              bg-color="blue"
              title="Kiváló referenciáink"
              subtitle="25 év tapasztalattal"
              cta-text="További projektek"
              cta-color="white"
            />
          </div>
        </div>
      </div>

      <!-- Props Documentation -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Props</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prop
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Típus
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alapértelmezett
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leírás
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  projects
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Project[]
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  kötelező
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  A megjelenítendő projektek tömbje
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  title
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'Referenciáink'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Szekció címe
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  subtitle
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'Büszkék vagyunk...'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Szekció alcíme
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  featured
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Az első projekt nagyobb méretben jelenik meg
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  bgColor
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'white' | 'gray' | 'blue'
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'white'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Háttérszín
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  columns
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2 | 3 | 4
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Oszlopok száma desktop nézetben
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  showCTA
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  true
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  CTA gomb megjelenítése
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ctaText
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'Összes projekt'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  CTA gomb szövege
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Project Interface -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Project Interface</h2>
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>interface Project {
  title: string
  location: string
  description: string
  image: string
  stats?: {
    label: string
    value: string
  }[]
}</code>
        </pre>
      </div>

      <!-- Usage Example -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Használati példa</h2>
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>&lt;template&gt;
  &lt;BuchlProjectShowcase
    :projects="projects"
    :featured="true"
    bgColor="gray"
    title="Megvalósított projektjeink"
    subtitle="Innovatív hulladékkezelési megoldások"
    ctaText="Minden referencia"
    @cta-click="navigateTo('/referenciak')"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const projects = [
  {
    title: 'Budapest Recycling Center',
    location: 'Budapest',
    description: 'Modern újrahasznosító központ 50000 tonna éves kapacitással',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    stats: [
      { label: 'Kapacitás', value: '50000t' },
      { label: 'Dolgozók', value: '120+' }
    ]
  },
  // További projektek...
]
&lt;/script&gt;</code>
        </pre>
      </div>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Sample projects for demonstrations
const basicProjects = [
  {
    title: 'Budapest Recycling Center',
    location: 'Budapest',
    description: 'Modern újrahasznosító központ 50000 tonna éves kapacitással',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    stats: [
      { label: 'Kapacitás', value: '50000t' },
      { label: 'Dolgozók', value: '120+' }
    ]
  },
  {
    title: 'Debreceni Hulladékválogató',
    location: 'Debrecen',
    description: 'Automatizált válogatórendszer a hatékonyabb újrahasznosításért',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
    stats: [
      { label: 'Hatékonyság', value: '95%' },
      { label: 'Év', value: '2023' }
    ]
  },
  {
    title: 'Szegedi Ipari Park',
    location: 'Szeged',
    description: 'Komplex ipari hulladékkezelési megoldások',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=600&fit=crop',
    stats: [
      { label: 'Terület', value: '15ha' },
      { label: 'Partnerek', value: '25+' }
    ]
  },
  {
    title: 'Győri Zöld Központ',
    location: 'Győr',
    description: 'Fenntartható hulladékgazdálkodási oktatóközpont',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&h=600&fit=crop',
    stats: [
      { label: 'Látogatók', value: '5000+' },
      { label: 'Programok', value: '30+' }
    ]
  }
]

const featuredProjects = [
  {
    title: 'BÜCHL Technológiai Központ',
    location: 'Budapest',
    description: 'Magyarország legmodernebb hulladékkezelési innovációs központja. Kutatás-fejlesztés és oktatás egy helyen.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1200&h=800&fit=crop',
    stats: [
      { label: 'Beruházás', value: '€5M' },
      { label: 'Technológiák', value: '15+' },
      { label: 'K+F projektek', value: '8' },
      { label: 'Munkatársak', value: '50+' }
    ]
  },
  ...basicProjects
]
</script>