import { readItems } from '@directus/sdk'

export const useOldalSzekciok = (oldal: string) => {
  const { $directus } = useNuxtApp()
  const { locale } = useI18n()
  const config = useRuntimeConfig()
  
  const fetchSzekciok = async () => {
    try {
      const szekciok = await $directus.request(
        readItems('oldal_szekciok', {
          filter: {
            oldal: { _eq: oldal },
            status: { _eq: 'published' }
          },
          fields: ['*', 'translations.*', 'kep.*'],
          sort: ['sorrend']
        })
      )
      
      if (!szekciok || szekciok.length === 0) return []
      
      // Map locale to Directus language codes
      const languageMap: Record<string, string> = {
        'hu': 'hu-HU',
        'en': 'en-US',
        'de': 'de-DE'
      }
      const directusLangCode = languageMap[locale.value] || 'hu-HU'
      
      // Process each section with translations
      return szekciok.map((szekc: any) => {
        const translation = szekc.translations?.find(
          (t: any) => t.languages_code === directusLangCode
        )
        
        return {
          id: szekc.id,
          oldal: szekc.oldal,
          tipus: szekc.tipus,
          cim: translation?.cim || szekc.cim,
          alcim: translation?.alcim || szekc.alcim,
          leiras: translation?.leiras || szekc.leiras,
          elemek: translation?.elemek || szekc.elemek,
          kep: szekc.kep,
          kepUrl: szekc.kep
            ? `https://buchl-admin.previsionlab.hu/assets/${szekc.kep}?access_token=${config.public.directusToken}`
            : null,
          sorrend: szekc.sorrend,
          bg_szin: szekc.bg_szin
        }
      })
    } catch (error) {
      console.error(`Error fetching oldal_szekciok for ${oldal}:`, error)
      return []
    }
  }
  
  // Reactive sections data with automatic refresh on locale change
  const { data: szekciok, refresh } = useAsyncData(
    `oldal-szekciok-${oldal}`,
    fetchSzekciok,
    {
      watch: [locale]
    }
  )
  
  return {
    szekciok,
    refresh
  }
}
