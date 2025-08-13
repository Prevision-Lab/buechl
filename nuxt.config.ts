export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'hu',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
        },
    },
    
    components: [
        {
            path: '~/app/components',
            pathPrefix: false
        },
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/ui-pro', // This already includes @nuxt/ui
        '@vueuse/motion/nuxt'
    ],

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            directusUrl: process.env.NUXT_PUBLIC_DIRECTUS_URL,
        },
    },

    image: {
        providers: {
            directus: {
                provider: 'directus',
                options: {
                    baseUrl: `${process.env.NUXT_PUBLIC_DIRECTUS_URL}/assets/`,
                },
            },
            local: {
                provider: 'ipx',
            },
        },
    },

    fonts: {
        families: [
            {
                name: 'Catamaran',
                provider: 'google',
                weights: ['100', '400', '500', '600', '700'],
            },
            {
                name: 'Permanent Marker',
                provider: 'google',
                weights: ['400'],
            },
        ],
    },

    ui: {
        fonts: true,
        primary: 'blue',
        gray: 'neutral',
        icons: ['heroicons', 'simple-icons', 'lucide'],
        colorMode: false // Disable color mode module
    },
    
    colorMode: {
        preference: 'light',
        fallback: 'light',
    },
    
    // Exclude directories from file watching to prevent ENFILE errors
    nitro: {
        ignore: ['venv/**', '**/.venv/**', '**/node_modules/**']
    },
    
    // Additional watcher configuration
    vite: {
        server: {
            watch: {
                ignored: ['**/venv/**', '**/.venv/**', '**/node_modules/**']
            }
        }
    }
})
