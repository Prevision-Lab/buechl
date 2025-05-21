export default defineAppConfig({
    links: [
        { label: 'Kezdőlap', to: '/' },
        { label: 'Rólunk', to: '/rolunk' },
    ],
    contact: {
        phone: '(+36) 99 999 999',
        email: 'info@buchl.hu',
        address: '1000 Budapest, Fő utca 1.',
    },
    toaster: {
        position: 'bottom-right' as const,
        expand: true,
        duration: 5000,
    },
    ui: {
        primary: 'sapphire',    // BÜCHL kék
        secondary: 'buchl',     // BÜCHL zöld
        gray: 'neutral',
    },
})