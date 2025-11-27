export default defineNuxtPlugin(() => {
  // Leaflet CSS betöltése
  if (process.client) {
    import('leaflet/dist/leaflet.css')
  }
})
