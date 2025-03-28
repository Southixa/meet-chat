"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import logoImage from '/public/assets/logo.svg'

export default function Header() {
  // Animation controller
  const controls = useAnimation()
  
  // Reference for detecting when element is in viewport
  const ref = React.useRef(null)
  
  // Hook to detect if element is visible
  const inView = useInView(ref, {
    amount: 0.3,
    once: true
  })

  // Start animation when component is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Define animation sequence
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <header className="pt-14">
      {/* Animated logo container */}
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headerVariants}
        className="grid place-items-center mx-auto"
      >
        <Image src={logoImage} alt="Meet logo" width={120} height={40} priority />
      </motion.div>
    </header>
  )
} 