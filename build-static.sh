#!/bin/bash

# Színek a kimeneti üzenetekhez
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Statikus build indítása...${NC}"

# 1. Build készítése
echo -e "${BLUE}📦 npm run generate futtatása...${NC}"
npm run generate

if [ $? -ne 0 ]; then
    echo "❌ Build sikertelen!"
    exit 1
fi

# 2. Tiszta könyvtár létrehozása
echo -e "${BLUE}🗑️  Régi dist-package törlése...${NC}"
rm -rf dist-package

# 3. Statikus fájlok másolása
echo -e "${BLUE}📂 Statikus fájlok másolása dist-package mappába...${NC}"
mkdir -p dist-package
cp -r .output/public/* dist-package/

# 4. Ellenőrzés
echo -e "${GREEN}✅ Build elkészült!${NC}"
echo -e "${GREEN}📁 A deployolható fájlok helye: dist-package/${NC}"
echo ""
echo -e "${BLUE}📊 Build statisztika:${NC}"
du -sh dist-package/
echo ""
echo -e "${BLUE}📋 Következő lépések:${NC}"
echo "1. Tömörítsd a dist-package mappát:"
echo "   zip -r buchl-app-static.zip dist-package/"
echo ""
echo "2. Vagy csomagolás tar.gz formátumban:"
echo "   tar -czf buchl-app-static.tar.gz dist-package/"
echo ""
echo "3. Küldd el a webszerver üzemeltetőnek"
echo ""
echo -e "${GREEN}✨ Kész!${NC}"
