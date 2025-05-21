<template>
  <article>
    <UCard 
      class="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
      :ui="{
        divide: '',
        body: { 
          base: 'p-0'
        }
      }"
    >
      <div class="flex flex-col md:flex-row gap-0 md:gap-6 p-6">
        <!-- Image -->
        <NuxtLink 
          v-if="image" 
          :to="to"
          class="relative overflow-hidden rounded-lg mb-4 md:mb-0 md:w-2/5 lg:w-1/3 flex-shrink-0"
        >
          <div class="aspect-video md:aspect-[4/3] lg:aspect-video">
            <img 
              :src="image" 
              :alt="alt || title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            >
          </div>
          <!-- Category Badge -->
          <div v-if="category" class="absolute top-4 left-4">
            <UBadge :color="getBadgeColor(category)" variant="subtle" size="sm" class="rounded-full">
              {{ category }}
            </UBadge>
          </div>
        </NuxtLink>
        
        <!-- Content -->
        <div class="flex-1 flex flex-col">
          <!-- Author & Date -->
          <div class="flex items-center gap-3 mb-3">
            <div v-if="author" class="flex items-center gap-2">
              <UAvatar
                v-if="author.avatar"
                :src="author.avatar"
                :alt="author.name"
                size="xs"
              />
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                {{ author.name }}
              </span>
            </div>
            
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span v-if="author">•</span>
              <time v-if="date" :datetime="dateTime" class="ml-1">{{ formattedDate }}</time>
              <span v-if="readingTime" class="ml-2">• {{ readingTime }}</span>
            </div>
          </div>
          
          <!-- Title & Description -->
          <div class="flex-1">
            <NuxtLink :to="to" class="block group/link">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white group-hover/link:text-primary-500 transition-colors">
                {{ title }}
              </h3>
            </NuxtLink>
            
            <p v-if="description" class="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2 md:line-clamp-3">
              {{ description }}
            </p>
          </div>
          
          <!-- Footer Actions -->
          <div v-if="$slots.footer || showReadMore" class="mt-4">
            <slot name="footer">
              <NuxtLink 
                v-if="showReadMore"
                :to="to"
                class="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 group/read"
              >
                {{ readMoreText }}
                <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4 ml-1 group-hover/read:translate-x-0.5 transition-transform" />
              </NuxtLink>
            </slot>
          </div>
        </div>
      </div>
    </UCard>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Author {
  name: string
  avatar?: string
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  alt: String,
  to: {
    type: String,
    required: true
  },
  category: String,
  author: Object as () => Author,
  date: String,
  readingTime: String,
  showReadMore: {
    type: Boolean,
    default: true
  },
  readMoreText: {
    type: String,
    default: 'Read more'
  }
})

const dateTime = computed(() => {
  if (!props.date) return ''
  return new Date(props.date).toISOString()
})

const formattedDate = computed(() => {
  if (!props.date) return ''
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
  return new Date(props.date).toLocaleDateString('en-US', options)
})

// Badge color mapping based on category
const getBadgeColor = (category: string) => {
  const colorMap: Record<string, string> = {
    'Fenntarthatóság': 'green',
    'Környezetvédelem': 'green',
    'Karrier': 'primary',
    'Innováció': 'purple',
    'Technológia': 'blue',
    'Cégcsoport': 'gray',
    'Újrahasznosítás': 'teal'
  }
  return colorMap[category] || 'gray'
}
</script>