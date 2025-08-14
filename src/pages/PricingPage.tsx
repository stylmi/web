import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Coins, DollarSign, Check, Sparkles, Tag } from 'lucide-react'

const PricingPage: React.FC = () => {
  const isNigeria = useMemo(() => {
    try {
      const loc = (navigator?.language || '').toLowerCase()
      const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase()
      return loc.includes('-ng') || loc.endsWith('ng') || tz.includes('lagos')
    } catch {
      return false
    }
  }, [])

  const pricingLabel = isNigeria ? '1 credit = ₦10' : '1 credit = $0.01'

  const costs = [
    { title: 'Try-On', detail: '1 try-on', cost: '1 credit' },
    { title: 'Body Measurements', detail: 'Per measurement generated', cost: '1 credit' },
    { title: 'Color Change', detail: 'Per clothing item', cost: '1 credit' },
    { title: 'Sleeve / Length Adjustment', detail: 'Per clothing item', cost: '1 credit' },
    { title: 'Material / Texture Swap', detail: 'Per clothing item', cost: '1 credit' },
    { title: 'Advanced Customizations', detail: 'Per design', cost: '20 credits' },
    { title: 'Full Outfit Redesign', detail: 'Per design', cost: '30 credits' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/70 px-4 py-2 text-primary-800 mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-lg">Sign up and get <span className="font-semibold">30 free credits</span></span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Pay as you go</h1>
          <p className="text-lg text-gray-600">Fair, transparent credit pricing. Only pay for what you use.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="card p-6 mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg grid place-items-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Credits pricing</h2>
          </div>
          <div className="flex flex-wrap items-baseline gap-3">
            <div className="text-2xl font-bold text-gray-900">{pricingLabel}</div>
           
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900">What it costs</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {costs.map((item) => (
                <li key={item.title} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.detail}</div>
                  </div>
                  <div className="text-primary-700 font-semibold">{item.cost}</div>
                </li>
              ))}
            </ul>
          </motion.section>

        </div>

<motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="card p-6 mt-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <h3 className="text-xl font-semibold text-gray-900">What counts as advanced customizations?</h3>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              Combining multiple edits in one design (e.g., color + length + material across 2+ items)
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              Precise masking and occlusion handling (hair, hands, accessories crossing garments)
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              Pattern/texture transfer with perspective wrapping and realistic shadows
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              Photorealistic relighting/compositing, reflections, and scene matching
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              AI‑assisted redesigns beyond recolor (new silhouettes, prints, logos)
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              360° turntable or multi‑angle outputs built from your input
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary-600 mt-0.5" />
              Manual artist retouching or complex batch workflows
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">
            We show a credit estimate before you confirm, so you always know the cost.
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="card p-6 mt-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-primary-600" />
            <h3 className="text-xl font-semibold text-gray-900">When are credits charged?</h3>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary-600 mt-0.5" /> Preview basic customizations for free (e.g., color swap) with watermark.</li>
            <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary-600 mt-0.5" /> Credits are charged when you save or download in high‑res without watermark.</li>
          </ul>
        </motion.section>

        <section className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Taxes and regional pricing may apply. Token packs and discounts are applied at checkout.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PricingPage