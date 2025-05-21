<template>
  <UContainer>
    <UPageHeader 
      title="Színpaletta Teszt"
      description="Egyszerű színmegjelenítési teszt"
    />

    <UPageBody>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-4 border rounded">
          <div 
            class="h-32 mb-4 rounded" 
            style="background-color: #00F189"
          />
          <p>Büchl Zöld</p>
          <p class="font-mono text-sm">#00F189</p>
        </div>
        
        <div class="p-4 border rounded">
          <div 
            class="h-32 mb-4 rounded" 
            style="background-color: #002F5C"
          />
          <p>Saphirblau</p>
          <p class="font-mono text-sm">#002F5C</p>
        </div>
        
        <div class="p-4 border rounded">
          <div 
            class="h-32 mb-4 rounded" 
            style="background-color: #FFB800"
          />
          <p>Figyelmeztető</p>
          <p class="font-mono text-sm">#FFB800</p>
        </div>
        
        <div class="p-4 border rounded">
          <div 
            class="h-32 mb-4 rounded" 
            style="background-color: #D9001B"
          />
          <p>Hiba</p>
          <p class="font-mono text-sm">#D9001B</p>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>