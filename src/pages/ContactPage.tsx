import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react'

const ContactPage: React.FC = () => {
  const email = 'support@stylmi.app'

  const handleLiveChat = () => {
    const w = window as any
    try {
      if (w?.$crisp) {
        w.$crisp.push(['do', 'chat:open'])
        return
      }
      if (typeof w?.Intercom === 'function') {
        w.Intercom('show')
        return
      }
      if (w?.Tawk_API?.maximize) {
        w.Tawk_API.maximize()
        return
      }
      if (w?.$chatwoot) {
        w.$chatwoot.toggle()
        return
      }
    } catch {}
    // Fallback to email if no chat provider is present
    window.location.href = `mailto:${email}?subject=Live%20Chat%20Request`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
           <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/70 px-4 py-2 text-primary-800 mb-4">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-lg">We love to hear from you</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Questions, feedback, partnerships — we’d love to hear from you.</p>
        </header>

        {/* Contact grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">Email</h2>
              </div>
              <a href={`mailto:${email}`} className="text-primary-700 underline">{email}</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
              </div>
              <p className="text-gray-700">+1 (555) 000-0000</p>
              <p className="text-xs text-gray-500 mt-1">Placeholder number. Replace with your real contact.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">Location</h2>
              </div>
              <p className="text-gray-700">Remote-first</p>
              <p className="text-xs text-gray-500 mt-1">We operate globally.</p>
            </motion.div>
          </div>

          {/* Live chat */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="lg:col-span-2 card p-6"
          >
            <div className="flex items-center space-x-2 mb-2">
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-semibold text-gray-900">Live Chat</h2>
            </div>
            <p className="text-gray-700 mb-4">Prefer real-time help? Chat with us instantly.</p>
            <button onClick={handleLiveChat} className="btn-primary inline-flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start live chat
            </button>
            <p className="text-xs text-gray-500 mt-3">
              A chat window will open. If nothing happens, email us at <a href={`mailto:${email}`} className="underline">{email}</a>.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage