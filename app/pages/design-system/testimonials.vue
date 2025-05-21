<template>
  <UContainer>
    <UPageHeader 
      title="Testimonials"
      description="A testimonials komponens ügyfélvélemények megjelenítésére szolgál különböző elrendezésekkel."
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
      <!-- Grid Layout -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Rács elrendezés</h2>
        <p class="text-gray-600 mb-4">
          Az alapértelmezett rács elrendezés 3 oszlopban jeleníti meg a véleményeket:
        </p>
        <BuchlTestimonials :testimonials="testimonials" />
      </div>

      <!-- Carousel Layout -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Körhinta elrendezés</h2>
        <p class="text-gray-600 mb-4">
          Ideális kevesebb vélemény esetén vagy ha kiemelt megjelenítést szeretnénk:
        </p>
        <BuchlTestimonials 
          :testimonials="testimonials.slice(0, 3)" 
          layout="carousel"
          bgColor="white"
        />
      </div>

      <!-- Minimal Layout -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Minimalista elrendezés</h2>
        <p class="text-gray-600 mb-4">
          Egyszerű, tiszta megjelenítés kevesebb vizuális elemmel:
        </p>
        <BuchlTestimonials 
          :testimonials="testimonials.slice(0, 3)" 
          layout="minimal"
          bgColor="white"
        />
      </div>

      <!-- Featured Example -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Kiemelt vélemény</h2>
        <p class="text-gray-600 mb-4">
          Az első vélemény kiemelve jelenik meg:
        </p>
        <BuchlTestimonials 
          :testimonials="testimonials" 
          :featured="true"
          bgColor="white"
        />
      </div>

      <!-- Different Backgrounds -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Különböző hátterek</h2>
        
        <div class="space-y-8">
          <!-- Blue Background -->
          <div>
            <h3 class="font-semibold mb-4">Kék háttér</h3>
            <BuchlTestimonials 
              :testimonials="testimonials.slice(0, 3)" 
              bgColor="blue"
              title="Partnereink véleménye"
              subtitle="25 év sikeres együttműködés"
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
                  testimonials
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Testimonial[]
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  kötelező
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  A megjelenítendő vélemények tömbje
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
                  'Mit mondanak ügyfeleink'
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
                  'Partnereink véleménye munkánkról'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Szekció alcíme
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  layout
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'grid' | 'carousel' | 'minimal'
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'grid'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Megjelenítési mód
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
                  'gray'
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  Háttérszín
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
                  Az első vélemény kiemelése (csak grid layout esetén)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Testimonial Interface -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Testimonial Interface</h2>
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  avatar?: string
  rating?: number  // 1-5 érték
}</code>
        </pre>
      </div>

      <!-- Usage Example -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Használati példa</h2>
        <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
<code>&lt;template&gt;
  &lt;BuchlTestimonials
    :testimonials="testimonials"
    layout="carousel"
    bgColor="gray"
    title="Ügyfeleink véleménye"
    subtitle="Miért választanak minket partnereink"
    :featured="true"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const testimonials = [
  {
    quote: 'A BÜCHL Hungaria kiemelkedő partnere vállalatunknak. Professzionális hozzáállásuk és innovatív megoldásaik nagyban hozzájárultak fenntarthatósági céljaink eléréséhez.',
    author: 'Kovács István',
    position: 'Ügyvezető igazgató',
    company: 'GreenTech Kft.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5
  },
  // További vélemények...
]
&lt;/script&gt;</code>
        </pre>
      </div>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Sample testimonials for demonstrations
const testimonials = [
  {
    quote: 'A BÜCHL Hungaria kiemelkedő partnere vállalatunknak. Professzionális hozzáállásuk és innovatív megoldásaik nagyban hozzájárultak fenntarthatósági céljaink eléréséhez.',
    author: 'Kovács István',
    position: 'Ügyvezető igazgató',
    company: 'GreenTech Kft.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    quote: 'Több mint 10 éve dolgozunk együtt a BÜCHL csapatával. Mindig számíthatunk rájuk, ha megbízható és környezetbarát hulladékkezelési megoldásra van szükségünk.',
    author: 'Nagy Éva',
    position: 'Környezetvédelmi vezető',
    company: 'Magyar Ipari Zrt.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    quote: 'A BÜCHL segítségével sikerült jelentősen csökkentenünk ökológiai lábnyomunkat. Szakértelmük és elkötelezettségük példaértékű a szakmában.',
    author: 'Szabó Péter',
    position: 'Termelési igazgató',
    company: 'EcoFactory Kft.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 4
  },
  {
    quote: 'Kiváló együttműködés, pontos szolgáltatás. A BÜCHL Hungaria valóban érti és támogatja ügyfelei igényeit.',
    author: 'Tóth Anna',
    position: 'Beszerzési menedzser',
    company: 'CleanPro Kft.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    quote: 'A hulladékgazdálkodás területén a BÜCHL az egyik legmegbízhatóbb partner. Innovatív megoldásaik segítenek versenyképességünk megőrzésében.',
    author: 'Molnár László',
    position: 'Operatív vezető',
    company: 'Recycle Solutions Zrt.',
    rating: 4
  },
  {
    quote: 'Proaktív hozzáállás, kiváló kommunikáció és megbízható szolgáltatás. A BÜCHL csapata mindig készen áll a kihívásokra.',
    author: 'Kiss Judit',
    position: 'Projekt menedzser',
    company: 'Sustainable Future Kft.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    rating: 5
  }
]
</script>