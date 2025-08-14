import apiClient from './apiClient'

export interface MeasurementResult {
  chest: number
  waist: number
  hips: number
  shoulders: number
  inseam: number
  height: number
  timestamp: string
  accuracy: number
}

export const measurementService = {
  async processImage(base64: string): Promise<MeasurementResult> {
    // const { data } = await apiClient.post('/measurement/process', { image: base64 })
    // return data
    await new Promise((r) => setTimeout(r, 1200))
    return {
      chest: 95.5,
      waist: 78.2,
      hips: 98.7,
      shoulders: 45.3,
      inseam: 78.9,
      height: 175.0,
      timestamp: new Date().toISOString(),
      accuracy: 94.2,
    }
  },
}

export default measurementService


