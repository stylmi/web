import React from 'react'
import { motion } from 'framer-motion'
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Heart
} from 'lucide-react'
import logo from '../../assets/icons/logo1.png'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-1 mb-4">
              <img src={logo} alt="Stylmi" className="w-8 h-8 rounded" />
              <span className="text-xl font-bold text-[#ff7396]">tylmi</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing fashion with AI-powered virtual try-on, precise measurements, 
              and personalized customization. Experience the future of shopping.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/get-app" className="hover:text-primary-400 transition-colors duration-200">Get App</a></li>
              <li><a href="/pricing" className="hover:text-primary-400 transition-colors duration-200">Pricing</a></li>
              <li><a href="/earn" className="hover:text-primary-400 transition-colors duration-200">Earn</a></li>
              <li><a href="/about" className="hover:text-primary-400 transition-colors duration-200">About</a></li>
              <li><a href="/contact" className="hover:text-primary-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/privacy" className="hover:text-primary-400 transition-colors duration-200">Privacy</a></li>
              <li><a href="/terms" className="hover:text-primary-400 transition-colors duration-200">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Stylmi. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <span className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Stylmi
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
