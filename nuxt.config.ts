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
        '@vueuse/motion/nuxt',
        '@nuxtjs/i18n',
        // '~/modules/directus' // Temporarily disabled
    ],

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            directusUrl: process.env.NUXT_PUBLIC_DIRECTUS_URL,
            directusToken: process.env.NUXT_PUBLIC_DIRECTUS_TOKEN,
        },
    },

    image: {
        providers: {
            // directus: {
            //     provider: 'directus',
            //     options: {
            //         baseUrl: `${process.env.NUXT_PUBLIC_DIRECTUS_URL}/assets/`,
            //     },
            // },
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
                subsets: ['latin', 'latin-ext'],
            },
            {
                name: 'Permanent Marker',
                provider: 'google',
                weights: ['400'],
                subsets: ['latin', 'latin-ext'],
            },
            {
                name: 'Fredoka One',
                provider: 'google',
                weights: ['400'],
                subsets: ['latin', 'latin-ext'],
            },
            {
                name: 'Kalam',
                provider: 'google',
                weights: ['400', '700'],
                subsets: ['latin', 'latin-ext'],
            },
            {
                name: 'Caveat',
                provider: 'google',
                weights: ['400', '700'],
                subsets: ['latin', 'latin-ext'],
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

    // i18n configuration (enhanced setup based on working Audi project)
    i18n: {
        defaultLocale: 'hu',
        locales: [
            { 
                code: 'hu', 
                name: 'Magyar',
                file: 'hu.json'
            },
            { 
                code: 'en', 
                name: 'English',
                file: 'en.json'
            },
            { 
                code: 'de', 
                name: 'Deutsch',
                file: 'de.json'
            }
        ],
        strategy: 'prefix_except_default',
        skipSettingLocaleOnNavigate: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        customRoutes: 'config',
        pages: {
            rolunk: {
                en: '/about-us',
                de: '/uber-uns'
            },
            szolgaltatasok: {
                en: '/services',
                de: '/dienstleistungen'
            },
            'szolgaltatasok/index': {
                en: '/services',
                de: '/dienstleistungen'
            },
            'szolgaltatasok/hulladekkezeles': {
                en: '/services/waste-treatment',
                de: '/dienstleistungen/abfallbehandlung'
            },
            'szolgaltatasok/szallitas': {
                en: '/services/transport',
                de: '/dienstleistungen/transport'
            },
            'szolgaltatasok/elog-system': {
                en: '/services/elog-system',
                de: '/dienstleistungen/elog-system'
            },
            fenntarthatosag: {
                en: '/sustainability',
                de: '/nachhaltigkeit'
            },
            karrier: {
                en: '/careers',
                de: '/karriere'
            },
            hirek: {
                en: '/news',
                de: '/nachrichten'
            },
            'hirek/index': {
                en: '/news',
                de: '/nachrichten'
            },
            kapcsolat: {
                en: '/contact',
                de: '/kontakt'
            },
            tanusitvanyok: {
                en: '/downloads',
                de: '/downloads'
            },
            'hulladek-katalogus': {
                en: '/waste-catalog',
                de: '/abfall-katalog'
            },
            'font-test': {
                en: '/font-test',
                de: '/font-test'
            }
        }
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
