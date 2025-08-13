<template>
  <div>
    <!-- Hero Section -->
    <BuchlHero
      title="Tanúsítványok"
      subtitle="Minőségirányítási és környezetvédelmi tanúsítványaink"
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop"
      bg-color="blue"
      :primary-cta="{
        label: 'Kapcsolat',
        to: '/kapcsolat',
      }"
      :secondary-cta="{
        label: 'Fenntarthatóság',
        to: '/fenntarthatosag',
      }"
    />

    <!-- Certificates Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="max-w-6xl mx-auto">
          <!-- Language Toggle -->
          <div class="flex justify-center mb-12">
            <div class="bg-white rounded-lg p-1 shadow-lg">
              <button 
                @click="selectedLanguage = 'hu'"
                :class="[
                  'px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
                  selectedLanguage === 'hu' 
                    ? 'bg-buchl-blue text-white shadow-md' 
                    : 'text-gray-600 hover:text-buchl-blue'
                ]"
              >
                Magyar
              </button>
              <button 
                @click="selectedLanguage = 'en'"
                :class="[
                  'px-6 py-3 rounded-md text-sm font-medium transition-all duration-200',
                  selectedLanguage === 'en' 
                    ? 'bg-buchl-blue text-white shadow-md' 
                    : 'text-gray-600 hover:text-buchl-blue'
                ]"
              >
                English
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
                    Érvényes
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
              Minőségi és környezetvédelmi tanúsítványaink
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-buchl-blue mb-3">ISO Tanúsítványok</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    ISO 9001:2015 - Minőségirányítási rendszer
                  </li>
                  <li class="flex items-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    ISO 14001:2015 - Környezetirányítási rendszer
                  </li>
                  <li class="flex items-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    ISO 45001:2018 - Munkavédelmi rendszer
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-buchl-blue mb-3">EMAS Tanúsítvány</h3>
                <p class="text-gray-600">
                  A BÜCHL HUNGARIA Kft. büszke arra, hogy Magyarországon az elsők között szerezte meg 
                  az EMAS (Eco-Management and Audit Scheme) tanúsítványt, amely a legmagasabb szintű 
                  környezetirányítási elismerést jelenti az Európai Unióban.
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
  language: 'hu' | 'en'
}

// Meta setup
useHead({
  title: 'Tanúsítványok | BÜCHL HUNGARIA',
  meta: [
    {
      name: 'description',
      content: 'A BÜCHL HUNGARIA Kft. minőségirányítási és környezetvédelmi tanúsítványai. ISO 9001, ISO 14001, ISO 45001 és EMAS tanúsítványok letöltése.'
    }
  ]
})

// Reactive state
const selectedLanguage = ref<'hu' | 'en'>('hu')

// Certificate data
const certificates = ref<Certificate[]>([
  // Hungarian certificates
  {
    id: 'emas-hu',
    name: 'EMAS Tanúsítvány',
    description: 'Eco-Management and Audit Scheme',
    filename: 'EMAS _20280622.pdf',
    fileSize: '131 KB',
    language: 'hu'
  },
  {
    id: 'iso-9001-hu',
    name: 'ISO 9001:2015',
    description: 'Minőségirányítási rendszer',
    filename: 'ISO 9001_2015_HU.pdf',
    fileSize: '544 KB',
    language: 'hu'
  },
  {
    id: 'iso-14001-hu',
    name: 'ISO 14001:2015',
    description: 'Környezetirányítási rendszer',
    filename: 'ISO 14001_2015_HU.pdf',
    fileSize: '544 KB',
    language: 'hu'
  },
  {
    id: 'iso-45001-hu',
    name: 'ISO 45001:2018',
    description: 'Munkavédelmi irányítási rendszer',
    filename: 'ISO 45001_2018_HU.pdf',
    fileSize: '625 KB',
    language: 'hu'
  },
  // English certificates
  {
    id: 'iso-9001-en',
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    filename: 'ISO 9001_2015_angol.pdf',
    fileSize: '541 KB',
    language: 'en'
  },
  {
    id: 'iso-14001-en',
    name: 'ISO 14001:2015',
    description: 'Environmental Management System',
    filename: 'ISO 14001_2015_angol.pdf',
    fileSize: '541 KB',
    language: 'en'
  },
  {
    id: 'iso-45001-en',
    name: 'ISO 45001:2018',
    description: 'Occupational Health and Safety Management System',
    filename: 'ISO 45001_2018_angol.pdf',
    fileSize: '623 KB',
    language: 'en'
  }
])

// Computed property to filter certificates by language
const currentCertificates = computed(() => {
  return certificates.value.filter(cert => cert.language === selectedLanguage.value)
})

// Download function
const downloadCertificate = (certificate: Certificate) => {
  const path = `/certificates/${certificate.language}/${certificate.filename}`
  
  // Create a link element and trigger download
  const link = document.createElement('a')
  link.href = path
  link.download = certificate.filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
