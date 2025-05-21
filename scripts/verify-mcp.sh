#!/bin/bash

echo "MCP diagnosztika elindítása..."

# 1. Ellenőrizzük a MCP szerver futását
echo "1. MCP szerver status:"
pm2 list | grep mcp-server

# 2. API endpoint teszt
echo -e "\n2. API endpoint teszt:"
curl -s http://localhost:3001/api/components | jq -r '.[0] | {name, category}'

# 3. MCP capabilities
echo -e "\n3. MCP capabilities teszt:"
curl -s http://localhost:3001/api/capabilities | jq '.'

# 4. Protokoll verzió
echo -e "\n4. Protokoll verzió:"
curl -s http://localhost:3001/version 2>/dev/null || echo "Nincs verzió endpoint"

# 5. Claude MCP config teszt
echo -e "\n5. Claude MCP config:"
cat ~/.mcp.json 2>/dev/null || cat .mcp.json 2>/dev/null || echo "Nincs MCP config"

# 6. Tool lista
echo -e "\n6. Elérhető tool-ok:"
curl -s http://localhost:3001/api/tools 2>/dev/null || echo "Nincs tools endpoint"

echo -e "\nDiagnosztika kész."