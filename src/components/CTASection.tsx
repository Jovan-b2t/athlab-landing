'use client'

import { motion } from 'framer-motion'
import { Smartphone, Mail, ArrowRight, Apple, Play } from 'lucide-react'
import Button from './Button'

export default function CTASection() {
  return (
    <section className="relative py-16 px-6 z-10 overflow-hidden">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 155, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 155, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px',
               animation: 'gradient-shift 15s ease-in-out infinite'
             }} 
        />
        
        {/* Floating Grid Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-cyber-500/40 rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        
                 {/* Main CTA Content */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-navy-800/80 border border-navy-600/40 backdrop-blur-lg p-8 md:p-12 mb-12"
           style={{ borderRadius: '36px' }}
         >
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyber-500/20 text-cyber-300 px-4 py-2 text-sm font-clash font-normal mb-6"
            style={{ borderRadius: '36px' }}
          >
            <div className="w-2 h-2 bg-cyber-500 rounded-full animate-pulse" />
            Currently in Development
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-hero mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
          >
            Ready to Transform
            <br />
            <span className="neon-text-subtle">Your Training?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Join the waitlist to be among the first to experience AI-powered training 
            that adapts to your unique physiology and goals.
          </motion.p>

          {/* Launch Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10"
          >
            <div className="text-4xl md:text-5xl font-clash font-bold text-cyber-500 mb-2 neon-text-subtle">
              Q4 2025
            </div>
            <div className="text-lg text-gray-400 font-space">
              Official Launch
            </div>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input
                   type="email"
                   placeholder="Enter your email"
                   className="w-full pl-10 pr-4 py-3 bg-navy-800/80 border border-navy-600/40 backdrop-blur-sm text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none transition-colors duration-300"
                   style={{ borderRadius: '12px' }}
                 />
              </div>
                             <Button variant="primary" size="md" className="whitespace-nowrap flex items-center gap-2">
                 Join Waitlist
                 <ArrowRight className="w-4 h-4" />
               </Button>
            </div>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
                       <button className="flex items-center gap-3 bg-navy-800/80 border border-navy-600/40 hover:bg-navy-700/70 hover:border-navy-500/60 px-6 py-3 transition-all duration-300 group cursor-not-allowed opacity-60 backdrop-blur-lg" style={{ borderRadius: '12px' }}>
             <Apple className="w-6 h-6 text-gray-400" />
             <div className="text-left">
               <div className="text-xs text-gray-400">Coming to</div>
               <div className="text-sm font-medium text-gray-300">App Store</div>
             </div>
           </button>
           
           <button className="flex items-center gap-3 bg-navy-800/80 border border-navy-600/40 hover:bg-navy-700/70 hover:border-navy-500/60 px-6 py-3 transition-all duration-300 group cursor-not-allowed opacity-60 backdrop-blur-lg" style={{ borderRadius: '12px' }}>
             <Play className="w-6 h-6 text-gray-400" />
             <div className="text-left">
               <div className="text-xs text-gray-400">Coming to</div>
               <div className="text-sm font-medium text-gray-300">Google Play</div>
             </div>
           </button>
          </motion.div>

          {/* Waitlist Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-6 text-sm"
          >
            <div className="flex items-center gap-2 justify-center text-gray-400">
              <div className="w-1.5 h-1.5 bg-cyber-500 rounded-full" />
              Early access beta
            </div>
            <div className="flex items-center gap-2 justify-center text-gray-400">
              <div className="w-1.5 h-1.5 bg-cyber-500 rounded-full" />
              Exclusive pricing
            </div>
            <div className="flex items-center gap-2 justify-center text-gray-400">
              <div className="w-1.5 h-1.5 bg-cyber-500 rounded-full" />
              Development updates
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center text-gray-500 text-sm font-space"
        >
          <p className="mb-2">Built for athletes who refuse to settle for average</p>
          <div className="flex items-center justify-center gap-4">
            <span>© 2024 AthLab</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 