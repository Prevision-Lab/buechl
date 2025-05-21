# CLAUDE.md

Ez a fájl útmutatást nyújt a Claude Code (claude.ai/code) számára a kódbázisban való tájékozódáshoz és fejlesztéshez.

## Parancsok

- Fejlesztés: `npm run dev -- -p 3005` vagy `nuxi dev -p 3005`
- Build: `npm run build` vagy `nuxi build`
- Generálás: `nuxi generate`

## Projektáttekintés

```
Projekt név: BÜCHL Magyarország Design System és Weboldal
Verzió: 0.1
Leírás: A BÜCHL Hungaria weboldal fejlesztésének célja egy modern, felhasználóbarát és technológiailag fejlett weboldal létrehozása, amely tükrözi a BÜCHL Csoport professzionalizmusát, miközben a magyar piac egyedi igényeire szabott.

Főbb célok:
- A BÜCHL Hungaria brand identitásának erősítése
- Részletes szolgáltatási információk nyújtása
- Fenntarthatósági kezdeményezések bemutatása
- Javított felhasználói élmény biztosítása
- Többnyelvű tartalom (magyar, angol, német)
```

## Főbb projekt lépések

Jelenlegi státusz: Design System fejlesztés

Főbb mérföldkövek:
- [Design System]: Buchl.hu online design system megalkotása
  - ✅ Alapstruktúra létrehozása
  - ✅ Design System főoldal (/design-system)
  - ✅ Színpaletta dokumentáció
  - ✅ Tipográfiai rendszer dokumentáció
  - ✅ Layout & Spacing útmutató
  - 🔄 Komponensek katalógus (következő lépés)
  - ⏭️ UI Pattern-ek és Best Practices

- [Website Development]: Büchl Hungaria weboldal fejlesztése
  - ⏭️ Főoldal design és implementáció
  - ⏭️ Szolgáltatások oldal
  - ⏭️ Karrier szekció
  - ⏭️ Kapcsolat oldal

## Design System Specifikáció

Minta amit követnünk kell: https://www.buechl.de/ , kiindulási alap de a gombok hero-k hasonlóan nézzenek ki.
Kép a nyitóoldalról: buch-de-minta.png

### Képek és média

A Design System és a weboldal fejlesztése során az Unsplash képtárat használjuk professzionális képekhez.
- API: https://images.unsplash.com/
- Formátum: ?w=WIDTH&h=HEIGHT&fit=crop
- Témák: ipari megoldások, fenntarthatóság, újrahasznosítás, környezetvédelem, logisztika, hulladékkezelés
- Mindig a BÜCHL tevékenységéhez kapcsolódó képeket keresünk
- Példa: https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=200&fit=crop

### 1. Színpaletta

A Büchl arculati kézikönyve alapján a következő alapszínek kerülnek felhasználásra:

| Szín           | HEX kód   | RGB               | Használat                       |
|----------------|-----------|-------------------|--------------------------------|
| Büchl Kék (Saphirblau) | #002F5C   | rgb(0, 47, 92)   | Elsődleges márkaidentitás, CTA gombok |
| Büchl Zöld     | #00F189   | rgb(0, 241, 137)  | Fenntarthatóság, másodlagos elemek |
| Fekete         | #000000   | rgb(0, 0, 0)      | Főcímek, alapszöveg            |
| Fehér          | #FFFFFF   | rgb(255, 255, 255)| Háttér, inverz tartalom        |

### 3.2. Másodlagos színek

| Szín           | HEX kód   | RGB               | Használat                       |
|----------------|-----------|-------------------|--------------------------------|
| Világosszürke  | #F5F5F5   | rgb(245, 245, 245)| Háttérszínek, szekciók elkülönítése |
| Középszürke    | #D9D9D9   | rgb(217, 217, 217)| Elválasztók, kártyakeret       |
| Sötétszürke    | #333333   | rgb(51, 51, 51)   | Alcímek, másodlagos szöveg     |

### 3.3. Kiegészítő színek

| Szín           | HEX kód   | RGB               | Használat                       |
|----------------|-----------|-------------------|--------------------------------|
| Figyelmeztető  | #FFB800   | rgb(255, 184, 0)  | Figyelmeztetés, kiemelések     |
| Hiba           | #D9001B   | rgb(217, 0, 27)   | Hibaüzenetek                   |
| Sikeres        | #00D965   | rgb(0, 217, 101)  | Pozitív visszajelzés           |

### 2. Tipográfia

- **Elsődleges betűtípus: Catamaran**
  - Használat: Főcímek, alcímek, navigáció, gombok
  - Súlyok: Thin (100), Regular (400), Medium (500), SemiBold (600), Bold (700)

- **Másodlagos betűtípus: Permanent Marker**
  - Használat: Kiemelések, slogen, egyedi hangsúlyok
  - Súlyok: Regular

### 3. Design System Oldal

A `/design-system` útvonalon egy átfogó design system dokumentációt kell megalkotni, amely bemutatja a weboldal vizuális elemeit és a komponensek használatát.

A design system oldal az alábbi aloldalakat tartalmazza:
- **Áttekintés**: Általános információk
- **Színek**: A színpaletta bemutatása
- **Tipográfia**: Betűtípusok és méretrendszer
- **Layout & Spacing**: Térközök és elrendezés
- **Komponensek**: UI komponensek (gombok, formaelemek, stb.)
- **Kártyák**: Nuxt UI alapú kártya komponensek
- **Blog Posts**: Blog bejegyzés komponensek
- **Patterns**: Komplex UI minták
- **Resources**: Erőforrások és linkek

### 4. Komponensek

#### Alap komponensek
- Gombok (elsődleges, másodlagos, szöveges)
- Űrlapmezők (input, select, checkbox, radio)
- Kártyák és tartalmi elemek
- Navigáció és menük
- Táblázatok és adatmegjelenítés
- Modális ablakok és értesítések

#### Komponensek fejlesztési állapota (2025.05.16)
- ✅ Card komponensek - Nuxt UI alapú implementáció
- ✅ Blog kártya komponensek (BuchlBlogPost, BuchlBlogPostHorizontal)
- ✅ ColorCard és ColorPalette komponensek
- ✅ Button komponensek - BÜCHL márka gombok implementálva
- ✅ Form elemek - Input, Select, Checkbox, Radio implementálva
- ✅ Hero komponens - BuchlHero elkészült
- ✅ Table komponens - elkészült
- ✅ Navigation komponensek - elkészült

### Nuxt UI Kártyák Helyes Használata - Best Practices

**Kritikus szabályok a fehér margók elkerüléséhez:**
1. **Mindig használd a `root` beállítást az `:ui` prop-ban** - NE használj `base` beállítást
2. **A `header` slot padding-ját állítsd nullára**: `header: 'p-0 sm:p-0'`
3. **Fix magasságot adj a képeknek**: pl. `h-48` vagy `h-64`
4. **NE használj `rounded` osztályokat az img elemeken** - csak a wrapper div-en
5. **A tartalmat közvetlenül helyezd a `template #default`-ba** - ne használj extra wrapper div-et

**Példa képes kártya implementációra:**
```vue
<UCard
  :ui="{
    root: 'shadow-none ring-1 ring-neutral-300 hover:shadow-sm transition-all duration-300',
    header: 'p-0 sm:p-0',  // Kritikus: padding eltávolítása
  }"
>
  <template #header>
    <div class="overflow-hidden rounded-t-md">
      <img
        src="image-url"
        class="w-full h-48 object-cover"
      />
    </div>
  </template>
  <template #default>
    <h3 class="text-xl font-semibold mb-2">Cím</h3>
    <p class="text-gray-600">Leírás</p>
  </template>
</UCard>
```

#### Projekt-specifikus komponensek
- Hero szekció
- Szolgáltatás kártyák
- Csapat bemutatás
- Hírek és események
- Kapcsolatfelvételi űrlapok
- BlogPost komponensek (BuchlBlogPost, BuchlBlogPostHorizontal)

## Technológiai Stack

- **Nuxt.js**: Vue.js alapú keretrendszer
- **Nuxt UI** és **Nuxt UI Pro**: Komponens könyvtárak
- **Tailwind CSS**: Utility-first CSS keretrendszer
- **TypeScript**: Statikus típusellenőrzés
- **Directus**: Headless CMS

## Komponens fejlesztési módszertan

> **FONTOS**: Mielőtt bármilyen új komponenst fejlesztenénk, **MINDIG** használd a Context7-et a Nuxt UI dokumentáció ellenőrzésére!

A komponens fejlesztés helyes folyamata:

1. **Első lépés: Context7-el ellenőrizd a Nuxt UI komponenseket**
   ```javascript
   "Milyen Nuxt UI form komponensek léteznek? use context7"
   "Hogyan használom a Nuxt UI Input komponenst? use context7"
   ```

2. **Második lépés: Komponens dokumentáció vizsgálata**
   ```javascript
   "Mi a Nuxt UI Modal komponens összes prop-ja és használata? use context7"
   "Mutass példát a Nuxt UI Form validációra. use context7"
   ```

3. **Harmadik lépés: Döntés a megközelítésről**
   - Ha a Nuxt UI komponens megfelelő, használd azt közvetlenül
   - Ha részben megfelelő, építs rá és terjeszd ki
   - Ha nincs megfelelő, kérj Context7-től segítséget

4. **Negyedik lépés: Komponens implementálása**
   - Építs a Nuxt UI alapokra
   - Alkalmazd a projekt dizájn irányelveket
   - Biztosíts típus-definíciókat és dokumentációt

## Komponens Architektúra

A projekt komponenseit a következő módon szervezzük:

1. **Alap komponensek**: `/components/_base` könyvtárban
2. **Űrlap komponensek**: `/components/_forms` könyvtárban
3. **Adatmegjelenítési komponensek**: `/components/_data` könyvtárban
4. **Navigációs komponensek**: `/components/_navigation` könyvtárban
5. **Visszajelzési komponensek**: `/components/_feedback` könyvtárban
6. **Projekt-specifikus komponensek**: `/components/_[projekt]` könyvtárban
7. **Layout komponensek**: `/layouts` könyvtárban
8. **Oldalak**: `/pages` könyvtárban

## Kódolási konvenciók

### Általános kód irányelvek

> **Komponens fejlesztési alapelv**: Mindig keresd és használd a Nuxt UI komponenseket alapként, mielőtt saját megoldást implementálnál.

- Használj Vue 3 Composition API-t TypeScript-tel
- Nevezéktan:
  - PascalCase a komponensekhez (pl. `UserProfile.vue`)
  - camelCase a függvényekhez/változókhoz (pl. `getUserData()`)
  - kebab-case a propokhoz (pl. `:user-data="userData"`)
- Használd az automatikus importálást (auto-imports)
- CSS: Használj Tailwind utility osztályokat
- Részesítsd előnyben a Nuxt composable-ket
- Használj async/await-et megfelelő hibakezeléssel

### Nuxt UI használata

**FONTOS**: Mindig használd a Context7-et Nuxt UI komponensek keresésére!

```javascript
// Komponens dokumentáció lekérdezése
"Hogyan használom a Nuxt UI Button komponenst? use context7"

// Prop-ok és beállítások
"Milyen prop-ok vannak a Nuxt UI Modal komponensnek? use context7"

// Példakódok keresése
"Mutass példát a Nuxt UI Form használatára validációval. use context7"
```

### Tailwind használata

A Tailwind dokumentáció elérhető a Context7 szolgáltatáson keresztül:

```javascript
// Tailwind grid rendszer
"Magyarázd el a Tailwind CSS grid rendszert és responsive breakpoints. use context7"

// Dark mode implementáció
"Hogyan implementálok dark mode-ot Tailwind CSS-sel Nuxt 3-ban? use context7"
```

### Styling Best Practices (Tailwind + Nuxt UI)

1. **Nuxt UI komponensek testreszabása**:
   ```vue
   <!-- Használj ui prop-ot a Nuxt UI komponensek testreszabásához -->
   <UButton
     :ui="{
       base: 'focus:outline-blue-500',
       rounded: 'rounded-lg',
       padding: { sm: 'px-4 py-2', md: 'px-6 py-3' }
     }"
   />
   ```

2. **Tailwind utility-first megközelítés**:
   ```vue
   <!-- Jó: Utility osztályok használata -->
   <div class="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
   ```

3. **Reszponzív design**:
   ```vue
   <!-- Mobile-first megközelítés -->
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     <UCard class="p-4 sm:p-6 lg:p-8">
       <!-- Tartalom -->
     </UCard>
   </div>
   ```

### Nuxt UI Gombok - FONTOS SZABÁLYOK

⚠️ **KRITIKUS**: A Nuxt UI v3-ban csak az előre definiált színneveket használhatod a `color` prop-ban!

#### Engedélyezett színek a color prop-ban:
- `primary`, `secondary`, `neutral`, `success`, `warning`, `error`, `info`

#### ❌ TILOS egyéni színnevek használata:
```vue
<!-- ROSSZ - ezek nem működnek! -->
<UButton color="sapphire" />
<UButton color="buchl" />
```

#### ✅ HELYES használat:
```vue
<!-- JÓ - használj előre definiált színeket -->
<UButton color="primary" />

<!-- Ha egyéni színt akarsz, használj Tailwind osztályokat -->
<UButton
  color="white"
  class="bg-buchl-blue text-white hover:bg-buchl-blue/90"
/>
```

#### BÜCHL márka gombok helyes implementációja:

```vue
<!-- BÜCHL kék gomb (primary) -->
<UButton
  label="Stellenangebote"
  color="primary"
  class="rounded-none"
/>

<!-- BÜCHL zöld gomb (secondary) - kék szöveggel jobb kontrasztért -->
<UButton
  label="Nachhaltigkeit"
  color="secondary"
  class="rounded-none text-buchl-blue"
/>
```

#### Konfiguráció (app.config.ts):
```typescript
export default defineAppConfig({
  ui: {
    primary: 'sapphire',    // Ez lesz a primary color (BÜCHL kék)
    secondary: 'buchl',     // Ez lesz a secondary color (BÜCHL zöld)
  }
})
```

### Nuxt UI Form Komponensek - FONTOS SZABÁLYOK

⚠️ **KRITIKUS**: A Nuxt UI v3 form komponenseknek is szükségük van `color` és `variant` prop-okra!

#### Form komponensek helyes használata:

```vue
<!-- Input mező -->
<UInput
  v-model="value"
  placeholder="Placeholder szöveg"
  color="primary"
  variant="outline"
/>

<!-- Select/Dropdown -->
<USelect
  v-model="selected"
  :items="options"  <!-- FONTOS: :options helyett :items -->
  placeholder="Válassz..."
  color="primary"
  variant="outline"
/>

<!-- Checkbox -->
<UCheckbox
  v-model="checked"
  label="Jelölőnégyzet"
  color="primary"
/>
```

#### API változások Nuxt UI v3-ban:
1. `:options` → `:items` (Select, RadioGroup)
2. `value-attribute` → `value-key`
3. Mindig adj meg `color` és `variant` prop-okat
4. Error state: használj `color="error"` és `:highlight="true"`
5. Ikonok: `i-heroicons-*` → `i-lucide-*`
6. Mindig használj `class="w-full"` a teljes szélesség eléréséhez

## Directus integráció (Komprimált)

### API kapcsolat kialakítása

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL || 'http://localhost:8055',
      directusToken: process.env.DIRECTUS_TOKEN
    }
  }
})
```

### Directus SDK használata

```javascript
// composables/useDirectus.js
import { createDirectus, rest, authentication } from '@directus/sdk'

export const useDirectus = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directusUrl)
    .with(authentication())
    .with(rest())
  return client
}
```

### Adatlekérdezés minta

```vue
<script setup lang="ts">
const { $directus } = useNuxtApp()
const { data: products } = await useAsyncData('products', () =>
  $directus.items('products').readByQuery({
    fields: ['id', 'name', 'price', 'image', 'category.*'],
    filter: { status: { _eq: 'published' } },
    sort: ['-created_at'],
    limit: 10
  })
)
</script>
```

## Performance Best Practices (Komprimált)

### Optimalizálási alapok

1. **Lazy loading komponensek**:
   ```vue
   const HeavyChart = defineAsyncComponent(() =>
     import('~/components/charts/HeavyChart.vue')
   )
   ```

2. **Image optimalizáció**:
   ```vue
   <NuxtImg
     src="/images/hero.jpg"
     width="1920"
     height="1080"
     loading="lazy"
     format="webp"
     quality="80"
   />
   ```

3. **SSR/SSG konfiguráció**:
   ```javascript
   // nuxt.config.ts
   export default defineNuxtConfig({
     routeRules: {
       '/': { prerender: true },
       '/admin/**': { ssr: false },
       '/products/**': { swr: 3600 }
     }
   })
   ```

## Common Errors (Komprimált)

### Gyakori hibák

1. **Hydration mismatch**: Használj `ClientOnly` wrapper-t
2. **Memory leak**: Tisztítsd a listener-eket `onUnmounted`-ban
3. **Nuxt UI hiányzik**: Ellenőrizd a modulok telepítését

## SEO alapok

```vue
<script setup>
useSeoMeta({
  title: 'Büchl Hungary',
  description: 'Fenntartható ipari megoldások',
  ogImage: '/images/og-image.jpg',
})
</script>
```

## Projektstruktúra

```
project-root/
├── app/                    # Application source code
│   ├── app.config.ts       # App configuration
│   ├── app.vue             # Main Vue component
│   ├── assets/             # Static assets
│   ├── components/         # Vue components
│   ├── composables/        # Composable functions
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components
│   └── plugins/            # Vue plugins
├── modules/                # Custom Nuxt modules
├── public/                 # Public assets
├── server/                 # Server-side code
├── types/                  # TypeScript type definitions
├── nuxt.config.ts          # Nuxt configuration
└── package.json            # Project dependencies
```

## Context7 használata

A projektben használjuk a Context7 szolgáltatást dokumentáció eléréséhez:

```javascript
// Nuxt.js dokumentáció
"Hogyan hozok létre SSR alkalmazást Nuxt 3-ban? use context7"

// Nuxt UI komponensek
"Hogyan használom a Nuxt UI Button komponenst? use context7"

// Tailwind CSS
"Magyarázd el a Tailwind CSS grid rendszert. use context7"

// Directus integráció
"Hogyan csatlakozom a Directus API-hoz? use context7"
```

**Támogatott könyvtárak**: Nuxt.js, Tailwind CSS, Nuxt UI, Directus, TypeScript, Vue 3

## Fejlesztési Terv

### Design System fejlesztési feladatok

#### 1. Alapstruktúra létrehozása
- [x] Starter template inicializálása
- [x] CSS változók és globális stílusok beállítása
- [x] Tipográfia és betűtípusok integrálása

#### 2. Design System oldal
- [x] `/design-system` route létrehozása
- [x] Áttekintés oldal megvalósítása
- [x] Színpaletta dokumentáció
- [x] Tipográfiai rendszer dokumentáció
- [x] Layout & Spacing útmutató
- [x] Komponensek katalógus - Alap megvalósítás kész
- [x] Kártyák dokumentáció - Implementálva
- [x] Blog Posts komponensek
- [x] Marketing komponensek (Hero, CTA)


#### 3. Alapkomponensek fejlesztése
- [x] Button komponensek
- [x] Form elemek
- [x] Card komponens
- [x] Blog kártya komponensek
- [x] Table komponens
- [x] Navigation & Breadcrumb
- [x] Modal & Alert komponensek

#### 4. Projekt-specifikus komponensek
- [x] Hero szekció
- [x] Szolgáltatás kártyák
- [x] Hírek & Blog komponensek

### Weboldal fejlesztési feladatok

#### 1. Oldalak fejlesztése
- [ ] Fejlesztendő oldalak meghatározása /Users/c001os/Dev/buchl-app/buchl-tartalmiterv.md alapján


## Verziókezelés és Továbbfejlesztés

### Változtatások kezelése

- Szemantikus verziószámozás (MAJOR.MINOR.PATCH)
- Minden változtatás dokumentálása a changelog-ban
- Kompatibilitási információk biztosítása

### Visszajelzési mechanizmus

- A design rendszer kommunikációs csatornája
- Bug-bejelentési folyamat
- Javaslati rendszer új komponensekhez

## Ajánlott munkafolyamat

1. Design rendszer komponenseinek tervezése és fejlesztése
2. Prototípusok létrehozása
3. Tesztelés (reszponzivitás, hozzáférhetőség, teljesítmény)
4. Implementáció, QA
5. Visszajelzés gyűjtése és javítások
6. Rendszeres felülvizsgálat és frissítés

---

Ez a CLAUDE.md fájl az MCP szerverrel együtt segít a Claude Code-nak megérteni a projekt kontextusát és a technológiai stacket.
