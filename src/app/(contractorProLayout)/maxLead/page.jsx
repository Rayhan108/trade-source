"use client"

import { useState } from "react"
import { MdClose } from "react-icons/md"

export default function MaxLead() {
  const [serviceInput, setServiceInput] = useState("Painting & Decoration Interior")
  const [selectedServices, setSelectedServices] = useState(["Handyman", "Painter"])
  const [searchInput, setSearchInput] = useState("")

  const removeService = (serviceToRemove) => {
    setSelectedServices(selectedServices.filter((service) => service !== serviceToRemove))
  }

  return (
 <div>
    <h1 className="text-2xl font-bold max-w-4xl mx-auto my-12">Maximise your leads</h1>
       <div className="max-w-4xl mx-auto p-6 bg-white"> 
      {/* Service you provide section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Service you provide</h2>
        <input
          type="text"
          value={serviceInput}
          onChange={(e) => setServiceInput(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700"
          placeholder="Enter service you provide"
        />
      </div>

      {/* Service type section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Service type</h2>

        {/* Selected service tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedServices.map((service, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              <span>{service}</span>
              <button
                onClick={() => removeService(service)}
                className="hover:bg-slate-600 rounded-full p-0.5 transition-colors"
                aria-label={`Remove ${service}`}
              >
                <MdClose className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Search input */}
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-500"
          placeholder="Search for more services..."
        />
      </div>

      {/* Current available leads section */}
      <div className="bg-blue-100 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-1">14</div>
          <div className="text-sm font-medium text-gray-700">Current available leads</div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none">
          See Leads
        </button>
      </div>
    </div>
 </div>
  )
}
