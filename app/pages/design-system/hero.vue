<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hero Komponens</h1>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Hero szekció</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          A Hero komponens a weboldal kiemelt szekciója, ami feltűnő megjelenést biztosít a főoldalon vagy landing oldalon.
        </p>
      </div>

      <!-- Hero Variations -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Hero variációk</h3>
        
        <div class="space-y-12">
          <!-- Single CTA -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Egyetlen CTA gombbal</h3>
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="Egy ötlettel előrébb"
                subtitle="Innováció találkozik a fenntarthatósággal."
                image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=600&fit=crop"
                :primary-cta="{
                  label: 'Kapcsolatfelvétel',
                  to: '/kapcsolat'
                }"
              />
            </div>
            <CodeBlock :code="singleCtaCode" language="vue" />
          </div>

          <!-- External Link -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Külső hivatkozással</h3>
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="Karrier a BÜCHL-nél"
                subtitle="Legyen csapatunk tagja."
                image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=600&fit=crop"
                :primary-cta="{
                  label: 'Állásajánlatok',
                  href: 'https://karrier.buchl.hu'
                }"
              />
            </div>
            <CodeBlock :code="externalLinkCode" language="vue" />
          </div>

          <!-- Green Background with Solid Button -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Zöld háttérrel - Tömör gomb</h3>
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="A fenntarthatóság a küldetésünk"
                subtitle="Együtt egy tisztább jövőért."
                image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1600&h=600&fit=crop"
                bg-color="green"
                :primary-cta="{
                  label: 'Fenntarthatóság',
                  to: '/fenntarthatosag'
                }"
              />
            </div>
            <CodeBlock :code="greenSolidCode" language="vue" />
          </div>

          <!-- Green Background with Outline Button -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Zöld háttérrel - Fehér konturos gomb</h3>
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="Innovatív. Sokszínű. Családias."
                subtitle="Fenntartható megoldások egy jobb világért."
                image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&h=600&fit=crop"
                bg-color="green"
                :primary-cta="{
                  label: 'Tudjon meg többet',
                  to: '/rolunk'
                }"
                :secondary-cta="{
                  label: 'Küldetésünk',
                  to: '/kuldetes'
                }"
              />
            </div>
            <CodeBlock :code="greenOutlineCode" language="vue" />
          </div>

          <!-- Permanent Marker Title Version -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Permanent Marker betűtípussal</h3>
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="BÜCHL - Egy ötlettel tovább"
                subtitle="Fenntartható megoldások innovatív szemlélettel."
                image="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=1600&h=600&fit=crop"
                bg-color="green"
                title-font="permanent-marker"
                :primary-cta="{
                  label: 'Kapcsolatfelvétel',
                  to: '/kapcsolat'
                }"
                :secondary-cta="{
                  label: 'Rólunk',
                  to: '/rolunk'
                }"
              />
            </div>
            <CodeBlock :code="permanentMarkerCode" language="vue" />
          </div>

          <!-- Skewed Hero Version -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ferde háttérrel (Skewed)</h3>
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="Karrier a Büchlnél"
                subtitle="INNOVATÍV. SOKSZÍNŰ. CSALÁDIAS."
                image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&h=800&fit=crop"
                bg-color="blue"
                title-font="permanent-marker"
                :skewed="true"
                :primary-cta="{
                  label: 'Karrier lehetőségek',
                  to: '/karrier'
                }"
              />
            </div>
            <CodeBlock :code="skewedCode" language="vue" />
          </div>

          <!-- Skewed Video Hero Version -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ferde háttérrel videóval</h3>
            
            <div class="rounded-lg overflow-hidden shadow-lg mb-4">
              <BuchlHero
                title="Innováció és fenntarthatóság"
                subtitle="25 ÉVE A KÖRNYEZETÉRT"
                image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&h=800&fit=crop"
                :video-url="industrialVideoUrl"
                bg-color="green"
                title-font="permanent-marker"
                :skewed="true"
                :primary-cta="{
                  label: 'Fenntarthatóság',
                  to: '/fenntarthatosag'
                }"
                :secondary-cta="{
                  label: 'Projektek',
                  to: '/projektek'
                }"
              />
            </div>
            
            <CodeBlock :code="skewedVideoCode" language="vue" />
          </div>

          <!-- Tipp a YouTube videó használatához -->
          <div class="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">💡 Tipp: YouTube videó használata</h3>
            <p class="text-gray-700 mb-4">
              A YouTube videó beágyazásához (mint például a <a href="https://www.youtube.com/watch?v=_sNenNc3_2Q" target="_blank" class="text-blue-600 underline">Hungaroplast recycling videó</a>), az alábbi módszereket használhatod:
            </p>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>Töltsd le a videót és helyezd el a <code class="bg-gray-200 px-1 rounded">/public/videos/</code> mappában</li>
              <li>Használd YouTube letöltő szolgáltatásokat (pl. y2mate.com)</li>
              <li>Ha már van lokális videófájlod, használd így:</li>
            </ol>
            <div class="mt-4">
              <CodeBlock :code="localVideoExample" language="vue" />
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Ipari témájú videó URL - használjunk egy működő Google sample videót
// Ez egy professzionális megjelenésű videó, ami jól illik az ipari témához
const industrialVideoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

// Alternatív videó opciók, ha változtatni szeretnél:
// - ForBiggerEscapes: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
// - ForBiggerJoyrides: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
// - Sintel: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'

// Saját videó használata:
// 1. Helyezd el a videót: /public/videos/recycling-plant.mp4
// 2. Használd így: const industrialVideoUrl = '/videos/recycling-plant.mp4'

// YouTube videó beágyazás
const youtubeVideoId = '_sNenNc3_2Q'
const youtubeEmbedHtml = ``  // Ideiglenesen üres, amíg működő megoldást találunk

// Alternatív megoldás: töltsd le a videót és használd lokálisan
// 1. Látogass el: https://www.y2mate.com/
// 2. Illeszd be: https://www.youtube.com/watch?v=_sNenNc3_2Q
// 3. Töltsd le MP4 formátumban
// 4. Helyezd el itt: /public/videos/hungaroplast-recycling.mp4
// 5. Használd: const hungaroplastVideoUrl = '/videos/hungaroplast-recycling.mp4'

// Példa lokális videó használatára
const localVideoExample = `<BuchlHero
  title="Hungaroplast recikling"
  subtitle="A FENNTARTHATÓ JÖVŐ SZOLGÁLATÁBAN"
  image="/images/hungaroplast-poster.jpg"
  :videoUrl="/videos/hungaroplast-recycling.mp4"
  bgColor="green"
  titleFont="permanent-marker"
  :skewed="true"
  :primaryCta="{
    label: 'Kapcsolatfelvétel',
    to: '/kapcsolat'
  }"
/>`


// Code examples
const singleCtaCode = `<BuchlHero
  title="Egy ötlettel előrébb"
  subtitle="Innováció találkozik a fenntarthatósággal."
  image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=600&fit=crop"
  :primary-cta="{
    label: 'Kapcsolatfelvétel',
    to: '/kapcsolat'
  }"
/>`

const externalLinkCode = `<BuchlHero
  title="Karrier a BÜCHL-nél"
  subtitle="Legyen csapatunk tagja."
  image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=600&fit=crop"
  :primary-cta="{
    label: 'Állásajánlatok',
    href: 'https://karrier.buchl.hu'
  }"
/>`

const greenSolidCode = `<BuchlHero
  title="A fenntarthatóság a küldetésünk"
  subtitle="Együtt egy tisztább jövőért."
  image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1600&h=600&fit=crop"
  bgColor="green"
  :primary-cta="{
    label: 'Fenntarthatóság',
    to: '/fenntarthatosag'
  }"
/>`

const greenOutlineCode = `<BuchlHero
  title="Innovatív. Sokszínű. Családias."
  subtitle="Fenntartható megoldások egy jobb világért."
  image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&h=600&fit=crop"
  bgColor="green"
  :primary-cta="{
    label: 'Tudjon meg többet',
    to: '/rolunk'
  }"
  :secondary-cta="{
    label: 'Küldetésünk',
    to: '/kuldetes'
  }"
/>`

const permanentMarkerCode = `<BuchlHero
  title="BÜCHL - Egy ötlettel tovább"
  subtitle="Fenntartható megoldások innovatív szemlélettel."
  image="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=1600&h=600&fit=crop"
  bgColor="green"
  titleFont="permanent-marker"
  :primary-cta="{
    label: 'Kapcsolatfelvétel',
    to: '/kapcsolat'
  }"
  :secondary-cta="{
    label: 'Rólunk',
    to: '/rolunk'
  }"
/>`

const skewedCode = `<BuchlHero
  title="Karrier a Büchlnél"
  subtitle="INNOVATÍV. SOKSZÍNŰ. CSALÁDIAS."
  image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&h=800&fit=crop"
  bgColor="blue"
  titleFont="permanent-marker"
  :skewed="true"
  :primary-cta="{
    label: 'Karrier lehetőségek',
    to: '/karrier'
  }"
/>`

const skewedVideoCode = `<BuchlHero
  title="Innováció és fenntarthatóság"
  subtitle="25 ÉVE A KÖRNYEZETÉRT"
  image="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&h=800&fit=crop"
  :videoUrl="videoUrl"
  bgColor="green"
  titleFont="permanent-marker"
  :skewed="true"
  :primary-cta="{
    label: 'Fenntarthatóság',
    to: '/fenntarthatosag'
  }"
  :secondary-cta="{
    label: 'Projektek',
    to: '/projektek'
  }"
/>

// A videoUrl változót így definiáljuk:
// Professzionális HD videó
const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

// Vagy használhatod a saját videód:
// const videoUrl = '/videos/recycling-plant.mp4'`

</script>