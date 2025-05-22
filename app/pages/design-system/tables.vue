<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Table Komponens</h1>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Táblázat</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          A Table komponens strukturált adatok megjelenítésére szolgál sorok és oszlopok formájában. 
          A Nuxt UI Table komponenst használjuk alapként, BÜCHL márka színekkel és stílussal.
        </p>
      </div>

      <!-- Basic Table -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Alap táblázat</h3>
        
        <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
          <UTable 
            :data="basicData" 
            :ui="{
              td: { base: 'text-gray-900' },
              th: { base: 'text-gray-700 font-medium uppercase text-xs' },
              tr: { base: 'hover:bg-gray-50' }
            }"
          />
        </div>
        <CodeBlock :code="basicTableCode" language="vue" />
      </section>

      <!-- Table with Search -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Kereshető táblázat</h3>
        
        <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
          <div class="mb-4">
            <UInput
              v-model="searchQuery"
              placeholder="Keresés..."
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
            />
          </div>
          
          <UTable 
            :data="filteredServiceData"
            :ui="{
              td: { base: 'text-gray-900' },
              th: { base: 'text-gray-700 font-medium uppercase text-xs' },
              tr: { base: 'hover:bg-gray-50' }
            }"
          >
            <template #status-data="{ row }">
              <div class="flex items-center gap-2">
                <div 
                  class="w-2 h-2 rounded-full"
                  :class="{
                    'bg-buchl-green': row.status === 'completed',
                    'bg-yellow-500': row.status === 'pending',
                    'bg-red-500': row.status === 'cancelled'
                  }"
                ></div>
                <span class="text-sm">
                  {{ statusLabels[row.status] }}
                </span>
              </div>
            </template>
            
            <template #amount-data="{ row }">
              <span class="font-medium text-buchl-blue">
                {{ formatCurrency(row.amount) }}
              </span>
            </template>
          </UTable>
        </div>
        <CodeBlock :code="searchableTableCode" language="vue" />
      </section>

      <!-- Loading State -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Betöltési állapot</h3>
        
        <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
          <UTable 
            :loading="isLoading"
            :data="isLoading ? [] : basicData"
            :ui="{
              td: { base: 'text-gray-900' },
              th: { base: 'text-gray-700 font-medium uppercase text-xs' },
              tr: { base: 'hover:bg-gray-50' }
            }"
          />
          <div class="mt-4 flex gap-4">
            <UButton color="primary" @click="toggleLoading">
              {{ isLoading ? 'Betöltés leállítása' : 'Betöltés indítása' }}
            </UButton>
          </div>
        </div>
        <CodeBlock :code="loadingTableCode" language="vue" />
      </section>

      <!-- Empty State -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Üres állapot</h3>
        
        <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
          <UTable 
            :data="[]"
            :ui="{
              td: { base: 'text-gray-900' },
              th: { base: 'text-gray-700 font-medium uppercase text-xs' },
              tr: { base: 'hover:bg-gray-50' }
            }"
          >
            <template #empty-state>
              <div class="text-center py-8">
                <UIcon name="i-heroicons-circle-stack-20-solid" class="mx-auto h-8 w-8 text-gray-400 mb-4" />
                <h3 class="text-sm font-medium text-gray-900 mb-2">Nincsenek megrendelések</h3>
                <p class="text-sm text-gray-500 mb-4">Kezdje el új megrendelés létrehozásával.</p>
                <UButton color="primary" icon="i-heroicons-plus">
                  Új megrendelés
                </UButton>
              </div>
            </template>
          </UTable>
        </div>
        <CodeBlock :code="emptyTableCode" language="vue" />
      </section>

      <!-- Interactive Table with Actions -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Interaktív táblázat műveleti gombokkal</h3>
        
        <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
          <UTable 
            :data="employeeData"
            :ui="{
              td: { base: 'text-gray-900' },
              th: { base: 'text-gray-700 font-medium uppercase text-xs' },
              tr: { base: 'hover:bg-gray-50' }
            }"
          >
            <template #role-data="{ row }">
              <UBadge :color="roleColors[row.role]" variant="subtle" size="sm">
                {{ roleLabels[row.role] }}
              </UBadge>
            </template>
            
            <template #actions-data="{ row }">
              <UDropdown :items="[[
                { label: 'Megtekintés', icon: 'i-heroicons-eye-20-solid', click: () => viewEmployee(row) },
                { label: 'Szerkesztés', icon: 'i-heroicons-pencil-20-solid', click: () => editEmployee(row) },
              ], [
                { label: 'Törlés', icon: 'i-heroicons-trash-20-solid', click: () => deleteEmployee(row) }
              ]]">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
              </UDropdown>
            </template>
          </UTable>
          
          <div v-if="selectedEmployees.length > 0" class="mt-4 p-4 bg-gray-50 rounded">
            <p class="text-sm text-gray-700">
              {{ selectedEmployees.length }} munkavállaló kiválasztva
            </p>
          </div>
        </div>
        <CodeBlock :code="interactiveTableCode" language="vue" />
      </section>

      <!-- BÜCHL Styled Table -->
      <section class="mb-12">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">BÜCHL márka stílusú táblázat</h3>
        
        <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
          <div class="mb-6 flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-900">Konténer megrendelések</h2>
            <UButton color="primary" icon="i-heroicons-plus">
              Új megrendelés
            </UButton>
          </div>
          
          <UTable 
            :data="orderData"
            :ui="{
              wrapper: 'rounded-none',
              base: 'min-w-full',
              thead: 'bg-gray-50',
              tbody: 'bg-white divide-y divide-gray-200',
              tr: {
                base: 'transition-colors',
                active: 'hover:bg-gray-50'
              },
              th: {
                base: 'text-left',
                padding: 'px-4 py-3',
                color: 'text-gray-700',
                font: 'font-medium uppercase tracking-wider',
                size: 'text-xs'
              },
              td: {
                base: 'whitespace-nowrap',
                padding: 'px-4 py-3',
                color: 'text-gray-900',
                font: '',
                size: 'text-sm'
              }
            }"
          >
            <template #client-data="{ row }">
              <div>
                <div class="font-medium">{{ row.client }}</div>
                <div class="text-xs text-gray-500">{{ row.contact }}</div>
              </div>
            </template>
            
            <template #status-data="{ row }">
              <UBadge 
                :color="orderStatusColors[row.status]" 
                variant="subtle"
                class="rounded-none"
              >
                {{ orderStatusLabels[row.status] }}
              </UBadge>
            </template>
            
            <template #amount-data="{ row }">
              <span class="font-medium text-buchl-blue">
                {{ formatCurrency(row.amount) }}
              </span>
            </template>
            
            <template #actions-data="{ row }">
              <div class="flex items-center justify-end gap-1">
                <UButton 
                  color="gray" 
                  variant="ghost" 
                  icon="i-heroicons-document-text" 
                  size="xs"
                  class="rounded-none"
                  v-tooltip="'Számla'"
                />
                <UButton 
                  color="gray" 
                  variant="ghost" 
                  icon="i-heroicons-printer" 
                  size="xs"
                  class="rounded-none"
                  v-tooltip="'Nyomtatás'"
                />
                <UButton 
                  color="gray" 
                  variant="ghost" 
                  icon="i-heroicons-ellipsis-vertical" 
                  size="xs"
                  class="rounded-none"
                />
              </div>
            </template>
          </UTable>
        </div>
        <CodeBlock :code="buchlStyledTableCode" language="vue" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Basic table data - mezőnevek magyarul
const basicData = [
  { azonosito: 1, nev: 'Kovács János', email: 'kovacs.janos@buchl.hu', reszleg: 'Logisztika' },
  { azonosito: 2, nev: 'Nagy Éva', email: 'nagy.eva@buchl.hu', reszleg: 'Értékesítés' },
  { azonosito: 3, nev: 'Szabó Péter', email: 'szabo.peter@buchl.hu', reszleg: 'Műszaki' },
  { azonosito: 4, nev: 'Kiss Anna', email: 'kiss.anna@buchl.hu', reszleg: 'Pénzügy' }
]

// Service table data
const serviceData = [
  { 
    orderId: 'BU-2024-001', 
    customer: 'BÜCHL Entsorgung GmbH', 
    service: 'Konténer szolgáltatás',
    status: 'completed',
    amount: 1250.00
  },
  { 
    orderId: 'BU-2024-002', 
    customer: 'Hungária Kft.', 
    service: 'Hulladékszállítás',
    status: 'pending',
    amount: 875.50
  },
  { 
    orderId: 'BU-2024-003', 
    customer: 'Green Solution Zrt.', 
    service: 'Újrahasznosítás',
    status: 'completed',
    amount: 2100.00
  },
  { 
    orderId: 'BU-2024-004', 
    customer: 'Eco Partner Bt.', 
    service: 'Konténer bérlés',
    status: 'cancelled',
    amount: 650.00
  }
]

// Employee table data  
const employeeData = [
  { 
    id: 1,
    name: 'Dr. Schmidt Thomas', 
    position: 'Ügyvezető igazgató',
    role: 'admin',
    email: 'thomas.schmidt@buchl.hu',
    actions: ''
  },
  { 
    id: 2,
    name: 'Müller Anna', 
    position: 'HR vezető',
    role: 'manager',
    email: 'anna.muller@buchl.hu',
    actions: ''
  },
  { 
    id: 3,
    name: 'Kovács László', 
    position: 'Logisztikai munkatárs',
    role: 'employee',
    email: 'laszlo.kovacs@buchl.hu',
    actions: ''
  },
  { 
    id: 4,
    name: 'Wagner Julia', 
    position: 'Marketing manager',
    role: 'manager',
    email: 'julia.wagner@buchl.hu',
    actions: ''
  }
]

// Order table data
const orderData = [
  {
    orderId: 'BÜ-2024-0156',
    client: 'METRO Áruház Kft.',
    contact: 'Kapcsolat: Nagy Béla',
    service: 'Konténer bérlés (10m³)',
    date: '2024-03-15',
    status: 'active',
    amount: 125000,
    actions: ''
  },
  {
    orderId: 'BÜ-2024-0157',
    client: 'Építő-Mester Zrt.',
    contact: 'Kapcsolat: Kiss Péter',
    service: 'Törmelék elszállítás',
    date: '2024-03-14',
    status: 'completed',
    amount: 87500,
    actions: ''
  },
  {
    orderId: 'BÜ-2024-0158',
    client: 'Green Park Hotel',
    contact: 'Kapcsolat: Szabó Anna',
    service: 'Szelektív hulladékgyűjtés',
    date: '2024-03-13',
    status: 'pending',
    amount: 45000,
    actions: ''
  }
]

// State
const isLoading = ref(false)
const selectedEmployees = ref([])
const searchQuery = ref('')

// Computed
const filteredServiceData = computed(() => {
  if (!searchQuery.value) return serviceData
  
  const query = searchQuery.value.toLowerCase()
  return serviceData.filter(row => 
    Object.values(row).some(value => 
      String(value).toLowerCase().includes(query)
    )
  )
})

// Labels and colors
const statusLabels = {
  completed: 'Teljesítve',
  pending: 'Folyamatban',
  cancelled: 'Törölve'
}

const roleColors = {
  admin: 'primary',
  manager: 'secondary',
  employee: 'gray'
}

const roleLabels = {
  admin: 'Adminisztrátor',
  manager: 'Vezető',
  employee: 'Munkatárs'
}

const orderStatusColors = {
  active: 'primary',
  completed: 'secondary',
  pending: 'warning',
  cancelled: 'error'
}

const orderStatusLabels = {
  active: 'Aktív',
  completed: 'Teljesítve',
  pending: 'Függőben',
  cancelled: 'Törölve'
}

// Methods
const toggleLoading = () => {
  isLoading.value = !isLoading.value
  if (isLoading.value) {
    setTimeout(() => {
      isLoading.value = false
    }, 3000)
  }
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('hu-HU', { 
    style: 'currency', 
    currency: 'EUR' 
  }).format(amount)
}

const viewEmployee = (employee: any) => {
  console.log('View employee:', employee)
}

const editEmployee = (employee: any) => {
  console.log('Edit employee:', employee)
}

const deleteEmployee = (employee: any) => {
  console.log('Delete employee:', employee)
}

// Code examples
const basicTableCode = `<UTable 
  :data="data"
  :ui="{
    td: { base: 'text-gray-900' },
    th: { base: 'text-gray-700 font-medium uppercase text-xs' },
    tr: { base: 'hover:bg-gray-50' }
  }"
/>

<script setup>
const data = [
  { azonosito: 1, nev: 'Kovács János', email: 'kovacs.janos@buchl.hu', reszleg: 'Logisztika' },
  { azonosito: 2, nev: 'Nagy Éva', email: 'nagy.eva@buchl.hu', reszleg: 'Értékesítés' },
  // ...
]
<${'/'}script>`

const searchableTableCode = `<template>
  <div>
    <UInput
      v-model="searchQuery"
      placeholder="Keresés..."
      icon="i-heroicons-magnifying-glass-20-solid"
      class="mb-4"
    />
    
    <UTable 
      :data="filteredData"
    >
      <template #status-data="{ row }">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full" :class="statusColors[row.status]"></div>
          <span>{{ statusLabels[row.status] }}</span>
        </div>
      </template>
    </UTable>
  </div>
</template>

<script setup>
const searchQuery = ref('')

const filteredData = computed(() => {
  if (!searchQuery.value) return data
  return data.filter(row => 
    Object.values(row).some(value => 
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
})
<${'/'}script>`

const loadingTableCode = `<UTable 
  :loading="isLoading"
  :data="data"
/>`

const emptyTableCode = `<UTable 
  :data="[]"
>
  <template #empty-state>
    <div class="text-center py-8">
      <UIcon name="i-heroicons-circle-stack-20-solid" class="mx-auto h-8 w-8 text-gray-400 mb-4" />
      <h3 class="text-sm font-medium text-gray-900 mb-2">Nincsenek megrendelések</h3>
      <p class="text-sm text-gray-500 mb-4">Kezdje el új megrendelés létrehozásával.</p>
      <UButton color="primary" icon="i-heroicons-plus">
        Új megrendelés
      </UButton>
    </div>
  </template>
</UTable>`

const interactiveTableCode = `<UTable 
  :data="employees"
>
  <template #role-data="{ row }">
    <UBadge :color="roleColors[row.role]" variant="subtle">
      {{ roleLabels[row.role] }}
    </UBadge>
  </template>
  
  <template #actions-data="{ row }">
    <UDropdown :items="[[
      { label: 'Megtekintés', icon: 'i-heroicons-eye-20-solid', click: () => viewEmployee(row) },
      { label: 'Szerkesztés', icon: 'i-heroicons-pencil-20-solid', click: () => editEmployee(row) },
    ], [
      { label: 'Törlés', icon: 'i-heroicons-trash-20-solid', click: () => deleteEmployee(row) }
    ]]">
      <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
    </UDropdown>
  </template>
</UTable>`

const buchlStyledTableCode = `<UTable 
  :data="orders"
  :ui="{
    wrapper: 'rounded-none',
    base: 'min-w-full',
    thead: 'bg-gray-50',
    tbody: 'bg-white divide-y divide-gray-200',
    tr: {
      base: 'transition-colors',
      active: 'hover:bg-gray-50'
    },
    th: {
      base: 'text-left',
      padding: 'px-4 py-3',
      color: 'text-gray-700',
      font: 'font-medium uppercase tracking-wider',
      size: 'text-xs'
    },
    td: {
      base: 'whitespace-nowrap',
      padding: 'px-4 py-3',
      color: 'text-gray-900',
      size: 'text-sm'
    }
  }"
>
  <template #client-data="{ row }">
    <div>
      <div class="font-medium">{{ row.client }}</div>
      <div class="text-xs text-gray-500">{{ row.contact }}</div>
    </div>
  </template>
  
  <template #status-data="{ row }">
    <UBadge 
      :color="statusColors[row.status]" 
      variant="subtle"
      class="rounded-none"
    >
      {{ statusLabels[row.status] }}
    </UBadge>
  </template>
</UTable>`
</script>