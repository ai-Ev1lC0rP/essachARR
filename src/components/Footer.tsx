import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#314452] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          Contact us at{' '}
          <a href="mailto:info@noviqueenterprise.com" className="underline hover:text-gray-300">
            info@noviqueenterprise.com
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Novique Enterprise</p>
      </div>
    </footer>
  )
}