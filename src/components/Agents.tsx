"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const agents = [
  { name: 'Alex', image: '/assets/alex.png' },
  { name: 'Angelica', image: '/assets/angelica.png' },
  { name: 'Arnold', image: '/assets/arnold.png' },
  { name: 'Daria', image: '/assets/daria.png' },
  { name: 'Dexter', image: '/assets/dexter.png' },
]

export default function Agents() {
  const [currentAgent, setCurrentAgent] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentAgent((prevAgent) => (prevAgent + 1) % agents.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <section id="agents" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Agents</h2>
        <div className="relative w-full max-w-md mx-auto">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                index === currentAgent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={agent.image}
                alt={agent.name}
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
              <p className="text-center mt-4 text-xl font-semibold">{agent.name}</p>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4">
            {agents.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentAgent ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentAgent(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}