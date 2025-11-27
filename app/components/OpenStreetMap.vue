<template>
  <ClientOnly>
    <div :id="mapId" class="w-full h-full rounded-lg"></div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import type L from 'leaflet'

const props = defineProps<{
  address: string
  latitude: number
  longitude: number
  zoom?: number
  height?: string
}>()

// Egyedi map ID generálás hogy több térkép is lehessen egy oldalon
const mapId = ref(`map-${Math.random().toString(36).substr(2, 9)}`)
let map: L.Map | null = null
let marker: L.Marker | null = null

onMounted(async () => {
  // Dinamikusan importáljuk a Leaflet-et hogy csak client-side futjon
  const L = (await import('leaflet')).default
  
  // Fix a default marker icon probléma (Leaflet + Webpack/Vite issue)
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
  
  // Kis késleltetés hogy a DOM elem biztosan létezzen
  await nextTick()
  
  // Térkép inicializálása
  map = L.map(mapId.value).setView([props.latitude, props.longitude], props.zoom || 15)
  
  // OpenStreetMap tile layer hozzáadása
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map)
  
  // Marker hozzáadása
  marker = L.marker([props.latitude, props.longitude])
    .addTo(map)
    .bindPopup(`<strong>BÜCHL HUNGARIA</strong><br>${props.address}`)
    .openPopup()
})

onBeforeUnmount(() => {
  // Térkép cleanup
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
/* Biztosítjuk hogy a térkép container megfelelő magasságú legyen */
div[id^="map-"] {
  min-height: 192px; /* 48 * 4 = h-48 */
}
</style>
