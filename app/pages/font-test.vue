<template>
  <div class="font-test-page">
    <div class="container">
      <header class="page-header">
        <h1>Permanent Marker Betűtípus Teszt</h1>
        <p>A "Mindig egy lépéssel előrébb!" mondat tesztelése különböző méretekben és stílusokban</p>
      </header>

      <div class="font-showcase">
        <!-- Font comparison -->
        <div class="comparison-section">
          <h2>Betűtípus Összehasonlítás</h2>
          
          <div class="comparison-grid">
            <div class="font-sample">
              <h3>Eredeti Permanent Marker</h3>
              <p class="permanent-marker sample-large">Mindig egy lépéssel előrébb!</p>
              <p class="permanent-marker sample-medium">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample">
              <h3>Permanent Marker Mac</h3>
              <p class="permanent-marker-hu sample-large">Mindig egy lépéssel előrébb!</p>
              <p class="permanent-marker-hu sample-medium">Mindig egy lépéssel előrébb!</p>
            </div>
          </div>
        </div>

        <!-- Test sentence -->
        <div class="test-sentence-section">
          <h2>Mac Verzió Méret Variációk</h2>
          
          <!-- Different sizes -->
          <div class="size-variants">
            <div class="font-sample size-small">
              <span class="size-label">Kicsi (1rem)</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample size-medium">
              <span class="size-label">Közepes (1.5rem)</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample size-large">
              <span class="size-label">Nagy (2.5rem)</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample size-xlarge">
              <span class="size-label">Extra Nagy (3.5rem)</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
          </div>
        </div>

        <!-- Color variations -->
        <div class="color-section">
          <h2>Szín Variációk</h2>
          
          <div class="color-variants">
            <div class="font-sample color-primary">
              <span class="color-label">Kék</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample color-secondary">
              <span class="color-label">Piros</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample color-accent">
              <span class="color-label">Narancssárga</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample color-dark">
              <span class="color-label">Sötét</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
          </div>
        </div>

        <!-- Background variations -->
        <div class="background-section">
          <h2>Háttér Variációk</h2>
          
          <div class="background-variants">
            <div class="font-sample bg-light">
              <span class="bg-label">Világos háttér</span>
              <p class="permanent-marker-hu">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample bg-dark">
              <span class="bg-label">Sötét háttér</span>
              <p class="permanent-marker text-white">Mindig egy lépéssel előrébb!</p>
            </div>
            
            <div class="font-sample bg-gradient">
              <span class="bg-label">Gradiens háttér</span>
              <p class="permanent-marker text-white">Mindig egy lépéssel előrébb!</p>
            </div>
          </div>
        </div>

        <!-- Usage examples -->
        <div class="usage-section">
          <h2>Használati Példák</h2>
          
          <div class="usage-examples">
            <div class="example-card">
              <h3 class="permanent-marker-hu">Címsor Példa</h3>
              <p>Így néz ki a betűtípus címsorként használva</p>
            </div>
            
            <div class="example-card">
              <h3>Logo Példa</h3>
              <div class="logo-mockup">
                <span class="permanent-marker logo-text">BuchlApp</span>
              </div>
              <p>A betűtípus logo-ként használva</p>
            </div>
            
            <div class="example-card">
              <h3>Gomb Példa</h3>
              <button class="btn permanent-marker-hu">Mindig egy lépéssel előrébb!</button>
              <p>A betűtípus gombokban használva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO and meta tags
useSeoMeta({
  title: 'Font Test - Permanent Marker',
  description: 'Testing the Permanent Marker font with various sizes, colors and backgrounds'
})

// Define page meta
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
/* Import the Mac-optimized Permanent Marker font */
@font-face {
  font-family: 'Permanent Marker HU';
  src: url('/fonts/PermanentMarker-Mac.otf') format('opentype'),
       url('/fonts/PermanentMarker-Mac.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Original Permanent Marker for comparison */
@font-face {
  font-family: 'Permanent Marker';
  src: url('/fonts/PermanentMarker-Regular.woff2') format('woff2'),
       url('/fonts/PermanentMarker-Regular.woff') format('woff'),
       url('/fonts/PermanentMarker-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.permanent-marker {
  font-family: 'Permanent Marker', cursive, sans-serif;
}

.permanent-marker-hu {
  font-family: 'Permanent Marker HU', cursive, sans-serif;
}

/* Comparison section */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.sample-large {
  font-size: 2.5rem;
  margin: 1rem 0;
}

.sample-medium {
  font-size: 1.5rem;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.font-test-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.font-showcase > div {
  margin-bottom: 3rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.font-showcase h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
}

/* Size variants */
.size-variants {
  display: grid;
  gap: 2rem;
}

.font-sample {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
}

.size-label, .color-label, .bg-label {
  position: absolute;
  top: -8px;
  left: 1rem;
  background: white;
  padding: 0 0.5rem;
  font-size: 0.8rem;
  color: #7f8c8d;
  font-weight: 500;
}

.size-small .permanent-marker-hu {
  font-size: 1rem;
}

.size-medium .permanent-marker-hu {
  font-size: 1.5rem;
}

.size-large .permanent-marker-hu {
  font-size: 2.5rem;
}

.size-xlarge .permanent-marker-hu {
  font-size: 3.5rem;
}

/* Color variations */
.color-variants {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.color-primary .permanent-marker-hu {
  color: #3498db;
  font-size: 2rem;
}

.color-secondary .permanent-marker-hu {
  color: #e74c3c;
  font-size: 2rem;
}

.color-accent .permanent-marker-hu {
  color: #f39c12;
  font-size: 2rem;
}

.color-dark .permanent-marker-hu {
  color: #2c3e50;
  font-size: 2rem;
}

/* Background variations */
.background-variants {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.bg-light {
  background: #ecf0f1;
}

.bg-dark {
  background: #34495e;
  color: white;
}

.bg-gradient {
  background: linear-gradient(45deg, #3498db, #e74c3c);
  color: white;
}

.bg-light .permanent-marker-hu,
.bg-dark .permanent-marker-hu,
.bg-gradient .permanent-marker-hu {
  font-size: 1.8rem;
  margin: 1rem 0;
}

.text-white {
  color: white !important;
}

/* Usage examples */
.usage-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.example-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.example-card h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.example-card h3.permanent-marker-hu {
  font-size: 2rem;
  color: #e74c3c;
}

.logo-mockup {
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 2px solid #e1e8ed;
}

.logo-text {
  font-size: 2.5rem;
  color: #3498db;
}

.btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0;
}

.btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .size-xlarge .permanent-marker-hu {
    font-size: 2.5rem;
  }
  
  .color-variants,
  .background-variants {
    grid-template-columns: 1fr;
  }
  
  .font-showcase > div {
    padding: 1rem;
  }
}
</style>