import { readItems } from '@directus/sdk'

export const useHirek = () => {
  const { $directus } = useNuxtApp()
  const { locale } = useI18n()
  const config = useRuntimeConfig()
  
  const fetchHirek = async (slug?: string) => {
    try {
      const filter = slug ? { slug: { _eq: slug } } : {}
      
      const hirek = await $directus.request(
        readItems('hirek', {
          filter,
          fields: [
            '*',
            'translations.*',
            'galeria.*',
            'galeria.directus_files_id.*'
          ],
          sort: ['-datum'],
          limit: slug ? 1 : -1
        })
      )
      
      if (!hirek || hirek.length === 0) return slug ? null : []
      
      // Map locale to Directus language codes
      const languageMap: Record<string, string> = {
        'hu': 'hu-HU',
        'en': 'en-US',
        'de': 'de-DE'
      }
      const directusLangCode = languageMap[locale.value] || 'hu-HU'
      
      const processHir = (hir: any) => {
        // Find translation for current language
        const translation = hir.translations?.find(
          (t: any) => t.languages_code === directusLangCode
        )
        
        // Process gallery images
        const galeriaKepek = hir.galeria?.map((item: any) => {
          const file = item.directus_files_id
          return {
            src: `https://buchl-admin.previsionlab.hu/assets/${file.id}?access_token=${config.public.directusToken}`,
            alt: file.description || file.title || file.filename_download
          }
        }) || []
        
        return {
          id: hir.id,
          cim: translation?.cim || hir.cim,
          slug: hir.slug,
          leiras: translation?.leiras || hir.leiras,
          tartalom: translation?.tartalom || hir.tartalom,
          kategoria: hir.kategoria,
          datum: hir.datum,
          olvasasi_ido: hir.olvasasi_ido,
          kepUrl: hir.kep 
            ? `https://buchl-admin.previsionlab.hu/assets/${hir.kep}?access_token=${config.public.directusToken}`
            : null,
          galeriaKepek
        }
      }
      
      if (slug) {
        return processHir(hirek[0])
      }
      
      return hirek.map(processHir)
    } catch (error) {
      console.error('Error fetching hirek:', error)
      return slug ? null : []
    }
  }
  
  // Reactive data with automatic refresh on locale change
  const { data: hirek, refresh } = useAsyncData(
    `hirek-${locale.value}`,
    () => fetchHirek(),
    {
      watch: [locale]
    }
  )
  
  return {
    hirek,
    refresh,
    fetchHirBySlug: (slug: string) => fetchHirek(slug)
  }
}
