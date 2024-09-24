import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MainBanner() {
  return (
    <section className="bg-[#314452] text-white text-center py-20">
      <div className="container mx-auto px-4">
        <Image 
          src="/assets/novique_grey_logo_wide.png" 
          alt="Novique Banner" 
          width={300} 
          height={60} 
          className="mb-8 mx-auto"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower your team</h1>
        <p className="text-xl mb-8">Your partner in AI Agents that ACTUALLY help.</p>
        <Link 
          href="#features" 
          className="bg-white text-[#314452] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}