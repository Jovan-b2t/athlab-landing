'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, x: '-50%' }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100, 
        x: '-50%' 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-6 left-1/2 z-50 w-[calc(100vw-1.5rem)] md:w-[400px]"
    >
      <div className="bg-navy-800/80 border border-navy-600/40 backdrop-blur-lg rounded-[12px] md:rounded-[999px] w-full pl-4 pr-2 py-2 md:pl-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/img/al-logo.svg"
            alt="AthLab"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
        
        {/* Join Waitlist Button */}
        <Button variant="primary" size="sm" className="rounded-[12px] md:rounded-[999px]">
          Join Waitlist
        </Button>
      </div>
    </motion.nav>
  )
} 