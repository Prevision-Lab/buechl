<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero szekció -->
    <section class="py-16 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
            Események
          </span>
          <h1 class="text-4xl font-bold mb-4">
            VBS Junior Kör látogatása
          </h1>
          <div class="flex items-center text-white/80 text-sm mb-6">
            <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-2" />
            <span>2025. szeptember 12.</span>
            <span class="mx-3">•</span>
            <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-2" />
            <span>3 perc olvasás</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tartalom szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-700 mb-6">
            Szeptember 12-én örömmel láttuk vendégül a VBS Junior Kört Németországból, akik telephelyünkön ismerkedhettek meg hulladékgazdálkodási technológiáinkkal.
          </p>
          
          <div class="my-8">
            <img 
              src="/media/images/02.jpg" 
              alt="VBS Junior Kör látogatás"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <p>
            Másnap délelőtt az Audi Hungaria telephelyén belül mutattuk be számukra cégünk belső logisztikai folyamatait.
          </p>
          
          <p>
            A Bajor Hulladékgazdálkodási Vállalkozások Szövetsége (VBS) 1973-as alapítása óta képviseli a bajorországi középvállalkozásokból álló magán hulladékgazdálkodási ágazatot. Fő céljuk a környezetbarát hulladékkezelés és a fontos erőforrások fenntartható biztosítása.
          </p>
          
          <p>
            A VBS Junior Kör lehetőséget ad a jövő generációjának – a családi vállalkozások utódainak és a leendő vezetőknek –, hogy fiatalon betekintést nyerjenek az ágazat működésébe, tudást és tapasztalatot szerezzenek, valamint hosszú távú kapcsolatokat építsenek.
          </p>
          
          <p>
            Köszönjük a látogatást, és büszkék vagyunk rá, hogy hozzájárulhattunk a jövő szakembereinek fejlődéséhez!
          </p>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-200">
          <UButton
            to="/hirek"
            variant="outline"
            color="primary"
            class="rounded-none"
            icon="i-heroicons-arrow-left"
          >
            Vissza a hírekhez
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// VBS Junior Kör látogatása hír részletes oldala
</script>