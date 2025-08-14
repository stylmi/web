import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, ShieldCheck, Sparkles, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const GetAppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                Stylmi App
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get the Stylmi App
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Take your virtual try-ons further with advanced customization, 360° views, and high-quality exports.
              The app unlocks premium tools beyond the web preview.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary-600 mt-0.5" />
                <span>Advanced sizing and garment alignment tools</span>
              </li>
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary-600 mt-0.5" />
                <span>Color, length, and style presets with fine-grain controls</span>
              </li>
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary-600 mt-0.5" />
                <span>Export, save, and share your styled looks</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="btn-primary inline-flex items-center justify-center px-6 py-3"
                aria-label="Download Stylmi app"
              >
                <Download className="w-5 h-5 mr-2" />
                Download
              </a>
              <Link to="/" className="btn-outline inline-flex items-center justify-center px-6 py-3">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Note: App store links are placeholders. Replace with real links when available.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-semibold text-gray-900">Why the app?</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                The Stylmi app adds performance and fidelity for more complex scenes and precise output quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-primary-900 mb-1">On-device AI</div>
                  <div className="text-sm text-primary-800">
                    Optimized processing for better alignment and color fidelity
                  </div>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-secondary-900 mb-1">High-quality export</div>
                  <div className="text-sm text-secondary-800">
                    Save and share looks at higher resolution with watermarks removed
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Ready to level up your virtual try-on experience? Get the app and unlock the full toolkit.
              </p>
            </div>
          </motion.div>
        </section>

        {/* FAQ/Details */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Does the app need my camera?</div>
            <p className="text-sm text-gray-600">
              Only when you want live capture. You can also upload photos from your gallery.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Is my data safe?</div>
            <p className="text-sm text-gray-600">
              We respect your privacy. Review our policies on the{' '}
              <Link to="/privacy" className="text-primary-700 underline">Privacy</Link> page.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">How much does it cost?</div>
            <p className="text-sm text-gray-600">
              Explore options on our <Link to="/pricing" className="text-primary-700 underline">Pricing</Link> page.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GetAppPage