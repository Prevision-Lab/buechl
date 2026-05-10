import axios from 'axios';
const DIRECTUS_URL = 'https://buchl-admin.previsionlab.hu';
const TOKEN = '8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8';

async function checkCollections() {
  try {
    const res = await axios.get(`${DIRECTUS_URL}/items/hulladek_telephelyek?fields=*,hulladek_elemek.*&limit=1`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log(JSON.stringify(res.data.data[0], null, 2));
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}
checkCollections();
