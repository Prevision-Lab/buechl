import { readItems } from '@directus/sdk'

export const useServices = (tipus?: string) => {
  const { $directus } = useNuxtApp()
  const { locale } = useI18n()
  
  const fetchServices = async () => {
    try {
      const filter: any = { status: { _eq: 'published' } }
      if (tipus) {
        filter.tipus = { _eq: tipus }
      }

      const services = await $directus.request(
        readItems('szolgaltatasok', {
          filter,
          fields: ['*', 'translations.*'],
          sort: ['sorrend']
        })
      )
      
      if (!services || services.length === 0) return []
      
      // Map locale to Directus language codes
      const languageMap: Record<string, string> = {
        'hu': 'hu-HU',
        'en': 'en-US',
        'de': 'de-DE'
      }
      const directusLangCode = languageMap[locale.value] || 'hu-HU'
      
      // Map services with translations
      return services.map((service: any) => {
        const translation = service.translations?.find(
          (t: any) => t.languages_code === directusLangCode
        )
        
        return {
          id: service.id,
          cim: translation?.cim || service.cim,
          leiras: translation?.leiras || service.leiras,
          ikon: service.ikon,
          szin: service.szin,
          funkciok: translation?.funkciok || service.funkciok,
          gomb_felirat: translation?.gomb_felirat || service.gomb_felirat,
          gomb_link: service.gomb_link,
          tipus: service.tipus,
          sorrend: service.sorrend
        }
      })
    } catch (error) {
      console.error(`Error fetching services:`, error)
      return []
    }
  }
  
  // Reactive services data with automatic refresh on locale change
  const { data: services, refresh } = useAsyncData(
    `services-${tipus || 'all'}`,
    fetchServices,
    {
      watch: [locale]
    }
  )
  
  return {
    services,
    refresh
  }
}
