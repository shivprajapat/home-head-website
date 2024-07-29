'use client'

import FeatureCard from '@/components/FeatureCard'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/navigation'
import Image from 'next/image'
import { featuresData } from '@/constants'

const Features = () => {
  
  const swiperRef = useRef(null)
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev()
  }

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext()
  }
  return (
    <section>
      <div className="container">
        <div className="pb-12 md:pb-20">
          <h2 className="heading">
            All the <span className="highlight">features</span> done right.
          </h2>
          <p className="max-w-md text-[#929292] text-base md:text-lg">
            Shape and Scale your business, with our unique and high-powered Real Estate CRM.
          </p>
        </div>
        <Swiper
           ref={swiperRef}
           slidesPerView={1}
           navigation={false} // Disable default navigation
           pagination={{
             clickable: true
           }}
           breakpoints={{
             640: { slidesPerView: 2 },
             768: { slidesPerView: 3 },
             1024: { slidesPerView: 4 },
             1280: { slidesPerView: 5 }
           }}
        >
          {featuresData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <FeatureCard {...item} />
              </SwiperSlide>
            )
          })}
          <div className="flex items-center gap-7 mt-10 lg:mt-20">
          <button onClick={handlePrevClick}>
            <Image src="/images/icons/nav-left.svg" alt="Previous" width={50} height={50} />
          </button>
          <button onClick={handleNextClick}>
            <Image src="/images/icons/nav-right.svg" alt="Next" width={50} height={50} />
          </button>
        </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Features
