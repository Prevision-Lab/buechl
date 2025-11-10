import { readItems } from '@directus/sdk'

export const useCta = (ctaId: number) => {
  const { $directus } = useNuxtApp()
  const { locale } = useI18n()
  const config = useRuntimeConfig()
  
  const fetchCta = async () => {
    try {
      const ctas = await $directus.request(
        readItems('cta', {
          filter: {
            id: { _eq: ctaId }
          },
          fields: [
            '*', 
            'translations.*', 
            'video.*',
            'szolgaltatasok.szolgaltatasok_id.*',
            'szolgaltatasok.szolgaltatasok_id.translations.*',
            'statisztikak.statisztikak_id.*',
            'statisztikak.statisztikak_id.translations.*'
          ],
          limit: 1
        })
      )
      
      if (!ctas || ctas.length === 0) return null
      
      const cta = ctas[0]
      
      // Map locale to Directus language codes
      const languageMap: Record<string, string> = {
        'hu': 'hu-HU',
        'en': 'en-US',
        'de': 'de-DE'
      }
      const directusLangCode = languageMap[locale.value] || 'hu-HU'
      
      // Find translation for current language
      const translation = cta.translations?.find(
        (t: any) => t.languages_code === directusLangCode
      )
      
      // Process related services
      const szolgaltatasok = cta.szolgaltatasok?.map((item: any) => {
        const service = item.szolgaltatasok_id
        const serviceTranslation = service?.translations?.find(
          (t: any) => t.languages_code === directusLangCode
        )
        
        return {
          id: service?.id,
          cim: serviceTranslation?.cim || service?.cim,
          leiras: serviceTranslation?.leiras || service?.leiras,
          ikon: service?.ikon,
          szin: service?.szin,
          funkciok: serviceTranslation?.funkciok || service?.funkciok,
          gomb_felirat: serviceTranslation?.gomb_felirat || service?.gomb_felirat,
          gomb_link: service?.gomb_link,
          tipus: service?.tipus,
          sorrend: service?.sorrend
        }
      }) || []
      
      // Process related statistics
      const statisztikak = cta.statisztikak?.map((item: any) => {
        const stat = item.statisztikak_id
        const statTranslation = stat?.translations?.find(
          (t: any) => t.languages_code === directusLangCode
        )
        
        return {
          id: stat?.id,
          szam: stat?.szam,
          cimke: statTranslation?.cimke || stat?.cimke,
          ikon: stat?.ikon,
          sorrend: stat?.sorrend,
          hely: stat?.hely
        }
      }).sort((a: any, b: any) => (a.sorrend || 0) - (b.sorrend || 0)) || []
      
      // Return translated or default content
      return {
        cim: translation?.cim || cta.cim,
        leiras: translation?.leiras || cta.leiras,
        alcim: translation?.alcim || cta.alcim,
        szoveg: translation?.szoveg || cta.szoveg,
        gomb_felirat: translation?.gomb_felirat || cta.gomb_felirat,
        gomb_link: translation?.gomb_link || cta.gomb_link,
        gomb2_felirat: translation?.gomb2_felirat || cta.gomb2_felirat,
        gomb2_link: translation?.gomb2_link || cta.gomb2_link,
        video: cta.video,
        videoUrl: cta.video 
          ? `https://buchl-admin.previsionlab.hu/assets/${cta.video.id}?access_token=${config.public.directusToken}`
          : null,
        kep: cta.kep,
        kepUrl: cta.kep 
          ? `https://buchl-admin.previsionlab.hu/assets/${cta.kep}?access_token=${config.public.directusToken}`
          : null,
        szolgaltatasok,
        statisztikak
      }
    } catch (error) {
      console.error(`Error fetching CTA ${ctaId}:`, error)
      return null
    }
  }
  
  // Reactive CTA data with automatic refresh on locale change
  const { data: cta, refresh } = useAsyncData(
    `cta-${ctaId}`,
    fetchCta,
    {
      watch: [locale]
    }
  )
  
  return {
    cta,
    refresh
  }
}
