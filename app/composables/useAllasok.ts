import { readItems } from '@directus/sdk'

export const useAllasok = () => {
  const { $directus } = useNuxtApp()
  const { locale } = useI18n()

  const fetchAllasok = async () => {
    try {
      const response = await $directus.request(
        readItems('allasok', {
          filter: { status: { _eq: 'published' } },
          fields: [
            '*'
          ],
          sort: ['sort']
        })
      )

      const rawAllasok = Array.isArray(response) ? response : []
      if (rawAllasok.length === 0) return []

      const mappedAllasok = rawAllasok.map((allas: any) => {
        return {
          id: allas.id,
          cim: allas.cim,
          leiras: allas.leiras,
          munkaido_tipus: allas.munkaido_tipus,
          munkavegzes_helye: allas.munkavegzes_helye,
          lejart: allas.lejart || false
        }
      })

      // Sort: active (lejart: false) first, then expired (lejart: true)
      return mappedAllasok.sort((a, b) => {
        if (a.lejart === b.lejart) return 0
        return a.lejart ? 1 : -1
      })
    } catch (error: any) {
      console.error('[useAllasok] Error fetching allasok:', error.message)
      return []
    }
  }

  // Reactive data with automatic refresh
  const { data: allasok, refresh, status } = useAsyncData(
    `allasok-list`,
    () => fetchAllasok()
  )

  return {
    allasok,
    refresh,
    status
  }
}
