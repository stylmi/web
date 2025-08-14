import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Crown, ShoppingCart, Sparkles } from 'lucide-react'

const StatsPage: React.FC = () => {
  const topLikedTryOns = [
    { id: 't1', title: 'Streetwear Jacket on Alex', likes: 342, image: '/api/placeholder/400/500' },
    { id: 't2', title: 'Floral Dress on Nina', likes: 289, image: '/api/placeholder/400/500' },
    { id: 't3', title: 'Athletic Set on Jordan', likes: 261, image: '/api/placeholder/400/500' },
  ]

  const topCreatorDesigns = [
    { id: 'c1', creator: 'Maya K.', design: 'Neon Oversize Tee', likes: 281, tryOns: 529, image: '/api/placeholder/400/500' },
    { id: 'c2', creator: 'Obi D.', design: 'Minimalist Linen Shirt', likes: 244, tryOns: 471, image: '/api/placeholder/400/500' },
    { id: 'c3', creator: 'Lia R.', design: 'Cropped Denim Jacket', likes: 233, tryOns: 452, image: '/api/placeholder/400/500' },
  ]

  const topSoldTryOns = [
    { id: 's1', item: 'Classic Linen Shirt', sold: 74, image: '/api/placeholder/400/500' },
    { id: 's2', item: 'Canvas Low Sneaker', sold: 61, image: '/api/placeholder/400/500' },
    { id: 's3', item: 'Utility Cargo Pants', sold: 56, image: '/api/placeholder/400/500' },
  ]

  const cardVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/70 px-4 py-2 text-primary-800 mb-4">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-lg">Weekly highlights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Community Stats</h1>
          <p className="text-lg text-gray-600">Top 3 most liked try-ons, creator designs, and sold try-ons this week.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.section
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-600" />
              <h2 className="text-xl font-semibold text-gray-900">Top Liked Try‑Ons</h2>
            </div>
            <ul className="space-y-4">
              {topLikedTryOns.map((item, idx) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{idx + 1}. {item.title}</div>
                    <div className="text-sm text-gray-500">{item.likes} likes (7d)</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-900">Top Creator Designs</h2>
            </div>
            <ul className="space-y-4">
              {topCreatorDesigns.map((item, idx) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={`${item.design} by ${item.creator}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{idx + 1}. {item.design}</div>
                    <div className="text-sm text-gray-500">by {item.creator} • {item.likes} likes • {item.tryOns} try‑ons</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">Top Sold Try‑Ons</h2>
            </div>
            <ul className="space-y-4">
              {topSoldTryOns.map((item, idx) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.item} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{idx + 1}. {item.item}</div>
                    <div className="text-sm text-gray-500">{item.sold} sold (7d)</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          Data shown is sample for demo purposes. Connect to your analytics to power this page.
        </p>
      </div>
    </div>
  )
}

export default StatsPage