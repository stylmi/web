import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-600">Effective date: August 13, 2025</p>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="prose prose-gray max-w-none"
        >
          <p>
            Stylmi respects your privacy. This Privacy Policy explains how we handle information on our website and within
            the Stylmi app.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Basic usage data (pages viewed, approximate location via IP) for analytics.</li>
            <li>Contact information you choose to send (e.g., email via our Contact page).</li>
            <li>Photos you upload in the web demo are processed locally in your browser and are not stored by us.</li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>To operate and improve our website and app.</li>
            <li>To respond to your messages and support requests.</li>
            <li>To analyze aggregate traffic and product usage.</li>
          </ul>

          <h2>Data storage and security</h2>
          <p>
            We apply reasonable safeguards to protect information. The web demo attempts to keep processing in your browser.
            If you use the Stylmi app, additional privacy and data details will be displayed in the app stores and in-app settings.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use privacy-friendly analytics and error monitoring tools. These providers process limited technical data
            to help us keep the service reliable and secure.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>You can contact us to request deletion of message history you have sent to us.</li>
            <li>You can opt out of non-essential analytics in your browser and device settings.</li>
          </ul>

          <h2>Children’s privacy</h2>
          <p>Stylmi is not intended for children under 13. We do not knowingly collect personal information from children.</p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. We will post updates on this page and adjust the effective date above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at <a href="mailto:support@stylmi.app">support@stylmi.app</a>.
          </p>
        </motion.section>
      </div>
    </div>
  )
}

export default PrivacyPage