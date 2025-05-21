<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">BÜCHL Komponensek</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        A BÜCHL Design System komponens könyvtára - Nuxt UI Pro alapokon
      </p>
    </div>

    <!-- Navigation -->
    <div class="mb-12">
      <nav class="flex flex-wrap gap-2">
        <UButton 
          v-for="section in sections" 
          :key="section.id"
          :to="`#${section.id}`"
          variant="subtle"
          color="primary"
          size="sm"
        >
          {{ section.title }}
        </UButton>
      </nav>
    </div>

    <!-- Buttons Section -->
    <section id="buttons" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Gombok</h2>
      
      <!-- BÜCHL Style Buttons -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">BÜCHL Márka gombok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="space-y-4">
              <!-- Jetzt kontaktieren buttons -->
              <div class="flex flex-wrap gap-3">
                <UButton 
                  label="Jetzt kontaktieren"
                  icon="i-heroicons-arrow-right"
                  :trailing="true"
                  color="white"
                  class="rounded-none bg-white text-buchl-blue border border-gray-300 hover:bg-gray-50"
                />
                <UButton 
                  label="Jetzt kontaktieren"
                  icon="i-heroicons-arrow-right"
                  :trailing="true"
                  color="white"
                  class="rounded-none bg-gray-50 text-buchl-blue border border-gray-300 hover:bg-gray-100"
                />
              </div>

              <!-- Stellenangebote buttons - Kék variációk -->
              <div class="flex flex-wrap gap-3">
                <UButton 
                  label="Stellenangebote"
                  icon="i-heroicons-arrow-right"
                  :trailing="true"
                  color="primary"
                  class="rounded-none"
                />
                <UButton 
                  label="Stellenangebote"
                  icon="i-heroicons-arrow-right"
                  :trailing="true"
                  color="primary"
                  variant="subtle"
                  class="rounded-none"
                />
              </div>

              <!-- BÜCHL zöld gombok -->
              <div class="flex flex-wrap gap-3">
                <UButton 
                  label="Nachhaltigkeit"
                  icon="i-heroicons-arrow-right"
                  :trailing="true"
                  color="white"
                  class="rounded-none bg-buchl-green text-buchl-blue hover:bg-green-400"
                />
                <UButton 
                  label="Nachhaltigkeit"
                  icon="i-heroicons-arrow-right"
                  :trailing="true"
                  color="white"
                  variant="outline"
                  class="rounded-none border-2 border-buchl-green text-buchl-green hover:bg-buchl-green hover:text-white"
                />
              </div>
            </div>
          </div>
          <CodeBlock :code="buchlButtonCode" language="vue" />
        </div>
      </div>

      <!-- Basic Buttons -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Alap gombok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="flex flex-wrap gap-3">
              <UButton 
                label="Elsődleges"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="Semleges"
                color="neutral"
                variant="outline"
                class="rounded-none border"
              />
              <UButton 
                label="Sikeres"
                color="success"
                class="rounded-none"
              />
              <UButton 
                label="Figyelmeztetés"
                color="warning"
                class="rounded-none"
              />
              <UButton 
                label="Hiba"
                color="error"
                class="rounded-none"
              />
            </div>
          </div>
          <CodeBlock :code="buttonBasicCode" language="vue" />
        </div>
      </div>

      <!-- Button Variants -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Gomb variánsok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="flex flex-wrap gap-3">
              <UButton 
                label="Solid"
                color="primary"
                variant="solid"
                class="rounded-none"
              />
              <UButton 
                label="Outline"
                color="primary"
                variant="outline"
                class="rounded-none"
              />
              <UButton 
                label="Subtle"
                color="primary"
                variant="subtle"
                class="rounded-none"
              />
              <UButton 
                label="Ghost"
                color="primary"
                variant="ghost"
                class="rounded-none"
              />
              <UButton 
                label="Link"
                color="primary"
                variant="link"
                class="rounded-none"
              />
            </div>
          </div>
          <CodeBlock :code="buttonVariantCode" language="vue" />
        </div>
      </div>

      <!-- Button Sizes -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Gomb méretek</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="flex flex-wrap gap-3 items-center">
              <UButton 
                label="XS"
                size="xs"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="SM"
                size="sm"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="MD"
                size="md"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="LG"
                size="lg"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="XL"
                size="xl"
                color="primary"
                class="rounded-none"
              />
            </div>
          </div>
          <CodeBlock :code="buttonSizeCode" language="vue" />
        </div>
      </div>

      <!-- Button States -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Gomb állapotok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="flex flex-wrap gap-3">
              <UButton 
                label="Normál"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="Betöltés..."
                :loading="true"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="Letiltott"
                :disabled="true"
                color="neutral"
                class="rounded-none"
              />
            </div>
          </div>
          <CodeBlock :code="buttonStateCode" language="vue" />
        </div>
      </div>

      <!-- Button with Icons -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ikonos gombok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="flex flex-wrap gap-3">
              <UButton 
                label="Email küldése"
                icon="i-lucide-mail"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="Hozzáadás"
                icon="i-heroicons-plus"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                label="Tovább"
                icon="i-heroicons-arrow-right"
                :trailing="true"
                color="primary"
                class="rounded-none"
              />
              <UButton 
                icon="i-heroicons-cog"
                color="primary"
                class="rounded-none p-3"
              />
            </div>
          </div>
          <CodeBlock :code="buttonIconCode" language="vue" />
        </div>
      </div>
    </section>

    <!-- Form Inputs Section -->
    <section id="forms" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Űrlap elemek</h2>
      
      <!-- Text Inputs -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beviteli mezők</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Szöveges mező</label>
                <UInput v-model="text1" placeholder="Alapértelmezett beviteli mező" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email cím</label>
                <UInput 
                  v-model="email" 
                  type="email" 
                  placeholder="Email cím" 
                  icon="i-lucide-mail"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Jelszó</label>
                <UInput 
                  v-model="password" 
                  type="password" 
                  placeholder="Jelszó" 
                  icon="i-lucide-lock"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Keresés</label>
                <UInput 
                  v-model="search" 
                  placeholder="Keresés..." 
                  icon="i-lucide-search"
                  :loading="searchLoading"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hibás mező</label>
                <UInput 
                  v-model="text2" 
                  placeholder="Hibás mező" 
                  color="error"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Letiltott mező</label>
                <UInput 
                  v-model="email2" 
                  type="email" 
                  placeholder="Email cím" 
                  icon="i-lucide-mail"
                  :disabled="true"
                />
              </div>
            </div>
          </div>
          <CodeBlock :code="inputCode" language="vue" />
        </div>
      </div>

      <!-- Textarea -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Szövegterület</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Üzenet</label>
                <UTextarea 
                  v-model="message" 
                  placeholder="Írja ide az üzenetét..." 
                  :rows="4"
                  color="primary"
                  variant="outline"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bemutatkozás</label>
                <UTextarea 
                  v-model="bio" 
                  placeholder="Rövid bemutatkozás" 
                  :rows="3"
                  :disabled="true"
                  color="primary"
                  variant="outline"
                />
              </div>
            </div>
          </div>
          <CodeBlock :code="textareaCode" language="vue" />
        </div>
      </div>

      <!-- Select -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Legördülő menük</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Város</label>
                <USelectMenu 
                  v-model="selectedCity" 
                  :items="cities" 
                  placeholder="Válasszon várost"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Státusz</label>
                <USelectMenu 
                  v-model="selectedStatus" 
                  :items="statusOptions"
                  value-key="value"
                  option-attribute="label"
                  placeholder="Válasszon státuszt"
                />
              </div>
            </div>
          </div>
          <CodeBlock :code="selectCode" language="vue" />
        </div>
      </div>

      <!-- Form Groups -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form csoportok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div class="grid gap-6 md:grid-cols-2">
              <UFormField label="Név" name="name" required>
                <UInput v-model="name" placeholder="Teljes név" color="primary" variant="outline" />
              </UFormField>

              <UFormField 
                label="Jelszó" 
                name="password" 
                required
                :error="passwordError"
                help="Minimum 8 karakter hosszú"
              >
                <UInput 
                  v-model="password2" 
                  type="password" 
                  placeholder="Biztonságos jelszó"
                  color="primary"
                  variant="outline"
                />
              </UFormField>
            </div>
          </div>
          <CodeBlock :code="formGroupCode" language="vue" />
        </div>
      </div>

      <!-- Checkboxes and Switches -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Jelölőnégyzetek és kapcsolók</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div class="space-y-6">
              <div>
                <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Jelölőnégyzetek</h4>
                <div class="space-y-3">
                  <UCheckbox v-model="terms" label="Elfogadom a felhasználási feltételeket" color="primary" />
                  <UCheckbox v-model="newsletter" label="Feliratkozom a hírlevélre" color="primary" />
                </div>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Kapcsolók</h4>
                <div class="space-y-3">
                  <USwitch v-model="notifications" label="Értesítések engedélyezése" color="primary" />
                  <USwitch v-model="darkMode" label="Sötét mód" color="primary" />
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="checkboxCode" language="vue" />
        </div>
      </div>

      <!-- Radio Groups -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Rádiógombok</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Szállítási mód</label>
              <URadioGroup 
                v-model="delivery" 
                :items="deliveryOptions"
                value-key="value"
                option-attribute="label"
                color="primary"
              />
            </div>
          </div>
          <CodeBlock :code="radioCode" language="vue" />
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section id="cards" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Kártyák</h2>
      
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Alap Kártya Komponensek</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          A részletes kártya dokumentációért és további példákért látogass el a 
          <NuxtLink to="/design-system/cards" class="text-primary-500 hover:text-primary-600 font-medium">
            Kártyák oldalra
          </NuxtLink>.
        </p>
        
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <!-- Simple Card -->
              <UCard>
                <template #header>
                  <h4 class="text-lg font-semibold">Egyszerű Kártya</h4>
                </template>
                <p class="text-gray-600 dark:text-gray-400">
                  Ez egy alapvető kártya header, body és footer slot-okkal.
                </p>
                <template #footer>
                  <UButton label="Művelet" color="primary" size="sm" class="rounded-none" />
                </template>
              </UCard>

              <!-- Icon Card -->
              <UCard>
                <template #header>
                  <div class="flex items-center gap-3">
                    <div class="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <UIcon name="i-heroicons-rocket-launch" class="text-primary-600 dark:text-primary-400 text-xl" />
                    </div>
                    <h4 class="text-lg font-semibold">Ikonos Kártya</h4>
                  </div>
                </template>
                <p class="text-gray-600 dark:text-gray-400">
                  Kártya ikonnal és testreszabott fejléccel.
                </p>
              </UCard>

              <!-- Stats Card -->
              <UCard>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Projektek</p>
                    <p class="text-2xl font-bold text-primary-600">124</p>
                  </div>
                  <UIcon name="i-heroicons-briefcase" class="text-primary-400 text-2xl" />
                </div>
              </UCard>
            </div>
          </div>
          
          <CodeBlock :code="cardExampleCode" language="vue" />
        </div>
      </div>
    </section>

    <!-- Alerts Section -->
    <section id="alerts" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Értesítések</h2>
      
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Alert komponensek</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="space-y-4">
              <UAlert
                title="Információs üzenet"
                description="Ez egy általános információs értesítés."
                icon="i-heroicons-information-circle"
              />
              <UAlert
                title="Sikeres művelet"
                description="A művelet sikeresen végrehajtva."
                color="success"
                icon="i-heroicons-check-circle"
              />
              <UAlert
                title="Figyelmeztetés"
                description="Kérjük, ellenőrizze a megadott adatokat."
                color="warning"
                icon="i-heroicons-exclamation-triangle"
              />
              <UAlert
                title="Hiba történt"
                description="A művelet végrehajtása során hiba lépett fel."
                color="error"
                icon="i-heroicons-x-circle"
              />
            </div>
          </div>
          <CodeBlock :code="alertCode" language="vue" />
        </div>
      </div>
    </section>

    <!-- Badges Section -->
    <section id="badges" class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Címkék</h2>
      
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Badge komponensek</h3>
        <div class="space-y-6">
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div class="flex flex-wrap gap-3">
              <UBadge color="primary" label="Elsődleges" />
              <UBadge color="neutral" label="Semleges" />
              <UBadge color="success" label="Új" />
              <UBadge color="warning" label="Kiemelt" />
              <UBadge color="error" label="Sürgős" />
              <UBadge variant="outline" label="Keretezett" />
              <UBadge variant="subtle" label="Lágy" />
            </div>
          </div>
          <CodeBlock :code="badgeCode" language="vue" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Navigation sections
const sections = [
  { id: 'buttons', title: 'Gombok' },
  { id: 'forms', title: 'Űrlap elemek' },
  { id: 'cards', title: 'Kártyák' },
  { id: 'alerts', title: 'Értesítések' },
  { id: 'badges', title: 'Címkék' }
]

// Form state
const text1 = ref('')
const text2 = ref('')
const email = ref('')
const email2 = ref('')
const password = ref('')
const password2 = ref('')
const search = ref('')
const searchLoading = ref(false)
const name = ref('')
const message = ref('')
const bio = ref('')
const selectedCity = ref()
const selectedStatus = ref()
const terms = ref(false)
const newsletter = ref(false)
const notifications = ref(true)
const darkMode = ref(false)
const delivery = ref('standard')

// Computed
const passwordError = computed(() => {
  if (password2.value && password2.value.length < 8) {
    return 'A jelszónak legalább 8 karakter hosszúnak kell lennie'
  }
  return null
})

// Data
const cities = ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr']

const statusOptions = [
  { value: 'active', label: 'Aktív' },
  { value: 'pending', label: 'Függőben' },
  { value: 'completed', label: 'Befejezett' },
  { value: 'cancelled', label: 'Törölt' }
]

const deliveryOptions = [
  { value: 'standard', label: 'Normál szállítás (3-5 munkanap)' },
  { value: 'express', label: 'Expressz szállítás (1-2 munkanap)' },
  { value: 'pickup', label: 'Személyes átvétel' }
]



// Code examples
const buchlButtonCode = `<!-- Fehér gomb szürke kerettel -->
<UButton 
  label="Jetzt kontaktieren"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="white"
  class="rounded-none bg-white text-buchl-blue border border-gray-300 hover:bg-gray-50"
/>

<!-- Szürke gomb -->
<UButton 
  label="Jetzt kontaktieren"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="white"
  class="rounded-none bg-gray-50 text-buchl-blue border border-gray-300 hover:bg-gray-100"
/>

<!-- BÚCHL kék gomb -->
<UButton 
  label="Stellenangebote"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="primary"
  class="rounded-none"
/>

<!-- Világosabb BÚCHL kék gomb -->
<UButton 
  label="Stellenangebote"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="primary"
  variant="subtle"
  class="rounded-none"
/>

<!-- BÚCHL zöld gomb -->
<UButton 
  label="Nachhaltigkeit"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="secondary"
  class="rounded-none text-buchl-blue"
/>

<!-- BÚCHL zöld outline gomb -->
<UButton 
  label="Nachhaltigkeit"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="buchl"
  variant="outline"
  class="rounded-none border-2 border-buchl-500"
/>`

const buttonBasicCode = `<UButton 
  label="Elsődleges"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="Semleges"
  color="neutral"
  variant="outline"
  class="rounded-none border"
/>

<UButton 
  label="Sikeres"
  color="success"
  class="rounded-none"
/>

<UButton 
  label="Figyelmeztetés"
  color="warning"
  class="rounded-none"
/>

<UButton 
  label="Hiba"
  color="error"
  class="rounded-none"
/>`

const buttonVariantCode = `<UButton 
  label="Solid"
  color="primary"
  variant="solid"
  class="rounded-none"
/>

<UButton 
  label="Outline"
  color="primary"
  variant="outline"
  class="rounded-none border-2 border-buchl-blue"
/>

<UButton 
  label="Subtle"
  color="primary"
  variant="subtle"
  class="rounded-none"
/>

<UButton 
  label="Ghost"
  color="primary"
  variant="ghost"
  class="rounded-none"
/>

<UButton 
  label="Link"
  color="primary"
  variant="link"
  class="rounded-none"
/>`

const buttonSizeCode = `<UButton 
  label="XS"
  size="xs"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="SM"
  size="sm"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="MD"
  size="md"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="LG"
  size="lg"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="XL"
  size="xl"
  color="primary"
  class="rounded-none"
/>`

const buttonStateCode = `<UButton 
  label="Normál"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="Betöltés..."
  :loading="true"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="Letiltott"
  :disabled="true"
  color="neutral"
  class="rounded-none"
/>`

const buttonIconCode = `<UButton 
  label="Email küldése"
  icon="i-lucide-mail"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="Hozzáadás"
  icon="i-heroicons-plus"
  color="primary"
  class="rounded-none"
/>

<UButton 
  label="Tovább"
  icon="i-heroicons-arrow-right"
  :trailing="true"
  color="primary"
  class="rounded-none"
/>

<UButton 
  icon="i-heroicons-cog"
  color="primary"
  class="rounded-none p-3"
/>`

const inputCode = `<UInput v-model="text" placeholder="Alapértelmezett beviteli mező" color="primary" variant="outline" class="w-full" />
<UInput v-model="email" type="email" placeholder="Email cím" icon="i-lucide-mail" color="primary" variant="outline" class="w-full" />
<UInput v-model="password" type="password" placeholder="Jelszó" icon="i-lucide-lock" color="primary" variant="outline" class="w-full" />
<UInput v-model="search" placeholder="Keresés..." icon="i-lucide-search" :loading="loading" color="primary" variant="outline" class="w-full" />
<UInput v-model="text" placeholder="Hibás mező" color="error" variant="outline" :highlight="true" class="w-full" />
<UInput v-model="email" type="email" placeholder="Email cím" :disabled="true" color="primary" variant="outline" class="w-full" />`

const textareaCode = `<UTextarea v-model="message" placeholder="Írja ide az üzenetét..." :rows="4" color="primary" variant="outline" class="w-full" />
<UTextarea v-model="bio" placeholder="Rövid bemutatkozás" :rows="3" :disabled="true" color="primary" variant="outline" class="w-full" />`

const selectCode = `<USelect 
  v-model="selectedCity" 
  :items="cities" 
  placeholder="Válasszon várost"
  color="primary"
  variant="outline"
  class="w-full"
/>

<USelect 
  v-model="selectedStatus" 
  :items="statusOptions"
  value-key="value"
  option-attribute="label"
  placeholder="Válasszon státuszt"
  color="primary"
  variant="outline"
  class="w-full"
/>`

const formGroupCode = `<UFormField label="Név" name="name" required>
  <UInput v-model="name" placeholder="Teljes név" color="primary" variant="outline" class="w-full" />
</UFormField>

<UFormField 
  label="Jelszó" 
  name="password" 
  required
  :error="passwordError"
  help="Minimum 8 karakter hosszú"
>
  <UInput v-model="password" type="password" placeholder="Biztonságos jelszó" color="primary" variant="outline" class="w-full" />
</UFormField>`

const checkboxCode = `<UCheckbox v-model="terms" label="Elfogadom a felhasználási feltételeket" color="primary" />
<UCheckbox v-model="newsletter" label="Feliratkozom a hírlevélre" color="primary" />
<USwitch v-model="notifications" label="Értesítések engedélyezése" color="primary" />`

const radioCode = `<URadioGroup 
  v-model="delivery" 
  :items="deliveryOptions"
  value-key="value"
  option-attribute="label"
  color="primary"
/>`


const alertCode = `<UAlert
  title="Információs üzenet"
  description="Ez egy általános információs értesítés."
  icon="i-heroicons-information-circle"
/>

<UAlert
  title="Sikeres művelet"
  description="A művelet sikeresen végrehajtva."
  color="success"
  icon="i-heroicons-check-circle"
/>`

const badgeCode = `<UBadge color="primary" label="Elsődleges" />
<UBadge color="neutral" label="Semleges" />
<UBadge color="success" label="Új" />
<UBadge variant="outline" label="Keretezett" />
<UBadge variant="subtle" label="Lágy" />`

const cardExampleCode = `<!-- Egyszerű Kártya -->
<UCard>
  <template #header>
    <h4 class="text-lg font-semibold">Egyszerű Kártya</h4>
  </template>
  <p class="text-gray-600 dark:text-gray-400">
    Ez egy alapvető kártya header, body és footer slot-okkal.
  </p>
  <template #footer>
    <UButton label="Művelet" color="primary" size="sm" class="rounded-none" />
  </template>
</UCard>

<!-- Ikonos Kártya -->
<UCard>
  <template #header>
    <div class="flex items-center gap-3">
      <div class="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
        <UIcon name="i-heroicons-rocket-launch" class="text-primary-600 dark:text-primary-400 text-xl" />
      </div>
      <h4 class="text-lg font-semibold">Ikonos Kártya</h4>
    </div>
  </template>
  <p class="text-gray-600 dark:text-gray-400">
    Kártya ikonnal és testreszabott fejléccel.
  </p>
</UCard>

<!-- Statisztikai Kártya -->
<UCard>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-600 dark:text-gray-400">Projektek</p>
      <p class="text-2xl font-bold text-primary-600">124</p>
    </div>
    <UIcon name="i-heroicons-briefcase" class="text-primary-400 text-2xl" />
  </div>
</UCard>`
</script>