<template>
  <div>
    <!-- Hero szekció -->
    <BuchlHero
      title="Kapcsolat"
      subtitle="Vegye fel velünk a kapcsolatot! Szakértő csapatunk készséggel áll rendelkezésére."
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop"
      bg-color="blue"
    />

    <!-- Gyors elérhetőségek szekció -->
    <section class="py-8 bg-buchl-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-4">
          <h2 class="text-2xl font-bold">Gyors elérhetőségek</h2>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-phone" class="text-buchl-green" style="width: 24px; height: 24px;" />
              <span class="text-lg font-semibold">Azonnali kapcsolat:</span>
              <a href="tel:+3696516620" class="text-buchl-green hover:text-white transition-colors text-lg font-bold">+36 96 516 620</a>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-envelope" class="text-buchl-green" style="width: 24px; height: 24px;" />
              <span class="text-lg font-semibold">Email:</span>
              <a href="mailto:info@buechl.hu" class="text-buchl-green hover:text-white transition-colors text-lg font-bold">info@buechl.hu</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kapcsolat információk és űrlap szekció -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Kapcsolat információk -->
          <div>
            <h2 class="text-3xl font-bold text-buchl-blue mb-8">Közvetlen kapcsolat szakertőinkkel</h2>
            
            <!-- Központi iroda -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-building-office-2" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Központi iroda
              </h3>
              <div class="space-y-2">
                <p class="font-medium text-buchl-blue">Lipóth Szilvia</p>
                <p class="text-gray-700 text-sm">Ügyvezetői asszisztens</p>
                <div class="flex items-center space-x-4">
                  <a href="tel:+3696516620" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                    <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                    +36 96 516 620
                  </a>
                  <a href="mailto:info@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                    <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                    info@buechl.hu
                  </a>
                </div>
              </div>
            </div>

            <!-- MOHU ügyintézés -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-user-circle" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                MOHU ügyintézés
              </h3>
              <div class="flex items-center space-x-4">
                <a href="tel:+3620/559-7004" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                  +36 20/559-7004
                </a>
                <a href="mailto:kereskedelem@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                  kereskedelem@buechl.hu
                </a>
              </div>
            </div>

            <!-- Értékesítés -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-chart-bar" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Értékesítés
              </h3>
              <div class="space-y-2">
                <p class="font-medium text-buchl-blue">Kozicz Pál</p>
                <p class="text-gray-700 text-sm">Kereskedelmi vezető</p>
                <div class="flex items-center space-x-4">
                  <a href="tel:+36205597002" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                    <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                    +36 20 559 7002
                  </a>
                  <a href="mailto:pkozicz@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                    <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                    pkozicz@buechl.hu
                  </a>
                </div>
              </div>
            </div>

            <!-- Környezetvédelem -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-globe-alt" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Környezetvédelem
              </h3>
              <div class="flex items-center space-x-4">
                <a href="tel:+36203271151" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                  +36 20 327-1151
                </a>
                <a href="mailto:kornyezetvedelem@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                  kornyezetvedelem@buechl.hu
                </a>
              </div>
            </div>

            <!-- Hulladékadat-szolgáltatás -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-document-text" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Hulladékadat-szolgáltatás
              </h3>
              <p class="text-gray-700 text-sm mb-2">Hulladékkezelési nyilvántartások, jelentések</p>
              <div class="flex items-center space-x-4">
                <a href="tel:+36203271151" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                  +36 20 327-1151
                </a>
                <a href="mailto:kornyezetvedelem@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                  kornyezetvedelem@buechl.hu
                </a>
              </div>
            </div>

            <!-- Logisztika -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-truck" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Logisztika
              </h3>
              <div class="flex items-center space-x-4">
                <a href="tel:+36202914943" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                  +36 20 291-4943
                </a>
                <a href="mailto:szallitas@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                  szallitas@buechl.hu
                </a>
              </div>
            </div>

            <!-- Műszaki vezetés -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-cog" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Műszaki vezetés
              </h3>
              <div class="space-y-2">
                <p class="font-medium text-buchl-blue">Lövész Tamás</p>
                <p class="text-gray-700 text-sm">Operatív vezető</p>
                <div class="flex items-center space-x-4">
                  <a href="tel:+36209924560" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                    <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                    +36 20 992-4560
                  </a>
                  <a href="mailto:tlovesz@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                    <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                    tlovesz@buechl.hu
                  </a>
                </div>
              </div>
            </div>

            <!-- Könyvelés -->
            <div class="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-semibold text-buchl-blue mb-4 flex items-center">
                <UIcon name="i-heroicons-calculator" class="text-buchl-green mr-2" style="width: 24px; height: 24px;" />
                Könyvelés
              </h3>
              <p class="text-gray-700 text-sm mb-2">Számlázás, pénzügyi kérdések</p>
              <div class="flex items-center space-x-4">
                <a href="tel:+36204830595" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-phone" class="mr-1" style="width: 16px; height: 16px;" />
                  +36 20 483-0595
                </a>
                <a href="mailto:konyveles@buechl.hu" class="flex items-center text-buchl-blue hover:text-buchl-green transition-colors">
                  <UIcon name="i-heroicons-envelope" class="mr-1" style="width: 16px; height: 16px;" />
                  konyveles@buechl.hu
                </a>
              </div>
            </div>
          </div>

          <!-- Kapcsolatfelvételi űrlap -->
          <div class="bg-gray-50 p-8 rounded-lg h-fit">
            <h2 class="text-3xl font-bold text-buchl-blue mb-8">Írjon nekünk</h2>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Név *</label>
                  <UInput placeholder="Az Ön neve" size="lg" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Cég neve *</label>
                  <UInput placeholder="Vállalat neve" size="lg" />
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">E-mail cím *</label>
                  <UInput placeholder="pelda@email.com" type="email" size="lg" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Telefonszám</label>
                  <UInput placeholder="+36 30 123 4567" type="tel" size="lg" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Üzenet *</label>
                <UTextarea 
                  placeholder="Írja le kérdését vagy kérését részletesen..."
                  :rows="5"
                  size="lg"
                  class="w-full"
                />
              </div>

              <div class="flex items-start">
                <UCheckbox class="mt-1" />
                <div class="ml-3">
                  <label class="text-sm text-gray-700">
                    Elfogadom az <a href="/adatvedelem" class="text-buchl-blue hover:text-buchl-green underline">adatvédelmi szabályzatot</a> 
                    és hozzájárulok adataim kezeléséhez. *
                  </label>
                </div>
              </div>

              <UButton 
                type="submit"
                size="lg"
                color="neutral"
                class="w-full bg-buchl-blue text-white hover:bg-buchl-blue/90 rounded-none flex items-center justify-center"
                icon="i-heroicons-paper-airplane"
                :trailing="true"
              >
                Üzenet elküldése
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Telephelyek szekció -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-buchl-blue mb-4">
            Telephelyeink
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Látogasson el valamelyik telephelyünkre, ahol szakértő csapatunk várja Önt.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          <!-- Győr - Központ -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-building-office-2" class="text-buchl-blue mr-3" style="width: 24px; height: 24px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Győr – Központ</h3>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-map-pin" class="text-buchl-green mt-1 mr-2" style="width: 16px; height: 16px;" />
                <span class="text-gray-700">9027 Győr, Csörgőfa sor 8.</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-phone" class="text-buchl-green mr-2" style="width: 16px; height: 16px;" />
                <a href="tel:+3696561620" class="text-buchl-blue hover:text-buchl-green transition-colors">+36 96 561-620</a>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="text-buchl-green mr-2" style="width: 16px; height: 16px;" />
                <a href="mailto:info@buechl.hu" class="text-buchl-blue hover:text-buchl-green transition-colors">info@buechl.hu</a>
              </div>
            </div>
            <div class="bg-buchl-blue/5 p-4 rounded mb-4">
              <h4 class="font-medium text-buchl-blue mb-2">Nyitvatartás:</h4>
              <div class="text-sm text-gray-700 space-y-1">
                <div class="flex justify-between">
                  <span>Hétfő – Csütörtök:</span>
                  <span>7:00 - 15:30</span>
                </div>
                <div class="flex justify-between">
                  <span>Péntek:</span>
                  <span>7:00 - 14:30</span>
                </div>
                <div class="flex justify-between">
                  <span>Szombat – Vasárnap:</span>
                  <span>Zárva</span>
                </div>
              </div>
            </div>
            
            <!-- Térkép - Győr Központ -->
            <div class="bg-gray-100 h-48 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div class="text-center text-gray-600">
                <UIcon name="i-heroicons-map-pin" style="width: 32px; height: 32px;" class="mx-auto mb-2 text-buchl-blue" />
                <p class="text-sm font-medium">Győr, Csörgőfa sor 8.</p>
                <p class="text-xs text-gray-500">Központi iroda térképe</p>
              </div>
            </div>
          </div>

          <!-- Győr - II-es telephely -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-building-office" class="text-buchl-blue mr-3" style="width: 24px; height: 24px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Győr – II-es telephely</h3>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-map-pin" class="text-buchl-green mt-1 mr-2" style="width: 16px; height: 16px;" />
                <span class="text-gray-700">9027 Győr, Reptéri út 6.</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-phone" class="text-buchl-green mr-2" style="width: 16px; height: 16px;" />
                <a href="tel:+36202933934" class="text-buchl-blue hover:text-buchl-green transition-colors">+36 20/293-3934</a>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="text-buchl-green mr-2" style="width: 16px; height: 16px;" />
                <a href="mailto:bhk2@buechl.hu" class="text-buchl-blue hover:text-buchl-green transition-colors">bhk2@buechl.hu</a>
              </div>
            </div>
            <div class="bg-buchl-blue/5 p-4 rounded mb-4">
              <h4 class="font-medium text-buchl-blue mb-2">Nyitvatartás:</h4>
              <div class="text-sm text-gray-700 space-y-1">
                <div class="flex justify-between">
                  <span>Hétfő – Csütörtök:</span>
                  <span>7:00 - 15:30</span>
                </div>
                <div class="flex justify-between">
                  <span>Péntek:</span>
                  <span>7:00 - 14:30</span>
                </div>
                <div class="flex justify-between">
                  <span>Szombat – Vasárnap:</span>
                  <span>Zárva</span>
                </div>
              </div>
            </div>
            
            <!-- Térkép - Győr II-es telephely -->
            <div class="bg-gray-100 h-48 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div class="text-center text-gray-600">
                <UIcon name="i-heroicons-map-pin" style="width: 32px; height: 32px;" class="mx-auto mb-2 text-buchl-blue" />
                <p class="text-sm font-medium">Győr, Reptéri út 6.</p>
                <p class="text-xs text-gray-500">II-es telephely térképe</p>
              </div>
            </div>
          </div>

          <!-- Nyíregyháza -->
          <div class="bg-white p-8 rounded-lg shadow-md lg:col-span-2 xl:col-span-1">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-building-storefront" class="text-buchl-blue mr-3" style="width: 24px; height: 24px;" />
              <h3 class="text-xl font-semibold text-buchl-blue">Nyíregyháza</h3>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-map-pin" class="text-buchl-green mt-1 mr-2" style="width: 16px; height: 16px;" />
                <span class="text-gray-700">4400 Nyíregyháza, Derkovits út 132-136.</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-phone" class="text-buchl-green mr-2" style="width: 16px; height: 16px;" />
                <a href="tel:+36205684614" class="text-buchl-blue hover:text-buchl-green transition-colors">+36 20/568-4614</a>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="text-buchl-green mr-2" style="width: 16px; height: 16px;" />
                <a href="mailto:bhk3@buechl.hu" class="text-buchl-blue hover:text-buchl-green transition-colors">bhk3@buechl.hu</a>
              </div>
            </div>
            <div class="bg-buchl-blue/5 p-4 rounded mb-4">
              <h4 class="font-medium text-buchl-blue mb-2">Nyitvatartás:</h4>
              <div class="text-sm text-gray-700 space-y-1">
                <div class="flex justify-between">
                  <span>Hétfő – Csütörtök:</span>
                  <span>7:00 - 15:30</span>
                </div>
                <div class="flex justify-between">
                  <span>Péntek:</span>
                  <span>7:00 - 14:30</span>
                </div>
                <div class="flex justify-between">
                  <span>Szombat – Vasárnap:</span>
                  <span>Zárva</span>
                </div>
              </div>
            </div>
            
            <!-- Térkép - Nyíregyháza -->
            <div class="bg-gray-100 h-48 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div class="text-center text-gray-600">
                <UIcon name="i-heroicons-map-pin" style="width: 32px; height: 32px;" class="mx-auto mb-2 text-buchl-blue" />
                <p class="text-sm font-medium">Nyíregyháza, Derkovits út 132-136.</p>
                <p class="text-xs text-gray-500">Nyíregyháza telephely térképe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Kapcsolat oldal
</script>
