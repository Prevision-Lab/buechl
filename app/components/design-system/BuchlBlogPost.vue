<template>
  <article class="flex flex-col h-full">
    <UCard 
      class="h-full"
      :ui="{
        root: 'h-full shadow-none ring-1 ring-neutral-300 hover:shadow-sm transition-all duration-300 relative cursor-pointer divide-y-0 group rounded-none',
        header: image ? 'p-0 sm:p-0' : undefined,
        body: 'rounded-none',
      }"
    >
      <template v-if="image" #header>
        <div class="overflow-hidden">
          <NuxtLink :to="to" class="block">
            <div class="aspect-[16/9] overflow-hidden">
              <img 
                :src="image" 
                :alt="alt || title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              >
            </div>
          </NuxtLink>
          <!-- Category Badge -->
          <div v-if="category" class="absolute top-4 left-4">
            <span class="inline-block px-4 py-1.5 bg-buchl-blue text-white text-sm font-medium rounded-full">
              {{ category }}
            </span>
          </div>
        </div>
      </template>
      
      <template #default>
          <!-- Metadata -->
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
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover/link:text-primary-500 transition-colors line-clamp-2">
                {{ title }}
              </h3>
            </NuxtLink>
            
            <p v-if="description" class="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3">
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
      </template>
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
</script>
