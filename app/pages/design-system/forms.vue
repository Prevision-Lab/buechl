<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Űrlap rendszer</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Komplex űrlapok és form validáció a BÜCHL Design System-ben
      </p>
    </div>

    <!-- Simple Form Example -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Egyszerű űrlap</h2>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Példa</h3>
          <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <form @submit.prevent="handleSimpleSubmit" class="space-y-6">
              <UFormField label="Név" name="name" required>
                <UInput 
                  v-model="simpleForm.name" 
                  placeholder="Teljes név"
                />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput 
                  v-model="simpleForm.email" 
                  type="email"
                  placeholder="email@example.com"
                  icon="i-heroicons-envelope"
                />
              </UFormField>

              <UFormField label="Üzenet" name="message">
                <UTextarea 
                  v-model="simpleForm.message" 
                  placeholder="Írja le üzenetét..."
                  :rows="4"
                />
              </UFormField>

              <div class="flex gap-3">
                <UButton type="submit" color="primary" class="rounded-none">
                  Küldés
                </UButton>
                <UButton type="button" variant="outline" class="rounded-none" @click="resetSimpleForm">
                  Mégsem
                </UButton>
              </div>
            </form>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kód</h3>
          <CodeBlock :code="simpleFormCode" language="vue" />
        </div>
      </div>

      <!-- Form Data Display -->
      <div class="mt-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Űrlap adatok</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">{{ JSON.stringify(simpleForm, null, 2) }}</pre>
      </div>
    </section>

    <!-- Multi-step Form -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Többlépéses űrlap</h2>
      
      <div class="max-w-4xl">
        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <!-- Progress Steps -->
          <div class="mb-8">
            <div class="flex items-center justify-between">
              <div 
                v-for="(step, index) in steps" 
                :key="index"
                class="flex-1 flex items-center"
              >
                <div 
                  class="flex items-center justify-center w-10 h-10 rounded-full"
                  :class="{
                    'bg-primary-500 text-white': currentStep > index,
                    'bg-primary-100 text-primary-500': currentStep === index,
                    'bg-gray-200 text-gray-500': currentStep < index
                  }"
                >
                  {{ index + 1 }}
                </div>
                <div 
                  v-if="index < steps.length - 1"
                  class="flex-1 h-1 mx-2"
                  :class="{
                    'bg-primary-500': currentStep > index,
                    'bg-gray-200': currentStep <= index
                  }"
                />
              </div>
            </div>
            <div class="flex justify-between mt-2">
              <span 
                v-for="(step, index) in steps" 
                :key="index"
                class="text-sm"
                :class="{
                  'text-primary-500 font-semibold': currentStep === index,
                  'text-gray-500': currentStep !== index
                }"
              >
                {{ step.title }}
              </span>
            </div>
          </div>

          <!-- Form Content -->
          <form @submit.prevent="handleMultiStepSubmit">
            <!-- Step 1: Personal Info -->
            <div v-if="currentStep === 0" class="space-y-6">
              <h3 class="text-lg font-semibold mb-4">Személyes adatok</h3>
              
              <UFormField label="Név" name="name" required>
                <UInput 
                  v-model="multiStepForm.personal.name" 
                  placeholder="Teljes név"
                />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput 
                  v-model="multiStepForm.personal.email" 
                  type="email"
                  placeholder="email@example.com"
                />
              </UFormField>

              <UFormField label="Telefon" name="phone">
                <UInput 
                  v-model="multiStepForm.personal.phone" 
                  type="tel"
                  placeholder="+36 30 123 4567"
                />
              </UFormField>
            </div>

            <!-- Step 2: Service Selection -->
            <div v-if="currentStep === 1" class="space-y-6">
              <h3 class="text-lg font-semibold mb-4">Szolgáltatás kiválasztása</h3>
              
              <UFormField label="Szolgáltatás típusa" name="serviceType" required>
                <URadioGroup 
                  v-model="multiStepForm.service.type" 
                  :options="serviceTypes"
                  value-attribute="value"
                  option-attribute="label"
                />
              </UFormField>

              <UFormField label="Mennyiség" name="quantity">
                <UInput 
                  v-model="multiStepForm.service.quantity" 
                  type="number"
                  placeholder="Mennyiség"
                />
              </UFormField>

              <UFormField label="Sürgősség" name="urgency">
                <USelect 
                  v-model="multiStepForm.service.urgency" 
                  :options="urgencyLevels"
                  value-attribute="value"
                  option-attribute="label"
                  placeholder="Válasszon sürgősségi szintet"
                />
              </UFormField>
            </div>

            <!-- Step 3: Confirmation -->
            <div v-if="currentStep === 2" class="space-y-6">
              <h3 class="text-lg font-semibold mb-4">Összegzés</h3>
              
              <div class="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-4">
                <div>
                  <h4 class="font-semibold">Személyes adatok</h4>
                  <p>Név: {{ multiStepForm.personal.name }}</p>
                  <p>Email: {{ multiStepForm.personal.email }}</p>
                  <p>Telefon: {{ multiStepForm.personal.phone }}</p>
                </div>
                
                <div>
                  <h4 class="font-semibold">Szolgáltatás</h4>
                  <p>Típus: {{ multiStepForm.service.type }}</p>
                  <p>Mennyiség: {{ multiStepForm.service.quantity }}</p>
                  <p>Sürgősség: {{ multiStepForm.service.urgency }}</p>
                </div>
              </div>

              <UCheckbox 
                v-model="multiStepForm.confirmation.accepted" 
                label="Megerősítem, hogy az adatok helyesek"
                required
              />
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between mt-8">
              <UButton 
                v-if="currentStep > 0"
                type="button" 
                variant="outline"
                @click="previousStep"
                class="rounded-none"
              >
                Vissza
              </UButton>
              
              <div class="ml-auto flex gap-3">
                <UButton 
                  v-if="currentStep < steps.length - 1"
                  type="button" 
                  color="primary"
                  @click="nextStep"
                  class="rounded-none"
                >
                  Tovább
                </UButton>
                
                <UButton 
                  v-if="currentStep === steps.length - 1"
                  type="submit" 
                  color="primary"
                  :disabled="!multiStepForm.confirmation.accepted"
                  class="rounded-none"
                >
                  Küldés
                </UButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Simple form
const simpleForm = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSimpleSubmit = () => {
  console.log('Simple form submitted:', simpleForm)
  // Handle form submission
}

const resetSimpleForm = () => {
  simpleForm.name = ''
  simpleForm.email = ''
  simpleForm.message = ''
}

// Multi-step form
const currentStep = ref(0)
const steps = [
  { title: 'Személyes adatok' },
  { title: 'Szolgáltatás' },
  { title: 'Összegzés' }
]

const multiStepForm = reactive({
  personal: {
    name: '',
    email: '',
    phone: ''
  },
  service: {
    type: null as string | null,
    quantity: 1,
    urgency: null as string | null
  },
  confirmation: {
    accepted: false
  }
})

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const handleMultiStepSubmit = () => {
  console.log('Multi-step form submitted:', multiStepForm)
}

// Select options
const serviceTypes = [
  { value: 'waste', label: 'Hulladékkezelés' },
  { value: 'recycling', label: 'Újrahasznosítás' },
  { value: 'consulting', label: 'Tanácsadás' },
  { value: 'collection', label: 'Begyűjtés' }
]

const urgencyLevels = [
  { value: 'normal', label: 'Normál' },
  { value: 'urgent', label: 'Sürgős' },
  { value: 'immediate', label: 'Azonnali' }
]

// Code examples
const simpleFormCode = `<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <UFormField label="Név" name="name" required>
      <UInput 
        v-model="form.name" 
        placeholder="Teljes név"
      />
    </UFormField>

    <UFormField label="Email" name="email" required>
      <UInput 
        v-model="form.email" 
        type="email"
        placeholder="email@example.com"
        icon="i-heroicons-envelope"
      />
    </UFormField>

    <UFormField label="Üzenet" name="message">
      <UTextarea 
        v-model="form.message" 
        placeholder="Írja le üzenetét..."
        :rows="4"
      />
    </UFormField>

    <div class="flex gap-3">
      <UButton type="submit" color="primary" class="rounded-none">
        Küldés
      </UButton>
      <UButton type="button" variant="outline" class="rounded-none">
        Mégsem
      </UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}
<script>`
</script>