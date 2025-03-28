import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import womanVideocallImage from '/public/assets/desktop/image-woman-in-videocall.jpg'
import womenVideochattingImage from '/public/assets/desktop/image-women-videochatting.jpg'
import menMeetingImage from '/public/assets/desktop/image-men-in-meeting.jpg'
import manTextingImage from '/public/assets/desktop/image-man-texting.jpg'

export default function FeatureSection() {
  // Animation controller
  const controls = useAnimation()
  
  // References for detecting when elements are in viewport
  const sectionRef = React.useRef(null)
  const numberRef = React.useRef(null)
  const imagesRef = React.useRef(null)
  const contentRef = React.useRef(null)
  
  // Visibility detection hooks
  const sectionInView = useInView(sectionRef, {
    amount: 0.2,
    once: true
  })
  
  const numberInView = useInView(numberRef, {
    amount: 0.8,
    once: true
  })
  
  const imagesInView = useInView(imagesRef, {
    amount: 0.3,
    once: true
  })
  
  const contentInView = useInView(contentRef, {
    amount: 0.3,
    once: true
  })

  // Start animations when elements are in view
  useEffect(() => {
    if (sectionInView) {
      controls.start('visible')
    }
  }, [controls, sectionInView])
  
  useEffect(() => {
    if (numberInView) {
      controls.start('numberVisible')
    }
  }, [controls, numberInView])
  
  useEffect(() => {
    if (imagesInView) {
      controls.start('imagesVisible')
    }
  }, [controls, imagesInView])
  
  useEffect(() => {
    if (contentInView) {
      controls.start('contentVisible')
    }
  }, [controls, contentInView])

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    numberVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    imagesVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    contentVisible: {
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

  // Child element animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariants}
      className="relative text-center py-16 mt-20"
    >
      {/* Numbered circle indicator with vertical line */}
      <motion.div 
        ref={numberRef}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="inline-block relative h-14 w-14 border border-[#71717e]/25 rounded-[1.8125rem] p-4 text-[#71717e] bg-[#fafafa] before:content-[''] before:absolute before:top-0 before:left-0 before:translate-x-[1.65rem] before:translate-y-[-100%] before:w-[0.0625rem] before:h-[5.25rem] before:bg-[#71717e]/25 mb-10"
      >
        01
      </motion.div>
      
      {/* Four-image grid showing video conferencing use cases */}
      <motion.div 
        ref={imagesRef}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-8 mb-16"
      >
        <motion.div variants={itemVariants}>
          <Image 
            src={womanVideocallImage} 
            alt="Woman in video call" 
            width={255} 
            height={242} 
            className="rounded-xl w-full"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image 
            src={womenVideochattingImage} 
            alt="Women video chatting" 
            width={255} 
            height={242} 
            className="rounded-xl w-full"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image 
            src={menMeetingImage} 
            alt="Men in online meeting" 
            width={255} 
            height={242} 
            className="rounded-xl w-full"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image 
            src={manTextingImage} 
            alt="Man texting on phone" 
            width={255} 
            height={242} 
            className="rounded-xl w-full"
          />
        </motion.div>
      </motion.div>
      
      {/* Feature content: Smarter meetings info */}
      <motion.div 
        ref={contentRef}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="max-w-xl mx-auto px-6"
      >
        <motion.h3 
          variants={itemVariants}
          className="text-[#4da3b0] text-sm uppercase tracking-[0.25rem] font-black mb-4"
        >
          Built for modern use
        </motion.h3>
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-black mb-6"
        >
          Smarter meetings, all in one place
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-[#71717e] max-w-lg mx-auto"
        >
          Send messages, share files, show your screen, and record your
          meetings — all in one workspace. Control who can join with
          invite-only team access, data encryption, and data export.
        </motion.p>
      </motion.div>
    </motion.section>
  )
} 