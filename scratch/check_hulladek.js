import axios from 'axios';
const DIRECTUS_URL = 'https://buchl-admin.previsionlab.hu';
const TOKEN = '8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8';

async function checkCollections() {
  try {
    const resKat = await axios.get(`${DIRECTUS_URL}/items/hulladek_katalogus?limit=1`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log("hulladek_katalogus:", JSON.stringify(resKat.data.data[0] || "Empty", null, 2));

    const resTel = await axios.get(`${DIRECTUS_URL}/items/hulladek_telephelyek?limit=1`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log("hulladek_telephelyek:", JSON.stringify(resTel.data.data[0] || "Empty", null, 2));
    
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}
checkCollections();
