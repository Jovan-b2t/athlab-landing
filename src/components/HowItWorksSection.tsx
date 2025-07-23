'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Brain, Activity, TrendingUp, Zap, Target, BarChart3 } from 'lucide-react'

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      title: "Generate",
      subtitle: "AI-Driven Blueprint",
      description: "Our AI analyzes your biometrics, goals, and lifestyle to generate a completely personalized training blueprint that's uniquely yours.",
      icon: Brain,
      features: ["Biometric analysis", "Goal optimization", "Lifestyle integration"],
      color: "from-cyber-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Train",
      subtitle: "Real-Time Adaptation",
      description: "Every session adapts in real-time based on your performance, energy levels, and recovery data. No more generic workouts.",
      icon: Activity,
      features: ["Live performance tracking", "Adaptive intensity", "Smart recovery"],
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Optimize",
      subtitle: "Continuous Evolution",
      description: "Machine learning continuously refines your training based on results, ensuring you're always progressing toward peak performance.",
      icon: TrendingUp,
      features: ["ML optimization", "Progress tracking", "Performance insights"],
      color: "from-blue-500 to-indigo-400"
    }
  ]

  const benefits = [
    { icon: Zap, text: "87% faster results", metric: "vs traditional training" },
    { icon: Target, text: "94% goal achievement", metric: "within 90 days" },
    { icon: BarChart3, text: "3x performance gains", metric: "measured improvement" }
  ]

  return (
    <section className="relative py-16 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How AthLab Works
          </h2>
          <p className="text-body text-gray-300 max-w-3xl mx-auto">
            Three revolutionary steps that transform how you train, 
            backed by cutting-edge AI and real-time data analysis.
          </p>
        </motion.div>

        {/* Main Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isHovered = hoveredStep === step.id
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className="interactive-card group relative overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-clash font-bold text-navy-800/30">
                  {step.id}
                </div>

                                 {/* Clean icon without heavy glow */}
                 <div className="mb-6">
                   <div className={`w-16 h-16 bg-gradient-to-br ${step.color} p-4 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`} style={{ borderRadius: '12px' }}>
                     <Icon className="w-full h-full text-white" />
                   </div>
                 </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-clash font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-cyber-300 font-space font-medium">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-body text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 0 : -10 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-cyber-500 rounded-full" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                                 {/* Subtle hover indicator */}
                 <motion.div
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ 
                     scale: isHovered ? 1 : 0, 
                     opacity: isHovered ? 1 : 0 
                   }}
                   transition={{ duration: 0.3 }}
                   className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyber-500 rounded-full"
                 />
              </motion.div>
            )
          })}
        </div>

                 {/* Benefits Section */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-navy-800/80 border border-navy-600/40 backdrop-blur-lg p-8 md:p-10"
           style={{ borderRadius: '36px' }}
         >
          <h3 className="text-section text-center mb-12 text-white">
            Proven Results
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                                     <div className="w-16 h-16 mx-auto mb-4 bg-cyber-500/15 flex items-center justify-center group-hover:bg-cyber-500/25 transition-colors duration-300" style={{ borderRadius: '12px' }}>
                    <Icon className="w-8 h-8 text-cyber-500" />
                  </div>
                  <div className="text-2xl font-clash font-bold text-white mb-2">
                    {benefit.text}
                  </div>
                  <div className="text-sm text-gray-400 font-space">
                    {benefit.metric}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 