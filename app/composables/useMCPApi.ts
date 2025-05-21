// MCP API composable for documentation access
export const useMCPApi = () => {
  const baseUrl = 'http://localhost:3001/api'

  const getComponents = async () => {
    const response = await fetch(`${baseUrl}/components`)
    return response.json()
  }

  const getComponentDetails = async (componentName: string, section?: string) => {
    let url = `${baseUrl}/components/${componentName}`
    if (section) {
      url += `?section=${section}`
    }
    const response = await fetch(url)
    return response.json()
  }

  const searchDocumentation = async (query: string, scope: string = 'all') => {
    const response = await fetch(`${baseUrl}/search?q=${query}&scope=${scope}`)
    return response.json()
  }

  const getGuides = async () => {
    const response = await fetch(`${baseUrl}/guides`)
    return response.json()
  }

  const generateComponentCode = async (options: {
    componentName: string
    props?: Record<string, any>
    slots?: Record<string, string>
  }) => {
    const response = await fetch(`${baseUrl}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    })
    return response.json()
  }

  return {
    getComponents,
    getComponentDetails,
    searchDocumentation,
    getGuides,
    generateComponentCode
  }
}