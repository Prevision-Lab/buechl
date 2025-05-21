<template>
  <div>
    <h3 class="text-xl font-semibold mb-4">{{ name }}</h3>
    <div class="flex flex-wrap gap-0">
      <div
        v-for="shade in shades"
        :key="shade.value"
        class="flex-1 min-w-[120px]"
      >
        <div
          class="h-16 flex items-center justify-center"
          :style="{ backgroundColor: shade.hex }"
        >
          <span 
            class="text-xs font-medium"
            :style="{ color: shade.isDark ? '#FFFFFF' : '#000000' }"
          >
            {{ shade.value }}
          </span>
        </div>
        <div class="p-2 text-center bg-gray-50 dark:bg-gray-800">
          <p class="text-xs font-mono">{{ shade.hex }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  baseColor: string
}

const props = defineProps<Props>()

// Színárnyalatok kinyerése a tailwind konfigból
const shades = computed(() => {
  const values = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
  
  return values.map(value => {
    const isDark = parseInt(value) >= 500
    
    // A hex értékeket a CSS változókból kellene kinyerni
    // Most placeholder értékek
    const hexMap: Record<string, Record<string, string>> = {
      buchl: {
        '50': '#e6f4ea',
        '100': '#cce9d5',
        '200': '#99d3ab',
        '300': '#66bd82',
        '400': '#33a758',
        '500': '#00F189',
        '600': '#006937',
        '700': '#004d26',
        '800': '#003319',
        '900': '#001a0d',
        '950': '#000d06',
      },
      sapphire: {
        '50': '#e6f0f8',
        '100': '#cce1f1',
        '200': '#99c3e3',
        '300': '#66a5d5',
        '400': '#3387c7',
        '500': '#002F5C',
        '600': '#002549',
        '700': '#001c38',
        '800': '#001224',
        '900': '#000912',
        '950': '#000509',
      }
    }
    
    return {
      value,
      bgClass: `bg-${props.baseColor}-${value}`,
      hex: hexMap[props.baseColor]?.[value] || '#000000',
      isDark
    }
  })
})
</script>