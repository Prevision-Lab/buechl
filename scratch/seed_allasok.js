import axios from 'axios';
import crypto from 'crypto';

const DIRECTUS_URL = 'https://buchl-admin.previsionlab.hu';
const TOKEN = '8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8';

const jobs = [
  {
    status: 'published',
    cim: 'Gépkocsivezető',
    leiras: 'Hulladékszállítási feladatok ellátása, ADR képesítés előny',
    munkaido_tipus: 'Operatív',
    munkavegzes_helye: 'Győr',
    sort: 1,
    lejart: true
  },
  {
    status: 'published',
    cim: 'Targoncavezető',
    leiras: 'Raktári és udvari anyagmozgatási feladatok',
    munkaido_tipus: 'Operatív',
    munkavegzes_helye: 'Győr',
    sort: 2,
    lejart: true
  },
  {
    status: 'published',
    cim: 'Megváltozott munkaképességű kolléga',
    leiras: 'Adminisztrációs és kisegítő feladatok',
    munkaido_tipus: 'Adminisztrációs',
    munkavegzes_helye: 'Győr',
    sort: 3,
    lejart: true
  },
  {
    status: 'published',
    cim: 'Portás',
    leiras: 'Telephely biztonsági feladatai, beléptetés',
    munkaido_tipus: 'Biztonsági',
    munkavegzes_helye: 'Győr',
    sort: 4,
    lejart: true
  }
];

async function seedJobs() {
  try {
    const jobsWithIds = jobs.map(job => ({ ...job, id: crypto.randomUUID() }));
    const res = await axios.post(`${DIRECTUS_URL}/items/allasok`, jobsWithIds, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log(`Successfully uploaded ${res.data.data.length} jobs.`);
  } catch (error) {
    console.error('Error seeding jobs:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
  }
}

seedJobs();
