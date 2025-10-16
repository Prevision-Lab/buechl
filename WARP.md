# WARP Development Rules

## i18n Lokalizációs szabályok

### FONTOS: NE NYÚLJ EHHEZ A KONFIGURÁCIÓHOZ!

A következő i18n konfiguráció **MŰKÖDIK** és tesztelve van. Ne módosítsd!

```typescript
// nuxt.config.ts
i18n: {
    defaultLocale: 'hu',
    locales: [
        { 
            code: 'hu', 
            name: 'Magyar',
            file: 'hu.json'
        },
        { 
            code: 'en', 
            name: 'English',
            file: 'en.json'
        },
        { 
            code: 'de', 
            name: 'Deutsch',
            file: 'de.json'
        }
    ],
    strategy: 'prefix_except_default',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
    },
    customRoutes: 'config',
    pages: {
        // ... route mappings
    }
}
```

### Fontos beállítások:

1. **File elérés**: A fordítási fájlok a `locales/` mappában vannak (gyökérkönyvtár)
2. **skipSettingLocaleOnNavigate: true** - Ez biztosítja a helyes navigációt
3. **detectBrowserLanguage** - Automatikus nyelvdetektálás
4. **strategy: 'prefix_except_default'** - Magyar alapértelmezett, angol/német prefix-szel

### Navigáció komponens:

A `TheHeader.vue` komponensben használd a `NuxtLinkLocale` komponenst:

```vue
<NuxtLinkLocale to="/rolunk">{{ $t('nav.about') }}</NuxtLinkLocale>
```

### LocaleSwitcher komponens:

Az `app/components/LocaleSwitcher.vue` használja a `setLocale` és `finalizePendingLocaleChange` funkciókat.

### SZABÁLYOK:

1. **SOHA ne változtasd meg** a fenti i18n konfigurációt
2. **MINDIG** a `locales/` mappában lévő JSON fájlokat szerkeszd
3. **MINDIG** használj `NuxtLinkLocale` komponenst a navigációhoz
4. **Cache törlése** szükséges minden konfiguráció változás után: `rm -rf .nuxt`

### Lokalizáció folyamata:

**FONTOS BIZTONSÁGI SZABÁLY:**
1. **ELŐSZÖR** másold le a hardcoded magyar szövegeket a magyar fordítási fájlba (locales/hu.json)
2. **CSAK EZUTÁN** cseréld a hardcoded szövegeket `$t('kulcs')` hívásokra
3. Adj hozzá angol és német fordításokat (locales/en.json, locales/de.json)
4. **NE** nyúlj a nuxt.config.ts i18n részéhez!

**Miért fontos ez a sorrend?**
- Ha előbb cseréljük a szövegeket, majd hibázunk, elveszhetnek az eredeti magyar szövegek
- A magyar szövegek megőrzése biztosítja, hogy mindig vissza tudjuk állítani az eredeti állapotot

## Menüszabályok és Lokalizált Linkek

### KRITIKUS SZABÁLYOK:

#### 1. NuxtLinkLocale használata MINDEN internal linkre

**MINDIG** használj `NuxtLinkLocale` komponenst belső linkekre:

```vue
<!-- ✅ HELYES -->
<NuxtLinkLocale to="/rolunk">{{ $t('nav.about') }}</NuxtLinkLocale>
<NuxtLinkLocale to="/szolgaltatasok">{{ $t('nav.services') }}</NuxtLinkLocale>
<NuxtLinkLocale to="/kapcsolat">{{ $t('nav.contact') }}</NuxtLinkLocale>

<!-- ❌ HELYTELEN - NE HASZNÁLD -->
<NuxtLink to="/rolunk">Rólunk</NuxtLink>
<router-link to="/rolunk">Rólunk</router-link>
<a href="/rolunk">Rólunk</a>
```

#### 2. Külső linkek kezelése

Külső linkekre használj sima `<a>` taget:

```vue
<!-- ✅ HELYES külső linkre -->
<a href="https://example.com" target="_blank" rel="noopener">{{ $t('external.link') }}</a>

<!-- ❌ HELYTELEN külső linkre -->
<NuxtLinkLocale to="https://example.com">External</NuxtLinkLocale>
```

#### 3. Menü komponensek szabályai

**TheHeader.vue menü struktura:**

```vue
<template>
  <nav>
    <NuxtLinkLocale to="/" class="nav-brand">
      {{ $t('nav.home') }}
    </NuxtLinkLocale>
    
    <ul class="nav-menu">
      <li><NuxtLinkLocale to="/rolunk">{{ $t('nav.about') }}</NuxtLinkLocale></li>
      <li><NuxtLinkLocale to="/szolgaltatasok">{{ $t('nav.services') }}</NuxtLinkLocale></li>
      <li><NuxtLinkLocale to="/blog">{{ $t('nav.blog') }}</NuxtLinkLocale></li>
      <li><NuxtLinkLocale to="/kapcsolat">{{ $t('nav.contact') }}</NuxtLinkLocale></li>
    </ul>
    
    <!-- LocaleSwitcher komponens -->
    <LocaleSwitcher />
  </nav>
</template>
```

#### 4. Router szabályok

**URL szerkezet:**
- Magyar (default): `/` `/rolunk` `/szolgaltatasok`
- Angol: `/en` `/en/about` `/en/services` 
- Német: `/de` `/de/uber-uns` `/de/dienstleistungen`

**Routing konfiguráció a nuxt.config.ts-ben:**

```typescript
pages: {
    'index': {
        hu: '/',
        en: '/about',
        de: '/uber-uns'
    },
    'rolunk/index': {
        hu: '/rolunk',
        en: '/about',
        de: '/uber-uns'
    },
    'szolgaltatasok/index': {
        hu: '/szolgaltatasok',
        en: '/services', 
        de: '/dienstleistungen'
    }
}
```

#### 5. Fordítási kulcsok konvenciói

**Navigációs elemek (locales/hu.json):**

```json
{
  "nav": {
    "home": "Főoldal",
    "about": "Rólunk",
    "services": "Szolgáltatások",
    "blog": "Blog",
    "contact": "Kapcsolat"
  }
}
```

#### 6. Aktív link styling

**NuxtLinkLocale automatikus aktív osztályok:**

```vue
<style scoped>
.router-link-active {
  color: var(--primary-color);
  font-weight: bold;
}

.router-link-exact-active {
  background-color: var(--primary-light);
}
</style>
```

#### 7. Hibakeresés és debugging

**Gyakori hibák és megoldásaik:**

1. **Hiba**: Link nem váltja a nyelvet
   - **Megoldás**: `NuxtLink` helyett `NuxtLinkLocale` használata

2. **Hiba**: 404 hiba nyelvváltáskor
   - **Megoldás**: Ellenőrizd a `pages` konfigurációt a nuxt.config.ts-ben

3. **Hiba**: Nyelvi előtag duplázódik
   - **Megoldás**: Ne add hozzá manuálisan a nyelvi előtagot

**Debug parancsok:**

```bash
# Cache törlése
rm -rf .nuxt

# Development szerver újraindítása
npm run dev

# Routing ellenőrzése
npm run build
npm run preview
```

#### 8. TILOS MŰVELETEK

**❌ SOHA ne tedd ezeket:**

1. Ne használj `router.push()` közvetlen URL-lel
2. Ne építs fel kézzel lokalizált URL-eket
3. Ne használj `window.location` a navigációhoz
4. Ne módosítsd a `strategy` vagy `skipSettingLocaleOnNavigate` értékeit

**✅ Helyette használj:**

```vue
<!-- Programmatic navigation -->
<script setup>
const localePath = useLocalePath()
const router = useRouter()

const navigateToAbout = () => {
  router.push(localePath('/rolunk'))
}
</script>
```

## Tesztelés:

- Magyar: `http://localhost:3000/`
- Angol: `http://localhost:3000/en/`
- Német: `http://localhost:3000/de/`

### Tesztlista minden fejlesztés után:

1. ✅ Minden menüpont működik magyarul
2. ✅ Minden menüpont működik angolul (/en előtag)
3. ✅ Minden menüpont működik németül (/de előtag)
4. ✅ Nyelvváltó megőrzi az aktuális oldalt
5. ✅ Aktív link highlighting működik
6. ✅ Külső linkek nem kapnak nyelvi előtagot
7. ✅ 404 oldalak lokalizálva vannak

**Minden lokalizált menü linknek helyesen kell működnie minden nyelven!**
