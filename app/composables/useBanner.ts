import { readItems } from '@directus/sdk'

export const useBanner = (bannerId: number) => {
  const { $directus } = useNuxtApp()
  const { locale } = useI18n()
  const config = useRuntimeConfig()
  
  const fetchBanner = async () => {
    try {
      const banners = await $directus.request(
        readItems('bannerek', {
          filter: {
            id: { _eq: bannerId }
          },
          fields: ['*', 'translations.*'],
          limit: 1
        })
      )
      
      if (!banners || banners.length === 0) return null
      
      const banner = banners[0]
      
      // Map locale to Directus language codes
      const languageMap: Record<string, string> = {
        'hu': 'hu-HU',
        'en': 'en-US',
        'de': 'de-DE'
      }
      const directusLangCode = languageMap[locale.value] || 'hu-HU'
      
      // Find translation for current language
      const translation = banner.translations?.find(
        (t: any) => t.languages_code === directusLangCode
      )
      
      // Return translated or default content
      return {
        cim: translation?.cim || banner.cim,
        leiras: translation?.leiras || banner.leiras,
        gombok: translation?.gombok || banner.gombok,
        kep: banner.kep,
        kepUrl: banner.kep 
          ? `https://buchl-admin.previsionlab.hu/assets/${banner.kep}?access_token=${config.public.directusToken}`
          : null
      }
    } catch (error) {
      console.error(`Error fetching banner ${bannerId}:`, error)
      return null
    }
  }
  
  // Reactive banner data with automatic refresh on locale change
  const { data: banner, refresh } = useAsyncData(
    `banner-${bannerId}`,
    fetchBanner,
    {
      watch: [locale]
    }
  )
  
  return {
    banner,
    refresh
  }
}
