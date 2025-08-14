import apiClient from './apiClient'

export interface Profile { id: string; name: string; email: string }

export const profileService = {
  async getProfile(): Promise<Profile> {
    // const { data } = await apiClient.get('/me')
    // return data
    return { id: 'u1', name: 'Jane Doe', email: 'jane@example.com' }
  },
  async updateProfile(update: Partial<Profile>): Promise<Profile> {
    // const { data } = await apiClient.patch('/me', update)
    // return data
    return { id: 'u1', name: update.name || 'Jane Doe', email: update.email || 'jane@example.com' }
  },
}

export default profileService


