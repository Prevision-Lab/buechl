import axios from 'axios';

const DIRECTUS_URL = 'https://buchl-admin.previsionlab.hu';
const TOKEN = '8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8';

async function fixField() {
  try {
    const payload = {
      meta: {
        special: ["uuid"],
        hidden: true
      }
    };
    
    const res = await axios.patch(`${DIRECTUS_URL}/fields/allasok/id`, payload, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log('Successfully updated ID field:', res.data.data.meta.special);
  } catch (error) {
    console.error('Error updating ID field:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
  }
}
fixField();
