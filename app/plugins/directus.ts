import type { RestClient, AuthenticationClient } from '@directus/sdk'
import type { Schema } from '#build/directus-types'
import { createDirectus, authentication, rest } from '@directus/sdk'
import Queue from 'p-queue'

// Sleep function for retry delays
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Queue for rate limiting
const queue = new Queue({
    intervalCap: 10,
    interval: 500,
    carryoverConcurrencyCount: true,
})

// Retry logic for failed requests
async function fetchRetry(count: number, ...args: Parameters<typeof fetch>) {
    const response = await fetch(...args)

    // If the request is successful or we've retried too many times, return the response
    if (count > 2 || response.status !== 429) return response

    // Log a warning for rate limits
    console.warn(`[429] Too Many Requests (Attempt ${count + 1})`)

    // Wait before retrying
    await sleep(500)

    // Retry the request
    return fetchRetry(count + 1, ...args)
}

export default defineNuxtPlugin(async (_nuxtApp) => {
    const config = useRuntimeConfig()
    const { directusUrl } = config.public

    // Create Directus client with retry logic and rate limiting
    const directus = createDirectus(directusUrl as string, {
        globals: {
            fetch: (...args) => queue.add(() => fetchRetry(0, ...args)),
        },
    })
        .with(authentication('session', { credentials: 'include' }))
        .with(rest({ credentials: 'include' }))

    // Fetch the current user on the server side

    return {
        provide: {
            directus: directus as RestClient<Schema> &
                AuthenticationClient<Schema>,
        },
    }
})
