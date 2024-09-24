import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-[#314452] text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image src="/assets/novique_grey_logo_wide.png" alt="Novique Enterprise" width={150} height={30} />
          </Link>
          <button className="lg:hidden" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className="hidden lg:flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/#agents" className="hover:text-gray-300">Agents</Link></li>
            <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
            <li><Link href="/support" className="hover:text-gray-300">Support</Link></li>
            <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
            <li><Link href="/login" className="hover:text-gray-300">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}