import matter from 'gray-matter'
import { marked } from 'marked'

export const useContent = () => {
  /**
   * Markdown tartalom betöltése az assets/content mappából
   * @param path - A fájl útvonala az assets/content mappán belül kiterjesztés nélkül (pl. "oldaltervek/fooldal")
   * @returns A parsed frontmatter data és a HTML contentet
   */
  const getPageContent = async (path: string) => {
    try {
      // Dinamikus import a markdown fájl betöltéséhez
      const rawContent = await import(`~/assets/content/${path}.md?raw`)
      
      // Gray-matter használata a frontmatter és a markdown tartalom szétválasztásához
      const { data, content } = matter(rawContent.default)
      
      // Markdown konvertálása HTML-re
      const htmlContent = marked.parse(content)
      
      return { 
        data, 
        content: htmlContent,
        rawMarkdown: content
      }
    } catch (error) {
      console.error(`Hiba a tartalom betöltésekor: ${path}`, error)
      return {
        data: {},
        content: '',
        rawMarkdown: ''
      }
    }
  }
  
  return {
    getPageContent
  }
}