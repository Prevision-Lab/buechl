<template>
  <UContainer>
    <UPageHeader 
      title="Kapcsolat Oldal Tervek"
      description="A BÜCHL Hungaria kapcsolatfelvételi oldal tervei és prototípusai"
    >
      <template #links>
        <UButton
          color="primary"
          variant="ghost"
          to="/oldaltervek"
          icon="i-heroicons-arrow-left"
          size="sm"
        >
          Vissza az oldaltervekhez
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <UCard class="mb-8">
        <div class="prose dark:prose-invert max-w-none">
          <h2 class="text-2xl font-bold text-sapphire-500">Kapcsolat Oldal Terv</h2>
          <p class="text-lg">
            A kapcsolat oldal célja, hogy az ügyfelek és partnerek könnyen kapcsolatba léphessenek a BÜCHL Hungaria-val.
            Az oldal tartalmazza a cég elérhetőségeit, telephelyeit és egy kapcsolatfelvételi űrlapot.
          </p>
        </div>
      </UCard>

      <UCard class="mb-8 p-6">
        <h3 class="text-xl font-semibold mb-4">Kapcsolat oldal elemei</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border border-neutral-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
              <UIcon name="i-heroicons-building-office" class="w-5 h-5" />
              Elérhetőségek
            </h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span class="font-medium">Központi Iroda:</span>
                  <div>Csörgőfa sor 8, Győr</div>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span class="font-medium">Telefon:</span>
                  <div>+36 96 123 4567</div>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span class="font-medium">E-mail:</span>
                  <div>info@buchl.hu</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="border border-neutral-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
              <UIcon name="i-heroicons-map" class="w-5 h-5" />
              Telephelyek
            </h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-building-office-2" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span class="font-medium">Győri telephely</span>
                  <div>9027 Győr, Csörgőfa sor 8.</div>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-building-office-2" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span class="font-medium">Körösladányi telephely</span>
                  <div>5516 Körösladány, Dévaványai út</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </UCard>

      <UCard class="p-6">
        <h3 class="text-xl font-semibold mb-4">Kapcsolatfelvételi űrlap prototípus</h3>
        <div class="border border-neutral-200 rounded-md p-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <UFormGroup label="Név*">
                <UInput placeholder="Teljes név" />
              </UFormGroup>
            </div>
            <div>
              <UFormGroup label="E-mail cím*">
                <UInput placeholder="pelda@domain.com" type="email" />
              </UFormGroup>
            </div>
            <div>
              <UFormGroup label="Telefonszám">
                <UInput placeholder="+36 30 123 4567" />
              </UFormGroup>
            </div>
            <div>
              <UFormGroup label="Téma">
                <USelect
                  :items="[
                    { label: 'Általános érdeklődés', value: 'general' },
                    { label: 'Ipari szolgáltatások', value: 'industrial' },
                    { label: 'Lakossági szolgáltatások', value: 'residential' },
                    { label: 'Karrier lehetőségek', value: 'career' },
                  ]"
                  placeholder="Válassz témát"
                />
              </UFormGroup>
            </div>
            <div class="md:col-span-2">
              <UFormGroup label="Üzenet*">
                <UTextarea placeholder="Írja le kérdését vagy üzenetét..." rows="5" />
              </UFormGroup>
            </div>
            <div class="md:col-span-2">
              <UCheckbox label="Elfogadom az adatvédelmi tájékoztatót" />
            </div>
            <div class="md:col-span-2">
              <UButton color="primary" size="lg">
                Üzenet küldése
                <template #trailing>
                  <UIcon name="i-heroicons-paper-airplane" />
                </template>
              </UButton>
            </div>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap gap-4">
          <UButton 
            color="primary"
            to="/oldaltervek/fooldal"
          >
            Tovább a Főoldal tervekhez
          </UButton>
          <UButton 
            color="gray"
            variant="soft"
            to="/oldaltervek"
          >
            Vissza az oldaltervekhez
          </UButton>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
</script>