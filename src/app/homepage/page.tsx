"use client"

import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen font-['Red_Hat_Display'] leading-[1.625rem]">  
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  )
}

export default Homepage