<template>
  <div v-if="images && images.length > 0" class="mt-12 pt-8 border-t border-gray-200">
    <h3 class="text-2xl font-bold text-buchl-blue mb-8 text-center">További képek</h3>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="cursor-pointer group"
        @click="openModal(index)"
      >
        <img 
          :src="image.src" 
          :alt="image.alt || `Galéria kép ${index + 1}`"
          class="w-full h-32 object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div class="relative max-w-4xl max-h-full">
        <img 
          :src="images[currentImageIndex].src" 
          :alt="images[currentImageIndex].alt || `Galéria kép ${currentImageIndex + 1}`"
          class="max-w-full max-h-full object-contain"
        />
        
        <!-- Bezáró gomb -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
        >
          <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
        </button>

        <!-- Navigációs gombok -->
        <button 
          v-if="images.length > 1"
          @click.stop="prevImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
        >
          <UIcon name="i-heroicons-chevron-left" class="w-6 h-6" />
        </button>
        
        <button 
          v-if="images.length > 1"
          @click.stop="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
        >
          <UIcon name="i-heroicons-chevron-right" class="w-6 h-6" />
        </button>

        <!-- Kép számláló -->
        <div 
          v-if="images.length > 1"
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm"
        >
          {{ currentImageIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface GalleryImage {
  src: string
  alt?: string
}

const props = defineProps<{
  images: GalleryImage[]
}>()

const isModalOpen = ref(false)
const currentImageIndex = ref(0)

const openModal = (index: number) => {
  currentImageIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value > 0 
    ? currentImageIndex.value - 1 
    : props.images.length - 1
}

const nextImage = () => {
  currentImageIndex.value = currentImageIndex.value < props.images.length - 1 
    ? currentImageIndex.value + 1 
    : 0
}

// Escape billentyű kezelése
const handleKeyDown = (event: KeyboardEvent) => {
  if (!isModalOpen.value) return
  
  if (event.key === 'Escape') {
    closeModal()
  } else if (event.key === 'ArrowLeft') {
    prevImage()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = 'auto'
})
</script>