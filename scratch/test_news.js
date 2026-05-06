
async function testFetch() {
    const baseUrl = 'https://buchl-admin.previsionlab.hu/items/hirek';
    const fields = [
        '*',
        'translations.*',
        'galeria.*',
        'galeria.directus_files_id.*'
    ].join(',');
    
    const url = `${baseUrl}?fields=${fields}&sort=-datum&limit=-1`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer 8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8'
            }
        });

        const data = await response.json();
        const hirek = data.data;
        console.log(`Fetched ${hirek.length} items`);
        
        hirek.slice(0, 5).forEach(hir => {
            console.log(`- ${hir.datum}: ${hir.cim} (ID: ${hir.id})`);
            // Check for translations
            const huTrans = hir.translations?.find(t => t.languages_code === 'hu-HU');
            console.log(`  HU Translation: ${huTrans ? huTrans.cim : 'NONE'}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testFetch();
