import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@shared/layout/Layout'

const HomePage = lazy(() => import('@pages/HomePage'))
const GetAppPage = lazy(() => import('@pages/GetAppPage'))
const PricingPage = lazy(() => import('@pages/PricingPage'))
const ContactPage = lazy(() => import('@pages/ContactPage'))
const PrivacyPage = lazy(() => import('@pages/PrivacyPage'))
const TermsPage = lazy(() => import('@pages/TermsPage'))
const EarnPage = lazy(() => import('@pages/EarnPage'))
const StatsPage = lazy(() => import('@pages/StatsPage'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))

function App() {
  const fallback = (
    <div className="pt-20 px-4">
      <div className="animate-pulse w-full max-w-3xl h-8 bg-gray-200 rounded mb-4"></div>
      <div className="animate-pulse w-full max-w-2xl h-4 bg-gray-100 rounded"></div>
    </div>
  )

  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Suspense fallback={fallback}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-app" element={<GetAppPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/earn" element={<EarnPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </AnimatePresence>
  )
}

export default App
