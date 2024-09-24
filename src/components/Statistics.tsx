import React from 'react'

export default function Statistics() {
  return (
    <section id="statistics" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">1,200+</h3>
            <p className="text-gray-600">Professionals Placed</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">200+</h3>
            <p className="text-gray-600">Employers Helped</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">44%</h3>
            <p className="text-gray-600">Average Fill Ratio</p>
          </div>
        </div>
      </div>
    </section>
  )
}