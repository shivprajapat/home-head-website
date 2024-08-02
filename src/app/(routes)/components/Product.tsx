'use client'
// import CrmPanel from '@/components/CrmPanel';
import React, { useState } from 'react'
import ProductAdmin from './ProductAdmin'

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
        <div className="text-center mb-5 md:mb-16" data-aos="fade-up" data-aos-duration={1000}>
          <h2 className="heading font-urbanist">A Quick Tour about Our Product </h2>
          <p className="max-w-[416px] mx-auto text-[#929292] text-base md:text-lg font-urbanist font-semibold">
            Shape and Scale your business, with our unique and high-powered Real Estate CRM.
          </p>
        </div>
        <div
          className="bg-gradient-border flex items-center w-fit rounded-full p-[1px] mb-7 md:mb-14 text-white capitalize text-lg font-medium mx-auto"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
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
            <div className="bg-white rounded-lg pl-5 lg:pl-10 pt-7 lg:pt-12">
              <div className="mb-7 lg:mb-14">
                <p className="font-urbanist font-medium text-lg mb-2 text-black">Real estate CRM Software</p>
                <h2 className="heading font-urbanist !text-black">
                  The app is great for <br /> <span className="highlight">Basic setup</span> and adjusts.
                </h2>
              </div>
              <ProductAdmin />
            </div>
          )}

          {selectedTab === 'Mobile App' && (
            <div className="bg-green-400">
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
