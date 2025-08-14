import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Ruler, Sparkles } from 'lucide-react'

type LengthKey = 'crop' | 'regular' | 'long'

const colorSwatches = [
  { name: 'Ocean', value: '#0ea5e9' }, // primary-500
  { name: 'Rose', value: '#f43f5e' }, // rose-500
  { name: 'Emerald', value: '#10b981' }, // emerald-500
  { name: 'Charcoal', value: '#111827' }, // gray-900
  { name: 'Lavender', value: '#8b5cf6' }, // violet-500
]

const lengthMap: Record<LengthKey, number> = {
  crop: 0.4,
  regular: 0.58,
  long: 0.78,
}

const MarketingDemo: React.FC = () => {
  const [color, setColor] = useState(colorSwatches[0].value)
  const [length, setLength] = useState<LengthKey>('regular')

  return (
    <section className="py-16 bg-white" aria-label="Interactive clothing demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Demo stage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Live demo</h3>
            </div>

            <div className="relative mx-auto w-full max-w-sm aspect-[3/4] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              {/* model silhouette */}
              <div className="absolute inset-0 flex flex-col items-center">
                {/* head */}
                <div className="mt-5 w-16 h-16 rounded-full bg-gray-300/80"></div>
                {/* neck */}
                <div className="w-6 h-4 bg-gray-300/80 rounded-b"></div>

                {/* torso base (for visual reference) */}
                <div className="relative w-40 sm:w-44 mt-2 h-64 bg-gray-200/70 rounded-b-3xl">
                  {/* arms */}
                  <div className="absolute -left-8 top-6 w-8 h-40 bg-gray-200/70 rounded-full rotate-6 origin-top"></div>
                  <div className="absolute -right-8 top-6 w-8 h-40 bg-gray-200/70 rounded-full -rotate-6 origin-top"></div>

                  {/* garment overlay */}
                  <motion.div
                    key={`${color}-${length}`}
                    initial={{ opacity: 0.7, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[88%] rounded-b-2xl shadow-lg"
                    style={{
                      background: color,
                      height: `${Math.round(lengthMap[length] * 100)}%`,
                    }}
                  />

                  {/* hemline indicator */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[92%] h-1 rounded-full bg-white/70"
                    animate={{
                      top: `${Math.round(lengthMap[length] * 100)}%`,
                    }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Palette className="w-5 h-5 text-primary-600" />
                <h4 className="text-lg font-semibold">Color</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {colorSwatches.map((c) => (
                  <button
                    key={c.name}
                    className={`w-10 h-10 rounded-full ring-2 transition-transform duration-200 focus:outline-none ${color === c.value ? 'ring-primary-500 scale-110' : 'ring-transparent hover:scale-105'}`}
                    onClick={() => setColor(c.value)}
                    style={{ background: c.value }}
                    aria-label={`Set color ${c.name}`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Ruler className="w-5 h-5 text-primary-600" />
                <h4 className="text-lg font-semibold">Length</h4>
              </div>
              <div className="inline-flex bg-gray-100 rounded-lg p-1" role="tablist" aria-label="Select garment length">
                {(['crop', 'regular', 'long'] as LengthKey[]).map((k) => (
                  <button
                    key={k}
                    className={`px-4 py-2 rounded-md capitalize text-sm font-medium transition-all ${length === k ? 'bg-white shadow border border-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
                    onClick={() => setLength(k)}
                    aria-pressed={length === k}
                    role="tab"
                  >
                    {k}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Tap a color and length to preview on a preset model. No camera required.
              </p>
            </div>

            <div className="pt-2">
              <a href="/get-app" className="btn-primary inline-flex items-center justify-center px-6 py-3" aria-label="Open Stylmi app">
                Try Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MarketingDemo