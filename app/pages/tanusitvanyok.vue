<template>
  <div>
    <!-- Hero Section -->
    <BuchlHero
      v-if="heroBanner"
      :title="heroBanner.cim"
      :subtitle="heroBanner.leiras"
      :image="heroBanner.kepUrl || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop'"
      bg-color="blue"
      :primary-cta="heroBanner.gombok?.[0] ? {
        label: heroBanner.gombok[0].cim,
        to: heroBanner.gombok[0].link
      } : undefined"
      :secondary-cta="heroBanner.gombok?.[1] ? {
        label: heroBanner.gombok[1].cim,
        to: heroBanner.gombok[1].link
      } : undefined"
    />

    <!-- Certificates Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="max-w-6xl mx-auto">
          <!-- Category Navigation -->
          <div class="flex justify-center mb-8">
            <div class="bg-white rounded-lg p-1 shadow-lg flex">
              <button 
                v-for="category in documentCategories"
                :key="category.id"
                @click="selectedCategory = category.id"
                :class="[
                  'flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
                  selectedCategory === category.id 
                    ? 'bg-buchl-blue text-white shadow-md' 
                    : 'text-gray-600 hover:text-buchl-blue'
                ]"
              >
                <UIcon :name="category.icon" class="w-4 h-4 mr-2" />
                {{ $t(`downloads.categories.${category.id}`) }}
              </button>
            </div>
          </div>


          <!-- Certificates Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="certificate in currentCertificates"
              :key="certificate.id"
              class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border hover:border-buchl-blue"
              @click="downloadCertificate(certificate)"
            >
              <!-- Certificate Info -->
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center">
                    <div class="bg-red-50 p-3 rounded-lg mr-4">
                      <UIcon name="i-lucide-file-text" class="w-8 h-8 text-red-500" />
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1 group-hover:text-buchl-blue transition-colors duration-200">
                        {{ certificate.name }}
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ certificate.description }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {{ $t('downloads.status.valid') }}
                  </span>
                  <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-3">{{ certificate.fileSize }}</span>
                    <UIcon name="i-lucide-download" class="w-4 h-4 group-hover:text-buchl-blue transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ $t('downloads.additionalInfo.title') }}
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-buchl-blue mb-3">{{ $t('downloads.additionalInfo.isoCertificates.title') }}</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {{ $t('downloads.additionalInfo.isoCertificates.iso9001') }}
                  </li>
                  <li class="flex items-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {{ $t('downloads.additionalInfo.isoCertificates.iso14001') }}
                  </li>
                  <li class="flex items-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {{ $t('downloads.additionalInfo.isoCertificates.iso45001') }}
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-buchl-blue mb-3">{{ $t('downloads.additionalInfo.emasCertificate.title') }}</h3>
                <p class="text-gray-600">
                  {{ $t('downloads.additionalInfo.emasCertificate.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Certificate {
  id: string
  name: string
  description: string
  filename: string
  fileSize: string
  language: 'hu' | 'en' | 'de'
  category: string
}

// Composables
const localePath = useLocalePath()
const { locale } = useI18n()

// Hero banner adat lekérése Directusból
const { banner: heroBanner } = useBanner(7) // ID: 7 - Letöltések

// SEO meta adatok - using static content like rolunk.vue
useSeoMeta({
  title: 'Letöltések - BÜCHL HUNGARIA',
  description: 'A BÜCHL HUNGARIA Kft. hivatalos dokumentumai: tanúsítványok, engedélyek és céginformációk. ISO 9001, ISO 14001, ISO 45001, EMAS tanúsítványok és egyéb dokumentumok letöltése.',
  keywords: 'BÜCHL HUNGARIA, ISO tanúsítványok, EMAS, letöltések, környezetédelmi tanúsítványok, minőségügyi rendszer'
})

// Reactive state - use global locale instead of separate language selector
const selectedLanguage = computed(() => {
  // Map locale codes to certificate language codes
  const localeMap: Record<string, 'hu' | 'en' | 'de'> = {
    'hu': 'hu',
    'en': 'en',
    'de': 'de'
  }
  return localeMap[locale.value] || 'hu'
})

// Document categories
const documentCategories = ref([
  { id: 'tanusitvanyok', name: 'Tanúsítványok', icon: 'i-lucide-award' },
  { id: 'engedélyek', name: 'Engedélyek', icon: 'i-lucide-file-check' },
  { id: 'céginformációk', name: 'Céginformációk', icon: 'i-lucide-building' }
])

const selectedCategory = ref('tanusitvanyok')

// Certificate and document data with hardcoded content (will be displayed via locale translations)
const allDocuments = ref<Certificate[]>([
  // Tanúsítványok - Hungarian
  {
    id: 'emas-hu',
    name: 'EMAS Tanúsítvány',
    description: 'Eco-Management and Audit Scheme',
    filename: 'EMAS _20280622.pdf',
    fileSize: '131 KB',
    language: 'hu',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-9001-hu',
    name: 'ISO 9001:2015',
    description: 'Minőségirányítási rendszer',
    filename: 'ISO 9001_2015_HU.pdf',
    fileSize: '544 KB',
    language: 'hu',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-14001-hu',
    name: 'ISO 14001:2015',
    description: 'Környezetirányítási rendszer',
    filename: 'ISO 14001_2015_HU.pdf',
    fileSize: '544 KB',
    language: 'hu',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-45001-hu',
    name: 'ISO 45001:2018',
    description: 'Munkavédelmi irányítási rendszer',
    filename: 'ISO 45001_2018_HU.pdf',
    fileSize: '625 KB',
    language: 'hu',
    category: 'tanusitvanyok'
  },
  // Tanúsítványok - English
  {
    id: 'iso-9001-en',
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    filename: 'ISO 9001_2015_angol.pdf',
    fileSize: '541 KB',
    language: 'en',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-14001-en',
    name: 'ISO 14001:2015',
    description: 'Environmental Management System',
    filename: 'ISO 14001_2015_angol.pdf',
    fileSize: '541 KB',
    language: 'en',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-45001-en',
    name: 'ISO 45001:2018',
    description: 'Occupational Health and Safety Management System',
    filename: 'ISO 45001_2018_angol.pdf',
    fileSize: '623 KB',
    language: 'en',
    category: 'tanusitvanyok'
  },
  // Tanúsítványok - German
  {
    id: 'iso-9001-de',
    name: 'ISO 9001:2015',
    description: 'Qualitätsmanagementsystem',
    filename: 'ISO 9001_2015_angol.pdf',
    fileSize: '541 KB',
    language: 'de',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-14001-de',
    name: 'ISO 14001:2015',
    description: 'Umweltmanagementsystem',
    filename: 'ISO 14001_2015_angol.pdf',
    fileSize: '541 KB',
    language: 'de',
    category: 'tanusitvanyok'
  },
  {
    id: 'iso-45001-de',
    name: 'ISO 45001:2018',
    description: 'Arbeitsschutzmanagementsystem',
    filename: 'ISO 45001_2018_angol.pdf',
    fileSize: '623 KB',
    language: 'de',
    category: 'tanusitvanyok'
  },
  // Engedélyek
  {
    id: 'hulladek-katalogus',
    name: 'Hulladékkatalógus',
    description: 'AVV számok szerint a engedélyek alapján',
    filename: 'hulladékkatalógus.xlsx',
    fileSize: '71 KB',
    language: 'hu',
    category: 'engedélyek'
  },
  {
    id: 'engedélyek-attekintese',
    name: 'Engedélyek áttekintése',
    description: 'Teljes engedélyek összefoglalása',
    filename: 'engedélyek_áttekintése.pdf',
    fileSize: '198 KB',
    language: 'hu',
    category: 'engedélyek'
  },
  // Céginformációk
  {
    id: 'emas-2007-elso',
    name: 'EMAS 2007 – Első tanúsítvány',
    description: 'Első EMAS tanúsítvány 2007-ből',
    filename: 'EMAS_2007_első_tanúsítvány.pdf',
    fileSize: '6.2 MB',
    language: 'hu',
    category: 'céginformációk'
  },
  {
    id: 'emas-nyilatkozat-2020',
    name: 'EMAS nyilatkozat 2020',
    description: 'Környezetvédelmi nyilatkozat 2020',
    filename: 'EMAS_nyilatkozat_2020.pdf',
    fileSize: '709 KB',
    language: 'hu',
    category: 'céginformációk'
  },
  {
    id: 'emas-nyilatkozat-2021',
    name: 'EMAS nyilatkozat 2021',
    description: 'Környezetvédelmi nyilatkozat 2021',
    filename: 'EMAS_nyilatkozat_2021.pdf',
    fileSize: '749 KB',
    language: 'hu',
    category: 'céginformációk'
  },
  {
    id: 'emas-nyilatkozat-2022',
    name: 'EMAS nyilatkozat 2022',
    description: 'Környezetvédelmi nyilatkozat 2022',
    filename: 'EMAS_nyilatkozat_2022.pdf',
    fileSize: '1.1 MB',
    language: 'hu',
    category: 'céginformációk'
  },
  {
    id: 'elog-system-prezentacio',
    name: 'ELOG Rendszer prezentáció',
    description: 'ELOG rendszer bemutató prezentáció',
    filename: 'ELOG_System_prezentáció.pdf',
    fileSize: '69 KB',
    language: 'hu',
    category: 'céginformációk'
  },
  {
    id: 'fenntarthatosagi-jelentes',
    name: 'Fenntarthatósági jelentés',
    description: 'Vállalati fenntarthatósági jelentés',
    filename: 'Fenntarthatósági_jelentés.pdf',
    fileSize: '7.6 MB',
    language: 'hu',
    category: 'céginformációk'
  },
  {
    id: 'energetikai-jelentes-2023',
    name: 'Energetikai szakreferens éves jelentés 2023',
    description: 'Energetikai szakreferens éves jelentése 2023',
    filename: 'Energetikai_szakreferens_éves_jelentés_2023.pdf',
    fileSize: '6.1 MB',
    language: 'hu',
    category: 'céginformációk'
  }
])

// Legacy certificate data for backward compatibility
const certificates = computed(() => allDocuments.value.filter(doc => doc.category === 'tanusitvanyok'))

// Computed property to filter documents by category and language
const currentCertificates = computed(() => {
  const documentsInCategory = allDocuments.value.filter(doc => doc.category === selectedCategory.value)
  
  // For certificates, also filter by language
  if (selectedCategory.value === 'tanusitvanyok') {
    return documentsInCategory.filter(doc => doc.language === selectedLanguage.value)
  }
  
  // For other categories, return all documents (they're only in Hungarian)
  return documentsInCategory
})

// Download function
const downloadCertificate = (certificate: Certificate) => {
  let path: string
  
  if (certificate.category === 'tanusitvanyok') {
    path = `/certificates/${certificate.language}/${certificate.filename}`
  } else {
    path = `/certificates/hu/${certificate.category}/${certificate.filename}`
  }
  
  // Create a link element and trigger download
  const link = document.createElement('a')
  link.href = path
  link.download = certificate.filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
