import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const LiveChatButton: React.FC = () => {
  const email = 'support@stylmi.app'

  const handleClick = () => {
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
      if (typeof w?.zE === 'function') {
        w.zE('webWidget', 'open')
        return
      }
      if (w?.tidioChatApi?.open) {
        w.tidioChatApi.open()
        return
      }
    } catch (e) {
      // no-op
    }
    window.location.href = `mailto:${email}?subject=Live%20Chat%20Request`
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-6 right-6 z-50 rounded-full p-4 bg-primary-600 text-white shadow-xl hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
      aria-label="Open live chat"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Live chat</span>
      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full animate-pulse ring-2 ring-white" />
    </motion.button>
  )
}

export default LiveChatButton