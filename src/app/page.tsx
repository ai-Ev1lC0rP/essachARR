import React from 'react'
import Header from '@/components/Header'
import MainBanner from '@/components/MainBanner'
import Features from '@/components/Features'
import Statistics from '@/components/Statistics'
import Agents from '@/components/Agents'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <Features />
      <Statistics />
      <Agents />
      <Footer />
    </main>
  )
}