'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function HeroSection() {
  // Single prominent problem statement
  const prominentProblem = {
    problem: "Generic training plans",
    highlight: "fail 87% of athletes",
    solution: "Your body is unique. Your training should be too."
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Launching Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-cyber-500/20 text-cyber-300 px-4 py-2 rounded-[36px] text-sm font-clash font-normal">
            <div className="w-2 h-2 bg-cyber-500 rounded-full animate-pulse" />
            Launching Q4 2025
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-bold"
        >
          The Future of
          <br />
                      <span className="neon-text-subtle">Athletic Training</span>
        </motion.h1>

        {/* Single Prominent Problem Statement */}
        <div className="mb-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-4xl"
          >
            <p className="text-body mb-2 text-gray-300">
              {prominentProblem.problem}{' '}
              <span className="text-red-400 font-medium">
                {prominentProblem.highlight}
              </span>
            </p>
            <p className="text-body-bold text-cyber-300 neon-text-subtle">
              {prominentProblem.solution}
            </p>
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          AthLab combines real-time biometric data, behavioral insights, and advanced AI 
          to create personalized training blueprints that evolve with your body and goals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="md">
            Join Waitlist
          </Button>
          <Button variant="secondary" size="md">
            See How It Works
          </Button>
        </motion.div>



        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm font-clash font-normal mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-cyber-500 flex justify-center" style={{ borderRadius: '999px' }}>
              <div className="w-1 h-3 bg-cyber-500 mt-2 animate-bounce" style={{ borderRadius: '999px' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 