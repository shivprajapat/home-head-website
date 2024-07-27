'use client'
import React, { useState } from 'react'

const Product = () => {
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState('Admin')

  // Handler function for tab clicks
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab)
  }
  return (
    <section id="crm" className="py-10">
      <div className="container">
        <div className="text-center mb-5 md:mb-16">
          <h2 className="heading">A Quick Tour about Our Product </h2>
          <p className="max-w-[416px] mx-auto text-[#929292] text-base md:text-lg">
            Shape and Scale your business, with our unique and high-powered Real Estate CRM.
          </p>
        </div>
        <div className="bg-gradient-border flex items-center w-fit rounded-full p-[1px] mb-3 text-white capitalize text-lg font-medium mx-auto">
          <button
            className={`px-8 md:px-12 lg:px-14 py-3 bg-black rounded-s-full ${selectedTab === 'Admin' ? 'text-white' : 'text-[#A4A4A4]'}`}
            onClick={() => handleTabClick('Admin')}
          >
            Admin
          </button>
          <button
            className={`px-8 md:px-12 lg:px-14 py-3 bg-black rounded-e-full border-l border-[#444444] ${
              selectedTab === 'Mobile App' ? 'text-white' : 'text-[#A4A4A4]'
            }`}
            onClick={() => handleTabClick('Mobile App')}
          >
            Mobile App
          </button>
        </div>
        <div className="tab-content">
          {selectedTab === 'Admin' && (
            <div className="admin-content">
              <h3 className="text-2xl font-bold">Admin Tab Content</h3>
              <p>Details about the Admin tab...</p>
            </div>
          )}
          {selectedTab === 'Mobile App' && (
            <div className="mobile-app-content">
              <h3 className="text-2xl font-bold">Mobile App Tab Content</h3>
              <p>Details about the Mobile App tab...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Product
