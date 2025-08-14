import apiClient from './apiClient'

export interface SignInPayload { email: string; password: string }
export interface SignUpPayload { email: string; password: string; name?: string }

export const authService = {
  async signIn(payload: SignInPayload) {
    // return (await apiClient.post('/auth/signin', payload)).data
    return { token: 'mock-token', user: { id: 'u1', email: payload.email } }
  },
  async signUp(payload: SignUpPayload) {
    // return (await apiClient.post('/auth/signup', payload)).data
    return { success: true }
  },
  async forgotPassword(email: string) {
    // return (await apiClient.post('/auth/forgot', { email })).data
    return { success: true }
  },
  async resetPassword(token: string, password: string) {
    // return (await apiClient.post('/auth/reset', { token, password })).data
    return { success: true }
  },
  async verifyEmail(code: string) {
    // return (await apiClient.post('/auth/verify', { code })).data
    return { success: true }
  }
}

export default authService


