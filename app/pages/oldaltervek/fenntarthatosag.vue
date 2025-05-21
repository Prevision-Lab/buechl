<template>
  <UContainer>
    <UPageHeader 
      title="Fenntarthatóság Oldal Tervek"
      description="A BÜCHL Hungaria fenntarthatóság oldal tervei és prototípusai"
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
          <h2 class="text-2xl font-bold text-sapphire-500">Fenntarthatóság Oldal Terv</h2>
          <p class="text-lg">
            A fenntarthatóság oldal bemutatja a BÜCHL Hungaria környezetvédelmi elkötelezettségét,
            zöld kezdeményezéseit és fenntarthatósági stratégiáját.
          </p>
        </div>
      </UCard>

      <UCard class="mb-8 p-6">
        <h3 class="text-xl font-semibold mb-4">Fenntarthatósági témakörök</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border border-neutral-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold mb-3 text-green-600 flex items-center gap-2">
              <UIcon name="i-heroicons-globe-europe-africa" class="w-5 h-5" />
              Környezetgazdálkodás
            </h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Körforgásos gazdaság</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Energia hatékonyság</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-arrow-down-tray" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Kibocsátás csökkentés</span>
              </li>
            </ul>
          </div>

          <div class="border border-neutral-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold mb-3 text-green-600 flex items-center gap-2">
              <UIcon name="i-heroicons-document-check" class="w-5 h-5" />
              Tanúsítványok és célok
            </h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-badge" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>EMAS tanúsítvány</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-badge" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>ISO tanúsítványok</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-flag" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Környezetvédelmi célok</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-users" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Társadalmi felelősségvállalás</span>
              </li>
            </ul>
          </div>
        </div>
      </UCard>

      <UCard class="p-6">
        <h3 class="text-xl font-semibold mb-4">Fenntarthatóság Oldal Prototípus</h3>
        <div class="rounded-md overflow-hidden border border-neutral-200 mb-6">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=900&fit=crop"
            alt="Fenntarthatóság oldal prototípus terv"
            class="w-full"
          />
        </div>
        <p class="text-neutral-600">
          A fenti kép a fenntarthatóság oldal prototípusát mutatja be. A végleges implementáció során a design elemek 
          a BÜCHL design system alapján kerülnek kialakításra.
        </p>

        <div class="mt-6 flex flex-wrap gap-4">
          <UButton 
            color="primary"
            to="/oldaltervek/karrier"
          >
            Tovább a Karrier oldalhoz
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