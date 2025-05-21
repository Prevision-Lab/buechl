# Context7 Migráció Útmutató

## Áttekintés

A projekt átáll a lokális MCP szerverről a Context7 használatára a dokumentáció eléréshez. Ez az útmutató segít a migrációban.

## Jelenlegi Státusz

### Tesztelt és Támogatott Könyvtárak
- ✅ **Nuxt.js** - Teljes támogatás
- ✅ **Tailwind CSS** - Teljes támogatás
- ❓ **Nuxt UI** - Tesztelés alatt
- ❓ **Directus** - Tesztelés alatt

## Használati Útmutató

### 1. Context7 Aktiválása

Adjuk hozzá a `use context7` kifejezést a prompthoz:

```
# Példa Nuxt.js dokumentációra
"Hogyan hozok létre SSR alkalmazást Nuxt 3-ban? use context7"

# Példa Tailwind CSS dokumentációra  
"Magyarázd el a Tailwind container osztályt. use context7"
```

### 2. Lokális MCP Használata (Szükség Esetén)

Ha a Context7 nem támogat egy könyvtárat, használd a lokális MCP-t:

```javascript
// Nuxt UI komponens dokumentáció
mcp__previsionlab-mcp__getComponentSummary({ name: "Modal" })

// Directus dokumentáció keresés
mcp__previsionlab-mcp__searchDocumentation({
  query: "authentication",
  scope: "directus"
})
```

## Fejlesztői Workflow

### 1. Alapértelmezett Megközelítés

1. **Kezdd Context7-tel** minden dokumentációs kérdésnél
2. Ha nem kapsz megfelelő választ, **váltsd át lokális MCP-re**
3. **Dokumentáld** melyik módszer működött

### 2. Könyvtár-Specifikus Útmutató

| Könyvtár | Elsődleges | Másodlagos |
|----------|------------|------------|
| Nuxt.js | Context7 | Lokális MCP |
| Tailwind CSS | Context7 | Lokális MCP |
| Nuxt UI | Lokális MCP | Context7 |
| Directus | Lokális MCP | Context7 |

### 3. Példa Munkafolyamat

```javascript
// 1. Próbáld Context7-tel
"Hogyan használom a Nuxt useFetch composable-t? use context7"

// 2. Ha nem megfelelő, használj lokális MCP-t
mcp__previsionlab-mcp__searchDocumentation({
  query: "useFetch",
  scope: "nuxt"
})

// 3. Kombináld az információkat
"Az előző információk alapján, hogyan kezelem a hibákat useFetch-ben?"
```

## Best Practices

### 1. Dokumentáció Keresés

- **Általános kérdések**: Context7
- **Specifikus API részletek**: Lokális MCP
- **Példakódok**: Mindkettő

### 2. Performance Optimalizáció

- Context7 gyorsabb az online dokumentációknál
- Lokális MCP gyorsabb offline használatkor
- Cache-eld a gyakran használt információkat

### 3. Hibakezelés

Ha egyik sem működik:
1. Ellenőrizd az internetkapcsolatot (Context7)
2. Ellenőrizd az MCP szerver státuszát
3. Használj fallback dokumentációt

## Migrációs Checklist

- [ ] Teszteld a Context7-et minden könyvtárral
- [ ] Frissítsd a CLAUDE.md dokumentációt
- [ ] Készíts fejlesztői útmutatót
- [ ] Informáld a csapatot a változásokról
- [ ] Állítsd be a hibrid workflow-t
- [ ] Monitorozd a hatékonyságot

## Troubleshooting

### Context7 Nem Működik

1. Ellenőrizd, hogy hozzáadtad-e a "use context7" kifejezést
2. Próbáld meg angolul a kérdést
3. Egyszerűsítsd a kérdést

### Lokális MCP Hibák

1. Ellenőrizd az MCP szerver státuszát
2. Újraindítás: `npm restart`
3. Ellenőrizd a konfigurációt

## Jövőbeli Tervek

1. **Teljes Context7 Átállás**: Ha minden könyvtár támogatott lesz
2. **API Dokumentáció**: Saját API dokumentáció Context7-ben
3. **Automatizálás**: Script a megfelelő eszköz választásához