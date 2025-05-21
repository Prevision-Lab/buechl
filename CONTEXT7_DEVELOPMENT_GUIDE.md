# Context7 Fejlesztési Útmutató - BÜCHL Design System

## Áttekintés

Ez az útmutató bemutatja, hogyan használd a Context7-et a BÜCHL Design System fejlesztéséhez.

## Context7 Használata

### 1. Alapvető használat

Mindig add hozzá a `use context7` kifejezést a prompthoz:

```
"Hogyan használom a Nuxt UI Card komponenst? use context7"
```

### 2. Komponens fejlesztés

#### Button komponens példa:

```javascript
// 1. Dokumentáció ellenőrzés
"Nuxt UI Button komponens teljes dokumentáció. use context7"

// 2. Prop-ok megismerése
"Nuxt UI Button összes prop és használatuk. use context7"

// 3. Példakód kérése
"Példa Nuxt UI Button különböző variánsokkal. use context7"

// 4. Testreszabás
"Hogyan szabhatom testre a Nuxt UI Button stílusát Tailwind-del? use context7"
```

### 3. Design System komponensek fejlesztési sorrendje

#### Következő lépés: Alapkomponensek

1. **Button komponensek**
   ```javascript
   "Nuxt UI Button komponens primary, secondary, text variánsok. use context7"
   ```

2. **Form elemek**
   ```javascript
   "Nuxt UI Input, Select, Checkbox, Radio komponensek példákkal. use context7"
   ```

3. **Card komponens**
   ```javascript
   "Nuxt UI Card komponens header, body, footer slotokkal. use context7"
   ```

4. **Modal komponens**
   ```javascript
   "Nuxt UI Modal teljes implementáció példa. use context7"
   ```

## Konkrét fejlesztési példa

### BuchlButton komponens létrehozása

1. **Ellenőrizd a Nuxt UI Button dokumentációt**:
   ```
   "Nuxt UI Button komponens teljes dokumentáció és prop-ok. use context7"
   ```

2. **Hozd létre a komponenst**:
   ```vue
   <template>
     <UButton
       :ui="customUi"
       :class="customClass"
       v-bind="$attrs"
     >
       <slot />
     </UButton>
   </template>

   <script setup lang="ts">
   // Kérd Context7-től a TypeScript típusokat
   "Nuxt UI Button TypeScript típusok és interface. use context7"
   
   const props = defineProps({
     variant: {
       type: String,
       default: 'primary'
     }
   })

   const customUi = computed(() => ({
     base: 'font-semibold transition-all duration-200',
     rounded: 'rounded-lg',
     padding: {
       sm: 'px-4 py-2',
       md: 'px-6 py-3',
       lg: 'px-8 py-4'
     }
   }))

   const customClass = computed(() => {
     // Használd a BÜCHL színeket
     if (props.variant === 'primary') {
       return 'bg-[#002F5C] hover:bg-[#002F5C]/90 text-white'
     }
     // További variánsok...
   })
   </script>
   ```

3. **Példa használatra**:
   ```vue
   <template>
     <div class="space-y-4">
       <BuchlButton variant="primary">
         Elsődleges gomb
       </BuchlButton>
       
       <BuchlButton variant="secondary">
         Másodlagos gomb
       </BuchlButton>
     </div>
   </template>
   ```

## Tailwind testreszabás Context7-tel

```javascript
// 1. Színek beállítása
"Hogyan adjak hozzá custom színeket a Tailwind konfigurációhoz? use context7"

// 2. Typography plugin
"Tailwind Typography plugin beállítása Nuxt 3-ban. use context7"

// 3. Responsive design
"Tailwind responsive breakpoints best practices. use context7"
```

## Directus integráció Context7-tel

```javascript
// 1. Kapcsolat létrehozása
"Directus SDK setup Nuxt 3-ban példakóddal. use context7"

// 2. Kollekciók lekérdezése
"Directus items lekérdezése relációkkal. use context7"

// 3. Autentikáció
"Directus authentication Nuxt 3 composable példa. use context7"
```

## Fejlesztési workflow

### 1. Napi fejlesztés

1. **Reggel**: Ellenőrizd a feladatokat
2. **Komponens fejlesztés előtt**: Context7 dokumentáció ellenőrzés
3. **Implementáció közben**: Context7 példakódok
4. **Tesztelés után**: Context7 best practices

### 2. Új komponens workflow

```javascript
// 1. Kutatás
"[Komponens név] Nuxt UI dokumentáció és példák. use context7"

// 2. Tervezés
"[Komponens név] accessibility best practices. use context7"

// 3. Implementáció
"[Komponens név] TypeScript típusok és prop validáció. use context7"

// 4. Dokumentáció
"[Komponens név] JSDoc dokumentáció példa. use context7"
```

## Problémák és megoldások

### Ha Context7 nem ad megfelelő választ:

1. **Angol nyelvre váltás**:
   ```
   "How to use Nuxt UI Button component? use context7"
   ```

2. **Egyszerűbb kérdés**:
   ```
   "Nuxt UI Button props. use context7"
   ```

3. **Verzióspecifikus kérdés**:
   ```
   "Nuxt UI 2.x Button documentation. use context7"
   ```

## Következő lépések

### 1. hét: Alapkomponensek
- [ ] Button variánsok
- [ ] Form elemek
- [ ] Card komponens
- [ ] Alert komponens

### 2. hét: Összetett komponensek
- [ ] Modal komponens
- [ ] Dropdown menü
- [ ] Navigation komponens
- [ ] Table komponens

### 3. hét: Projekt-specifikus komponensek
- [ ] Hero szekció
- [ ] Szolgáltatás kártyák
- [ ] Kapcsolati űrlap
- [ ] Footer

## Összefoglalás

A Context7 használatával:
1. ✅ Mindig naprakész dokumentációt kapsz
2. ✅ Gyorsabban fejleszthetsz
3. ✅ Követheted a best practice-eket
4. ✅ Kevesebb hibát követsz el

**Fontos**: Minden fejlesztési kérdésnél használd a Context7-et a `use context7` hozzáadásával!