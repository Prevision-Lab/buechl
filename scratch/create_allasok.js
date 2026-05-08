import axios from 'axios';

const DIRECTUS_URL = 'https://buchl-admin.previsionlab.hu';
const TOKEN = '8Y9Xh6bvU3Q0Bu4vo7I_e9lJyjypCD_8';

async function createCollection() {
  try {
    const payload = {
      collection: "allasok",
      meta: {
        icon: "work",
        note: "Állásajánlatok kezelése",
        display_template: "{{cim}}"
      },
      schema: {
        name: "allasok"
      },
      fields: [
        {
          field: "id",
          type: "uuid",
          meta: {
            hidden: true,
            readonly: true
          },
          schema: {
            is_primary_key: true,
            has_auto_increment: false
          }
        },
        {
          field: "status",
          type: "string",
          meta: {
            width: "full",
            options: {
              choices: [
                { text: "Publikálva", value: "published" },
                { text: "Piszkozat", value: "draft" },
                { text: "Archiválva", value: "archived" }
              ]
            },
            interface: "select-dropdown",
            display: "labels",
            display_options: {
              showAsDot: true,
              choices: [
                { text: "Publikálva", value: "published", foreground: "#FFFFFF", background: "#2F80ED" },
                { text: "Piszkozat", value: "draft", foreground: "#18222F", background: "#D3DAE4" },
                { text: "Archiválva", value: "archived", foreground: "#FFFFFF", background: "#F2994A" }
              ]
            }
          },
          schema: {
            default_value: "draft",
            is_nullable: false
          }
        },
        {
          field: "sort",
          type: "integer",
          meta: {
            interface: "input",
            hidden: true
          }
        },
        {
          field: "cim",
          type: "string",
          meta: {
            interface: "input",
            width: "full",
            required: true
          }
        },
        {
          field: "leiras",
          type: "text",
          meta: {
            interface: "textarea",
            width: "full"
          }
        },
        {
          field: "munkavegzes_helye",
          type: "string",
          meta: {
            interface: "input",
            width: "half"
          }
        },
        {
          field: "munkaido_tipus",
          type: "string",
          meta: {
            interface: "input",
            width: "half"
          }
        },
        {
          field: "lejart",
          type: "boolean",
          meta: {
            interface: "boolean",
            width: "half",
            note: "Ha be van kapcsolva, az állás elszürkítve jelenik meg (nem lehet jelentkezni rá)."
          },
          schema: {
            default_value: false
          }
        }
      ]
    };

    const res = await axios.post(`${DIRECTUS_URL}/collections`, payload, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log('Collection created successfully:', res.data.data.collection);

    // Now set permissions to public read
    const permPayload = {
      role: null, // Public role
      collection: "allasok",
      action: "read",
      permissions: {},
      validation: {},
      presets: null,
      fields: ["*"]
    };
    await axios.post(`${DIRECTUS_URL}/permissions`, permPayload, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    console.log('Permissions set to public read successfully.');
    
  } catch (error) {
    console.error('Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
  }
}

createCollection();
