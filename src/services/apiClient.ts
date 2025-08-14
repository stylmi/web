import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'https://api.example.com'

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
})

apiClient.interceptors.request.use((config) => {
  // Attach auth token if present in localStorage
  const token = localStorage.getItem('stylmi_token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    // Centralized error handling hook point
    return Promise.reject(err)
  }
)

export default apiClient


