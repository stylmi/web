import React from 'react'
import { motion } from 'framer-motion'

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-600">Effective date: August 13, 2025</p>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="prose prose-gray max-w-none"
        >
          <h2>1. Agreement to terms</h2>
          <p>
            By accessing or using Stylmi (the “Service”), you agree to these Terms of Service and our Privacy Policy.
            If you do not agree, do not use the Service.
          </p>

          <h2>2. Use of the Service</h2>
          <ul>
            <li>You may use the website demo to preview simple customizations on your own images.</li>
            <li>Advanced features are available in the Stylmi app and may require purchase or subscription.</li>
            <li>You are responsible for the content you upload and ensuring you have the rights to use it.</li>
          </ul>

          <h2>3. Intellectual property</h2>
          <p>
            Stylmi, its logo, and related marks are the property of Stylmi. The Service and its original content are
            protected by applicable intellectual property laws.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            The Service is provided “as is” without warranties of any kind. We do not guarantee the accuracy, reliability,
            or availability of the Service and are not liable for any damages arising from its use.
          </p>

          <h2>5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Stylmi and its affiliates shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages.
          </p>

          <h2>6. Changes to the Service</h2>
          <p>
            We may modify, suspend, or discontinue the Service at any time without prior notice.
          </p>

          <h2>7. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. Updated terms will be posted on this page with a revised effective date.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these Terms, contact us at <a href="mailto:support@stylmi.app">support@stylmi.app</a>.
          </p>
        </motion.section>
      </div>
    </div>
  )
}

export default TermsPage