import React from 'react'

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Feature One</h3>
            <p>Description of feature one with highlights and benefits.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
            <p>Description of feature two with highlights and benefits.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
            <p>Description of feature three with highlights and benefits.</p>
          </div>
        </div>
      </div>
    </section>
  )
}