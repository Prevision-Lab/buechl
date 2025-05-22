<template>
  <UCard
    :ui="{
      root: 'h-full ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-buchl-blue dark:hover:ring-buchl-blue transition-all duration-300 hover:shadow-lg',
      body: 'p-6 sm:p-8 h-full flex flex-col',
    }"
  >
    <!-- Icon vagy Kép -->
    <div class="mb-6 flex-shrink-0">
      <div v-if="icon" class="inline-flex items-center justify-center w-24 h-24 rounded-lg bg-buchl-blue/10">
        <UIcon :name="icon" class="text-buchl-blue" style="width: 64px; height: 64px;" />
      </div>
      <img v-else-if="image" :src="image" :alt="imageAlt" class="w-full h-48 object-cover rounded-lg" />
    </div>

    <!-- Tartalom -->
    <div class="flex-grow">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ description }}
      </p>
      
      <!-- Lista (opcionális) -->
      <ul v-if="features && features.length > 0" class="space-y-2">
        <li v-for="feature in features" :key="feature" class="flex items-start">
          <UIcon name="i-lucide-check" class="text-buchl-green mr-2 flex-shrink-0 mt-0.5" style="width: 20px; height: 20px;" />
          <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- CTA gomb -->
    <div v-if="cta" class="mt-6 flex-shrink-0">
      <UButton
        :label="cta.label"
        :to="cta.to"
        :href="cta.href"
        color="white"
        size="lg"
        class="w-full sm:w-auto rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90"
        :icon="cta.icon || 'i-heroicons-arrow-right'"
        :trailing="true"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface ServiceCta {
  label: string
  to?: string
  href?: string
  icon?: string
}

interface Props {
  title: string
  description: string
  icon?: string
  image?: string
  imageAlt?: string
  features?: string[]
  cta?: ServiceCta
}

withDefaults(defineProps<Props>(), {
  imageAlt: 'Szolgáltatás kép'
})
</script>