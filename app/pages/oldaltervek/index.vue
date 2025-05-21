<template>
  <UContainer>
    <UPageHeader 
      title="BÜCHL Hungaria Oldaltervek"
      description="A BÜCHL Hungaria weboldal fejlesztésének tervei és prototípusai"
    >
      <template #links>
        <UButton
          color="primary"
          variant="ghost"
          to="/"
          icon="i-heroicons-home"
          size="sm"
        >
          Vissza a főoldalra
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Hero section az oldaltervekről -->
      <section class="mb-12">
        <UCard>
          <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold text-sapphire-500">Üdvözöljük a BÜCHL Weboldalterv gyűjteményben</h2>
            <p class="text-lg">
              Ez az oldal a BÜCHL Hungaria új weboldalának tervezését és fejlesztését mutatja be.
              Itt megtekintheti a weboldal tartalmi tervét, a különböző aloldalak prototípusait
              és a fejlesztés aktuális állapotát.
            </p>
          </div>
        </UCard>
      </section>

      <!-- Navigációs kártyák -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="section in sections"
          :key="section.to"
          :to="section.to"
          class="block"
        >
          <UCard
            class="group hover:shadow-lg transition-shadow duration-300 h-full"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon :name="section.icon" class="w-8 h-8 text-primary" />
                <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
                  {{ section.title }}
                </h3>
              </div>
            </template>
            
            <p class="text-gray-600 dark:text-gray-300">
              {{ section.description }}
            </p>
          </UCard>
        </NuxtLink>
      </div>

      <!-- Gyors linkek -->
      <section class="mt-12">
        <h3 class="text-xl font-semibold mb-6">Gyors elérés</h3>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-for="quickLink in quickLinks"
            :key="quickLink.label"
            :to="quickLink.to"
          >
            <UBadge
              color="primary"
              variant="soft"
              size="lg"
              class="cursor-pointer hover:bg-sapphire-100 dark:hover:bg-sapphire-900 transition-colors"
            >
              {{ quickLink.label }}
            </UBadge>
          </NuxtLink>
        </div>
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
// Oldaltervek szekciók
const sections = [
  {
    title: 'Tartalmi terv',
    description: 'A weboldal részletes tartalmi terve és strukturája',
    icon: 'i-heroicons-document-text',
    to: '/oldaltervek/tartalmiterv'
  },
  {
    title: 'Főoldal',
    description: 'A weboldal főoldal tervei és implementációs fázisai',
    icon: 'i-heroicons-home',
    to: '/oldaltervek/fooldal'
  },
  {
    title: 'Szolgáltatások',
    description: 'A szolgáltatások szekció tervei és részletei',
    icon: 'i-heroicons-briefcase',
    to: '/oldaltervek/szolgaltatasok'
  },
  {
    title: 'Rólunk',
    description: 'A rólunk szekció tervei és oldalelemei',
    icon: 'i-heroicons-users',
    to: '/oldaltervek/rolunk'
  }
]

// Gyors linkek
const quickLinks = [
  { label: 'Főoldal', to: '/oldaltervek/fooldal' },
  { label: 'Szolgáltatások', to: '/oldaltervek/szolgaltatasok' },
  { label: 'Rólunk', to: '/oldaltervek/rolunk' },
  { label: 'Tartalmi terv', to: '/oldaltervek/tartalmiterv' }
]
</script>