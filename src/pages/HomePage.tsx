import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import banner  from '../assets/images/banner5.png'
const TryOn = lazy(() => import('../components/tryon/TryOn'))
import {
  Camera,
  Ruler,
  Shirt,
  ShoppingBag,
  Palette,
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  Users,
  Coins,
  Scissors
} from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Ruler,
      title: 'Accurate Measurements',
      description: 'Get precise body and garment measurements with cutting-edge AI.',
      color: 'from-sky-500 to-blue-500'
    },
    {
      icon: Shirt,
      title: 'Virtual Try-On, Anytime',
      description: 'Instantly see how clothes fit your body without stepping into a store.',
      color: 'from-red-600 to-secondary-600'
    },
    {
      icon: Camera,
      title: 'Snap & Style',
      description: 'Take a photo of any fashion item and try it on instantly or customize it.',
      color: 'from-purple-600 to-fuchsia-600'
    },
    {
      icon: Palette,
      title: '360° & Beyond',
      description: 'Enjoy full 360° previews and advanced customization for your attire.',
      color: 'from-green-500 to-emerald-500'
    },
     {
      icon: ShoppingBag,
      title: 'Shop or Sell with Ease',
      description: 'Link directly to online stores and buy apparel effortlessly.',
      color: 'from-yellow-500 to-zinc-500'
    },
    {
      icon: Scissors,
      title: 'Create Your Own Style',
      description: 'Design your own outfits and earn from try-ons or purchases.',
      color: 'from-rose-400 to-pink-400'
    },

  ]

  const stats = [
    { number: '10K+', label: 'Happy Users' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Brand Partners' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                  AI-Powered Fashion
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="text-gradient block">Fashion Experience</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the future of shopping with AI-powered virtual try-on, 
                precise measurements, and personalized style customization. 
                Look great, feel confident.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-app"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group"
                >
                  <span>Get App</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/pricing"
                  className="btn-outline text-lg px-8 py-4"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br rounded-3xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br  flex items-center justify-center">
                    <div className="w-full h-full bg-black/10 p-3">
                      <img src={banner} alt="Stylmi Banner" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div> 
            </motion.div> 
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div className="animate-pulse h-8 w-40 bg-gray-200 rounded mb-4"></div><div className="animate-pulse h-48 w-full bg-gray-100 rounded"></div></div>}>
        <TryOn />
      </Suspense>
      
           {/* Features Section */}
      <section className="relative py-20 gradient-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Perfect Style
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered tools helps you discover, shop,
              try-on, and customize fashion like never before.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={"/get-app"} className="block">
                  <div className="card p-6 h-full group-hover:shadow-large transition-all duration-300 group-hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Earn Section */}
      <section id="earn" className="py-20 bg-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-br from-secondary-300/20 to-primary-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                Earnings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Earn with Stylmi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Monetize your creativity and community. Refer friends, showcase your designs for try-ons, or partner as an affiliate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl text-white grid place-items-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Referral Rewards</h3>
              <p className="text-gray-600 text-sm">
                Share Stylmi with friends. Earn when they install or purchase. Get your referral code in seconds.
              </p>
              <div className="mt-6">
                <Link to="/earn" className="btn-outline inline-flex items-center gap-2">
                  Learn more about referrals
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="group card p-6 hover:-translate-y-2 hover:shadow-large transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl text-white grid place-items-center mb-4">
                <Coins className="w-6 h-6 " />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Creator Earnings</h3>
              <p className="text-gray-600 text-sm">
                Upload your designs in the app. Earn when users try on or purchase items featuring your work.
              </p>
              <div className="mt-6">
                <Link to="/earn" className="btn-outline inline-flex items-center gap-2">
                  See creator program
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/earn" className="btn-primary px-6 py-3">Learn how to earn</Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Style?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of users who are already experiencing the future of fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-app"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Get Stylmi</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

