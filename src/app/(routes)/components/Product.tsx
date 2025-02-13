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
    <section id="crm" className="py-3 lg:py-14">
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
          <div className="bg-white rounded-lg pb-1 lg:pb-0 pl-5 lg:pl-10 pt-7 lg:pt-12">
            {selectedTab === 'Admin' && <ProductAdmin />}
            {selectedTab === 'Mobile App' && <ProductAdmin />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
