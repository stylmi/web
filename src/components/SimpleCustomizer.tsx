import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Palette, Info } from 'lucide-react'
import casualSvgUrl from '@assets/images/casual.svg'

type ColorSwatch = { name: string; value: string }

const COLOR_SWATCHES: ColorSwatch[] = [
  { name: 'Ocean', value: '#0ea5e9' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Charcoal', value: '#111827' },
  { name: 'Lavender', value: '#8b5cf6' },
]

const SimpleCustomizer: React.FC = () => {
  const [color, setColor] = useState<string>(COLOR_SWATCHES[0].value)
  const [intensity, setIntensity] = useState<number>(0.85) // tint strength
  const svgHostRef = useRef<HTMLDivElement>(null)
  const [svgReady, setSvgReady] = useState(false)

  // Load the provided SVG (as markup) once
  useEffect(() => {
    let cancelled = false
    async function loadSvg() {
      try {
        const res = await fetch(casualSvgUrl)
        const svgMarkup = await res.text()
        if (cancelled) return
        if (svgHostRef.current) {
          svgHostRef.current.innerHTML = svgMarkup
          setSvgReady(true)
        }
      } catch {
        // no-op
      }
    }
    loadSvg()
    return () => {
      cancelled = true
    }
  }, [])

  // Ensure/Update an inlined SVG filter that tints the image contents
  useEffect(() => {
    if (!svgReady || !svgHostRef.current) return
    const svg = svgHostRef.current.querySelector('svg') as SVGSVGElement | null
    if (!svg) return

    const svgNS = 'http://www.w3.org/2000/svg'

    // Ensure a <defs> section exists
    let defs = svg.querySelector('defs')
    if (!defs) {
      defs = document.createElementNS(svgNS, 'defs')
      svg.insertBefore(defs, svg.firstChild)
    }

    // Ensure the tint filter exists
    let filter = svg.querySelector('#tintFilter') as SVGFilterElement | null
    if (!filter) {
      filter = document.createElementNS(svgNS, 'filter')
      filter.setAttribute('id', 'tintFilter')
      filter.setAttribute('color-interpolation-filters', 'sRGB')

      // Convert image to grayscale (preserve luminance)
      const feGray = document.createElementNS(svgNS, 'feColorMatrix')
      feGray.setAttribute('type', 'matrix')
      feGray.setAttribute('values', [
        '0.2126 0.7152 0.0722 0 0',
        '0.2126 0.7152 0.0722 0 0',
        '0.2126 0.7152 0.0722 0 0',
        '0 0 0 1 0',
      ].join(' '))
      feGray.setAttribute('result', 'gray')

      // Flood selected color with adjustable opacity
      const feFlood = document.createElementNS(svgNS, 'feFlood')
      feFlood.setAttribute('id', 'tintFlood')
      feFlood.setAttribute('flood-color', color)
      feFlood.setAttribute('flood-opacity', String(intensity))
      feFlood.setAttribute('result', 'color')

      // Keep only the colored portion matching the original alpha/luminance
      const feComp = document.createElementNS(svgNS, 'feComposite')
      feComp.setAttribute('in', 'color')
      feComp.setAttribute('in2', 'gray')
      feComp.setAttribute('operator', 'in')
      feComp.setAttribute('result', 'tint')

      // Blend the color back with grayscale (multiply preserves shading)
      const feBlend = document.createElementNS(svgNS, 'feBlend')
      feBlend.setAttribute('in', 'gray')
      feBlend.setAttribute('in2', 'tint')
      feBlend.setAttribute('mode', 'multiply')

      filter.append(feGray, feFlood, feComp, feBlend)
      defs.appendChild(filter)
    } else {
      const feFlood = svg.querySelector('#tintFlood') as SVGFEFloodElement | null
      if (feFlood) {
        feFlood.setAttribute('flood-color', color)
        feFlood.setAttribute('flood-opacity', String(intensity))
      }
    }

    // Apply the filter to the main rect that fills with the raster pattern
    // Provided SVG has: <rect ... fill="url(#pattern0_...)" />
    let target = svg.querySelector('rect[fill^="url("]') as SVGElement | null
    if (!target) target = svg.querySelector('rect') as SVGElement | null
    if (target) target.setAttribute('filter', 'url(#tintFilter)')
  }, [svgReady, color, intensity])

  return (
    <section className="py-16 bg-white" aria-label="SVG color customization (provided model)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Try color on provided model</h3>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-full flex items-center justify-center" style={{ aspectRatio: '3 / 4' }}>
                <div ref={svgHostRef} className="w-full h-full" />
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500 flex items-start space-x-2">
              <Info className="w-4 h-4 mt-0.5" />
              <p>
                The provided SVG embeds a raster image. The color control uses an in-SVG filter to tint the image while preserving shading.
                If you want to recolor only a specific garment region, the SVG must include a distinct path/mask for that garment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card p-6 space-y-8"
          >
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Palette className="w-5 h-5 text-primary-600" />
                <h4 className="text-lg font-semibold">Color</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {COLOR_SWATCHES.map((c) => (
                  <button
                    key={c.name}
                    className={`w-10 h-10 rounded-full ring-2 transition-transform duration-200 focus:outline-none ${
                      color === c.value ? 'ring-primary-500 scale-110' : 'ring-transparent hover:scale-105'
                    }`}
                    onClick={() => setColor(c.value)}
                    style={{ background: c.value }}
                    aria-label={`Set color ${c.name}`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Intensity: {Math.round(intensity * 100)}%</label>
              <input
                type="range"
                min={0.2}
                max={1}
                step={0.01}
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full"
                aria-label="Adjust tint intensity"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SimpleCustomizer