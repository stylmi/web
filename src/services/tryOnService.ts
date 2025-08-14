import apiClient from './apiClient'

export const tryOnService = {
  async generateTryOn(userImageBase64: string, clothingId: string): Promise<string> {
    // const { data } = await apiClient.post('/tryon', { image: userImageBase64, clothingId })
    // return data.resultUrl as string
    await new Promise((r) => setTimeout(r, 1200))
    return '/api/placeholder/400/600'
  },
}

export default tryOnService


