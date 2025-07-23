'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = "font-clash font-normal transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
  
  const variants = {
    primary: "bg-cyber-500 hover:bg-cyber-400 text-navy-950 cyber-glow-on-hover",
    secondary: "bg-navy-800/80 border border-navy-600/40 hover:bg-navy-700/80 hover:border-navy-500/60 text-cyber-500 backdrop-blur-lg"
  }
  
  const sizes = {
    sm: "py-2 px-4 text-sm rounded-[12px]",
    md: "py-3 px-6 text-base rounded-[12px]", 
    lg: "py-4 px-8 text-lg rounded-[12px]"
  }
  
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
} 