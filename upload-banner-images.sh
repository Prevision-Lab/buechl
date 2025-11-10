#!/bin/bash

# Directus API URL
DIRECTUS_URL="https://buchl-admin.previsionlab.hu"

# Képek feltöltése
echo "📸 Banner képek feltöltése a Directusba..."

# 1. Rólunk oldal
echo "1️⃣ Rólunk oldal képének feltöltése..."
ROLUNK_RESPONSE=$(curl -s -X POST "$DIRECTUS_URL/files" \
  -F "title=Rólunk oldal hero" \
  -F "description=Rólunk oldal háttérkép" \
  -F "file=@/Users/c001os/Dev/buchl-app/public/media/images/rolunk.jpg")
ROLUNK_ID=$(echo $ROLUNK_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "   ✅ Feltöltve - ID: $ROLUNK_ID"

# 2. Szolgáltatások oldal
echo "2️⃣ Szolgáltatások oldal képének feltöltése..."
SZOLG_RESPONSE=$(curl -s -X POST "$DIRECTUS_URL/files" \
  -F "title=Szolgáltatások oldal hero" \
  -F "description=Szolgáltatások oldal háttérkép" \
  -F "file=@/Users/c001os/Dev/buchl-app/public/media/images/szolgaltatasaink.jpg")
SZOLG_ID=$(echo $SZOLG_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "   ✅ Feltöltve - ID: $SZOLG_ID"

# 3. Fenntarthatóság oldal
echo "3️⃣ Fenntarthatóság oldal képének feltöltése..."
FENNT_RESPONSE=$(curl -s -X POST "$DIRECTUS_URL/files" \
  -F "title=Fenntarthatóság oldal hero" \
  -F "description=Fenntarthatóság oldal háttérkép" \
  -F "file=@/Users/c001os/Dev/buchl-app/public/images/sustainability/buchl-sustainability.jpg")
FENNT_ID=$(echo $FENNT_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "   ✅ Feltöltve - ID: $FENNT_ID"

# 4. Kapcsolat oldal
echo "4️⃣ Kapcsolat oldal képének feltöltése..."
KAPC_RESPONSE=$(curl -s -X POST "$DIRECTUS_URL/files" \
  -F "title=Kapcsolat oldal hero" \
  -F "description=Kapcsolat oldal háttérkép" \
  -F "file=@/Users/c001os/Dev/buchl-app/public/images/cta/buchl-contact-cta.jpg")
KAPC_ID=$(echo $KAPC_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "   ✅ Feltöltve - ID: $KAPC_ID"

# 5. Hírek oldal
echo "5️⃣ Hírek oldal képének feltöltése..."
HIREK_RESPONSE=$(curl -s -X POST "$DIRECTUS_URL/files" \
  -F "title=Hírek oldal hero" \
  -F "description=Hírek oldal háttérkép" \
  -F "file=@/Users/c001os/Dev/buchl-app/public/media/images/buchl-hirek.jpeg")
HIREK_ID=$(echo $HIREK_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
echo "   ✅ Feltöltve - ID: $HIREK_ID"

echo ""
echo "✨ Minden kép feltöltve!"
echo ""
echo "📋 Kép ID-k:"
echo "   Rólunk: $ROLUNK_ID"
echo "   Szolgáltatások: $SZOLG_ID"
echo "   Fenntarthatóság: $FENNT_ID"
echo "   Kapcsolat: $KAPC_ID"
echo "   Hírek: $HIREK_ID"
