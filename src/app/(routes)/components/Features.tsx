'use client'
import FeatureCard from '@/components/FeatureCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/navigation'
import Image from 'next/image'

const Features = () => {
  const featuresData = [
    {
      icon: '/images/icons/chart.svg',
      title: 'Enable automation',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/devops.svg',
      title: 'AI lead scoring',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/manage-leads.svg',
      title: 'Reduce manual entry',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/systems-devops.svg',
      title: 'Manage leads',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/chart.svg',
      title: 'Enable automation',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/chart.svg',
      title: 'Enable automation',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/devops.svg',
      title: 'AI lead scoring',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/manage-leads.svg',
      title: 'Reduce manual entry',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/systems-devops.svg',
      title: 'Manage leads',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    },
    {
      icon: '/images/icons/chart.svg',
      title: 'Enable automation',
      description: 'Packed with API features you will love to collaborate with issues and change business.'
    }
  ]
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
          slidesPerView={1}
          // navigation={true} modules={[Navigation]}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next'
          }}
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
            <button>
              <Image src="/images/icons/nav-left.svg" alt="" width={50} height={50} />
            </button>
            <button>
              <Image src="/images/icons/nav-right.svg" alt="" width={50} height={50} />
            </button>
          </div>{' '}
        </Swiper>
      </div>
    </section>
  )
}

export default Features
