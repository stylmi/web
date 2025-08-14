import apiClient from './apiClient'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  tags?: string[]
}

export const shopService = {
  async getProducts(query?: string): Promise<Product[]> {
    // const { data } = await apiClient.get('/products', { params: { q: query } })
    // return data
    const base = Array.from({ length: 12 }).map((_, i) => ({
      id: `${i + 1}`,
      name: `Product ${i + 1}`,
      price: 29 + i,
      image: '/api/placeholder/400/500',
      tags: i % 2 === 0 ? ['New'] : ['Popular'],
    }))
    if (!query) return base
    return base.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
  },
}

export default shopService


