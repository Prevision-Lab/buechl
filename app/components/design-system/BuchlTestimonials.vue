<template>
  <section class="buchl-testimonials py-16 lg:py-24" :class="bgClass">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4" :class="textColorClass">
          {{ title }}
        </h2>
        <p class="text-lg" :class="subTextColorClass">
          {{ subtitle }}
        </p>
      </div>

      <!-- Testimonials -->
      <div v-if="layout === 'grid'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          :class="{ 'border-t-4 border-buchl-green': featured && index === 0 }"
        >
          <!-- Quote Icon -->
          <div class="mb-6">
            <UIcon name="i-mdi-format-quote-open" class="w-12 h-12 text-buchl-green" />
          </div>

          <!-- Quote Text -->
          <p class="text-gray-700 mb-6 italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author Info -->
          <div class="flex items-center">
            <img
              v-if="testimonial.avatar"
              :src="testimonial.avatar"
              :alt="testimonial.author"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
              <p class="text-sm text-gray-600">{{ testimonial.position }}</p>
              <p class="text-sm text-gray-500">{{ testimonial.company }}</p>
            </div>
          </div>

          <!-- Rating -->
          <div v-if="testimonial.rating" class="mt-4 flex gap-1">
            <UIcon
              v-for="star in 5"
              :key="star"
              name="i-mdi-star"
              class="w-5 h-5"
              :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
            />
          </div>
        </div>
      </div>

      <!-- Carousel Layout -->
      <div v-else-if="layout === 'carousel'" class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="max-w-3xl mx-auto text-center">
                <!-- Large Quote Icon -->
                <UIcon name="i-mdi-format-quote-open" class="w-16 h-16 text-buchl-green mx-auto mb-6" />

                <!-- Quote Text -->
                <p class="text-xl lg:text-2xl text-gray-700 mb-8 italic">
                  "{{ testimonial.quote }}"
                </p>

                <!-- Author Info -->
                <div class="flex items-center justify-center">
                  <img
                    v-if="testimonial.avatar"
                    :src="testimonial.avatar"
                    :alt="testimonial.author"
                    class="w-16 h-16 rounded-full mr-4"
                  />
                  <div class="text-left">
                    <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
                    <p class="text-gray-600">{{ testimonial.position }}</p>
                    <p class="text-gray-500">{{ testimonial.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          :disabled="currentSlide === 0"
        >
          <UIcon name="i-mdi-chevron-left" class="w-6 h-6" />
        </button>

        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          :disabled="currentSlide === testimonials.length - 1"
        >
          <UIcon name="i-mdi-chevron-right" class="w-6 h-6" />
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="currentSlide = index"
            class="w-2 h-2 rounded-full transition-all"
            :class="currentSlide === index ? 'bg-buchl-blue w-8' : 'bg-gray-300'"
          />
        </div>
      </div>

      <!-- Minimal Layout -->
      <div v-else-if="layout === 'minimal'" class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="border-l-4 border-buchl-green pl-6"
          >
            <p class="text-lg text-gray-700 mb-4">
              {{ testimonial.quote }}
            </p>
            <div class="flex items-center">
              <div>
                <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
                <p class="text-sm text-gray-600">
                  {{ testimonial.position }} · {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  avatar?: string
  rating?: number
}

interface Props {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  layout?: 'grid' | 'carousel' | 'minimal'
  bgColor?: 'white' | 'gray' | 'blue'
  featured?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Mit mondanak ügyfeleink',
  subtitle: 'Partnereink véleménye munkánkról',
  layout: 'grid',
  bgColor: 'gray',
  featured: false
})

// Carousel state
const currentSlide = ref(0)

// Background class based on bgColor
const bgClass = computed(() => {
  const classes = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-buchl-blue'
  }
  return classes[props.bgColor] || 'bg-gray-50'
})

// Text color classes based on background
const textColorClass = computed(() => {
  return props.bgColor === 'blue' ? 'text-white' : 'text-gray-900'
})

const subTextColorClass = computed(() => {
  return props.bgColor === 'blue' ? 'text-white/80' : 'text-gray-600'
})

// Carousel navigation
const nextSlide = () => {
  if (currentSlide.value < props.testimonials.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

// Auto-play carousel (optional)
/*
onMounted(() => {
  if (props.layout === 'carousel') {
    setInterval(() => {
      if (currentSlide.value < props.testimonials.length - 1) {
        currentSlide.value++
      } else {
        currentSlide.value = 0
      }
    }, 5000)
  }
})
*/
</script>