# Context7 Migráció a Lokális MCP-ről

## Összefoglalás

A lokális MCP szerver helyett átállhatunk a Context7 használatára, amely egy felhő alapú dokumentáció szolgáltatás az AI fejlesztéshez.

## Context7 Előnyei

1. **Automatikus dokumentáció frissítés**: Nem kell manuálisan frissíteni a dokumentációkat
2. **Szélesebb könyvtár támogatás**: Több ezer könyvtárhoz hozzáfér
3. **Nincs lokális karbantartás**: Nem kell foglalkozni a szerver karbantartással
4. **Egyszerűbb integráció**: Csak hozzá kell adni a "use context7" megjegyzést

## Context7 Hátrányai

1. **Internet kapcsolat szükséges**: Online kell lenni a használathoz
2. **Nem minden könyvtárt támogat**: Lehet, hogy speciális könyvtáraink nincsenek benne
3. **Nincs projekt-specifikus dokumentáció**: Csak publikus dokumentációkat használ

## Használat

### 1. Általános használat
Adjuk hozzá a promptunkhoz a "use context7" megjegyzést:

```
Készíts egy Nuxt.js komponenst Nuxt UI használatával. use context7
```

### 2. Specifikus könyvtár dokumentáció
```
Hogyan használjam a Tailwind CSS grid rendszert? use context7
```

### 3. Verzió-specifikus információ
```
Mi az új a Nuxt 3.10-ben? use context7
```

## Migrációs Stratégia

### 1. Átállás Context7-re
1. Teszteljük, hogy a Context7 támogatja-e a könyvtárainkat
2. Frissítsük a CLAUDE.md dokumentációt
3. Távolítsuk el a lokális MCP konfigurációt

### 2. Hibrid megközelítés
1. Context7 használata általános dokumentációhoz
2. Lokális MCP megtartása projekt-specifikus dokumentációhoz
3. Mindkettő párhuzamos használata

### 3. Visszaállás lokális MCP-re
Ha a Context7 nem megfelelő:
1. Tartsuk meg a jelenlegi lokális MCP szervert
2. Frissítsük rendszeresen a dokumentációkat
3. Keressünk más automatizált megoldásokat

## Döntési Mátrix

| Szempont | Lokális MCP | Context7 |
|----------|-------------|----------|
| Frissesség | ✗ Manuális | ✓ Automatikus |
| Offline működés | ✓ Igen | ✗ Nem |
| Projekt-specifikus | ✓ Igen | ✗ Nem |
| Karbantartás | ✗ Szükséges | ✓ Nincs |
| Könyvtár támogatás | ✗ Korlátozott | ✓ Széles |
| Költség | ✓ Ingyenes | ✓ Ingyenes |

## Következő Lépések

1. **Tesztelés**: Próbáljuk ki a Context7-et néhány fejlesztési feladattal
2. **Értékelés**: Hasonlítsuk össze a Context7 és lokális MCP hatékonyságát
3. **Döntés**: Válasszuk ki a legjobb megoldást a projektünkhöz
4. **Implementáció**: Állítsunk át a választott megoldásra

## Példa CLAUDE.md Frissítés

```markdown
## Dokumentáció Elérés

### Context7 Használata (Ajánlott)

A projektben használhatjuk a Context7 szolgáltatást a dokumentációk eléréséhez:

```javascript
// Használd a "use context7" megjegyzést a promptodban
"Készíts egy Nuxt komponenst. use context7"
```

### Támogatott Könyvtárak
- Nuxt.js
- Nuxt UI (ellenőrizendő)
- Tailwind CSS
- Directus (ellenőrizendő)

### Lokális MCP (Opcionális)

Ha specifikus dokumentációra van szükséged, használhatod a lokális MCP szervert:

```javascript
mcp__previsionlab-mcp__getComponentSummary({ name: "Button" })
```
```

## Ajánlás

Javaslom a Context7 használatát a következő esetekben:
1. Ha stabil internetkapcsolatunk van
2. Ha a könyvtáraink támogatottak
3. Ha nem akarunk dokumentáció karbantartással foglalkozni

Tartsuk meg a lokális MCP-t, ha:
1. Projekt-specifikus dokumentációra van szükségünk
2. Offline fejlesztési környezetben dolgozunk
3. Speciális könyvtárakat használunk

A legjobb megoldás valószínűleg a hibrid megközelítés lesz: Context7 az általános dokumentációhoz és lokális MCP a projekt-specifikus információkhoz.