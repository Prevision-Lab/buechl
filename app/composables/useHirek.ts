import { readItems } from '@directus/sdk'

export const useHirek = () => {
  const { $directus } = useNuxtApp()
  const { locale, t } = useI18n()
  const config = useRuntimeConfig()

  const fetchHirek = async (slug?: string) => {
    const baseUrl = config.public.directusUrl?.replace(/\/$/, '')
    console.log(`[useHirek] Fetching news from: ${baseUrl}/items/hirek, slug: ${slug || 'all'}`)
    
    try {
      const filter = slug ? { slug: { _eq: slug } } : {}

      const response = await $directus.request(
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

      const rawHirek = Array.isArray(response) ? response : []
      console.log(`[useHirek] Received ${rawHirek.length} items from Directus`)

      if (rawHirek.length === 0) return slug ? null : []

      // Map locale to Directus language codes
      const languageMap: Record<string, string> = {
        'hu': 'hu-HU',
        'en': 'en-US',
        'de': 'de-DE'
      }
      const directusLangCode = languageMap[locale.value] || 'hu-HU'

      const getCategoryLabel = (kategoria: string) => {
        const categoryMap: Record<string, string> = {
          'events': t('news.page.categories.events'),
          'education': t('news.page.categories.education'),
          'sustainability': t('news.page.categories.sustainability'),
          'technology': t('news.page.categories.technology'),
          'community': t('news.page.categories.community'),
          'recognition': t('news.page.categories.recognition')
        }
        return categoryMap[kategoria] || kategoria
      }

      const processHir = (hir: any) => {
        // Find translation for current language
        const translation = hir.translations?.find(
          (t: any) => t.languages_code === directusLangCode
        )

        // Process gallery images
        const galeriaKepek = hir.galeria?.map((item: any) => {
          const file = item.directus_files_id
          if (!file) return null
          return {
            src: `${baseUrl}/assets/${file.id}?access_token=${config.public.directusToken}`,
            alt: file.description || file.title || file.filename_download
          }
        }).filter(Boolean) || []

        return {
          id: hir.id,
          cim: translation?.cim || hir.cim,
          slug: hir.slug,
          leiras: translation?.leiras || hir.leiras,
          tartalom: translation?.tartalom || hir.tartalom,
          kategoria: hir.kategoria,
          kategoriaLabel: getCategoryLabel(hir.kategoria),
          datum: hir.datum,
          olvasasi_ido: hir.olvasasi_ido,
          olvasasiIdoLabel: hir.olvasasi_ido ? `${hir.olvasasi_ido} ${t('news.page.minRead')}` : null,
          kepUrl: hir.kiemelt_kep
            ? `${baseUrl}/assets/${hir.kiemelt_kep}?access_token=${config.public.directusToken}`
            : null,
          videoUrl: hir.video
            ? `${baseUrl}/assets/${hir.video}?access_token=${config.public.directusToken}`
            : null,
          galeriaKepek
        }
      }

      if (slug) {
        return processHir(rawHirek[0])
      }

      return rawHirek.map(processHir)
    } catch (error: any) {
      console.error('[useHirek] Error fetching hirek:', error.message)
      if (error.response) {
        console.error('[useHirek] API Response Error:', error.response.status, error.response.data)
      }
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
