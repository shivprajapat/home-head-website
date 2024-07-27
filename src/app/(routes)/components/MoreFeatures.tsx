import { moreFeaturesData } from '@/constants'
import Image from 'next/image'
import React from 'react'

const MoreFeatures = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="heading">
              more <span className="highlight">features</span>
            </h2>
          </div>
          <div>
            {moreFeaturesData.map((item, index) => {
              const { icon, title, description } = item
              return (
                <div key={index} className="flex items-center flex-col md:flex-row gap-10 lg:gap-14 mb:5 last:mb-0">
                  <div className="relative size-52">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white mb-2 font-semibold">{title}</h4>
                    <p className="text-base text-[#929292] font-medium">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreFeatures
