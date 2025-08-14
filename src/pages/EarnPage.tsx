import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Users, Coins, Copy, CheckCircle2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const randomCode = () => {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase()
  return `STY-${part()}-${part()}`
}

const EarnPage: React.FC = () => {
  const initial = useMemo(() => randomCode(), [])
  const [code, setCode] = useState(initial)
  const [copied, setCopied] = useState(false)

  const regenerate = () => {
    const next = randomCode()
    setCode(next)
    setCopied(false)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // no-op
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="relative text-center mb-12">
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-secondary-300/20 to-primary-300/20 rounded-full blur-3xl"></div>
          </div>
         <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/70 px-4 py-2 text-primary-800 mb-4">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-lg">Stlymi Earnings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Earn with Stylmi</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Monetize your creativity and community. Refer friends, showcase your designs for try-ons, or partner as an affiliate.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              No hidden fees
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Transparent payouts
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Creator-friendly
            </span>
          </div>
        </header>

        {/* Programs grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Referral */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-secondary-600  rounded-xl text-white grid place-items-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Referral Rewards</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Share Stylmi with your network and earn <span className="font-semibold">30 credits</span> when they signup and try-on or purchase. Use your referral code for tracking.
            </p>

            <div className="glass-effect rounded-xl p-4 md:p-5">
              <label className="text-xs text-gray-500">Your referral code</label>
              <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <code className="flex-1 px-3 py-2 rounded bg-white border text-gray-900 font-mono text-sm text-center">{code}</code>
                <button
                  onClick={copy}
                  className={`btn-primary px-4 py-2 inline-flex items-center justify-center gap-2 ${copied ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  aria-label="Copy referral code"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button onClick={regenerate} className="btn-outline px-4 py-2">Regenerate</button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Share this code or append as a query param: https://stylmi.app/?ref={code}
              </p>
            </div>
          </motion.div>

          {/* Design Try-On Earnings */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white grid place-items-center">
                <Coins className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Creator Earnings</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Upload and manage your fashion items or designs in the Stylmi app. Earn when users try on or purchase items featuring your work.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li>• Submit designs with metadata and style tags</li>
              <li>• Track try-on impressions and conversions</li>
              <li>• Receive payouts per engagement and eligible purchases</li>
            </ul>
            <Link to="/get-app" className="btn-primary inline-flex items-center justify-center px-5 py-2">
              Get the app to start
            </Link>
          </motion.div>

        </section>

        {/* How it works */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-xl text-white grid place-items-center">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Sign up</h3>
            </div>
            <p className="text-gray-600 text-sm">Get the app, get measured, try-on, upload designs and manage programs.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white grid place-items-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Share & showcase</h3>
            </div>
            <p className="text-gray-600 text-sm">Use your referral code, and in-app design listings to reach audiences.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white grid place-items-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Earn</h3>
            </div>
            <p className="text-gray-600 text-sm">Get credited on valid installs, try-ons, or purchases tied to your code, designs, or links.</p>
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-12">
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Start earning with Stylmi</h3>
            <p className="text-primary-100 mb-6">Create your code, share with friends, and track results in the app.</p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Link to="/get-app" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get the Stylmi App
              </Link>
              <Link to="/earn" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EarnPage