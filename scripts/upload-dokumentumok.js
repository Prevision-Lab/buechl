#!/usr/bin/env node
/**
 * Script a statikus fájlok feltöltéséhez a Directus "dokumentumok" kollekciójába
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIRECTUS_URL = 'https://buchl-admin.previsionlab.hu';
const TOKEN = '8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8';
const FILES_DIR = path.join(__dirname, '..', 'public', 'dokumentumok');

// Dokumentumok listája a tanusitvanyok.vue alapján
const dokumentumok = [
    // Tanúsítványok - HU
    {
        id: 'emasOkirat',
        cim: 'EMAS Okirat',
        alcim: 'EMAS Okirat 2025',
        filename: 'emas-okirat-2025.pdf',
        tipus: 'tanusitvany',
        meret: '129 KB',
    },
    {
        id: 'emasHu',
        cim: 'EMAS Tanúsítvány',
        alcim: 'Eco-Management and Audit Scheme',
        filename: 'emas-20280622.pdf',
        tipus: 'tanusitvany',
        meret: '131 KB',
    },
    {
        id: 'iso9001Hu',
        cim: 'ISO 9001:2015',
        alcim: 'Minőségirányítási rendszer',
        filename: 'iso-9001-2015-hu.pdf',
        tipus: 'tanusitvany',
        meret: '1.8 MB',
    },
    {
        id: 'iso14001Hu',
        cim: 'ISO 14001:2015',
        alcim: 'Környezetirányítási rendszer',
        filename: 'iso-14001-2015-hu.pdf',
        tipus: 'tanusitvany',
        meret: '1.7 MB',
    },
    {
        id: 'iso45001Hu',
        cim: 'ISO 45001:2018',
        alcim: 'Munkavédelmi irányítási rendszer',
        filename: 'iso-45001-2018-hu.pdf',
        tipus: 'tanusitvany',
        meret: '625 KB',
    },
    // Tanúsítványok - EN
    {
        id: 'iso9001En',
        cim: 'ISO 9001:2015',
        alcim: 'Quality Management System',
        filename: 'iso-9001-2015-en.pdf',
        tipus: 'tanusitvany',
        meret: '1.8 MB',
    },
    {
        id: 'iso14001En',
        cim: 'ISO 14001:2015',
        alcim: 'Environmental Management System',
        filename: 'iso-14001-2015-en.pdf',
        tipus: 'tanusitvany',
        meret: '1.8 MB',
    },
    {
        id: 'iso45001En',
        cim: 'ISO 45001:2018',
        alcim: 'Occupational Health and Safety Management System',
        filename: 'iso-45001-2018-en.pdf',
        tipus: 'tanusitvany',
        meret: '623 KB',
    },
    // Tanúsítványok - DE (ugyanazok a fájlok, mint az EN)
    {
        id: 'iso9001De',
        cim: 'ISO 9001:2015',
        alcim: 'Qualitätsmanagementsystem',
        filename: 'iso-9001-2015-en.pdf',
        tipus: 'tanusitvany',
        meret: '1.8 MB',
        sharedFile: 'iso9001En',
    },
    {
        id: 'iso14001De',
        cim: 'ISO 14001:2015',
        alcim: 'Umweltmanagementsystem',
        filename: 'iso-14001-2015-en.pdf',
        tipus: 'tanusitvany',
        meret: '1.8 MB',
        sharedFile: 'iso14001En',
    },
    {
        id: 'iso45001De',
        cim: 'ISO 45001:2018',
        alcim: 'Arbeitsschutzmanagementsystem',
        filename: 'iso-45001-2018-en.pdf',
        tipus: 'tanusitvany',
        meret: '623 KB',
        sharedFile: 'iso45001En',
    },
    // Engedélyek
    {
        id: 'engedélyekAttekintese',
        cim: 'Engedélyek áttekintése',
        alcim: 'Teljes engedélyek összefoglalása',
        filename: 'hatosagi-engedelyek-listaja-2026.pdf',
        tipus: 'engedely',
        meret: '293 KB',
    },
    // Céginformációk
    {
        id: 'emas2007Elso',
        cim: 'EMAS 2007 – Első tanúsítvány',
        alcim: 'Első EMAS tanúsítvány 2007-ből',
        filename: 'emas-2007.jpg',
        tipus: 'ceginformacio',
        meret: '231 KB',
    },
    {
        id: 'emasNyilatkozat2024',
        cim: 'EMAS nyilatkozat 2024',
        alcim: 'Környezetvédelmi nyilatkozat 2024',
        filename: 'emas-nyilatkozat-2024.pdf',
        tipus: 'ceginformacio',
        meret: '1.7 MB',
    },
    {
        id: 'emasNyilatkozat2023',
        cim: 'EMAS nyilatkozat 2023',
        alcim: 'Környezetvédelmi nyilatkozat 2023',
        filename: 'emas-nyilatkozat-2023.pdf',
        tipus: 'ceginformacio',
        meret: '1.2 MB',
    },
    {
        id: 'emasNyilatkozat2020',
        cim: 'EMAS nyilatkozat 2020',
        alcim: 'Környezetvédelmi nyilatkozat 2020',
        filename: 'emas-nyilatkozat-2020.pdf',
        tipus: 'ceginformacio',
        meret: '709 KB',
    },
    {
        id: 'emasNyilatkozat2021',
        cim: 'EMAS nyilatkozat 2021',
        alcim: 'Környezetvédelmi nyilatkozat 2021',
        filename: 'emas-nyilatkozat-2021.pdf',
        tipus: 'ceginformacio',
        meret: '749 KB',
    },
    {
        id: 'emasNyilatkozat2022',
        cim: 'EMAS nyilatkozat 2022',
        alcim: 'Környezetvédelmi nyilatkozat 2022',
        filename: 'emas-nyilatkozat-2022.pdf',
        tipus: 'ceginformacio',
        meret: '1.1 MB',
    },
    {
        id: 'energetikaiJelentes2024',
        cim: 'Energetikai szakreferens éves jelentés 2024',
        alcim: 'Energetikai szakreferens éves jelentése 2024',
        filename: 'energetikai-szakreferens-eves-jelentes-2024.pdf',
        tipus: 'ceginformacio',
        meret: '6.2 MB',
    },
];

// Hiányzó fájlok (nincsenek meg a public mappában)
const missingFiles = [
    {
        id: 'elogSystemPrezentacio',
        cim: 'ELOG Rendszer prezentáció',
        alcim: 'ELOG rendszer bemutató prezentáció',
        filename: 'ELOG_System_prezentáció.pdf',
        tipus: 'ceginformacio',
        meret: '69 KB',
    },
    {
        id: 'fenntarthatosagiJelentes',
        cim: 'Fenntarthatósági jelentés',
        alcim: 'Vállalati fenntarthatósági jelentés',
        filename: 'Fenntarthatósági_jelentés.pdf',
        tipus: 'ceginformacio',
        meret: '7.6 MB',
    },
];

async function uploadFile(filepath, filename) {
    const fileBuffer = fs.readFileSync(filepath);
    const boundary =
        '----FormBoundary' + Math.random().toString(36).substring(2);

    const body = Buffer.concat([
        Buffer.from(
            `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: application/octet-stream\r\n\r\n`,
        ),
        fileBuffer,
        Buffer.from(`\r\n--${boundary}--\r\n`),
    ]);

    const response = await fetch(`${DIRECTUS_URL}/files`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
        },
        body,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`File upload failed: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    return result.data.id;
}

async function createDokumentum(doc, fileId) {
    const response = await fetch(`${DIRECTUS_URL}/items/dokumentumok`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: 'published',
            cim: doc.cim,
            alcim: doc.alcim,
            file: fileId,
            tipus: doc.tipus,
            meret: doc.meret,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Item creation failed: ${response.status} ${errorText}`,
        );
    }

    const result = await response.json();
    return result.data;
}

async function main() {
    console.log('=== Dokumentumok feltöltése a Directusba ===\n');

    // Ellenőrizzük a hiányzó fájlokat
    console.log('Hiányzó fájlok (nem lesznek feltöltve):');
    for (const doc of missingFiles) {
        console.log(`  ⚠️  ${doc.filename} (${doc.cim})`);
    }
    console.log('');

    const fileIdMap = {}; // filename -> fileId
    const docFileIdMap = {}; // doc.id -> fileId

    for (const doc of dokumentumok) {
        const filepath = path.join(FILES_DIR, doc.filename);

        if (!fs.existsSync(filepath)) {
            console.log(
                `❌ Hiányzó fájl, kihagyva: ${doc.filename} (${doc.cim})`,
            );
            continue;
        }

        try {
            let fileId;

            if (doc.sharedFile) {
                // Ugyanaz a fájl, mint egy másik doksinál
                fileId = docFileIdMap[doc.sharedFile];
                if (!fileId) {
                    console.log(
                        `❌ Hivatkozott fájl még nincs feltöltve: ${doc.sharedFile}`,
                    );
                    continue;
                }
                console.log(
                    `📎 Fájl újrahasználata (${doc.sharedFile}): ${doc.filename} -> ${doc.cim}`,
                );
            } else {
                // Ellenőrizzük, hogy már feltöltöttük-e ezt a fájlt
                if (fileIdMap[doc.filename]) {
                    fileId = fileIdMap[doc.filename];
                    console.log(
                        `📎 Fájl újrahasználata: ${doc.filename} -> ${doc.cim}`,
                    );
                } else {
                    console.log(
                        `📤 Fájl feltöltése: ${doc.filename} -> ${doc.cim}`,
                    );
                    fileId = await uploadFile(filepath, doc.filename);
                    fileIdMap[doc.filename] = fileId;
                    console.log(`   ✅ File ID: ${fileId}`);
                }
            }

            docFileIdMap[doc.id] = fileId;

            console.log(`📝 Dokumentum rekord létrehozása: ${doc.cim}`);
            const created = await createDokumentum(doc, fileId);
            console.log(`   ✅ Rekord ID: ${created.id}\n`);
        } catch (error) {
            console.error(`   ❌ Hiba: ${error.message}\n`);
        }
    }

    console.log('=== Kész ===');
}

main().catch(console.error);
