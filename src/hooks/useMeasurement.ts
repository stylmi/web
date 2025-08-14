import { useCallback, useState } from 'react'
import { measurementService, type MeasurementResult } from '../services/measurementService'

export function useMeasurement() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<MeasurementResult | null>(null)

  const process = useCallback(async (imageBase64: string) => {
    setIsProcessing(true)
    try {
      const res = await measurementService.processImage(imageBase64)
      setResult(res)
      return res
    } finally {
      setIsProcessing(false)
    }
  }, [])

  return { isProcessing, result, process }
}

export default useMeasurement


