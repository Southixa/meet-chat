"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import heroTabletImage from '/public/assets/tablet/image-hero.png'
import heroLeftImage from '/public/assets/desktop/image-hero-left.png'
import heroRightImage from '/public/assets/desktop/image-hero-right.png'

export default function HeroSection() {
  // Animation controllers and refs
  const controls = useAnimation()
  const ref = React.useRef(null)
  const mobileImageRef = React.useRef(null)
  
  // Visibility detection hooks
  const inView = useInView(ref, {
    amount: 0.3,
    once: true
  })
  const mobileImageInView = useInView(mobileImageRef, {
    amount: 0.3,
    once: true
  })

  // Start animation when main content is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Start animation when mobile image is in view
  useEffect(() => {
    if (mobileImageInView) {
      controls.start('visible')
    }
  }, [controls, mobileImageInView])

  // Main content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  // Individual content elements animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  // Mobile image animation
  const mobileImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  // Left background image animation
  const leftImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  // Right background image animation
  const rightImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative overflow-hidden w-full">
      {/* Hero image for mobile/tablet */}
      <motion.div 
        ref={mobileImageRef}
        initial="hidden"
        animate={controls}
        variants={mobileImageVariants}
        className="w-full mx-auto my-12 grid place-items-center md:my-0 lg:hidden"
      >
        <Image 
          src={heroTabletImage} 
          alt="People in video conference" 
          width={820} 
          height={520} 
          className="w-full max-w-[48rem]"
        />
      </motion.div>
      
      {/* Background images - only visible on large screens */}
      <div className="hidden lg:block">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={leftImageVariants}
          className="absolute top-0 left-[-2.5rem] translate-y-20 h-full w-[394px] z-0"
        >
          <Image 
            src={heroLeftImage}
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={rightImageVariants}
          className="absolute top-0 right-[-2.5rem] translate-y-20 h-full w-[394px] z-0"
        >
          <Image 
            src={heroRightImage}
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
      </div>
      
      {/* Hero content with text and buttons */}
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={contentVariants}
        className="text-center max-w-xl mx-auto px-6 pb-20 pt-6 lg:py-28 relative z-10"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-[2.5rem] leading-[3rem] font-black mb-6 md:text-[3rem] lg:text-[4rem] lg:leading-[4rem]"
        >
          Group Chat<br /> 
          for Everyone
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="text-[#71717e] mb-8 max-w-lg mx-auto"
        >
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <button className="text-[#fafafa] bg-[#4da3b0] hover:bg-[#8fddf3] py-4 px-10 rounded-full cursor-pointer border-none font-bold">Download v1.3</button>
          <button className="text-[#fafafa] bg-[#845eb0] hover:bg-[#d9b8ff] py-4 px-10 rounded-full cursor-pointer border-none font-bold">What is it?</button>
        </motion.div>
      </motion.div>
    </section>
  )
} 