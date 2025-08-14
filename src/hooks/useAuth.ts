import { useState, useCallback } from 'react'
import authService, { SignInPayload, SignUpPayload } from '../services/authService'

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signIn = useCallback(async (payload: SignInPayload) => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await authService.signIn(payload)
      localStorage.setItem('stylmi_token', res.token)
      return res
    } catch (e: any) {
      setError(e?.message || 'Failed to sign in')
      throw e
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signUp = useCallback(async (payload: SignUpPayload) => {
    setIsLoading(true)
    setError(null)
    try {
      return await authService.signUp(payload)
    } catch (e: any) {
      setError(e?.message || 'Failed to sign up')
      throw e
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('stylmi_token')
  }, [])

  return { isLoading, error, signIn, signUp, signOut }
}

export default useAuth


