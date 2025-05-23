<template>
  <section class="buchl-project-showcase py-16 lg:py-24" :class="bgClass">
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

      <!-- Projects Grid -->
      <div :class="gridClass">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          :class="{ 'lg:col-span-2 lg:row-span-2': featured && index === 0 }"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden" :class="featured && index === 0 ? 'h-96 lg:h-full' : 'h-64'">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <!-- Project Info -->
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-sm mb-2">{{ project.location }}</p>
            <p class="text-sm opacity-90">{{ project.description }}</p>
            
            <!-- Project Stats -->
            <div v-if="project.stats" class="mt-4 grid grid-cols-2 gap-4">
              <div v-for="stat in project.stats" :key="stat.label">
                <span class="block text-2xl font-bold text-buchl-green">{{ stat.value }}</span>
                <span class="text-xs">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div v-if="showCTA" class="text-center mt-12">
        <UButton
          :color="ctaColor"
          size="lg"
          class="rounded-none"
          @click="$emit('cta-click')"
        >
          {{ ctaText }}
          <template #trailing>
            <UIcon name="i-mdi-arrow-right" class="w-5 h-5" />
          </template>
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProjectStats {
  label: string
  value: string
}

interface Project {
  title: string
  location: string
  description: string
  image: string
  stats?: ProjectStats[]
}

interface Props {
  title?: string
  subtitle?: string
  projects: Project[]
  featured?: boolean
  bgColor?: 'white' | 'gray' | 'blue'
  columns?: 2 | 3 | 4
  showCTA?: boolean
  ctaText?: string
  ctaColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Referenciáink',
  subtitle: 'Büszkék vagyunk megvalósított projektjeinkre',
  featured: false,
  bgColor: 'white',
  columns: 3,
  showCTA: true,
  ctaText: 'Összes projekt',
  ctaColor: 'primary'
})

// Background class based on bgColor
const bgClass = computed(() => {
  const classes = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-buchl-blue'
  }
  return classes[props.bgColor] || 'bg-white'
})

// Text color classes based on background
const textColorClass = computed(() => {
  return props.bgColor === 'blue' ? 'text-white' : 'text-gray-900'
})

const subTextColorClass = computed(() => {
  return props.bgColor === 'blue' ? 'text-white/80' : 'text-gray-600'
})

// Grid class based on columns prop
const gridClass = computed(() => {
  const baseClass = 'grid gap-6'
  const columnsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }
  return `${baseClass} ${columnsClass[props.columns]}`
})

// Emit event
defineEmits<{
  'cta-click': []
}>()
</script>