import process from 'node:process'
import {
    addTemplate,
    createResolver,
    defineNuxtModule,
    useNuxt,
} from 'nuxt/kit'
import { generateDirectusTypes } from 'directus-sdk-typegen'

export default defineNuxtModule({
    meta: {
        name: 'directus-local',
    },
    async setup() {
        const nuxt = useNuxt()
        const resolver = createResolver(import.meta.url)

        const types = await generateDirectusTypes({
            directusUrl: process.env.NUXT_PUBLIC_DIRECTUS_URL,
            directusToken: process.env.DIRECTUS_TOKEN_ZSELLO,
        })

        addTemplate({
            filename: 'directus-types.d.ts',
            getContents: async () => types,
        })
    },
})
