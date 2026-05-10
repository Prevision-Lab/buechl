import { readItems } from '@directus/sdk'

export interface WasteItem {
  waste_code: string
  waste_name: string
  location: string
  location_short: string
  ktj: string
  permit: string
  tab_key: string
}

export interface WasteLocation {
  key: string
  label: string
  description: string
  items: WasteItem[]
}

export const useHulladek = () => {
  const { $directus } = useNuxtApp()

  const fetchHulladek = async () => {
    try {
      // Fetch locations and their nested catalog items
      const response = await $directus.request(
        readItems('hulladek_telephelyek', {
          filter: { status: { _eq: 'published' } },
          fields: ['*', 'hulladek_elemek.*'],
          sort: ['sort'],
          deep: {
            hulladek_elemek: {
              _limit: -1
            }
          }
        })
      )

      const rawLocations = Array.isArray(response) ? response : []
      
      const tabItems: WasteLocation[] = []
      const allWasteData: Record<string, WasteItem[]> = {}

      rawLocations.forEach((loc: any) => {
        const tabKey = loc.kulcs
        
        tabItems.push({
          key: tabKey,
          label: loc.nev,
          description: `KTJ: ${loc.ktj || '-'} | Engedély: ${loc.engedely || '-'}`,
          items: []
        })

        const items: WasteItem[] = (loc.hulladek_elemek || []).map((elem: any) => ({
          waste_code: elem.hulladek_kod,
          waste_name: elem.megnevezes,
          location: loc.nev,
          location_short: loc.nev_rovid,
          ktj: loc.ktj || '-',
          permit: loc.engedely || '-',
          tab_key: tabKey
        }))

        allWasteData[tabKey] = items
      })

      return { tabItems, allWasteData }
    } catch (error: any) {
      console.error('[useHulladek] Error fetching data:', error.message)
      return { tabItems: [], allWasteData: {} }
    }
  }

  const { data, refresh, status } = useAsyncData(
    'hulladek-katalogus-data',
    () => fetchHulladek()
  )

  return {
    data,
    refresh,
    status
  }
}
